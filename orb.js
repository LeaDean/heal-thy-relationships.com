// ─── DATA ────────────────────────────────────────────────────────────────────
const ORB_DATA = {
    Energy: {
        tagline: "Reconnect with the vitality that is your natural state.",
        badges: ["Vitality", "Life Force", "Renewal", "Momentum"],
        heroLabel: "MIND · BODY · SPIRIT",
        introTitle: "Reclaiming Your Energy",
        introText: `
            <p>Energy is not something we manufacture — it is something we allow. When we feel depleted, it is rarely because life demands too much. More often, it is because we are leaking energy through unresolved tension, unfelt emotions, or ways of living that are out of alignment with who we truly are.</p>
            <p>In our sessions together, we explore the deeper roots of exhaustion and fatigue — not just the obvious culprits like poor sleep or overwork, but the subtler drains: resentment held in the body, anxiety running quietly in the background, relationships that take more than they give.</p>
            <p>True energy restoration is an inside job. It begins with honest self-inquiry and leads to practical, lasting change.</p>
        `,
        quote: "When you stop spending your life force on what no longer serves you, you discover you have more than enough.",
        pillarsTitle: "Three Pillars of Energetic Restoration",
        pillarsIntro: "Sustainable energy comes from alignment — of mind, body, and the life you're choosing to live.",
        pillars: [
            { icon: "⚡", title: "Body Awareness", text: "Learn to read the signals your body sends before exhaustion sets in. Simple somatic practices restore your felt sense of aliveness." },
            { icon: "🌿", title: "Emotional Clearing", text: "Unprocessed emotion is one of the greatest energy drains. We create safe space to feel what needs to be felt — and release what needs releasing." },
            { icon: "🔄", title: "Life Redesign", text: "Sometimes low energy is a message: something needs to change. Together we identify what, and find the courage to act." },
        ],
        practicesTitle: "Restoring Your Vitality",
        practices: [
            { title: "Somatic Energy Mapping", text: "Locate where you hold tension and learn to release it through guided body-awareness practices." },
            { title: "Emotional Inventory", text: "Identify the emotional weight you're carrying and begin to set it down." },
            { title: "Boundary Work", text: "Discover how saying no to the wrong things creates space for the right ones." },
            { title: "Sleep & Rhythm", text: "Explore your natural rhythms and build a lifestyle that works with them, not against them." },
            { title: "Relationship Audit", text: "Understand which relationships energise you — and which quietly deplete you." },
            { title: "Purpose Alignment", text: "When your daily actions align with your deepest values, energy flows naturally." },
        ],
        ctaTitle: "Ready to feel truly alive again?",
        ctaText: "Energy is your birthright. Together we find what's blocking it — and restore the flow."
    },

    Focus: {
        tagline: "A clear mind is the foundation of a meaningful life.",
        badges: ["Clarity", "Attention", "Presence", "Direction"],
        heroLabel: "MENTAL CLARITY · DIRECTION",
        introTitle: "The Art of Focused Attention",
        introText: `
            <p>We live in an age of constant distraction, and the ability to truly focus has become one of the rarest and most valuable capacities a person can cultivate. But focus isn't simply a productivity skill — it is a profound act of self-respect.</p>
            <p>What we attend to, we become. When our attention is scattered, so is our experience of life. When we can direct our focus intentionally — on our relationships, our work, our own inner world — everything deepens.</p>
            <p>In our work together, we explore not only how to focus, but what is worth focusing on. Direction matters as much as discipline.</p>
        `,
        quote: "Attention is the most intimate gift you can give — to another person, and to yourself.",
        pillarsTitle: "Three Dimensions of True Focus",
        pillarsIntro: "Genuine focus is less about willpower and more about clarity of purpose, emotional calm, and an environment that supports deep work.",
        pillars: [
            { icon: "🎯", title: "Inner Clarity", text: "When we know what matters most, distraction loses its grip. We work together to identify your true priorities beneath the noise." },
            { icon: "🧘", title: "Emotional Regulation", text: "Anxiety and unprocessed feeling are the enemies of focus. Learn to settle the nervous system before it pulls attention away." },
            { icon: "🌐", title: "Intentional Environment", text: "Your context shapes your cognition. We explore practical ways to design your life for deep, sustained attention." },
        ],
        practicesTitle: "Cultivating Focused Presence",
        practices: [
            { title: "Values Clarification", text: "Know clearly what you're focusing toward — purpose makes attention effortless." },
            { title: "Distraction Mapping", text: "Identify your unique distraction patterns and their emotional triggers." },
            { title: "Contemplative Practice", text: "Simple, secular attention-training practices grounded in neuroscience." },
            { title: "Digital Boundaries", text: "Reclaim your attention from the technologies designed to capture it." },
            { title: "Single-Tasking", text: "Discover the profound power of doing one thing at a time, completely." },
            { title: "Review Rituals", text: "Weekly reflection practices that keep your focus aligned with what truly matters." },
        ],
        ctaTitle: "Ready to reclaim your attention?",
        ctaText: "Focus is not a personality trait — it is a skill. And like all skills, it deepens with the right guidance."
    },

    Purpose: {
        tagline: "The question beneath all questions: why am I here?",
        badges: ["Meaning", "Direction", "Values", "Legacy"],
        heroLabel: "MEANING · MISSION · IDENTITY",
        introTitle: "Living From the Inside Out",
        introText: `
            <p>Purpose is not a destination to be found — it is a quality of attention to be cultivated. Many people arrive at midlife, or moments of crisis, with a nagging sense that something essential is missing. That feeling is not a problem. It is an invitation.</p>
            <p>In our sessions, we explore the difference between the life you have been living and the life that feels most deeply yours. We look honestly at where you have been living from fear, expectation, or the need for approval — and begin to map a truer direction.</p>
            <p>Purpose work is rarely comfortable. It asks for honesty. But the clarity it brings transforms everything — relationships, work, how you spend your mornings.</p>
        `,
        quote: "The privilege of a lifetime is to become who you truly are.",
        pillarsTitle: "Three Roots of Purposeful Living",
        pillarsIntro: "Purpose is not found in a single revelation — it emerges through honest self-inquiry, courageous action, and deep listening.",
        pillars: [
            { icon: "🔍", title: "Self-Inquiry", text: "Honest, compassionate exploration of who you are beneath the roles you play and the expectations you carry." },
            { icon: "💡", title: "Values Alignment", text: "Identify your deepest values — and audit how closely your current life reflects them." },
            { icon: "🌱", title: "Courageous Action", text: "Purpose requires movement. We build the internal resources to take the steps that matter most, even when they are frightening." },
        ],
        practicesTitle: "Discovering Your Direction",
        practices: [
            { title: "Life Review", text: "Map the story of your life to identify recurring themes, gifts, and longings." },
            { title: "Values Excavation", text: "Move beyond vague ideals to the precise values that animate your best moments." },
            { title: "Shadow Work", text: "The parts of yourself you've disowned often hold your greatest gifts." },
            { title: "Legacy Visioning", text: "Imagine the end — and work backwards to find what matters most now." },
            { title: "Fear Inventory", text: "Identify the fears that have shaped your choices — and begin to choose differently." },
            { title: "Aligned Action", text: "Build a concrete, meaningful next step rooted in clarity rather than urgency." },
        ],
        ctaTitle: "Ready to live with more intention?",
        ctaText: "You don't need to have it all figured out. You just need a place to think honestly — and someone to think with."
    },

    Strength: {
        tagline: "True strength is knowing when to soften, and when to hold firm.",
        badges: ["Resilience", "Courage", "Self-Trust", "Boundaries"],
        heroLabel: "RESILIENCE · COURAGE · SELF-TRUST",
        introTitle: "The Strength That Endures",
        introText: `
            <p>We often confuse strength with hardness — with never showing vulnerability, never asking for help, never admitting we are struggling. But this kind of armoured strength is brittle. It protects us from intimacy as much as it protects us from pain.</p>
            <p>Real strength is the capacity to feel fully, act wisely, and remain rooted in yourself under pressure. It is built through honest self-knowledge, through learning to hold difficulty without collapsing or numbing, and through the gradual deepening of self-trust.</p>
            <p>In our sessions, we build this kind of inner resilience — slowly, honestly, and from the inside out.</p>
        `,
        quote: "Vulnerability is not weakness. It is the birthplace of everything we hunger for — connection, belonging, joy.",
        pillarsTitle: "Three Pillars of Inner Strength",
        pillarsIntro: "Lasting strength is rooted in self-knowledge, emotional courage, and the ability to ask for support.",
        pillars: [
            { icon: "🏔️", title: "Emotional Resilience", text: "Learn to move through difficulty without being defined by it. Resilience is a skill — and a deeply learnable one." },
            { icon: "🛡️", title: "Healthy Boundaries", text: "Boundaries are not walls — they are the honest expression of your values. We learn to hold them with kindness and clarity." },
            { icon: "🤝", title: "Interdependence", text: "True strength includes knowing when to lean on others. We explore the courage it takes to ask for — and receive — support." },
        ],
        practicesTitle: "Building Inner Resilience",
        practices: [
            { title: "Distress Tolerance", text: "Practical tools to move through difficult feelings without avoidance or overwhelm." },
            { title: "Boundary Setting", text: "Learn the language and posture of clear, compassionate boundaries." },
            { title: "Self-Compassion Practice", text: "The foundation of real strength is treating yourself with the kindness you extend to others." },
            { title: "Conflict Navigation", text: "Engage with disagreement and difficulty without shutting down or escalating." },
            { title: "Inner Critic Work", text: "Transform the harshest internal voice into a wiser, kinder advisor." },
            { title: "Support Mapping", text: "Identify the people and practices that genuinely sustain you." },
        ],
        ctaTitle: "Ready to build something that lasts?",
        ctaText: "Strength isn't given — it's grown. And it grows fastest in the presence of honest, compassionate support."
    },

    Peace: {
        tagline: "Peace is not the absence of difficulty — it is the presence of yourself.",
        badges: ["Calm", "Acceptance", "Stillness", "Equanimity"],
        heroLabel: "CALM · STILLNESS · ACCEPTANCE",
        introTitle: "Coming Home to Yourself",
        introText: `
            <p>For many of us, peace feels like something we'll find when the circumstances change — when we're less busy, when the relationship is better, when we've achieved what we're working towards. But peace lived like this forever recedes. It is always just out of reach.</p>
            <p>The peace we explore together is not circumstantial. It is a quality of presence — an inner steadiness that remains even when things are hard. It is the ability to be with whatever is happening, without being overwhelmed by it or running from it.</p>
            <p>This is perhaps the most transformative gift of inner work: to discover that peace is not earned. It is uncovered.</p>
        `,
        quote: "You cannot find peace. Peace finds you the moment you stop running from yourself.",
        pillarsTitle: "Three Dimensions of Inner Peace",
        pillarsIntro: "Peace is cultivated through acceptance, stillness, and the slow release of everything that has kept us at war with ourselves.",
        pillars: [
            { icon: "🌊", title: "Radical Acceptance", text: "Suffering often comes not from our circumstances, but from our resistance to them. We practice meeting reality as it is." },
            { icon: "🌙", title: "Stillness Practice", text: "Simple, powerful practices to quiet the noise of the mind and access the peace that is already present." },
            { icon: "🕊️", title: "Self-Forgiveness", text: "Carrying the weight of old mistakes is one of the greatest obstacles to peace. We do the slow, necessary work of letting go." },
        ],
        practicesTitle: "Cultivating Stillness Within",
        practices: [
            { title: "Mindful Breathing", text: "The simplest and most powerful tool for returning to the present moment." },
            { title: "Acceptance Practice", text: "Learn the difference between acceptance and resignation — and why the former is liberating." },
            { title: "Forgiveness Work", text: "Release the resentments and regrets that quietly disturb your peace." },
            { title: "Nervous System Regulation", text: "Somatic practices that bring the body out of fight-or-flight and into rest." },
            { title: "Simplification", text: "Identify what in your life is creating unnecessary noise — and begin to simplify." },
            { title: "Present-Moment Anchoring", text: "Build practical habits that return you to now, throughout the day." },
        ],
        ctaTitle: "Ready to stop searching and start arriving?",
        ctaText: "Peace is closer than you think. Let's find it together."
    },

    Clarity: {
        tagline: "When the fog lifts, the next right step becomes obvious.",
        badges: ["Insight", "Truth", "Discernment", "Vision"],
        heroLabel: "INSIGHT · DISCERNMENT · TRUTH",
        introTitle: "Seeing Through the Noise",
        introText: `
            <p>Clarity is one of the great gifts of honest inner work. When we stop avoiding the questions we are most afraid to ask — about our relationships, our choices, the life we are living — something remarkable happens. The fog lifts. What seemed impossibly complicated reveals itself as, at its core, quite simple.</p>
            <p>Lack of clarity is rarely a thinking problem. It is almost always a feeling problem. We cannot see our situation clearly when we are too close to it, too frightened of what we might see, or carrying too many unexpressed emotions about it.</p>
            <p>Our work together creates the conditions in which clarity naturally emerges: honesty, safety, and the willingness to look.</p>
        `,
        quote: "Clarity comes not from thinking harder, but from feeling more honestly.",
        pillarsTitle: "Three Pathways to Clarity",
        pillarsIntro: "Clarity is not achieved through analysis alone — it arises when we combine honest inquiry with emotional presence and the courage to see.",
        pillars: [
            { icon: "🔦", title: "Honest Inquiry", text: "We ask the questions you may have been avoiding — with compassion, and without judgment." },
            { icon: "💭", title: "Emotional Honesty", text: "Feelings carry information. When we learn to listen to them rather than manage them, they reveal extraordinary clarity." },
            { icon: "🗺️", title: "Pattern Recognition", text: "We map your recurring patterns — in relationships, in decisions, in how you talk to yourself — so you can begin to choose differently." },
        ],
        practicesTitle: "Finding Your Own Clear Vision",
        practices: [
            { title: "Journaling Practice", text: "Structured reflection exercises that bypass the chattering mind and access deeper knowing." },
            { title: "Assumption Challenging", text: "Identify the beliefs that have been shaping your perception — and question them." },
            { title: "Decision Frameworks", text: "Simple, powerful tools for making decisions from your values rather than your fears." },
            { title: "Embodied Knowing", text: "Learn to read the wisdom of your own body — the gut feeling that is often wiser than the analytical mind." },
            { title: "Outside Perspective", text: "Sometimes clarity requires a witness. I offer honest, caring reflection that helps you see yourself more clearly." },
            { title: "Life Mapping", text: "Visually map where you are, where you want to be, and what stands between — revealing the path forward." },
        ],
        ctaTitle: "Ready to see more clearly?",
        ctaText: "You already hold the answers. Our work is simply to help them rise to the surface."
    },

    Harmony: {
        tagline: "When your inner world and outer life align, everything flows.",
        badges: ["Balance", "Integration", "Alignment", "Flow"],
        heroLabel: "BALANCE · INTEGRATION · FLOW",
        introTitle: "Living in Alignment",
        introText: `
            <p>Harmony is not balance — not the careful, exhausting management of competing demands. Harmony is integration. It is the feeling of your inner world and outer life moving together, rather than against each other.</p>
            <p>When we are in harmony with ourselves, relationships feel less like negotiations and more like dances. Work feels less like obligation and more like contribution. Even difficulty becomes something we can meet with steadiness rather than dread.</p>
            <p>The path to harmony runs through honesty: first with ourselves, then with the people who matter most to us. Our sessions together create the space for both.</p>
        `,
        quote: "Harmony is not the absence of discord — it is knowing how to bring things back into tune.",
        pillarsTitle: "Three Roots of Lasting Harmony",
        pillarsIntro: "Harmony is cultivated through inner alignment, honest relationship, and the willingness to let things be different from how we imagined them.",
        pillars: [
            { icon: "⚖️", title: "Inner Alignment", text: "When your values, choices, and daily actions are in alignment, a deep coherence emerges. We work to find and live from that core." },
            { icon: "🎵", title: "Relational Harmony", text: "Real harmony in relationships requires honest communication, genuine listening, and the willingness to repair when things break." },
            { icon: "🌺", title: "Acceptance of Tension", text: "Paradoxically, harmony includes the capacity to hold tension without needing to immediately resolve it. We cultivate this spaciousness." },
        ],
        practicesTitle: "Creating Harmony in Your Life",
        practices: [
            { title: "Conflict as Information", text: "Learn to read conflict as meaningful signal rather than something to avoid or win." },
            { title: "Communication Depth", text: "Move beneath surface disagreements to the needs and feelings that actually need to be heard." },
            { title: "Relational Repair", text: "Practical, powerful tools for healing ruptures and rebuilding trust." },
            { title: "Nervous System Co-Regulation", text: "Understand how your nervous system affects those around you — and how to create safety in relationships." },
            { title: "Needs Articulation", text: "Many conflicts arise from unspoken needs. Learn to identify and express yours clearly." },
            { title: "Values-Based Living", text: "Build a life whose structures and choices reflect what you genuinely believe matters." },
        ],
        ctaTitle: "Ready to create more harmony?",
        ctaText: "Harmony doesn't happen by accident. It is created — through honest conversation, courageous choices, and patient, loving attention."
    },

    Vitality: {
        tagline: "Vitality is the aliveness that makes everything worth doing.",
        badges: ["Aliveness", "Health", "Passion", "Presence"],
        heroLabel: "ALIVENESS · PRESENCE · PASSION",
        introTitle: "The Aliveness Within You",
        introText: `
            <p>Vitality is more than physical health. It is the quality of aliveness that makes you feel fully present in your own life — engaged, curious, moved by beauty, capable of deep enjoyment. It is the opposite of going through the motions.</p>
            <p>Many people have lived so long in survival mode — managing stress, meeting obligations, keeping everything together — that they have lost touch with what it feels like to simply be alive and glad of it. Vitality work is about recovering that connection.</p>
            <p>In our sessions, we explore what has dimmed your aliveness — and begin, carefully and courageously, to rekindle it.</p>
        `,
        quote: "The opposite of depression is not happiness. It is vitality — the raw, unguarded sense of being alive.",
        pillarsTitle: "Three Dimensions of Vitality",
        pillarsIntro: "True vitality is sourced from the body, the emotions, and the meaning we make of our lives — all three must be tended.",
        pillars: [
            { icon: "🌞", title: "Physical Aliveness", text: "Your body is the ground of all experience. We explore simple, sustainable ways to feel more alive in your physical form." },
            { icon: "❤️", title: "Emotional Openness", text: "To feel joy fully, we must be willing to feel everything fully. Emotional openness is the gateway to vitality." },
            { icon: "✨", title: "Meaning & Delight", text: "What truly delights you? What feels genuinely meaningful? Vitality flourishes when we know — and pursue — the answers." },
        ],
        practicesTitle: "Rekindling Your Aliveness",
        practices: [
            { title: "Pleasure Mapping", text: "Identify the simple, genuine sources of pleasure and joy in your life — and tend to them intentionally." },
            { title: "Delight Practice", text: "A daily practice of noticing what moves, delights, or inspires you — and letting it land." },
            { title: "Body Connection", text: "Simple somatic practices that reconnect you to the lived experience of being in a body." },
            { title: "Play Restoration", text: "Reclaim the playfulness that may have been buried under adult seriousness and obligation." },
            { title: "Passion Exploration", text: "Identify what you love — and begin to make more room for it." },
            { title: "Rest as Restoration", text: "True rest is not collapse. It is the active restoration of your vital resources." },
        ],
        ctaTitle: "Ready to feel more fully alive?",
        ctaText: "Vitality is not a luxury. It is the foundation of a life well lived. Let's find yours together."
    },

    Joy: {
        tagline: "Joy is not chased — it is allowed.",
        badges: ["Happiness", "Play", "Gratitude", "Lightness"],
        heroLabel: "HAPPINESS · GRATITUDE · PLAY",
        introTitle: "The Practice of Joy",
        introText: `
            <p>Joy is one of the most misunderstood human experiences. We tend to think of it as something that happens to us — a reward for achievement, a byproduct of good circumstances. But joy, as a sustained quality of life rather than a passing mood, is something that can be cultivated.</p>
            <p>Many people are unconsciously blocking joy — through perfectionism, through guilt about feeling good when others are suffering, through the habit of waiting for things to be different before allowing themselves to be happy. In our sessions, we gently uncover and begin to dissolve these blocks.</p>
            <p>True joy is not frivolous. It is one of the clearest signals that you are living in alignment with who you truly are.</p>
        `,
        quote: "Joy is not a luxury. It is a compass — pointing always towards what is most deeply true.",
        pillarsTitle: "Three Pathways to Lasting Joy",
        pillarsIntro: "Joy is cultivated through presence, connection, and the gradual healing of everything inside us that says we don't deserve to feel it.",
        pillars: [
            { icon: "🎉", title: "Permission", text: "Many of us carry a quiet belief that we must earn joy. We explore this belief — and begin to dissolve it." },
            { icon: "🌸", title: "Present-Moment Savouring", text: "Joy lives in the present. We build the capacity to slow down and truly receive the good that is already here." },
            { icon: "💞", title: "Connection", text: "The deepest joy is relational. We explore how to open more fully to the people and experiences that genuinely nourish us." },
        ],
        practicesTitle: "Letting Joy In",
        practices: [
            { title: "Gratitude Practice", text: "Not as toxic positivity, but as a genuine, grounding practice of noticing what is already good." },
            { title: "Play & Laughter", text: "Reclaim your capacity for lightness, silliness, and genuine laughter — one of the body's most powerful healing tools." },
            { title: "Joy Blockers", text: "Identify the specific beliefs and habits that prevent you from fully receiving joy." },
            { title: "Celebration", text: "Learn to mark and genuinely celebrate your growth and your wins — however small." },
            { title: "Savoring", text: "Slow down long enough to truly receive and enjoy the good moments that already exist in your life." },
            { title: "Relational Joy", text: "Deepen the connections that bring genuine happiness — and create more room for them." },
        ],
        ctaTitle: "Ready to let more joy in?",
        ctaText: "You don't need to wait for the right circumstances. Joy is available now. Let's find out what's been keeping it at bay."
    },

    Growth: {
        tagline: "Growth is not a destination. It is a way of walking through life.",
        badges: ["Development", "Learning", "Transformation", "Expansion"],
        heroLabel: "DEVELOPMENT · TRANSFORMATION",
        introTitle: "The Path of Conscious Growth",
        introText: `
            <p>Real growth is rarely comfortable. It asks us to move beyond what is familiar, to question what we thought we knew, to sit with uncertainty long enough for something new to emerge. It is not a linear process — it spirals, doubles back, and sometimes looks like regression before it looks like progress.</p>
            <p>What makes the difference is not intelligence or willpower, but honest self-awareness and the willingness to be changed by what we discover. In our sessions together, we create a space where that kind of change becomes possible.</p>
            <p>Growth work is some of the most demanding — and most rewarding — work a person can undertake. I am honoured to walk alongside those who choose it.</p>
        `,
        quote: "Growth asks only one thing: the willingness to be honest about where you actually are.",
        pillarsTitle: "Three Dimensions of Real Growth",
        pillarsIntro: "Genuine transformation requires more than information — it requires honesty, courage, and the willingness to be changed.",
        pillars: [
            { icon: "🌱", title: "Self-Awareness", text: "The foundation of all growth is honest self-knowledge — seeing ourselves clearly, without harsh judgment or protective distortion." },
            { icon: "🦋", title: "Edge Work", text: "Growth happens at our edges — in the places where we feel most challenged, most afraid, and most alive. We explore these places together." },
            { icon: "📈", title: "Integration", text: "New insights must be lived, not just understood. We focus on translating inner shifts into lasting outer change." },
        ],
        practicesTitle: "Growing With Intention",
        practices: [
            { title: "Developmental Assessment", text: "Understand where you are in your growth journey — and what the next edges look like." },
            { title: "Feedback Integration", text: "Learn to receive honest feedback as a gift, not a threat." },
            { title: "Comfort Zone Expansion", text: "Gradual, supported practice at the edges of your familiar territory." },
            { title: "Failure Reframing", text: "Transform your relationship with failure — from something shameful to something instructive." },
            { title: "Growth Tracking", text: "Learn to notice and celebrate the small, incremental changes that add up to transformation." },
            { title: "Accountability", text: "The most powerful growth happens in relationship — with honest reflection and gentle accountability." },
        ],
        ctaTitle: "Ready to grow beyond what you've been?",
        ctaText: "Growth is an act of courage. And courage is always more available than we think — with the right support."
    },

    Challenges: {
        tagline: "The things that test us most are often the things that shape us most.",
        badges: ["Resilience", "Adversity", "Transformation", "Courage"],
        heroLabel: "ADVERSITY · RESILIENCE · COURAGE",
        introTitle: "Meeting What Is Hard",
        introText: `
            <p>Challenges are not the interruption of a meaningful life — they are part of what makes a life meaningful. The question is not how to avoid difficulty, but how to meet it in a way that leaves us more whole, more connected to ourselves and others, rather than less.</p>
            <p>There is a particular kind of wisdom that can only be forged through real adversity. But that wisdom is not automatic. It requires that we approach our challenges with honesty, with support, and with a willingness to be changed by what we encounter.</p>
            <p>In our sessions, we turn towards what is hard — gently, honestly, and together. Because the things we face, rather than flee, tend to transform us in the most profound ways.</p>
        `,
        quote: "We don't get to choose our challenges. We get to choose who we become because of them.",
        pillarsTitle: "Three Ways We Meet Our Challenges",
        pillarsIntro: "How we face difficulty matters as much as what we face. Together we cultivate the inner resources to meet life's hardest moments with grace.",
        pillars: [
            { icon: "⚓", title: "Groundedness", text: "Remain rooted in yourself even when everything feels unstable. Inner ground is the most reliable anchor we have." },
            { icon: "🌊", title: "Emotional Courage", text: "Face what is difficult without numbing, avoiding, or being overwhelmed. This is perhaps the most important skill in a human life." },
            { icon: "🔄", title: "Post-Traumatic Growth", text: "Research shows that adversity, well-met, can lead to profound personal growth. We explore how to access this transformative potential." },
        ],
        practicesTitle: "Building the Capacity to Face What Is Hard",
        practices: [
            { title: "Crisis Navigation", text: "Practical, grounded tools for moving through acute difficulty without making things worse." },
            { title: "Meaning-Making", text: "Find the meaning within your challenge — not as silver-lining thinking, but as a deep, honest search for what this is teaching you." },
            { title: "Support Activation", text: "Identify who and what genuinely supports you — and lean on them." },
            { title: "Grief Work", text: "Loss is often at the heart of our greatest challenges. We create space to grieve what needs grieving." },
            { title: "Identity Resilience", text: "Challenges often threaten our sense of self. We work to build an identity robust enough to weather difficulty." },
            { title: "Future Self", text: "Connect with the version of yourself who has come through this — and let that vision guide you." },
        ],
        ctaTitle: "Ready to face what you've been carrying?",
        ctaText: "You don't have to meet this alone. I walk alongside people through their most difficult passages — with honesty, warmth, and deep respect."
    }
};

const ALL_ORBS = ["Energy","Focus","Purpose","Strength","Peace","Clarity","Harmony","Vitality","Joy","Growth","Challenges"];

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic') || 'Energy';
    const data = ORB_DATA[topic] || ORB_DATA['Energy'];

    document.title = `Heal-thy-self — ${topic}`;

    // Hero
    document.getElementById('heroLabel').textContent = data.heroLabel || 'RELATIONSHIP GUIDANCE';
    document.getElementById('heroTitle').textContent = topic;
    document.getElementById('heroTagline').textContent = data.tagline;

    const badgesEl = document.getElementById('heroBadges');
    (data.badges || []).forEach(b => {
        const span = document.createElement('span');
        span.className = 'badge';
        span.textContent = b;
        badgesEl.appendChild(span);
    });

    // Intro
    document.getElementById('introTitle').textContent = data.introTitle;
    document.getElementById('introText').innerHTML = data.introText;
    document.getElementById('quoteText').textContent = data.quote;

    // Pillars
    document.getElementById('pillarsTitle').textContent = data.pillarsTitle;
    document.getElementById('pillarsIntro').textContent = data.pillarsIntro;
    const pillarsGrid = document.getElementById('pillarsGrid');
    (data.pillars || []).forEach((p, i) => {
        pillarsGrid.innerHTML += `
            <div class="pillar-card">
                <span class="pillar-number">0${i+1}</span>
                <div class="pillar-icon"><span style="font-size:1.4rem">${p.icon}</span></div>
                <h3>${p.title}</h3>
                <p>${p.text}</p>
            </div>`;
    });

    // Practices
    document.getElementById('practicesTitle').textContent = data.practicesTitle || 'What We Work On Together';
    const practicesGrid = document.getElementById('practicesGrid');
    (data.practices || []).forEach(pr => {
        practicesGrid.innerHTML += `
            <div class="practice-item">
                <div class="practice-dot"></div>
                <div>
                    <h4>${pr.title}</h4>
                    <p>${pr.text}</p>
                </div>
            </div>`;
    });

    // CTA
    document.getElementById('ctaTitle').textContent = data.ctaTitle || 'Ready to explore this together?';
    document.getElementById('ctaText').textContent = data.ctaText || '';

    // Orb nav pills
    const orbNav = document.getElementById('orbNavGrid');
    ALL_ORBS.forEach(orb => {
        const a = document.createElement('a');
        a.href = `orb.html?topic=${encodeURIComponent(orb)}`;
        a.className = 'orb-pill' + (orb === topic ? ' active' : '');
        a.textContent = orb;
        orbNav.appendChild(a);
    });
}

// ─── SCROLL / FADE ────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.14 });

// Run init first so elements are rendered, then observe
init();
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
