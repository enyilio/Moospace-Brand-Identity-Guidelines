/* ============================================
   Moospace Brand Guide — interactions & i18n
   ============================================ */

const i18n = {
  zh: {
    'nav.essence': '核心',
    'nav.logo': 'Logo',
    'nav.color': '色彩',
    'nav.typography': '字型',
    'nav.voice': '語氣',
    'nav.photo': '攝影',
    'nav.icon': '圖示',
    'nav.pattern': '紋理',
    'nav.motion': '動態',
    'nav.social': '社群',
    'nav.application': '應用',
    'nav.download': '下載',

    'hero.title': '一起回歸內心的真實',
    'hero.subtitle': 'Live as a fully conscious being',
    'hero.kicker': 'Moospace 品牌識別設計規範',
    'hero.scroll': '往下閱讀',

    'intro.lead': '這份文件是 Moospace 沐空間的品牌識別設計規範，提供給合作的設計師、攝影師、內容夥伴參考。請依照這裡的規則進行任何視覺應用，以確保品牌調性一致。',

    // 01 essence
    'essence.title': '品牌核心',
    'essence.eyebrow': 'Brand Essence',
    'essence.slogan_label': '品牌標語',
    'essence.slogan_zh': '一起回歸內心的真實',
    'essence.slogan_en': 'Live as a fully conscious being',
    'essence.philosophy_label': '品牌理念',
    'essence.philosophy': '靈魂來到世間，為了體驗更大的自己，成為本然的自己。Moospace 陪伴每個人透過療癒、自然與覺察，走回屬於自己的中心。',
    'essence.personality_label': '品牌個性',
    'essence.kw1': '療癒 Healing',
    'essence.kw2': '內觀 Introspective',
    'essence.kw3': '自然 Natural',
    'essence.kw4': '靈性 Spiritual',
    'essence.kw5': '溫暖 Warm',
    'essence.kw6': '靜謐 Serene',
    'essence.audience_label': '目標對象',
    'essence.audience': '尋找身心靈平衡、對療癒與自我探索感興趣的成人族群。語氣應溫柔、真誠、不帶壓迫感，引導而非說服。',
    'essence.mvv_title': '使命・願景・價值',
    'essence.mission_label': '使命 Mission',
    'essence.mission': '讓每個靈魂在回歸內心的路上，有一片溫柔的空間同行。',
    'essence.vision_label': '願景 Vision',
    'essence.vision': '成為華人身心靈領域中，最被信任的療癒陪伴者。',
    'essence.values_label': '價值 Values',
    'essence.val1_k': '真實',
    'essence.val1_v': '不包裝，如實呈現。',
    'essence.val2_k': '慈悲',
    'essence.val2_v': '以溫柔承接每一種狀態。',
    'essence.val3_k': '靜謐',
    'essence.val3_v': '少即是多，留白即呼吸。',
    'essence.val4_k': '覺察',
    'essence.val4_v': '保持清醒，不沉溺。',

    // 02 logo
    'logo.title': 'Logo 使用規範',
    'logo.eyebrow': 'Logo Guidelines',
    'logo.primary': '主要版本（Primary Mark）',
    'logo.mono': '單色黑版本（亮底使用）',
    'logo.reverse': '反白版本（暗底使用）',
    'logo.safearea_title': '安全空間',
    'logo.safearea_desc': 'Logo 四周請預留至少一個「Moo」字高度的空白區域，避免其他元素侵入視覺區。',
    'logo.minsize_title': '最小使用尺寸',
    'logo.minsize_desc': '為確保辨識度，數位使用最小寬度 120px，印刷使用最小寬度 30mm。小於此尺寸請使用無限符號單獨版本。',
    'logo.construction_title': '幾何結構 Construction',
    'logo.construction_desc': '以「Moo」字高為基本單位 X。無限符號寬度為 3X、高度約 1.67X（比例 1.8:1），字與符號之間的間距為 1X，文字字距 letter-spacing 為 0.5X。所有比例以此為準，不可自行調整間距或大小。',
    'logo.spec1_k': '單位',
    'logo.spec2_k': '符號尺寸',
    'logo.spec3_k': '符號與文字間距',
    'logo.spec4_k': '文字字距',
    'logo.spec5_k': 'Logo 寬高比',
    'logo.dont_title': '錯誤使用示範 Don\'ts',
    'logo.dont1': '不要變形拉長',
    'logo.dont2': '不要使用品牌色以外的顏色',
    'logo.dont3': '不要加陰影或立體效果',
    'logo.dont4': '不要任意旋轉',
    'logo.dont5': '不要放在複雜背景上',
    'logo.dont6': '不要降低 Logo 透明度',

    // 03 color
    'color.title': '色彩系統',
    'color.eyebrow': 'Color System',
    'color.primary_title': '主色 Primary',
    'color.p1_name': '深靛藍 Deep Indigo',
    'color.p1_use': '品牌底色，用於深色背景、導航與情境氛圍。',
    'color.p2_name': '品牌金 Brand Gold',
    'color.p2_use': 'Logo 主色，用於標誌與強調元素。不可作為大面積背景。',
    'color.secondary_title': '輔色 Secondary',
    'color.s1_name': '柔金棕 Warm Gold',
    'color.s1_use': '次要強調色，用於 CTA 按鈕、分隔線、細節裝飾。',
    'color.s2_name': '灰藍文字 Ink',
    'color.s2_use': '文字主色，白底上的標題與內文。',
    'color.neutral_title': '中性色 Neutral',
    'color.n1': '暖白 Off White',
    'color.n2': '淺灰 Light Gray',
    'color.n3': '中灰 Mid Gray',
    'color.n4': '夜紫 Night Plum',
    'color.ratio_title': '使用比例建議',
    'color.ratio_desc': '60% 中性背景 + 25% 深靛藍主色 + 10% 柔金棕輔色 + 5% 品牌金點綴。避免多色並置，保持視覺呼吸。',
    'color.gradient_title': '品牌漸層 Gradients',
    'color.g1_name': '深夜 Twilight',
    'color.g1_use': '主 hero 背景、podcast 封面、情境氛圍的深色場合。',
    'color.g2_name': '晨曦 Sunrise',
    'color.g2_use': '點綴強調、CTA 按鈕懸浮狀態、儀式感細節。',
    'color.g3_name': '柔霧 Mist',
    'color.g3_use': '白底內頁的柔性背景、vision board、靜謐卡片。',

    // 04 typography
    'type.title': '字型系統',
    'type.eyebrow': 'Typography',
    'type.zh_primary': '中文主字型',
    'type.zh_display': '中文標題用',
    'type.zh_note': '用於所有中文標題、內文、按鈕。Weight 300 / 400 / 500 / 700。',
    'type.zh_serif_note': '用於大標、引言、具儀式感的場合。不建議用於長段內文。',
    'type.en_display': '英文標題',
    'type.en_body': '英文內文',
    'type.en_serif_note': '用於英文大標題與品牌口號。Weight 300 為主視覺調性。',
    'type.en_sans_note': '用於英文副標、按鈕、長段內文。Weight 200–500。',
    'type.hierarchy_title': '階層範例',
    'type.h_kicker': '副標 Kicker · 14px · Montserrat 500 · Uppercase',
    'type.h_hero': '一起回歸內心的真實',
    'type.h_h2': 'Live as a fully conscious being',
    'type.h_body': '內文 Body · 16px · Noto Sans TC 400 · line-height 1.8。用溫和的語調，陪伴讀者走進故事，避免過度說服或行銷語氣。',
    'type.h_caption': '註解 Caption · 13px · Noto Sans TC 300',

    // 05 voice
    'voice.title': '語氣與文字',
    'voice.eyebrow': 'Tone of Voice',
    'voice.lead': 'Moospace 說話的方式，像一杯溫熱的水。不催促、不教導、不販賣焦慮。它只是靜靜地在那裡，等你準備好時，接住你。',
    'voice.a1_k': '溫柔而清醒',
    'voice.a1_v': '柔軟不等於模糊。說出真實的事，但用不傷人的方式。',
    'voice.a2_k': '陪伴而非教導',
    'voice.a2_v': '我們不宣稱答案。我們邀請對方看見自己的答案。',
    'voice.a3_k': '簡潔而有餘白',
    'voice.a3_v': '不把句子塞滿。語言也要有呼吸。一句簡單的話，比十句解釋更有力量。',
    'voice.a4_k': '真實而非完美',
    'voice.a4_v': '允許脆弱、停頓、不知所措。完美的話語常常離人很遠。',
    'voice.dodont_title': '語氣對照 Do / Don\'t',
    'voice.do_head': '這樣說',
    'voice.do1': '「陪你走這一段。」',
    'voice.do2': '「回到你的中心。」',
    'voice.do3': '「讓自己停下來，也是愛自己。」',
    'voice.do4': '「在這裡，你是安全的。」',
    'voice.do5': '「你不需要成為誰。」',
    'voice.do6': '「當你準備好，它會在那裡等你。」',
    'voice.dont_head': '不這樣說',
    'voice.dont1': '「讓我們幫你解決問題。」',
    'voice.dont2': '「成為更好的你。」',
    'voice.dont3': '「三步驟，改變人生！」',
    'voice.dont4': '「立即預約，名額有限。」',
    'voice.dont5': '「你一定要試試看。」',
    'voice.dont6': '「錯過就是損失。」',
    'voice.rewrite_title': '改寫範例 Rewrite',
    'voice.before': '修改前',
    'voice.before_text': '【限時優惠】現在下單 Moospace 療癒課程，立刻擁有全新自己！名額僅剩 3 位，錯過再等一年！',
    'voice.after': '修改後',
    'voice.after_text': 'Moospace 療癒課程 — 是一段回到自己的旅程。當你準備好，它會在那裡等你。',
    'voice.lang_title': '中英切換的節奏',
    'voice.lang_desc': '中文負責情感與詩意，英文負責簡潔與國際感。標語可雙語並列，但不強行直譯：讓兩種語言各自完整，彼此呼應，而非翻譯對照。',

    // 06 photo
    'photo.title': '攝影風格',
    'photo.eyebrow': 'Photography Style',
    'photo.lead': '目前尚未累積自有攝影資產，合作設計師可使用以下 AI prompt 作為風格參考，生成符合品牌調性的情境圖。未來產出的實拍素材也應依循相同準則。',
    'photo.prompts_title': 'AI Prompt 範本',
    'photo.p1_title': '靜謐早晨空間',
    'photo.p2_title': '手部儀式感',
    'photo.p3_title': '自然靜謐',
    'photo.p4_title': '水的倒影',
    'photo.p5_title': '冥想剪影',
    'photo.p6_title': '晶石靜物',
    'photo.specs_title': '技術規範 Technical Specs',
    'photo.spec1_k': '色溫',
    'photo.spec2_k': '對比',
    'photo.spec2_v': '低至中對比，避免硬邊陰影',
    'photo.spec3_k': '構圖',
    'photo.spec3_v': '留白區域 > 30%，主體不置中',
    'photo.spec4_k': '色調',
    'photo.spec4_v': '米白、柔金、深藍、苔綠、大地色',
    'photo.spec5_k': '避免',
    'photo.spec5_v': '高飽和、硬人造光、擺拍式笑容、LOGO 露出',

    // 07 icon
    'icon.title': '圖示系統',
    'icon.eyebrow': 'Iconography',
    'icon.lead': '線條柔軟、節奏呼吸。每一枚圖示都是一個安靜的隱喻。主題圍繞療癒、自然、水、晶石、冥想。',
    'icon.i1': '晶石 Crystal',
    'icon.i2': '水滴 Droplet',
    'icon.i3': '水波 Wave',
    'icon.i4': '葉 Leaf',
    'icon.i5': '月相 Moon',
    'icon.i6': '蓮花 Lotus',
    'icon.i7': '覺察 Awareness',
    'icon.i8': '羽毛 Feather',
    'icon.i9': '山 Mountain',
    'icon.i10': '燭火 Candle',
    'icon.i11': '新芽 Sprout',
    'icon.i12': '無限 Infinity',
    'icon.rules_title': '繪製規則 Drawing Rules',
    'icon.r1_k': '畫布',
    'icon.r2_k': '線寬',
    'icon.r2_v': '1.4px（無限符號 1.6px）',
    'icon.r3_k': '端點',
    'icon.r4_k': '顏色',
    'icon.r4_v': '預設繼承 currentColor，深色場景用 #F5C843，亮色場景用 #16163F',
    'icon.r5_k': '禁用',
    'icon.r5_v': '實心填色、3D 陰影、彩色漸層、過度細節',

    // 08 pattern
    'pattern.title': '紋理與材質',
    'pattern.eyebrow': 'Pattern & Texture',
    'pattern.lead': '輔助視覺應如呼吸般存在——不搶走主角，卻讓畫面有溫度。以下六款紋理均來自品牌的五個主題意象：水、能量、礦石、光暈、紙質、能量網格。',
    'pattern.t1_k': '水波 Waves',
    'pattern.t1_v': '重複的水波線，代表頻率與情緒。用於冥想、podcast、課程頁面底部裝飾。',
    'pattern.t2_k': '同心圓 Rings',
    'pattern.t2_v': '能量場的視覺化。用於 logo 底層光暈、冥想 CTA、品牌故事起點。',
    'pattern.t3_k': '能量網格 Grid',
    'pattern.t3_v': '細線網格，代表理性與結構。深色背景上的點陣，襯托儀式感。',
    'pattern.t4_k': '光暈 Halo',
    'pattern.t4_v': '柔金棕與品牌金的放射光暈，代表能量流動。常用於 hero、封面背景。',
    'pattern.t5_k': '紙質 Paper',
    'pattern.t5_v': '米白紙紋材質，帶來溫度感與手感。名片、包裝、小卡的底色首選。',
    'pattern.t6_k': '礦石 Mineral',
    'pattern.t6_v': '低彩度的礦石紋理，代表療癒晶石的質地。用於產品頁、課程封面的局部點綴。',

    // 09 motion
    'motion.title': '動態設計',
    'motion.eyebrow': 'Motion Identity',
    'motion.lead': 'Moospace 的動態像一次呼吸：慢慢進、慢慢出，不催促、不戲劇。緩動曲線、節奏、時長，都以「身體能放鬆跟著動」為準。',
    'motion.m1_k': '呼吸 Breathing',
    'motion.m1_v': '∞ 標誌的基本動作。4 秒一輪，模擬四拍吸氣、四拍吐氣。',
    'motion.m2_k': '漂浮 Floating',
    'motion.m2_v': 'Hero 標誌與重要圖示的環境動作。6 秒一輪，幅度極小。',
    'motion.m3_k': '漣漪 Ripple',
    'motion.m3_v': '點擊、通知、釋放能量的回饋。只在使用者觸發後一次性播放。',
    'motion.m4_k': '浮現 Fade Up',
    'motion.m4_v': '內容進場的預設方式。400ms，配合 stagger 80ms 分次浮現。',
    'motion.specs_title': '動態規範 Motion Specs',
    'motion.sp1_k': '緩動曲線 Easing',
    'motion.sp1_v1': '主要進場／UI 狀態變化',
    'motion.sp1_v2': '穩定沉落、尾端收束',
    'motion.sp1_v3': '呼吸、漂浮等環境動作',
    'motion.sp2_k': '時長 Duration',
    'motion.sp2_v1': '微互動（按鈕、連結）',
    'motion.sp2_v2': 'UI 狀態變化',
    'motion.sp2_v3': '段落、卡片浮現',
    'motion.sp2_v4': '呼吸、漂浮等氛圍動作',
    'motion.sp3_k': '節奏 Rhythm',
    'motion.sp3_k1': 'Stagger',
    'motion.sp3_v1': '80–120ms 間隔，避免同時進場',
    'motion.sp3_k2': 'Loop',
    'motion.sp3_v2': '環境動作採用 infinite，使用者互動動作只播一次',
    'motion.sp3_k3': 'Respect',

    // 10 social
    'social.title': '社群版型',
    'social.eyebrow': 'Social Templates',
    'social.lead': 'Instagram 是 Moospace 與使用者最靠近的地方。版型以留白、一句話、柔光為核心，避免過多資訊壓縮讀者的呼吸。',
    'social.post_quote': '「當你安靜下來，世界也會靜下來。」',
    'social.post_cap': 'IG 方形貼文',
    'social.story_kicker': 'TODAY',
    'social.story_title': '回到呼吸，<br>回到自己。',
    'social.story_cta': '→ 點擊探索',
    'social.story_cap': 'IG 限動',
    'social.reel_ep': 'EP.02',
    'social.reel_title': '你不需要<br>成為誰',
    'social.reel_sub': 'a conversation with yourself',
    'social.reel_cap': 'Reels 封面',
    'social.car_num': '03 / 05',
    'social.car_title': '停下來，<br>也是前進的一種。',
    'social.car_sub': '— Moospace',
    'social.car_cap': '輪播分頁',
    'social.rules_title': '版型規則',
    'social.r1': '主文字不超過 16 字，一句話勝過一段話。',
    'social.r2': 'Logo 放置於下緣或角落，不搶主體。',
    'social.r3': '留白區域 > 35%，文字周圍至少一倍字高空間。',
    'social.r4': '避免多色並置；一張圖只有一個主要顏色 + 中性色。',
    'social.r5': '不加 hashtag、感嘆號、表情符號於圖面上。',

    // 11 app
    'app.title': '應用範例',
    'app.eyebrow': 'Applications',
    'app.podcast_show': 'MOOSPACE',
    'app.podcast_title': '萬象之聲',
    'app.podcast_cap': 'Podcast 封面',
    'app.social_quote': '「你不需要成為誰，你已經是你了。」',
    'app.social_cap': '社群貼文版型',
    'app.card_title': '療癒晶石',
    'app.card_sub': 'Healing Crystals',
    'app.card_cap': '礦石使用小卡',
    'app.nc_name': '陳沐空',
    'app.nc_title': '療癒師 Healer',
    'app.nc_cap': '名片',

    // 12 download
    'dl.title': '素材下載',
    'dl.eyebrow': 'Downloads',
    'dl.note': '合作夥伴可直接下載以下原始素材。若需要其他格式（EPS、SVG 向量版），請聯絡我們。',
    'dl.logo_color': '彩色 Logo（PNG）',
    'dl.logo_bw': '黑白 Logo（PNG）',
    'dl.logo_fb': 'FB 版本 Logo',
    'dl.logo_reverse': '反白 Logo（暗底用）',
    'dl.logo_svg': '單色 Logo（SVG）',
    'dl.logo_ai_color': '彩色 Logo 原始檔',
    'dl.logo_ai_bw': '黑白 Logo 原始檔',
    'dl.podcast_ai': 'Podcast 封面原始檔',

    'footer.tagline': '一起回歸內心的真實',
    'footer.copy': '© Moospace 2026 · 本規範僅供授權合作夥伴使用'
  },

  en: {
    'nav.essence': 'Essence',
    'nav.logo': 'Logo',
    'nav.color': 'Color',
    'nav.typography': 'Type',
    'nav.voice': 'Voice',
    'nav.photo': 'Photo',
    'nav.icon': 'Icons',
    'nav.pattern': 'Texture',
    'nav.motion': 'Motion',
    'nav.social': 'Social',
    'nav.application': 'Apps',
    'nav.download': 'Files',

    'hero.title': 'Live as a fully conscious being',
    'hero.subtitle': '一起回歸內心的真實',
    'hero.kicker': 'Moospace Brand Identity Guidelines',
    'hero.scroll': 'Scroll',

    'intro.lead': 'This is the brand identity guideline for Moospace. It is intended for designers, photographers, and content partners working with the brand. Please follow these rules for any visual application to keep the brand voice consistent.',

    // 01 essence
    'essence.title': 'Brand Essence',
    'essence.eyebrow': '品牌核心',
    'essence.slogan_label': 'Slogan',
    'essence.slogan_zh': 'Live as a fully conscious being',
    'essence.slogan_en': '一起回歸內心的真實',
    'essence.philosophy_label': 'Philosophy',
    'essence.philosophy': 'The soul came here to experience a greater self — to become who it truly is. Moospace walks with every seeker through healing, nature, and awareness, back to their own center.',
    'essence.personality_label': 'Personality',
    'essence.kw1': 'Healing',
    'essence.kw2': 'Introspective',
    'essence.kw3': 'Natural',
    'essence.kw4': 'Spiritual',
    'essence.kw5': 'Warm',
    'essence.kw6': 'Serene',
    'essence.audience_label': 'Audience',
    'essence.audience': 'Adults seeking balance of body, mind and spirit — curious about healing and self-inquiry. Speak gently, sincerely, without pressure. Guide, don\'t persuade.',
    'essence.mvv_title': 'Mission · Vision · Values',
    'essence.mission_label': 'Mission',
    'essence.mission': 'To walk with every soul on the path home to inner truth — holding a space that is gentle, safe, and never rushed.',
    'essence.vision_label': 'Vision',
    'essence.vision': 'To become the most trusted companion for healing and self-inquiry in the Chinese-speaking world.',
    'essence.values_label': 'Values',
    'essence.val1_k': 'Authentic',
    'essence.val1_v': 'No polish. Just what is.',
    'essence.val2_k': 'Compassion',
    'essence.val2_v': 'Hold every state with tenderness.',
    'essence.val3_k': 'Stillness',
    'essence.val3_v': 'Less is more. White space is breath.',
    'essence.val4_k': 'Awareness',
    'essence.val4_v': 'Stay awake. Do not drift.',

    // 02 logo
    'logo.title': 'Logo Guidelines',
    'logo.eyebrow': 'Logo',
    'logo.primary': 'Primary (mark only)',
    'logo.mono': 'Monochrome (on light background)',
    'logo.reverse': 'Reversed (on dark background)',
    'logo.safearea_title': 'Safe Area',
    'logo.safearea_desc': 'Keep a clear space around the logo at least as tall as the letter "Moo". Nothing should intrude into this area.',
    'logo.minsize_title': 'Minimum Size',
    'logo.minsize_desc': 'For legibility, use minimum 120px width on screen and 30mm in print. Below this, use the infinity mark alone.',
    'logo.construction_title': 'Construction',
    'logo.construction_desc': 'The height of "Moo" defines the base unit X. The infinity mark is 3X wide × ~1.67X tall (1.8:1 ratio). The gap between mark and wordmark is 1X. Letter-spacing on the wordmark is 0.5X. Never alter these proportions.',
    'logo.spec1_k': 'Base unit',
    'logo.spec2_k': 'Mark size',
    'logo.spec3_k': 'Mark-to-text gap',
    'logo.spec4_k': 'Letter-spacing',
    'logo.spec5_k': 'Logo ratio',
    'logo.dont_title': 'Don\'ts',
    'logo.dont1': 'Don\'t distort or stretch',
    'logo.dont2': 'Don\'t use off-brand colors',
    'logo.dont3': 'Don\'t add shadows or 3D effects',
    'logo.dont4': 'Don\'t rotate the logo',
    'logo.dont5': 'Don\'t place on busy backgrounds',
    'logo.dont6': 'Don\'t reduce logo opacity',

    // 03 color
    'color.title': 'Color System',
    'color.eyebrow': '色彩系統',
    'color.primary_title': 'Primary',
    'color.p1_name': 'Deep Indigo',
    'color.p1_use': 'Foundation color for dark surfaces, navigation, and ambient moods.',
    'color.p2_name': 'Brand Gold',
    'color.p2_use': 'The logo color — used for emblem and key accents. Avoid as a large background fill.',
    'color.secondary_title': 'Secondary',
    'color.s1_name': 'Warm Gold',
    'color.s1_use': 'Secondary accent — CTA buttons, dividers, small details.',
    'color.s2_name': 'Ink',
    'color.s2_use': 'Main text color on light surfaces — headings and body copy.',
    'color.neutral_title': 'Neutral',
    'color.n1': 'Off White',
    'color.n2': 'Light Gray',
    'color.n3': 'Mid Gray',
    'color.n4': 'Night Plum',
    'color.ratio_title': 'Recommended Ratio',
    'color.ratio_desc': '60% neutral background + 25% Deep Indigo + 10% Warm Gold + 5% Brand Gold accent. Avoid crowding with many colors — give the composition room to breathe.',
    'color.gradient_title': 'Gradients',
    'color.g1_name': 'Twilight',
    'color.g1_use': 'Hero backgrounds, podcast covers, and dark ambient compositions.',
    'color.g2_name': 'Sunrise',
    'color.g2_use': 'Accent highlights, CTA hover states, ceremonial detailing.',
    'color.g3_name': 'Mist',
    'color.g3_use': 'Soft backgrounds for light pages, vision boards, quiet cards.',

    // 04 type
    'type.title': 'Typography',
    'type.eyebrow': '字型',
    'type.zh_primary': 'Primary Chinese',
    'type.zh_display': 'Display Chinese',
    'type.zh_note': 'For all Chinese headings, body and buttons. Weights 300 / 400 / 500 / 700.',
    'type.zh_serif_note': 'For large headings, pull quotes, and ceremonial moments. Not for long body copy.',
    'type.en_display': 'English Display',
    'type.en_body': 'English Body',
    'type.en_serif_note': 'For English display headings and the brand tagline. Weight 300 sets the tone.',
    'type.en_sans_note': 'For English subheads, buttons and long body copy. Weights 200–500.',
    'type.hierarchy_title': 'Hierarchy Sample',
    'type.h_kicker': 'Kicker · 14px · Montserrat 500 · Uppercase',
    'type.h_hero': 'Live as a fully conscious being',
    'type.h_h2': '一起回歸內心的真實',
    'type.h_body': 'Body · 16px · Noto Sans TC 400 · line-height 1.8. Speak gently; walk alongside the reader rather than selling to them. Avoid hype.',
    'type.h_caption': 'Caption · 13px · Noto Sans TC 300',

    // 05 voice
    'voice.title': 'Tone of Voice',
    'voice.eyebrow': '語氣',
    'voice.lead': 'Moospace speaks like a cup of warm water. It does not rush, teach, or sell anxiety. It simply stays present — and catches you when you\'re ready to land.',
    'voice.a1_k': 'Warm & Awake',
    'voice.a1_v': 'Gentle is not vague. Say what is true, in a way that does not wound.',
    'voice.a2_k': 'Companion, not Teacher',
    'voice.a2_v': 'We don\'t claim answers. We invite people to see their own.',
    'voice.a3_k': 'Brief with Breathing Room',
    'voice.a3_v': 'Don\'t stuff the sentence. Language also breathes. A single line can carry more than a paragraph.',
    'voice.a4_k': 'True, not Perfect',
    'voice.a4_v': 'Allow fragility, pauses, not-knowing. Perfect sentences often sound far away.',
    'voice.dodont_title': 'Do / Don\'t',
    'voice.do_head': 'Say',
    'voice.do1': '"We\'ll walk this part with you."',
    'voice.do2': '"Come back to your center."',
    'voice.do3': '"To pause is also to love yourself."',
    'voice.do4': '"You are safe here."',
    'voice.do5': '"You don\'t need to become anyone."',
    'voice.do6': '"When you\'re ready, it will be here."',
    'voice.dont_head': 'Don\'t say',
    'voice.dont1': '"Let us fix it for you."',
    'voice.dont2': '"Become a better you."',
    'voice.dont3': '"3 steps to change your life!"',
    'voice.dont4': '"Book now — limited spots!"',
    'voice.dont5': '"You have to try this."',
    'voice.dont6': '"Miss this and you lose."',
    'voice.rewrite_title': 'Rewrite Example',
    'voice.before': 'Before',
    'voice.before_text': '[Limited time] Enroll now in the Moospace healing course and transform yourself instantly! Only 3 spots left — miss it and wait another year!',
    'voice.after': 'After',
    'voice.after_text': 'Moospace healing course — a journey back to yourself. When you are ready, it will be here waiting.',
    'voice.lang_title': 'Rhythm between Chinese and English',
    'voice.lang_desc': 'Chinese carries emotion and poetry; English carries clarity and the international tone. Bilingual taglines may sit side by side, but never force a literal translation. Let each language be whole in itself, echoing the other.',

    // 06 photo
    'photo.title': 'Photography Style',
    'photo.eyebrow': '攝影風格',
    'photo.lead': 'We do not yet have original photography. Design partners may use the AI prompts below to generate reference imagery in the brand tone. Future real-world shoots must follow the same principles.',
    'photo.prompts_title': 'AI Prompt Templates',
    'photo.p1_title': 'Quiet Morning Space',
    'photo.p2_title': 'Hands in Ritual',
    'photo.p3_title': 'Nature Stillness',
    'photo.p4_title': 'Water Reflection',
    'photo.p5_title': 'Meditation Silhouette',
    'photo.p6_title': 'Crystal Still Life',
    'photo.specs_title': 'Technical Specs',
    'photo.spec1_k': 'Color Temp',
    'photo.spec2_k': 'Contrast',
    'photo.spec2_v': 'Low-to-medium. No hard-edged shadows.',
    'photo.spec3_k': 'Composition',
    'photo.spec3_v': 'Negative space > 30%. Subject off-center.',
    'photo.spec4_k': 'Palette',
    'photo.spec4_v': 'Cream, warm gold, deep indigo, moss, earth tones.',
    'photo.spec5_k': 'Avoid',
    'photo.spec5_v': 'High saturation, hard artificial light, posed smiles, visible logos.',

    // 07 icon
    'icon.title': 'Iconography',
    'icon.eyebrow': '圖示系統',
    'icon.lead': 'Soft lines, breathing rhythm. Each icon is a quiet metaphor. Themes center on healing, nature, water, crystals, meditation.',
    'icon.i1': 'Crystal',
    'icon.i2': 'Droplet',
    'icon.i3': 'Wave',
    'icon.i4': 'Leaf',
    'icon.i5': 'Moon',
    'icon.i6': 'Lotus',
    'icon.i7': 'Awareness',
    'icon.i8': 'Feather',
    'icon.i9': 'Mountain',
    'icon.i10': 'Candle',
    'icon.i11': 'Sprout',
    'icon.i12': 'Infinity',
    'icon.rules_title': 'Drawing Rules',
    'icon.r1_k': 'Canvas',
    'icon.r2_k': 'Stroke',
    'icon.r2_v': '1.4px (1.6px for the infinity mark)',
    'icon.r3_k': 'Caps',
    'icon.r4_k': 'Color',
    'icon.r4_v': 'Inherit currentColor. Use #F5C843 on dark, #16163F on light.',
    'icon.r5_k': 'Avoid',
    'icon.r5_v': 'Filled shapes, 3D shadows, color gradients, excess detail.',

    // 08 pattern
    'pattern.title': 'Texture & Pattern',
    'pattern.eyebrow': '紋理',
    'pattern.lead': 'Supporting visuals should exist like breath — never stealing the scene, always warming it. The six textures below are drawn from the brand\'s key motifs: water, energy, mineral, halo, paper, grid.',
    'pattern.t1_k': 'Waves',
    'pattern.t1_v': 'Repeating water lines — frequency and feeling. Used on meditation, podcast, and course page footers.',
    'pattern.t2_k': 'Rings',
    'pattern.t2_v': 'A visualization of energy field. Used as logo halo, meditation CTA, story beginnings.',
    'pattern.t3_k': 'Grid',
    'pattern.t3_v': 'Thin line grid for structure and intention. Dot-grid over dark for ceremonial moments.',
    'pattern.t4_k': 'Halo',
    'pattern.t4_v': 'Warm gold radial halos — energy in motion. Used in heroes and cover backgrounds.',
    'pattern.t5_k': 'Paper',
    'pattern.t5_v': 'Cream paper texture. Warmth and tactility — the go-to for business cards, packaging, and small prints.',
    'pattern.t6_k': 'Mineral',
    'pattern.t6_v': 'Low-saturation stone grain, echoing healing crystals. Used as accent texture on product pages and course covers.',

    // 09 motion
    'motion.title': 'Motion Identity',
    'motion.eyebrow': '動態',
    'motion.lead': 'Moospace moves like a breath — slow in, slow out, never rushed or dramatic. Every easing curve, duration, and rhythm is tuned so the body can relax into the motion.',
    'motion.m1_k': 'Breathing',
    'motion.m1_v': 'The resting pulse of the infinity mark. One cycle per 4 seconds — four beats in, four beats out.',
    'motion.m2_k': 'Floating',
    'motion.m2_v': 'Ambient motion for the hero logo and key icons. One cycle per 6 seconds, amplitude minimal.',
    'motion.m3_k': 'Ripple',
    'motion.m3_v': 'Feedback on tap, notification, or energy release. Plays once, triggered by user action.',
    'motion.m4_k': 'Fade Up',
    'motion.m4_v': 'Default content entrance. 400ms, with 80ms stagger between items.',
    'motion.specs_title': 'Motion Specs',
    'motion.sp1_k': 'Easing',
    'motion.sp1_v1': 'Primary entrances & UI state changes',
    'motion.sp1_v2': 'Settling & end-of-motion landings',
    'motion.sp1_v3': 'Ambient motion (breathing, floating)',
    'motion.sp2_k': 'Duration',
    'motion.sp2_v1': 'Micro-interactions (buttons, links)',
    'motion.sp2_v2': 'UI state changes',
    'motion.sp2_v3': 'Cards and sections entering',
    'motion.sp2_v4': 'Ambient loops (breathing, floating)',
    'motion.sp3_k': 'Rhythm',
    'motion.sp3_k1': 'Stagger',
    'motion.sp3_v1': '80–120ms between items. Never enter all at once.',
    'motion.sp3_k2': 'Loop',
    'motion.sp3_v2': 'Ambient motions loop; user-triggered motions play once.',
    'motion.sp3_k3': 'Respect',

    // 10 social
    'social.title': 'Social Templates',
    'social.eyebrow': '社群',
    'social.lead': 'Instagram is the space closest to the user. Templates are built around negative space, a single sentence, and soft light — never compressing the reader\'s breath.',
    'social.post_quote': '"When you quiet down, the world quiets down too."',
    'social.post_cap': 'IG Square Post',
    'social.story_kicker': 'TODAY',
    'social.story_title': 'Return to breath.<br>Return to self.',
    'social.story_cta': '→ tap to open',
    'social.story_cap': 'IG Story',
    'social.reel_ep': 'EP.02',
    'social.reel_title': 'You don\'t need<br>to become<br>anyone',
    'social.reel_sub': 'a conversation with yourself',
    'social.reel_cap': 'Reels Cover',
    'social.car_num': '03 / 05',
    'social.car_title': 'To pause is also<br>a way forward.',
    'social.car_sub': '— Moospace',
    'social.car_cap': 'Carousel Slide',
    'social.rules_title': 'Template Rules',
    'social.r1': 'Main copy ≤ 16 characters. One sentence beats one paragraph.',
    'social.r2': 'Logo sits at the bottom or a corner. Never steal the focus.',
    'social.r3': 'Negative space > 35%. At least one line-height of breathing room around text.',
    'social.r4': 'Avoid color crowding — one dominant color + neutrals per image.',
    'social.r5': 'No hashtags, exclamation marks, or emojis on the artwork.',

    // 11 app
    'app.title': 'Applications',
    'app.eyebrow': '應用範例',
    'app.podcast_show': 'MOOSPACE',
    'app.podcast_title': 'Voices of All Things',
    'app.podcast_cap': 'Podcast Cover',
    'app.social_quote': '"You don\'t need to become anyone. You already are."',
    'app.social_cap': 'Social Post Template',
    'app.card_title': 'Healing Crystals',
    'app.card_sub': '療癒晶石',
    'app.card_cap': 'Crystal Care Card',
    'app.nc_name': 'Chen Moo-Kong',
    'app.nc_title': 'Healer',
    'app.nc_cap': 'Business Card',

    // 12 download
    'dl.title': 'Downloads',
    'dl.eyebrow': '素材下載',
    'dl.note': 'Partners may download original assets below. For other formats (EPS, vector SVG), please contact us.',
    'dl.logo_color': 'Color Logo (PNG)',
    'dl.logo_bw': 'B&W Logo (PNG)',
    'dl.logo_fb': 'Facebook Logo',
    'dl.logo_reverse': 'Reversed Logo (Dark BG)',
    'dl.logo_svg': 'Monochrome Logo (SVG)',
    'dl.logo_ai_color': 'Color Logo Source',
    'dl.logo_ai_bw': 'B&W Logo Source',
    'dl.podcast_ai': 'Podcast Cover Source',

    'footer.tagline': 'Live as a fully conscious being',
    'footer.copy': '© Moospace 2026 · For authorized partners only'
  }
};

// Keys whose values contain intentional HTML (e.g. <br>)
const HTML_KEYS = new Set([
  'social.story_title',
  'social.reel_title',
  'social.car_title'
]);

function applyLang(lang) {
  const dict = i18n[lang] || i18n.zh;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] === undefined) return;
    if (HTML_KEYS.has(key)) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-Hant');
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
  });
  try { localStorage.setItem('moospace-guide-lang', lang); } catch(e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang-btn')));
  });

  let saved = null;
  try { saved = localStorage.getItem('moospace-guide-lang'); } catch(e) {}
  const browserLang = (navigator.language || 'zh').toLowerCase();
  const initial = saved || (browserLang.startsWith('en') ? 'en' : 'zh');
  applyLang(initial);

  // Highlight active section in nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');
  const onScroll = () => {
    const y = window.scrollY + 140;
    let current = '';
    sections.forEach(s => {
      if (s.offsetTop <= y) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger menu
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const backdrop = document.querySelector('.nav-backdrop');
  const setMenu = (open) => {
    if (!toggle || !nav || !backdrop) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    backdrop.hidden = !open;
    document.body.classList.toggle('nav-open', open);
  };
  if (toggle) {
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    backdrop.addEventListener('click', () => setMenu(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    navLinks.forEach(a => a.addEventListener('click', () => setMenu(false)));
  }

  // Fade-up entrance on scroll
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (i * 60) + 'ms';
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14 });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-in'));
  }
});
