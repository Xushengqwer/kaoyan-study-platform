// 考研英语数据库 (English Data)
window.ENGLISH_DATA = {
  // 核心考研高频词汇
  vocabulary: [
    {
      id: "en-v-001",
      word: "precedent",
      phonetic: "/ˈpresɪdənt/",
      pos: "n.",
      definition: "先例，前例；常规，判例",
      root: "pre- (在...前) + ced (走) + -ent -> 走在前面的人或事 -> 先例",
      collocations: ["set a precedent 树立先例", "without precedent 史无前例", "follow precedent 遵循先例"],
      examSentence: "The court's controversial ruling has set a dangerous precedent for future intellectual property disputes.",
      examTranslation: "法院这一充满争议的裁决为未来的知识产权争端树立了一个危险的先例。（考研真题典例）",
      synonyms: ["prior case", "tradition", "criterion", "convention"],
      category: "高频核心",
      level: 5
    },
    {
      id: "en-v-002",
      word: "scrutinize",
      phonetic: "/ˈskruːtənaɪz/",
      pos: "vt. / vi.",
      definition: "仔细审查，细致观察，彻底审视",
      root: "scrut (查探/碎屑) + -inize -> 翻拣碎屑般细查 -> 严密审视",
      collocations: ["scrutinize every detail 审视每个细节", "come under scrutiny 受到严密审查"],
      examSentence: "Academics and policymakers have begun to scrutinize the long-term societal consequences of algorithmic decision-making.",
      examTranslation: "学者和决策者们已经开始仔细审视算法决策对社会造成的长远后果。（阅读理解高频考词）",
      synonyms: ["examine", "inspect", "investigate", "probe"],
      category: "核心必背",
      level: 5
    },
    {
      id: "en-v-003",
      word: "vulnerable",
      phonetic: "/ˈvʌlnərəbl/",
      pos: "adj.",
      definition: "易受攻击的，脆弱的，易受伤害的",
      root: "vulner (创伤，伤害) + -able (可...的) -> 容易受伤的",
      collocations: ["vulnerable to natural disasters 易受自然灾害影响", "vulnerable groups 弱势群体"],
      examSentence: "Developing economies remain particularly vulnerable to sudden fluctuations in global commodity prices.",
      examTranslation: "发展中经济体对全球大宗商品价格的突然波动依然格外脆弱。",
      synonyms: ["susceptible", "fragile", "defenseless", "exposed"],
      category: "高频核心",
      level: 4
    },
    {
      id: "en-v-004",
      word: "ambiguous",
      phonetic: "/æmˈbɪɡjuəs/",
      pos: "adj.",
      definition: "模棱两可的，不明确的，有歧义的",
      root: "ambi- (两者/周围) + ag/ig (驱赶/行动) + -uous -> 在两种方向间徘徊 -> 模棱两可",
      collocations: ["ambiguous statement 模棱两可的声明", "ambiguous attitude 暧昧态度"],
      examSentence: "The terms of the contract were sufficiently ambiguous that both parties interpreted them in their own favor.",
      examTranslation: "合同条款十分模棱两可，以至于双方都做出了对自己有利的解读。",
      synonyms: ["vague", "equivocal", "obscure", "indefinite"],
      category: "高频核心",
      level: 5
    },
    {
      id: "en-v-005",
      word: "indispensable",
      phonetic: "/ˌɪndɪˈspensəbl/",
      pos: "adj.",
      definition: "必不可少的，不可或缺的",
      root: "in- (否定) + dis- (分开) + pens (称重/花费) + -able -> 不能省去不要的 -> 必不可少的",
      collocations: ["indispensable part 不可分割的一部分", "play an indispensable role 发挥不可或缺的作用"],
      examSentence: "Critical thinking skills have become an indispensable asset in today's knowledge-driven workforce.",
      examTranslation: "在如今由知识驱动的职场中，批判性思维能力已成为一项必不可少的优势财富。",
      synonyms: ["essential", "crucial", "vital", "imperative"],
      category: "作文亮点词",
      level: 5
    },
    {
      id: "en-v-006",
      word: "deteriorate",
      phonetic: "/dɪˈtɪəriəreɪt/",
      pos: "vi. / vt.",
      definition: "恶化，变坏，退化",
      root: "de- (向下) + terior (更差) + -ate -> 持续向下变差 -> 恶化",
      collocations: ["conditions deteriorate 条件恶化", "deteriorating health 健康状况日下"],
      examSentence: "If international cooperation breaks down, environmental degradation will rapidly deteriorate the global living standard.",
      examTranslation: "一旦国际合作破裂，环境恶化将迅速降低全球的生活水准。",
      synonyms: ["worsen", "degenerate", "decline", "decay"],
      category: "高频核心",
      level: 4
    },
    {
      id: "en-v-007",
      word: "ubiquitous",
      phonetic: "/juːˈbɪkwɪtəs/",
      pos: "adj.",
      definition: "普遍存在的，无处不在的",
      root: "ubique (到处/何处) + -itous -> 遍布各处的",
      collocations: ["ubiquitous smartphones 随处可见的智能手机", "ubiquitous presence 无处不在的存在"],
      examSentence: "With the ubiquitous spread of broadband internet, distance learning has transformed the educational landscape.",
      examTranslation: "伴随宽带网络的普及，远程在线教育彻底重构了传统教育格局。",
      synonyms: ["omnipresent", "pervasive", "universal", "widespread"],
      category: "真题熟词",
      level: 5
    },
    {
      id: "en-v-008",
      word: "advocate",
      phonetic: "/ˈædvəkeɪt/ (v.) / /ˈædvəkət/ (n.)",
      pos: "vt. / n.",
      definition: "vt. 提倡，鼓吹，主张；n. 提倡者，拥护者，辩护律师",
      root: "ad- (去向) + voc (声音/召唤) + -ate -> 为某事发声 -> 提倡支持",
      collocations: ["advocate sustainable development 提倡可持续发展", "a staunch advocate 坚定拥护者"],
      examSentence: "Reformers vehemently advocate restructuring the healthcare sector to curb escalating expenses.",
      examTranslation: "改革者们极力主张对医疗保健部门进行重组，以遏制不断攀升的医疗费用。",
      synonyms: ["champion", "promote", "support", "endorse"],
      category: "高频核心",
      level: 4
    },
    {
      id: "en-v-009",
      word: "paradoxical",
      phonetic: "/ˌpærəˈdɒksɪkl/",
      pos: "adj.",
      definition: "矛盾的，看似荒谬却正确的",
      root: "para- (相反/超越) + dox (见解/观点) + -ical -> 违背常理但富含哲理的 -> 自相矛盾的",
      collocations: ["paradoxical outcome 矛盾的结果", "paradoxical situation 自相矛盾的境况"],
      examSentence: "It is paradoxical that in an era of hyper-connectivity, reports of profound social isolation are reaching all-time highs.",
      examTranslation: "看似自相矛盾的是，在这样一个高度互联的时代，严重社会孤立感的人群报告却达到了历史新高。",
      synonyms: ["contradictory", "inconsistent", "ironic"],
      category: "阅读考点词",
      level: 5
    },
    {
      id: "en-v-010",
      word: "reconcile",
      phonetic: "/ˈrekənsaɪl/",
      pos: "vt.",
      definition: "使和解，使调和；使一致",
      root: "re- (再) + con- (共同) + cil (召集/联合) -> 再次召集到一起 -> 使调和",
      collocations: ["reconcile differences 调和分歧", "reconcile theory with practice 使理论与实践一致"],
      examSentence: "Economists are striving to reconcile aggressive economic growth with environmental conservation pledges.",
      examTranslation: "经济学家们正努力调和激进的经济增长与环境保护承诺之间的矛盾。",
      synonyms: ["harmonize", "coordinate", "settle", "accommodate"],
      category: "高频核心",
      level: 4
    },
    {
      id: "en-v-011",
      word: "unprecedented",
      phonetic: "/ʌnˈpresɪdentɪd/",
      pos: "adj.",
      definition: "史无前例的，空前的",
      root: "un- (无) + precedent (先例) + -ed -> 没有先例的",
      collocations: ["unprecedented challenge 空前挑战", "at an unprecedented pace 以空前的速度"],
      examSentence: "The rapid evolution of artificial intelligence poses unprecedented ethical dilemmas for modern jurisprudence.",
      examTranslation: "人工智能的迅猛发展给现代法学界带来了前所未有的伦理困境。",
      synonyms: ["novel", "unparalleled", "groundbreaking"],
      category: "写作亮点词",
      level: 5
    },
    {
      id: "en-v-012",
      word: "skepticism",
      phonetic: "/ˈskeptɪsɪzəm/",
      pos: "n.",
      definition: "怀疑态度，怀疑主义",
      root: "skept (考察/打量) + -ic + -ism -> 审慎打量不轻信的态度 -> 怀疑论",
      collocations: ["healthy skepticism 审慎理性的怀疑", "greeted with skepticism 受到怀疑"],
      examSentence: "The committee greeted the corporate executive's environmental pledges with deep skepticism.",
      examTranslation: "委员会对该企业高管所作出的环保承诺报以极大的怀疑态度。",
      synonyms: ["doubt", "distrust", "suspicion", "cynicism"],
      category: "阅读态度词",
      level: 5
    }
  ],

  // 考研英语历年真题长难句精读拆解
  sentences: [
    {
      id: "en-s-001",
      source: "2018年 考研英语一 阅读理解真题",
      topic: "社会结构与现代婚姻观",
      sentence: "The casualness with which Americans now approach marriage is an alarming sign of the breakdown of the foundational social structures that have long anchored our society.",
      translation: "美国人如今对待婚姻的随意态度是一个令人担忧的迹象，它表明长期以来维系我们社会的根本性社会结构正在分崩离析。",
      tokens: [
        { text: "The casualness", tag: "主语 (Subject)", color: "text-blue-600 bg-blue-50 font-semibold" },
        { text: "[with which Americans now approach marriage]", tag: "定语从句 (修饰 casualness)", color: "text-emerald-700 bg-emerald-50" },
        { text: "is", tag: "系动词谓语 (Linking Verb)", color: "text-purple-600 bg-purple-50 font-bold" },
        { text: "an alarming sign", tag: "表语 (Predicative)", color: "text-amber-700 bg-amber-50" },
        { text: "of the breakdown of the foundational social structures", tag: "介词短语 (后置修饰 sign)", color: "text-slate-600 bg-slate-100" },
        { text: "[that have long anchored our society]", tag: "定语从句 (修饰 structures)", color: "text-rose-700 bg-rose-50" }
      ],
      grammarAnalysis: [
        "核心主干为：The casualness is an alarming sign...（随意态度是一个令人警惕的信号）。",
        "【难点1：介词+关系代词】with which Americans now approach marriage 是修饰 casualness 的定语从句，还原后是 approach marriage with the casualness（以随便的态度对待婚姻）。",
        "【难点2：嵌套后置定语】of the breakdown... 和 of the foundational social structures 是两层介词短语构成的修饰链。",
        "【难点3：末尾定语从句】that have long anchored our society 修饰先行词 structures，anchor 本意为“锚定”，引申为“支撑、维系”。"
      ],
      keyVocab: [
        { word: "casualness", meaning: "随便，不经意，随意" },
        { word: "alarming", meaning: "令人担忧的，告急的" },
        { word: "breakdown", meaning: "崩溃，瓦解，破裂" },
        { word: "anchor", meaning: "使固定，成为...的支柱" }
      ]
    },
    {
      id: "en-s-002",
      source: "2020年 考研英语一 阅读理解真题",
      topic: "科技垄断与监管困境",
      sentence: "Governments around the world are grappling with the dilemma that tech titans have grown so dominant that standard antitrust frameworks are ill-equipped to rein in their market abuses.",
      translation: "全球各国政府正深陷于这样一种两难困境：科技巨头已经变得如此庞大具有垄断地位，以至于传统的反垄断监管体系已无法有效遏制其滥用市场权力的行为。",
      tokens: [
        { text: "Governments around the world", tag: "主语 (Subject)", color: "text-blue-600 bg-blue-50 font-semibold" },
        { text: "are grappling with", tag: "谓语 (Predicate)", color: "text-purple-600 bg-purple-50 font-bold" },
        { text: "the dilemma", tag: "宾语 (Object)", color: "text-amber-700 bg-amber-50" },
        { text: "[that tech titans have grown so dominant]", tag: "同位语从句 (解释 dilemma)", color: "text-emerald-700 bg-emerald-50" },
        { text: "[that standard antitrust frameworks are ill-equipped to rein in their market abuses]", tag: "结果状语从句 (so...that 结构)", color: "text-rose-700 bg-rose-50" }
      ],
      grammarAnalysis: [
        "核心主干：Governments are grappling with the dilemma（各国政府正应对这一两难困境）。",
        "【同位语从句】第一个 that 引导同位语从句，详述 dilemma 的具体内涵。",
        "【结果状语从句】同位语从句内部嵌套了 so dominant that... 经典因果结果句型。",
        "【习语与动词短语】grapple with 意为“努力应对/搏斗”；rein in 原指“勒紧缰绳”，引申为“严格约束、管束”。"
      ],
      keyVocab: [
        { word: "grapple with", meaning: "努力对付，尽力解决" },
        { word: "dilemma", meaning: "进退两难，困境" },
        { word: "antitrust", meaning: "反垄断的" },
        { word: "rein in", meaning: "严加控制，勒住" }
      ]
    },
    {
      id: "en-s-003",
      source: "2022年 考研英语二 阅读精选",
      topic: "人工智能与知识产权",
      sentence: "Were human creators to forfeit exclusive intellectual property rights whenever machine learning algorithms assist their craft, the incentive structure that sustains creative industries would irrevocably crumble.",
      translation: "一旦人类创作者在机器学习算法辅助创作时就丧失专属知识产权，那么维系创意产业发展的激励机制必将不可逆转地崩溃。",
      tokens: [
        { text: "[Were human creators to forfeit exclusive rights...]", tag: "虚拟条件句 (倒装省略 If)", color: "text-rose-700 bg-rose-50 font-semibold" },
        { text: "the incentive structure", tag: "主句主语 (Main Subject)", color: "text-blue-600 bg-blue-50 font-semibold" },
        { text: "[that sustains creative industries]", tag: "定语从句 (修饰 structure)", color: "text-emerald-700 bg-emerald-50" },
        { text: "would irrevocably crumble", tag: "主句谓语 (Main Predicate)", color: "text-purple-600 bg-purple-50 font-bold" }
      ],
      grammarAnalysis: [
        "【虚拟语气倒装】Were human creators to forfeit... 相当于 If human creators were to forfeit... 省略 if 后的 was/were/had 倒装结构，考研高频难点！",
        "【时间状语从句】whenever 引导让步/时间状语从句。",
        "【主句逻辑】主语 the incentive structure 受到 that 从句修饰，谓语由 would + 动词原形 crumble 构成，表示对假设结果的推演。"
      ],
      keyVocab: [
        { word: "forfeit", meaning: "丧失，被迫放弃" },
        { word: "incentive", meaning: "激励，动力" },
        { word: "sustain", meaning: "维持，支撑" },
        { word: "irrevocably", meaning: "不可撤销地，不可挽回地" }
      ]
    }
  ],

  // 考研英语写作黄金武器库
  writingArsenal: {
    // 词汇提分替换表
    replacements: [
      { standard: "think / believe", advanced: "deem / contend / maintain / harbor the conviction that", example: "I harbor the firm conviction that mutual respect constitutes the cornerstone of friendship." },
      { standard: "important", advanced: "paramount / vital / pivotal / indispensable", example: "Persistent dedication is of paramount significance in conquering academic hurdles." },
      { standard: "good / beneficial", advanced: "conducive / advantageous / wholesome", example: "Regular physical exercise is remarkably conducive to both physical fitness and mental agility." },
      { standard: "bad / harmful", advanced: "detrimental / pernicious / disastrous", example: "Excessive addiction to virtual screens exerts detrimental ramifications on youth." },
      { standard: "show / prove", advanced: "manifest / illuminate / substantiate / elucidate", example: "The statistical data substantiate the hypothesis that lifelong education elevates happiness." },
      { standard: "solve a problem", advanced: "tackle / grapple with / address / remedy", example: "Pragmatic legislation should be enacted to remedy environmental pollution." }
    ],
    // 作文实用金牌模版
    templates: [
      {
        type: "小作文（建议信 / Suggestion Letter）",
        purpose: "用于针对大学图书馆、社区服务或课程设置提出合理化建议",
        structure: [
          {
            part: "第一段：表明来意与开门见山",
            templateEn: "I am writing this letter to formally put forward several constructive suggestions concerning [具体主题], which has drawn widespread attention among students.",
            templateZh: "我写此信旨在就近期在学生群体中引起广泛关注的[主题]提出几点建设性建议。"
          },
          {
            part: "第二段：分条阐述具体建议 (2~3条)",
            templateEn: "To begin with, it is highly recommended that [建议一：管理方应采取的措施]. Furthermore, relevant authorities should place greater emphasis on [建议二], which would undoubtedly optimize the current conditions.",
            templateZh: "首先，强烈建议相关部门[建议一]。此外，有关方面还应更重视[建议二]，这无疑将极大优化现状。"
          },
          {
            part: "第三段：礼貌结语与期盼答复",
            templateEn: "I would be immensely grateful if you could take my proposals into serious consideration. Looking forward to your prompt response.",
            templateZh: "如果您能严肃考量我的建议，我将不胜感激。期待您的及时回复。"
          }
        ]
      },
      {
        type: "大作文（图画阐释三段论）",
        purpose: "考研英语一经典图画作文，阐述寓意并提出个人行动方案",
        structure: [
          {
            part: "第一段：图画描述与点明寓意",
            templateEn: "Portrayed vividly in the drawing is a striking scene: [简要描述图画核心动作与主体]. What the painter intends to convey transcends the picture itself, subtly illuminating the critical issue of [主题核心词].",
            templateZh: "这幅画生动勾勒出一个引人深思的画面：[图画主体内容]。作画者所意图传达的哲理超越了画面本身，微妙地揭示了[主题]这一关键议题。"
          },
          {
            part: "第二段：深层原因与社会效应剖析",
            templateEn: "A myriad of factors account for this ubiquitous phenomenon, among which the most conspicuous one lies in [核心原因一]. In addition, [补充原因或不当后果] further exacerbates the situation.",
            templateZh: "诸多复杂因素促成了这一普遍现象，其中最为显著的当属[核心原因一]。此外，[原因二]进一步加剧了这一境况。"
          },
          {
            part: "第三段：综合总结与倡议呼吁",
            templateEn: "From what has been analyzed above, it is imperative for both individuals and the society to forge joint efforts. Only through unremitting dedication can we steer this matter toward a promising horizon.",
            templateZh: "综上所述，个人与社会各界亟需凝心聚力。唯有通过不懈坚持与努力，我们方能引导该问题走向光明美好的未来。"
          }
        ]
      }
    ]
  }
};
