// 研途宝 · 考研英语与政治核心双核学习系统
const { createApp, ref, computed, onMounted, watch } = Vue;

createApp({
  setup() {
    // 导航状态管理
    const currentTab = ref('dashboard'); // 'dashboard' | 'english' | 'politics' | 'notebook'
    const englishTab = ref('vocab'); // 'vocab' | 'fullVocab' | 'articles' | 'sentences' | 'writing'
    const politicsTab = ref('quiz'); // 'quiz' | 'flashcards' | 'encyclopedia' | 'essay'
    const notebookTab = ref('wrongQuestions'); // 'wrongQuestions' | 'vocabList'

    // 数据源引用
    const coreVocabList = ref(window.ENGLISH_DATA?.vocabulary || []);
    const fullVocabList = ref(window.KAOYAN_FULL_VOCAB || []);
    const sentenceList = ref(window.ENGLISH_DATA?.sentences || []);
    const articleList = ref(window.ENGLISH_DATA?.articles || []);
    const writingArsenal = ref(window.ENGLISH_DATA?.writingArsenal || {});

    const quizList = ref(window.POLITICS_DATA?.questions || []);
    const flashcardList = ref(window.POLITICS_DATA?.flashcards || []);
    const politicsEncyclopedia = ref(window.POLITICS_DATA?.knowledgeEncyclopedia || []);
    const essayTemplates = ref(window.POLITICS_DATA?.essayTemplates || []);

    // 提示信息 Toast
    const toast = ref({ show: false, message: '', type: 'info' });
    const showToast = (message, type = 'info') => {
      toast.value = { show: true, message, type };
      setTimeout(() => {
        toast.value.show = false;
      }, 2500);
    };

    // 倒计时计算（每年12月下旬考研）
    const daysUntilExam = computed(() => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let examDate = new Date(currentYear, 11, 26); // 12月26日
      if (now > examDate) {
        examDate = new Date(currentYear + 1, 11, 26);
      }
      const diffTime = examDate.getTime() - now.getTime();
      return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    });

    // 本地持久化数据加载与保存
    const storageKey = 'YAN_HUB_USER_DATA_V2';
    const userData = ref({
      checkInDays: 7,
      lastCheckInDate: '',
      masteredVocabIds: [],
      savedVocabIds: ['en-v-001', 'v55-101'],
      wrongQuestionIds: ['pol-q-002'],
      quizStats: { totalAttempted: 8, correctCount: 6 },
      flashcardMasteredIds: []
    });

    const loadLocalData = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          userData.value = { ...userData.value, ...parsed };
        }
      } catch (e) {
        console.warn('读取本地数据失败，采用默认值', e);
      }
    };

    const saveLocalData = () => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(userData.value));
      } catch (e) {
        console.error('保存本地数据异常', e);
      }
    };

    watch(userData, () => saveLocalData(), { deep: true });

    // 打卡功能
    const isCheckedInToday = computed(() => {
      const today = new Date().toISOString().split('T')[0];
      return userData.value.lastCheckInDate === today;
    });

    const triggerCheckIn = () => {
      const today = new Date().toISOString().split('T')[0];
      if (userData.value.lastCheckInDate !== today) {
        userData.value.checkInDays += 1;
        userData.value.lastCheckInDate = today;
        showToast('🎉 今日学习打卡成功！坚持就是胜利！', 'success');
      } else {
        showToast('您今日已经完成打卡啦，继续保持！', 'info');
      }
    };

    // ==================== 考研英语模块逻辑 ====================
    
    // 1. 高频核心词汇背诵
    const vocabIndex = ref(0);
    const showVocabMeaning = ref(false);
    const vocabFilter = ref('all');

    const filteredVocabList = computed(() => {
      if (vocabFilter.value === 'saved') {
        return coreVocabList.value.filter(v => userData.value.savedVocabIds.includes(v.id));
      }
      if (vocabFilter.value !== 'all') {
        return coreVocabList.value.filter(v => v.category === vocabFilter.value);
      }
      return coreVocabList.value;
    });

    const currentVocab = computed(() => {
      if (filteredVocabList.value.length === 0) return null;
      const idx = Math.min(vocabIndex.value, filteredVocabList.value.length - 1);
      return filteredVocabList.value[idx];
    });

    const playWordAudio = (word) => {
      if (!window.speechSynthesis) {
        showToast('当前浏览器不支持语音朗读', 'warning');
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    };

    const nextVocab = () => {
      showVocabMeaning.value = false;
      if (vocabIndex.value < filteredVocabList.value.length - 1) {
        vocabIndex.value += 1;
      } else {
        vocabIndex.value = 0;
        showToast('已完成本轮词汇遍历！', 'info');
      }
    };

    const prevVocab = () => {
      showVocabMeaning.value = false;
      if (vocabIndex.value > 0) {
        vocabIndex.value -= 1;
      }
    };

    const markVocabMastered = (id) => {
      const targetId = id || (currentVocab.value && currentVocab.value.id);
      if (!targetId) return;
      if (!userData.value.masteredVocabIds.includes(targetId)) {
        userData.value.masteredVocabIds.push(targetId);
      }
      showToast('标记为熟记！', 'success');
      if (!id) nextVocab();
    };

    const toggleSaveVocab = (vocab) => {
      const v = vocab || currentVocab.value;
      if (!v) return;
      const idx = userData.value.savedVocabIds.indexOf(v.id);
      if (idx > -1) {
        userData.value.savedVocabIds.splice(idx, 1);
        showToast(`已从生词本移除 "${v.word}"`, 'info');
      } else {
        userData.value.savedVocabIds.push(v.id);
        showToast(`已将 "${v.word}" 加入生词本！`, 'success');
      }
    };

    // 2. 考研大纲 5530 全量词库 (Unit 单元检索与刷词系统)
    const fullVocabSearch = ref('');
    const fullVocabCurrentUnit = ref(1);
    const wordsPerUnit = 50;

    const searchedFullVocab = computed(() => {
      if (!fullVocabSearch.value.trim()) {
        return fullVocabList.value;
      }
      const q = fullVocabSearch.value.trim().toLowerCase();
      return fullVocabList.value.filter(item => 
        (item.word && item.word.toLowerCase().includes(q)) ||
        (item.definition && item.definition.includes(q))
      );
    });

    const totalUnits = computed(() => {
      return Math.ceil(searchedFullVocab.value.length / wordsPerUnit) || 1;
    });

    const currentUnitWords = computed(() => {
      const start = (fullVocabCurrentUnit.value - 1) * wordsPerUnit;
      return searchedFullVocab.value.slice(start, start + wordsPerUnit);
    });

    const setFullVocabUnit = (u) => {
      fullVocabCurrentUnit.value = Math.max(1, Math.min(u, totalUnits.value));
    };

    // 3. 历年真题阅读全文精读 (Reading Comprehension)
    const selectedArticleIndex = ref(0);
    const currentArticle = computed(() => articleList.value[selectedArticleIndex.value] || articleList.value[0]);
    const userArticleAnswers = ref({});
    const articleQuizSubmitted = ref({});

    const selectArticle = (idx) => {
      selectedArticleIndex.value = idx;
    };

    const submitArticleQuestion = (qId, optionLabel, correctLabel) => {
      userArticleAnswers.value[qId] = optionLabel;
      articleQuizSubmitted.value[qId] = true;
      if (optionLabel === correctLabel) {
        showToast('🎯 回答正确！精准定位原文细节！', 'success');
      } else {
        showToast('⚠️ 答案有误，请仔细研读考点解题思路！', 'warning');
      }
    };

    // 4. 历年长难句精读
    const sentenceIndex = ref(0);
    const showSentenceBreakdown = ref(true);
    const showSentenceTranslation = ref(false);
    const userTranslation = ref('');

    const currentSentence = computed(() => sentenceList.value[sentenceIndex.value] || sentenceList.value[0]);

    const selectSentence = (idx) => {
      sentenceIndex.value = idx;
      showSentenceTranslation.value = false;
      userTranslation.value = '';
    };

    // 5. 作文语料库
    const writingSearchQuery = ref('');
    const filteredWritingReplacements = computed(() => {
      if (!writingSearchQuery.value.trim()) return writingArsenal.value.replacements || [];
      const q = writingSearchQuery.value.toLowerCase();
      return (writingArsenal.value.replacements || []).filter(item => 
        item.standard.toLowerCase().includes(q) || 
        item.advanced.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q)
      );
    });

    const copyText = (text, tip = '已成功复制到剪贴板！') => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(tip, 'success');
        }).catch(() => fallbackCopy(text, tip));
      } else {
        fallbackCopy(text, tip);
      }
    };

    const fallbackCopy = (text, tip) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(tip, 'success');
    };

    // ==================== 考研政治模块逻辑 ====================
    
    // 1. 刷题题库
    const quizSubjectFilter = ref('all');
    const quizIndex = ref(0);
    const selectedSingleOption = ref('');
    const selectedMultiOptions = ref([]);
    const hasSubmittedQuiz = ref(false);
    const isQuizAnswerCorrect = ref(false);

    const filteredQuizList = computed(() => {
      if (quizSubjectFilter.value === 'all') return quizList.value;
      return quizList.value.filter(q => q.subject.includes(quizSubjectFilter.value) || quizSubjectFilter.value.includes(q.subject));
    });

    const currentQuiz = computed(() => {
      if (filteredQuizList.value.length === 0) return null;
      const idx = Math.min(quizIndex.value, filteredQuizList.value.length - 1);
      return filteredQuizList.value[idx];
    });

    const resetQuizState = () => {
      selectedSingleOption.value = '';
      selectedMultiOptions.value = [];
      hasSubmittedQuiz.value = false;
      isQuizAnswerCorrect.value = false;
    };

    const selectOption = (label) => {
      if (hasSubmittedQuiz.value) return;
      if (currentQuiz.value.type === 'single') {
        selectedSingleOption.value = label;
        submitQuizAnswer();
      } else {
        const idx = selectedMultiOptions.value.indexOf(label);
        if (idx > -1) {
          selectedMultiOptions.value.splice(idx, 1);
        } else {
          selectedMultiOptions.value.push(label);
        }
      }
    };

    const submitQuizAnswer = () => {
      if (!currentQuiz.value || hasSubmittedQuiz.value) return;
      hasSubmittedQuiz.value = true;
      userData.value.quizStats.totalAttempted += 1;

      if (currentQuiz.value.type === 'single') {
        isQuizAnswerCorrect.value = (selectedSingleOption.value === currentQuiz.value.answer);
      } else {
        const sortedSelected = [...selectedMultiOptions.value].sort().join('');
        const sortedAnswer = [...currentQuiz.value.answer].sort().join('');
        isQuizAnswerCorrect.value = (sortedSelected === sortedAnswer);
      }

      if (isQuizAnswerCorrect.value) {
        userData.value.quizStats.correctCount += 1;
        showToast('🎯 回答正确！考点掌握扎实！', 'success');
      } else {
        showToast('⚠️ 遗憾答错，已自动沉淀至政治错题本！', 'warning');
        if (!userData.value.wrongQuestionIds.includes(currentQuiz.value.id)) {
          userData.value.wrongQuestionIds.push(currentQuiz.value.id);
        }
      }
    };

    const nextQuiz = () => {
      resetQuizState();
      if (quizIndex.value < filteredQuizList.value.length - 1) {
        quizIndex.value += 1;
      } else {
        quizIndex.value = 0;
        showToast('已刷完本分类所有题目，从头开始强化！', 'info');
      }
    };

    // 2. 政治考点速记卡片 (Flashcards)
    const flashcardIndex = ref(0);
    const isFlashcardFlipped = ref(false);
    const currentFlashcard = computed(() => flashcardList.value[flashcardIndex.value] || flashcardList.value[0]);

    const toggleFlashcardFlip = () => {
      isFlashcardFlipped.value = !isFlashcardFlipped.value;
    };

    const nextFlashcard = () => {
      isFlashcardFlipped.value = false;
      if (flashcardIndex.value < flashcardList.value.length - 1) {
        flashcardIndex.value += 1;
      } else {
        flashcardIndex.value = 0;
      }
    };

    const prevFlashcard = () => {
      isFlashcardFlipped.value = false;
      if (flashcardIndex.value > 0) {
        flashcardIndex.value -= 1;
      }
    };

    const markFlashcardMastered = () => {
      if (!currentFlashcard.value) return;
      const id = currentFlashcard.value.id;
      if (!userData.value.flashcardMasteredIds.includes(id)) {
        userData.value.flashcardMasteredIds.push(id);
      }
      showToast('本考点已标记为熟练掌握！', 'success');
      nextFlashcard();
    };

    // 3. 考研政治核心考点全书 (Encyclopedia)
    const encyclopediaSubjectIndex = ref(0);
    const encyclopediaSearch = ref('');

    const currentEncyclopedia = computed(() => {
      return politicsEncyclopedia.value[encyclopediaSubjectIndex.value] || politicsEncyclopedia.value[0];
    });

    const filteredEncyclopediaSections = computed(() => {
      if (!currentEncyclopedia.value) return [];
      if (!encyclopediaSearch.value.trim()) return currentEncyclopedia.value.sections;
      const q = encyclopediaSearch.value.trim().toLowerCase();
      return currentEncyclopedia.value.sections.filter(sec => 
        sec.title.toLowerCase().includes(q) ||
        sec.points.some(p => p.toLowerCase().includes(q))
      );
    });

    // ==================== 错题与生词本管理 ====================
    const wrongQuestionObjects = computed(() => {
      return quizList.value.filter(q => userData.value.wrongQuestionIds.includes(q.id));
    });

    const savedVocabObjects = computed(() => {
      const coreSaved = coreVocabList.value.filter(v => userData.value.savedVocabIds.includes(v.id));
      const fullSaved = fullVocabList.value.filter(v => userData.value.savedVocabIds.includes(v.id));
      return [...coreSaved, ...fullSaved];
    });

    const removeWrongQuestion = (id) => {
      const idx = userData.value.wrongQuestionIds.indexOf(id);
      if (idx > -1) {
        userData.value.wrongQuestionIds.splice(idx, 1);
        showToast('已从错题本消除该题！', 'success');
      }
    };

    // 综合统计仪表盘指标
    const quizAccuracy = computed(() => {
      const total = userData.value.quizStats.totalAttempted;
      if (total === 0) return 0;
      return Math.round((userData.value.quizStats.correctCount / total) * 100);
    });

    const vocabMasteryPercentage = computed(() => {
      const total = fullVocabList.value.length || coreVocabList.value.length || 5530;
      return Math.round((userData.value.masteredVocabIds.length / total) * 100);
    });

    // 清空与重置数据
    const resetAllData = () => {
      if (confirm('确定要重置所有学习进度与错题本数据吗？')) {
        userData.value = {
          checkInDays: 1,
          lastCheckInDate: '',
          masteredVocabIds: [],
          savedVocabIds: [],
          wrongQuestionIds: [],
          quizStats: { totalAttempted: 0, correctCount: 0 },
          flashcardMasteredIds: []
        };
        saveLocalData();
        showToast('学习进度已重新初始化！', 'info');
      }
    };

    onMounted(() => {
      loadLocalData();
    });

    return {
      currentTab,
      englishTab,
      politicsTab,
      notebookTab,
      toast,
      showToast,
      daysUntilExam,
      userData,
      isCheckedInToday,
      triggerCheckIn,
      resetAllData,

      // 英语数据与逻辑
      coreVocabList,
      fullVocabList,
      sentenceList,
      articleList,
      writingArsenal,
      vocabIndex,
      showVocabMeaning,
      vocabFilter,
      filteredVocabList,
      currentVocab,
      playWordAudio,
      nextVocab,
      prevVocab,
      markVocabMastered,
      toggleSaveVocab,

      // 5530 词库
      fullVocabSearch,
      fullVocabCurrentUnit,
      searchedFullVocab,
      totalUnits,
      currentUnitWords,
      setFullVocabUnit,

      // 真题阅读文章
      selectedArticleIndex,
      currentArticle,
      userArticleAnswers,
      articleQuizSubmitted,
      selectArticle,
      submitArticleQuestion,

      // 长难句与写作
      sentenceIndex,
      showSentenceBreakdown,
      showSentenceTranslation,
      userTranslation,
      currentSentence,
      selectSentence,
      writingSearchQuery,
      filteredWritingReplacements,
      copyText,

      // 政治
      quizList,
      flashcardList,
      politicsEncyclopedia,
      essayTemplates,
      quizSubjectFilter,
      quizIndex,
      selectedSingleOption,
      selectedMultiOptions,
      hasSubmittedQuiz,
      isQuizAnswerCorrect,
      filteredQuizList,
      currentQuiz,
      selectOption,
      submitQuizAnswer,
      nextQuiz,
      resetQuizState,
      flashcardIndex,
      isFlashcardFlipped,
      currentFlashcard,
      toggleFlashcardFlip,
      nextFlashcard,
      prevFlashcard,
      markFlashcardMastered,

      // 政治考点全书
      encyclopediaSubjectIndex,
      encyclopediaSearch,
      currentEncyclopedia,
      filteredEncyclopediaSections,

      // 错题与生词本
      wrongQuestionObjects,
      savedVocabObjects,
      removeWrongQuestion,
      quizAccuracy,
      vocabMasteryPercentage
    };
  }
}).mount('#app');
