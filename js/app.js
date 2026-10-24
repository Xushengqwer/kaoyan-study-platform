// 研途宝 · 考研英语与政治核心双核学习系统 (v3.0 全文精读与大纲词库深度互联版)
const { createApp, ref, computed, onMounted, watch } = Vue;

createApp({
  setup() {
    // 导航状态管理
    const currentTab = ref('dashboard'); // 'dashboard' | 'english' | 'politics' | 'notebook'
    const englishTab = ref('articles'); // 'articles' | 'fullVocab' | 'vocab' | 'sentences' | 'writing'
    const politicsTab = ref('quiz'); // 'quiz' | 'flashcards' | 'encyclopedia' | 'essay'
    const notebookTab = ref('wrongQuestions'); // 'wrongQuestions' | 'vocabList'

    // 数据源引用
    const coreVocabList = ref(window.ENGLISH_DATA?.vocabulary || []);
    const fullVocabList = ref(window.KAOYAN_FULL_VOCAB || []);
    const sentenceList = ref(window.ENGLISH_DATA?.sentences || []);
    const writingArsenal = ref(window.ENGLISH_DATA?.writingArsenal || {});

    // 阅读文章题库（结合精编真题 + 外刊同源题库）
    const presetArticles = window.READING_CORPUS || window.ENGLISH_DATA?.articles || [];
    const customArticles = ref([]);

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
      let examDate = new Date(currentYear, 11, 26);
      if (now > examDate) {
        examDate = new Date(currentYear + 1, 11, 26);
      }
      const diffTime = examDate.getTime() - now.getTime();
      return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    });

    // 本地持久化数据加载与保存
    const storageKey = 'YAN_HUB_USER_DATA_V3';
    const userData = ref({
      checkInDays: 7,
      lastCheckInDate: '',
      masteredVocabIds: [],
      savedVocabIds: ['en-v-001', 'v55-101'],
      wrongQuestionIds: ['pol-q-002'],
      quizStats: { totalAttempted: 8, correctCount: 6 },
      flashcardMasteredIds: []
    });

    // 快速大纲词汇哈希索引（用于即时文章生词匹配与划词查词）
    let fullVocabMap = new Map();
    const buildVocabIndex = () => {
      fullVocabMap.clear();
      fullVocabList.value.forEach(v => {
        if (v.word) fullVocabMap.set(v.word.toLowerCase(), v);
      });
      coreVocabList.value.forEach(v => {
        if (v.word && !fullVocabMap.has(v.word.toLowerCase())) {
          fullVocabMap.set(v.word.toLowerCase(), v);
        }
      });
    };

    const loadLocalData = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          userData.value = { ...userData.value, ...parsed };
        }
        const savedCustomArticles = localStorage.getItem('YAN_HUB_CUSTOM_ARTICLES');
        if (savedCustomArticles) {
          customArticles.value = JSON.parse(savedCustomArticles);
        }
      } catch (e) {
        console.warn('读取本地数据失败，采用默认值', e);
      }
    };

    const saveLocalData = () => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(userData.value));
        localStorage.setItem('YAN_HUB_CUSTOM_ARTICLES', JSON.stringify(customArticles.value));
      } catch (e) {
        console.error('保存本地数据异常', e);
      }
    };

    watch(userData, () => saveLocalData(), { deep: true });
    watch(customArticles, () => saveLocalData(), { deep: true });

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

    // ==================== 考研英语：海量阅读与意群断句模块 ====================
    
    // 合并全部文章（内置权威真题 + 用户导入文章）
    const allArticles = computed(() => {
      return [...presetArticles, ...customArticles.value];
    });

    const selectedArticleId = ref(presetArticles[0]?.id || '');
    const currentArticle = computed(() => {
      return allArticles.value.find(a => a.id === selectedArticleId.value) || allArticles.value[0];
    });

    // 文章题材分类筛选与关键词搜索
    const articleTopicFilter = ref('all');
    const articleSearchQuery = ref('');

    const availableTopics = computed(() => {
      const set = new Set();
      allArticles.value.forEach(a => {
        if (a.topic) set.add(a.topic);
      });
      return Array.from(set);
    });

    const filteredArticles = computed(() => {
      let list = allArticles.value;
      if (articleTopicFilter.value && articleTopicFilter.value !== 'all') {
        list = list.filter(a => a.topic === articleTopicFilter.value);
      }
      if (articleSearchQuery.value && articleSearchQuery.value.trim()) {
        const q = articleSearchQuery.value.trim().toLowerCase();
        list = list.filter(a => 
          (a.title && a.title.toLowerCase().includes(q)) ||
          (a.topic && a.topic.toLowerCase().includes(q)) ||
          (a.source && a.source.toLowerCase().includes(q)) ||
          (a.year && a.year.toString().includes(q))
        );
      }
      return list;
    });

    // 监听过滤列表，如果当前选中文章不在过滤结果中，自动切换到第一篇
    watch(filteredArticles, (newList) => {
      if (newList.length && !newList.some(a => a.id === selectedArticleId.value)) {
        selectedArticleId.value = newList[0].id;
      }
    });

    // 上一篇 / 下一篇便捷切换
    const prevArticle = () => {
      const list = filteredArticles.value.length ? filteredArticles.value : allArticles.value;
      if (!list.length) return;
      const idx = list.findIndex(a => a.id === selectedArticleId.value);
      if (idx > 0) {
        selectedArticleId.value = list[idx - 1].id;
      } else if (idx === 0) {
        selectedArticleId.value = list[list.length - 1].id;
      }
    };

    const nextArticle = () => {
      const list = filteredArticles.value.length ? filteredArticles.value : allArticles.value;
      if (!list.length) return;
      const idx = list.findIndex(a => a.id === selectedArticleId.value);
      if (idx >= 0 && idx < list.length - 1) {
        selectedArticleId.value = list[idx + 1].id;
      } else if (idx === list.length - 1) {
        selectedArticleId.value = list[0].id;
      }
    };

    // 阅读模式：'bilingual' (双语精读) | 'chunks' (意群断句) | 'enOnly' (纯英沉浸)
    const readingMode = ref('bilingual');
    const highlightKaoyanWords = ref(true); // 是否高亮大纲考查词

    // 划词查词弹窗对象
    const activeLookup = ref(null);

    // 智能单词查词处理
    const lookupWord = (rawToken) => {
      if (!rawToken) return;
      const clean = rawToken.replace(/[^a-zA-Z]/g, '').toLowerCase();
      if (!clean) return;

      const found = fullVocabMap.get(clean) || 
                    fullVocabMap.get(clean.replace(/s$|ed$|ing$|ly$/, '')) || 
                    fullVocabMap.get(clean.replace(/es$/, ''));

      if (found) {
        activeLookup.value = {
          word: found.word || clean,
          phonetic: found.phonetic || '',
          definition: found.definition || '大纲高频核心词汇',
          freq: found.freq || found.examCount || 0,
          category: found.category || '大纲词',
          sentence: found.sentence || found.examSentence || '',
          translation: found.translation || found.examTranslation || '',
          id: found.id || `v-${clean}`
        };
      } else {
        activeLookup.value = {
          word: clean,
          phonetic: '',
          definition: '拓展阅读生词，建议借助真题语境掌握',
          freq: 0,
          category: '外刊拓展',
          sentence: '',
          translation: '',
          id: `custom-${clean}`
        };
      }
    };

    // 分解自然段为单词流
    const tokenizeParagraph = (text) => {
      if (!text) return [];
      const parts = text.split(/(\s+|[.,!?;:"'—\(\)\[\]]+)/);
      return parts.map(part => {
        const clean = part.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const isTarget = highlightKaoyanWords.value && clean.length > 2 && fullVocabMap.has(clean);
        return {
          raw: part,
          isWord: /[a-zA-Z]/.test(part),
          isKaoyan: isTarget
        };
      });
    };

    // 自动意群断句生成器（若文章未提供 chunks，则由该引擎实时智能切分）
    const generateChunks = (enText) => {
      if (!enText) return '';
      // 按照介词从句连词规则进行断句切分
      let processed = enText
        .replace(/([,;:—])/g, '$1 / ')
        .replace(/\b(that|which|who|whom|whose|where|when|why|because|although|though|while|whereas|whether|if)\b/gi, ' / $1')
        .replace(/\b(in order to|according to|in the wake of|with regard to|as well as)\b/gi, ' / $1')
        .replace(/\s+\/\s+/g, ' / ');
      return processed;
    };

    // 真题阅读文章配套答题
    const userArticleAnswers = ref({});
    const articleQuizSubmitted = ref({});

    const submitArticleQuestion = (qId, optionLabel, correctLabel) => {
      userArticleAnswers.value[qId] = optionLabel;
      articleQuizSubmitted.value[qId] = true;
      if (optionLabel === correctLabel) {
        showToast('🎯 回答正确！准确定位原文事实论据！', 'success');
      } else {
        showToast('⚠️ 遗憾选错，请仔细阅读下方的考点解题思路！', 'warning');
      }
    };

    // ==================== 文章导入工坊 (支持无限扩展几百篇真题与外刊) ====================
    const showImportModal = ref(false);
    const importForm = ref({
      title: '',
      topic: '社会经济与科技',
      source: '真题精选 / 经济学人',
      enText: '',
      zhText: ''
    });

    const handleImportArticle = () => {
      if (!importForm.value.title.trim() || !importForm.value.enText.trim()) {
        showToast('请至少填写文章标题和英文正文！', 'warning');
        return;
      }

      // 将文本按双换行分段
      const enParas = importForm.value.enText.split(/\n\s*\n/).filter(p => p.trim());
      const zhParas = importForm.value.zhText ? importForm.value.zhText.split(/\n\s*\n/).filter(p => p.trim()) : [];

      const constructedParas = enParas.map((en, i) => {
        return {
          paraNum: i + 1,
          en: en.trim(),
          zh: zhParas[i] ? zhParas[i].trim() : '（暂无译文，可在精读模式下自测翻译）',
          chunks: generateChunks(en.trim())
        };
      });

      const newId = `imported-${Date.now()}`;
      const newArt = {
        id: newId,
        year: '最新导入',
        examType: '精选阅读',
        section: '自定义',
        title: importForm.value.title.trim(),
        source: importForm.value.source.trim() || '自主精读文库',
        topic: importForm.value.topic.trim() || '学术阅读',
        difficulty: '4',
        wordCount: importForm.value.enText.split(/\s+/).length,
        paragraphs: constructedParas,
        questions: []
      };

      customArticles.value.unshift(newArt);
      selectedArticleId.value = newId;
      showImportModal.value = false;
      showToast(`🎉 成功导入并自动生成断句与大纲词汇标注！`, 'success');

      // 重置表单
      importForm.value = { title: '', topic: '社会经济与科技', source: '真题精选 / 经济学人', enText: '', zhText: '' };
    };

    // ==================== 考研英语：大纲 5530 词库逻辑 ====================
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

    const markVocabMastered = (id) => {
      if (!id) return;
      if (!userData.value.masteredVocabIds.includes(id)) {
        userData.value.masteredVocabIds.push(id);
      }
      showToast('标记为熟记！', 'success');
    };

    const toggleSaveVocab = (vocab) => {
      if (!vocab) return;
      const id = vocab.id || `v-${vocab.word}`;
      const idx = userData.value.savedVocabIds.indexOf(id);
      if (idx > -1) {
        userData.value.savedVocabIds.splice(idx, 1);
        showToast(`已从生词本移除 "${vocab.word}"`, 'info');
      } else {
        userData.value.savedVocabIds.push(id);
        showToast(`已将 "${vocab.word}" 加入生词本！`, 'success');
      }
    };

    // 核心词汇卡片背诵逻辑
    const vocabIndex = ref(0);
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

    const nextVocab = () => {
      if (vocabIndex.value < filteredVocabList.value.length - 1) {
        vocabIndex.value += 1;
      } else {
        vocabIndex.value = 0;
        showToast('已完成本轮词汇遍历！', 'info');
      }
    };

    const prevVocab = () => {
      if (vocabIndex.value > 0) vocabIndex.value -= 1;
    };

    // 长难句与写作
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

    const writingSearchQuery = ref('');
    const filteredWritingReplacements = computed(() => {
      if (!writingSearchQuery.value.trim()) return writingArsenal.value.replacements || [];
      const q = writingSearchQuery.value.toLowerCase();
      return (writingArsenal.value.replacements || []).filter(item => 
        item.standard.toLowerCase().includes(q) || 
        item.advanced.toLowerCase().includes(q)
      );
    });

    const copyText = (text, tip = '已成功复制到剪贴板！') => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast(tip, 'success')).catch(() => fallbackCopy(text, tip));
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

    // 政治卡片
    const flashcardIndex = ref(0);
    const isFlashcardFlipped = ref(false);
    const currentFlashcard = computed(() => flashcardList.value[flashcardIndex.value] || flashcardList.value[0]);
    const toggleFlashcardFlip = () => isFlashcardFlipped.value = !isFlashcardFlipped.value;
    const nextFlashcard = () => {
      isFlashcardFlipped.value = false;
      flashcardIndex.value = (flashcardIndex.value < flashcardList.value.length - 1) ? flashcardIndex.value + 1 : 0;
    };
    const prevFlashcard = () => {
      isFlashcardFlipped.value = false;
      if (flashcardIndex.value > 0) flashcardIndex.value -= 1;
    };
    const markFlashcardMastered = () => {
      if (!currentFlashcard.value) return;
      if (!userData.value.flashcardMasteredIds.includes(currentFlashcard.value.id)) {
        userData.value.flashcardMasteredIds.push(currentFlashcard.value.id);
      }
      showToast('考点已牢记！', 'success');
      nextFlashcard();
    };

    // 政治考点全书
    const encyclopediaSubjectIndex = ref(0);
    const encyclopediaSearch = ref('');
    const currentEncyclopedia = computed(() => politicsEncyclopedia.value[encyclopediaSubjectIndex.value] || politicsEncyclopedia.value[0]);
    const filteredEncyclopediaSections = computed(() => {
      if (!currentEncyclopedia.value) return [];
      if (!encyclopediaSearch.value.trim()) return currentEncyclopedia.value.sections;
      const q = encyclopediaSearch.value.trim().toLowerCase();
      return currentEncyclopedia.value.sections.filter(sec => 
        sec.title.toLowerCase().includes(q) ||
        sec.points.some(p => p.toLowerCase().includes(q))
      );
    });

    // 错题与生词本
    const wrongQuestionObjects = computed(() => quizList.value.filter(q => userData.value.wrongQuestionIds.includes(q.id)));
    const savedVocabObjects = computed(() => {
      const list = [];
      userData.value.savedVocabIds.forEach(id => {
        let item = fullVocabList.value.find(v => v.id === id);
        if (!item) item = coreVocabList.value.find(v => v.id === id);
        if (item) list.push(item);
      });
      return list;
    });

    const removeWrongQuestion = (id) => {
      const idx = userData.value.wrongQuestionIds.indexOf(id);
      if (idx > -1) {
        userData.value.wrongQuestionIds.splice(idx, 1);
        showToast('已从错题本消除该题！', 'success');
      }
    };

    const quizAccuracy = computed(() => {
      const total = userData.value.quizStats.totalAttempted;
      return total === 0 ? 0 : Math.round((userData.value.quizStats.correctCount / total) * 100);
    });

    const vocabMasteryPercentage = computed(() => {
      const total = fullVocabList.value.length || 5530;
      return Math.round((userData.value.masteredVocabIds.length / total) * 100);
    });

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
      buildVocabIndex();
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

      // 海量阅读与意群断句
      allArticles,
      selectedArticleId,
      currentArticle,
      articleTopicFilter,
      articleSearchQuery,
      availableTopics,
      filteredArticles,
      prevArticle,
      nextArticle,
      readingMode,
      highlightKaoyanWords,
      activeLookup,
      lookupWord,
      tokenizeParagraph,
      generateChunks,
      userArticleAnswers,
      articleQuizSubmitted,
      submitArticleQuestion,

      // 文章导入工坊
      showImportModal,
      importForm,
      handleImportArticle,

      // 5530 词库
      fullVocabList,
      fullVocabSearch,
      fullVocabCurrentUnit,
      searchedFullVocab,
      totalUnits,
      currentUnitWords,
      setFullVocabUnit,
      playWordAudio,
      markVocabMastered,
      toggleSaveVocab,

      // 核心词汇、长难句与写作
      coreVocabList,
      vocabIndex,
      vocabFilter,
      filteredVocabList,
      currentVocab,
      nextVocab,
      prevVocab,
      sentenceList,
      sentenceIndex,
      showSentenceBreakdown,
      showSentenceTranslation,
      userTranslation,
      currentSentence,
      selectSentence,
      writingArsenal,
      writingSearchQuery,
      filteredWritingReplacements,
      copyText,

      // 政治全科
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
      encyclopediaSubjectIndex,
      encyclopediaSearch,
      currentEncyclopedia,
      filteredEncyclopediaSections,

      // 错题与生词
      wrongQuestionObjects,
      savedVocabObjects,
      removeWrongQuestion,
      quizAccuracy,
      vocabMasteryPercentage
    };
  }
}).mount('#app');
