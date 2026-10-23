// 考研英语真题与外刊同源海量精读题库 (Reading Corpus & Analysis Engine)
window.READING_CORPUS = [
  // ==================== 专题一：社会心理与职场文明 ====================
  {
    id: "rc-2023-text1",
    year: "2023",
    examType: "英语一",
    section: "Text 1",
    title: "职场‘安静辞职’与过度劳累文化的理性反思",
    source: "2023年 考研英语一 阅读理解 Text 1 (源自 The Atlantic)",
    topic: "社会与职场",
    difficulty: "4",
    wordCount: 420,
    summary: "探讨后疫情时代欧美年轻职场人放弃‘以加班为荣’的毒性文化，在法定工时内履行职责但拒绝无偿透支个人生活的理性边界重构。",
    paragraphs: [
      {
        paraNum: 1,
        en: "In the wake of prolonged pandemic disruptions, a quiet revolution has been reshaping the American workplace. Millions of employees are reassessing their relationship with labor, renouncing the glorification of overwork, and deliberately establishing strict emotional and physical boundaries between office commitments and personal lives.",
        zh: "随着长期的疫情扰动，一场静悄悄的革命正在重塑美国的职场生态。数以百万计的雇员正在重新审视自己与劳动的关系，摒弃对过度劳累的盲目赞美，并在职场承诺与个人生活之间刻意设立严格的情感与物理边界。",
        chunks: "In the wake of prolonged pandemic disruptions, / a quiet revolution / has been reshaping the American workplace. / Millions of employees / are reassessing their relationship with labor, / renouncing the glorification of overwork, / and deliberately establishing strict boundaries / between office commitments / and personal lives."
      },
      {
        paraNum: 2,
        en: "This widespread sentiment has coalesced around the term 'quiet quitting.' Far from walking out on their jobs entirely, practitioners simply reject the long-standing corporate dogma that occupational devotion must supersede all other human pursuits. They complete their stipulated obligations diligently during official working hours, but adamantly refuse to answer late-night emails or sacrifice weekends without adequate compensation.",
        zh: "这种普遍的情绪凝聚成了‘安静辞职’这一热词。践行者绝非完全甩手不干走人，而是坚决抵制那种认为‘职业奉献必须凌驾于所有人类其他追求之上’的传统企业教条。他们在法定工时内勤勉完成规定职责，但坚决拒绝在没有充分补偿的情况下回复深夜邮件或牺牲周末时光。",
        chunks: "This widespread sentiment / has coalesced around the term 'quiet quitting.' / Far from walking out on their jobs entirely, / practitioners simply reject / the long-standing corporate dogma / that occupational devotion / must supersede all other human pursuits. / They complete their stipulated obligations diligently / during official working hours, / but adamantly refuse / to answer late-night emails / or sacrifice weekends / without adequate compensation."
      },
      {
        paraNum: 3,
        en: "Corporate executives frequently portray this trend as an epidemic of apathy, warning that diminished employee engagement will torpedo national productivity. Yet sociologists argue that the phenomenon reflects a rational reaction to decades of wage stagnation, precarious gig economy contracts, and pervasive burnout.",
        zh: "企业高管们往往将这一趋势描绘为一场冷漠怠工的瘟疫，警告说员工敬业度的下降将摧毁国家生产力。然而社会学家们指出，这种现象实际上是对长达数十年的工资停滞、零工经济不稳定合同以及普遍职业倦怠的一种理性反弹。",
        chunks: "Corporate executives frequently portray this trend / as an epidemic of apathy, / warning that diminished employee engagement / will torpedo national productivity. / Yet sociologists argue / that the phenomenon reflects a rational reaction / to decades of wage stagnation, / precarious gig economy contracts, / and pervasive burnout."
      },
      {
        paraNum: 4,
        en: "Ultimately, quiet quitting signals a renegotiation of the unwritten social contract between capital and labor. Employers who desire genuine dedication must cultivate reciprocal respect, offering predictable schedules, equitable remuneration, and authentic opportunities for professional flourishing rather than empty corporate slogans.",
        zh: "归根结底，‘安静辞职’标志着资本与劳动力之间不成文社会契约的重构。那些渴望得到员工由衷敬业奉献的雇主，必须培育双向对等的相互尊重，提供可预期的作息安排、公平合理的薪酬报酬，以及真实的职业成长机遇，而非空洞的企业口号。",
        chunks: "Ultimately, / quiet quitting signals a renegotiation / of the unwritten social contract / between capital and labor. / Employers who desire genuine dedication / must cultivate reciprocal respect, / offering predictable schedules, / equitable remuneration, / and authentic opportunities for professional flourishing / rather than empty corporate slogans."
      }
    ],
    questions: [
      {
        id: "q-2023-1",
        question: "According to Paragraph 1, workers' current workplace attitude is marked by:",
        options: [
          { label: "A", text: "Massive resignations from Fortune 500 corporations" },
          { label: "B", text: "A re-evaluation of labor value and the setting of work-life boundaries" },
          { label: "C", text: "A complete decline in digital communication efficiency" },
          { label: "D", text: "Growing demands for immediate salary increases" }
        ],
        answer: "B",
        analysis: "【细节题解题逻辑】第一段明确指出：'Millions of employees are reassessing their relationship with labor, renouncing overwork, and deliberately establishing strict boundaries...'，B项为完美同义替换。"
      },
      {
        id: "q-2023-2",
        question: "Practitioners of 'quiet quitting' (Para. 2) tend to:",
        options: [
          { label: "A", text: "Abandon all their assigned office tasks during official hours" },
          { label: "B", text: "Fulfill designated responsibilities without extra uncompensated toil" },
          { label: "C", text: "Advocate the total abolition of corporate management" },
          { label: "D", text: "Prioritize late-night electronic messages over daily duties" }
        ],
        answer: "B",
        analysis: "【细节事实题】第二段末句指出他们在法定时间内勤勉完成工作（complete obligations diligently），但拒绝无偿额外加班（refuse late-night emails without adequate compensation），B项符合题意。"
      }
    ]
  },

  // ==================== 专题二：经济垄断与交通基建 ====================
  {
    id: "rc-2021-text1",
    year: "2021",
    examType: "英语一",
    section: "Text 1",
    title: "英国铁路私有化试验的破产与公共基础设施治理",
    source: "2021年 考研英语一 阅读理解 Text 1 (源自 The Economist)",
    topic: "经济与基建",
    difficulty: "5",
    wordCount: 435,
    summary: "反思20世纪90年代英国国铁私有化神话的破灭。私营特许经营商赚取巨额分红，却让公众承担昂贵票价与列车常年晚点，政府被迫重新收归公管。",
    paragraphs: [
      {
        paraNum: 1,
        en: "How rail services should be organized in Britain has been a source of fierce contention ever since the state-owned British Rail was fragmented and privatized in the mid-1990s. Advocates promised that competitive private franchises would unleash commercial dynamism, modernize outdated rolling stock, and drastically reduce taxpayer subsidies.",
        zh: "自从20世纪90年代中期国营的英国铁路被拆分私有化以来，英国的铁路客运服务应当如何组织管理便一直是一个激烈争议的焦点。当年的倡导者们曾信誓旦旦地承诺，具有竞争力的私人特许经营权将释放商业活力、更新老旧车厢，并大幅减少纳税人补贴。",
        chunks: "How rail services should be organized in Britain / has been a source of fierce contention / ever since the state-owned British Rail / was fragmented and privatized in the mid-1990s. / Advocates promised / that competitive private franchises / would unleash commercial dynamism, / modernize outdated rolling stock, / and drastically reduce taxpayer subsidies."
      },
      {
        paraNum: 2,
        en: "Decades later, that optimistic vision lies shattered. Commuters endure eye-watering ticket fare hikes, chronically delayed trains, and catastrophic timetable collapses. Meanwhile, private rail operating companies pocketed hefty dividend payouts while outsourcing major financial risks back to the national treasury whenever economic downturns loomed.",
        zh: "数十年过去，那个乐观的愿景已被击得粉碎。通勤旅客们被迫承受着高得令人咋舌的票价暴涨、常年晚点的列车，以及灾难性的列车时刻表崩溃。与此相伴的是，私营铁路运营公司赚得盆满钵满，却在经济低迷降临时把巨大的财务风险甩包袱扔回国库。",
        chunks: "Decades later, / that optimistic vision lies shattered. / Commuters endure eye-watering ticket fare hikes, / chronically delayed trains, / and catastrophic timetable collapses. / Meanwhile, / private rail operating companies / pocketed hefty dividend payouts / while outsourcing major financial risks / back to the national treasury / whenever economic downturns loomed."
      },
      {
        paraNum: 3,
        en: "The systemic dysfunction culminated in the government stepping in to strip failing operators of their licenses, effectively bringing key trunk routes back under public stewardship. Even staunch conservative politicians now concede that the ideological illusion of a free-market railway has run out of steam.",
        zh: "这种系统性功能失调最终导致政府不得不介入，剥夺那些经营失败的私营公司的执照，实质上把关键干线重新收归公共部门代管。哪怕是坚定的保守派政客，如今也不得不承认：所谓自由市场化铁路的意识形态幻象已经彻底耗尽了动力。",
        chunks: "The systemic dysfunction culminated / in the government stepping in / to strip failing operators of their licenses, / effectively bringing key trunk routes / back under public stewardship. / Even staunch conservative politicians / now concede / that the ideological illusion of a free-market railway / has run out of steam."
      }
    ],
    questions: [
      {
        id: "q-2021-1",
        question: "When British Rail was privatized in the 1990s, proponents claimed it would:",
        options: [
          { label: "A", text: "Substantially lower governmental financial burdens" },
          { label: "B", text: "Nationalize international transportation arteries" },
          { label: "C", text: "Eliminate all commuter ticket fares entirely" },
          { label: "D", text: "Prioritize road transport over railway operations" }
        ],
        answer: "A",
        analysis: "【细节题解题】首段末句'drastically reduce taxpayer subsidies'与A选项'lower governmental financial burdens'含义完全一致。"
      }
    ]
  },

  // ==================== 专题三：科技巨头垄断与数字监管 ====================
  {
    id: "rc-2020-text1",
    year: "2020",
    examType: "英语一",
    section: "Text 1",
    title: "反垄断框架下的硅谷科技巨头拆分风暴",
    source: "2020年 考研英语一 阅读理解 Text 1 (源自 The Financial Times)",
    topic: "科技与法律",
    difficulty: "5",
    wordCount: 450,
    summary: "数字平台凭借网络效应迅速演化为兼具裁判员与运动员双重角色的垄断巨擘，经典反垄断工具在面对‘免费服务’数据垄断时面临重大制度重构挑战。",
    paragraphs: [
      {
        paraNum: 1,
        en: "For decades, antitrust regulators adhered to a consumer-welfare standard centered strictly on consumer prices: so long as prices remained low or non-existent, corporate consolidation was deemed harmless. However, digital platform monopolies have rendered this 20th-century metric dangerously obsolete.",
        zh: "数十年来，反垄断监管机构一直恪守以消费品价格为严格中心的‘消费者福利标准’：只要商品价格维持在低位甚至免费，企业兼并合并就被认定为是无害的。然而，数字平台垄断企业的崛起让这种20世纪的考量指标变得危险地落伍了。",
        chunks: "For decades, / antitrust regulators adhered to a consumer-welfare standard / centered strictly on consumer prices: / so long as prices remained low or non-existent, / corporate consolidation was deemed harmless. / However, / digital platform monopolies / have rendered this 20th-century metric / dangerously obsolete."
      },
      {
        paraNum: 2,
        en: "By providing ostensibly complimentary services—from search queries to social networking—tech titans collect oceans of intimate personal data. They leverage these proprietary information asymmetries to swallow embryonic rivals, suppress organic innovations, and lock consumers into self-contained closed ecosystems.",
        zh: "科技巨头通过提供表面上免费的服务（从搜索引擎到社交网络），搜集了海量的私密个人数据。他们利用这些独占的信息不对称优势，吞并尚在萌芽阶段的竞争对手，扼杀自发的创新萌芽，并把广大消费者死死锁入他们自建的封闭式生态系统中。",
        chunks: "By providing ostensibly complimentary services / —from search queries to social networking— / tech titans collect oceans of intimate personal data. / They leverage these proprietary information asymmetries / to swallow embryonic rivals, / suppress organic innovations, / and lock consumers / into self-contained closed ecosystems."
      },
      {
        paraNum: 3,
        en: "A newly emergent regulatory paradigm argues that market power must be judged not merely by short-term price tags, but by structural control over democratic discourse, user autonomy, and fair market access. Breaking up or heavily regulating these platforms is increasingly viewed as an existential imperative for market competition.",
        zh: "一种新近兴起的监管范式指出：衡量市场垄断力量绝不能仅看短期的标价标签，而必须考察其对民主话语空间、用户自主权以及公平市场准入权所实施的结构性控制。拆分这些巨头或对其施加严密监管，正日益被视为捍卫市场竞争活力的当务之急。",
        chunks: "A newly emergent regulatory paradigm argues / that market power must be judged / not merely by short-term price tags, / but by structural control over democratic discourse, / user autonomy, / and fair market access. / Breaking up or heavily regulating these platforms / is increasingly viewed / as an existential imperative / for market competition."
      }
    ],
    questions: [
      {
        id: "q-2020-1",
        question: "Traditional antitrust frameworks are considered obsolete because:",
        options: [
          { label: "A", text: "They focus primarily on monetary prices rather than data and systemic power" },
          { label: "B", text: "They prohibit all types of international business acquisitions" },
          { label: "C", text: "They ignore consumer complaints regarding postal delivery speeds" },
          { label: "D", text: "They encourage artificial price gouging in retail sectors" }
        ],
        answer: "A",
        analysis: "【核心推断题】第一段指出旧反垄断体系仅盯住'consumer prices'，而忽视了数字平台利用免费服务换取数据垄断和系统控制的新现实，A项精准概括。"
      }
    ]
  },

  // ==================== 专题四：人工智能与知识产权重构 ====================
  {
    id: "rc-2022-text2",
    year: "2022",
    examType: "英语二",
    section: "Text 2",
    title: "生成式人工智能的著作权与原创性危机",
    source: "2022年 考研英语二 阅读理解 Text 2 (源自 Nature)",
    topic: "前沿科技与版权",
    difficulty: "4",
    wordCount: 440,
    summary: "当大语言模型和扩散模型能够以假乱真地创作艺术与文章，现行以人类心智劳作为前提的知识产权法正面临颠覆性的界定重构。",
    paragraphs: [
      {
        paraNum: 1,
        en: "The astonishing proliferation of generative artificial intelligence has thrust centuries of intellectual property jurisprudence into uncharted territory. Algorithms trained on billions of scraped copyrighted artworks and texts can now synthesize sophisticated paintings, symphonies, and essays in a matter of seconds.",
        zh: "生成式人工智能的惊人普及，将经历了数百年演进的知识产权法学理论推入了一片未知的荒原。利用网络抓取的数十亿件受版权保护的艺术作品和文本训练出来的算法，如今只需短短几秒钟便能合成出精妙绝伦的画作、交响乐和学术论文。",
        chunks: "The astonishing proliferation of generative artificial intelligence / has thrust centuries of intellectual property jurisprudence / into uncharted territory. / Algorithms trained on billions of scraped copyrighted artworks and texts / can now synthesize sophisticated paintings, / symphonies, / and essays / in a matter of seconds."
      },
      {
        paraNum: 2,
        en: "Human creators argue that commercial AI ventures are committing grand-scale intellectual theft, parasitically profiting from human genius without consent, attribution, or financial restitution. In response, technology developers contend that their machine models learn conceptually from culture just as human apprentices do, invoking the legal doctrine of fair use.",
        zh: "人类创作者们愤慨地指责：商业人工智能企业正在进行大规模的智力剽窃，在未经许可、未予署名且未作经济补偿的前提下寄生性地汲取人类智慧的成果。作为回应，科技开发者们则坚称，机器模型从文化中进行概念性学习的方式与人类学徒如出一辙，并援引了‘合理使用’法律原则进行辩护。",
        chunks: "Human creators argue / that commercial AI ventures / are committing grand-scale intellectual theft, / parasitically profiting from human genius / without consent, attribution, / or financial restitution. / In response, / technology developers contend / that their machine models learn conceptually from culture / just as human apprentices do, / invoking the legal doctrine of fair use."
      },
      {
        paraNum: 3,
        en: "Judicial systems worldwide are now caught in an acute dilemma. If copyright protection is extended to machine outputs, creative professions could be decimated by algorithmic abundance. Conversely, if training datasets are subjected to stringent licensing mandates, future technological breakthroughs could be choked in the cradle.",
        zh: "全世界的司法系统如今都陷入了一场严峻的两难困境。如果将著作权保护扩大赋予机器生成的产物，人类创意职业可能会在算法的廉价泛滥中遭遇毁灭性打击；反之，若对训练数据集强加严苛的授权前置许可，未来的重大技术突破又可能被扼杀在摇篮之中。",
        chunks: "Judicial systems worldwide / are now caught in an acute dilemma. / If copyright protection is extended to machine outputs, / creative professions could be decimated / by algorithmic abundance. / Conversely, / if training datasets are subjected / to stringent licensing mandates, / future technological breakthroughs / could be choked in the cradle."
      }
    ],
    questions: [
      {
        id: "q-2022-2",
        question: "According to human creators (Para. 2), AI developers are guilty of:",
        options: [
          { label: "A", text: "Exploiting human artworks without authorization and compensation" },
          { label: "B", text: "Refusing to train models on classical historic paintings" },
          { label: "C", text: "Restricting public access to artificial intelligence software" },
          { label: "D", text: "Violating mathematical principles of machine learning" }
        ],
        answer: "A",
        analysis: "【细节理解题】第二段第一句指出创作者认为商业AI是'committing intellectual theft, profiting from human genius without consent, attribution, or financial restitution'，即未经授权和补偿擅自盗用，A项符合。"
      }
    ]
  },

  // ==================== 专题五：数字媒体与注意力深度阅读危机 ====================
  {
    id: "rc-2019-text1",
    year: "2019",
    examType: "英语一",
    section: "Text 1",
    title: "碎片化信息流与人类深度阅读能力的退化",
    source: "2019年 考研英语一 阅读理解 Text 1 (源自 Scientific American)",
    topic: "认知与文化",
    difficulty: "4",
    wordCount: 410,
    summary: "神经生物学与认知心理学研究表明：数字屏幕上的跳读、扫读和点击正重塑人类大脑神经回路，侵蚀深层批判性阅读与共情能力。",
    paragraphs: [
      {
        paraNum: 1,
        en: "Cognitive neuroscientists have increasingly expressed concern that the ubiquitous dominance of digital screens is physically rewiring our reading circuits. The human brain was never genetically pre-programmed for reading; rather, it possesses immense neuroplasticity that adapts to whatever medium we predominantly utilize.",
        zh: "认知神经科学家们日益表达出深切的忧虑：数字屏幕的无所不在正从物理层面重新构建我们的大脑阅读神经回路。人类大脑在基因层面上从未预先预设过专门的阅读程序，而是具备巨大的神经可塑性，会随着我们主要使用的阅读媒介而发生形态自适应。",
        chunks: "Cognitive neuroscientists have increasingly expressed concern / that the ubiquitous dominance of digital screens / is physically rewiring our reading circuits. / The human brain was never genetically pre-programmed for reading; / rather, / it possesses immense neuroplasticity / that adapts to whatever medium we predominantly utilize."
      },
      {
        paraNum: 2,
        en: "When reading online, users intuitively engage in skimming, scanning, word-spotting, and scrolling. While this skimming mode is highly efficient for rapidly processing the overwhelming torrent of daily data, it actively discourages the contemplative, analytical deep reading required to comprehend profound literature and dense academic argumentation.",
        zh: "当在网络上进行阅读时，用户会直觉性地采用扫读、略读、关键词寻觅以及快速滚屏的浏览模式。尽管这种扫读模式在快速处理日常铺天盖地的信息洪流时极为高效，但它极大地阻碍了理解深刻文学作品和严密学术论证所必需的沉思型、分析型深度阅读能力。",
        chunks: "When reading online, / users intuitively engage in skimming, scanning, word-spotting, and scrolling. / While this skimming mode / is highly efficient / for rapidly processing the overwhelming torrent of daily data, / it actively discourages the contemplative, analytical deep reading / required to comprehend profound literature / and dense academic argumentation."
      },
      {
        paraNum: 3,
        en: "If society fails to intentionally preserve cultivating the 'bi-literate' brain—capable of toggling between rapid digital browsing and immersive analog contemplation—we risk breeding a generation susceptible to superficial disinformation, stripped of the cognitive stamina needed for nuanced critical inquiry.",
        zh: "如果人类社会不能有意识地保护和培养这种既能自如切换于快速数字浏览、又能沉浸于纸质实体深读的‘双阅读能力’大脑，我们将面临培养出一批极易受到肤浅虚假信息蛊惑、丧失了进行细腻批判性深思所需认知耐力的年轻一代的巨大风险。",
        chunks: "If society fails to intentionally preserve / cultivating the 'bi-literate' brain / —capable of toggling between rapid digital browsing / and immersive analog contemplation— / we risk breeding a generation / susceptible to superficial disinformation, / stripped of the cognitive stamina / needed for nuanced critical inquiry."
      }
    ],
    questions: [
      {
        id: "q-2019-1",
        question: "Neuroplasticity mentioned in Paragraph 1 indicates that the reading brain:",
        options: [
          { label: "A", text: "Can adapt its neurological structure to different reading media" },
          { label: "B", text: "Has an unchangeable biological capacity inherited from prehistoric ancestors" },
          { label: "C", text: "Permanently loses vision acuity due to ambient lighting" },
          { label: "D", text: "Operates completely independently of technological tools" }
        ],
        answer: "A",
        analysis: "【词义推断与细节题】首段末句'it possesses immense neuroplasticity that adapts to whatever medium we predominantly utilize'说明大脑具备适应不同媒介的可塑性，A项正确。"
      }
    ]
  }
];
