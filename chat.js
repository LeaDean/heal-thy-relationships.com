/**
 * Heal-thy-relationships — AI Guide Chat Widget
 * Add to index.html and orb.html just before </body>:
 * <script src="chat.js"></script>
 */

(function () {

    /* ── Knowledge base files to load ───────────────────────────────
       To update the chatbot's knowledge, simply edit the .txt files
       in your /knowledge/ folder in GitHub. No coding needed.
    ─────────────────────────────────────────────────────────────── */
    const KNOWLEDGE_FILES = [
        'knowledge/about-me.txt',
        'knowledge/approach.txt',
        'knowledge/relationships.txt',
        'knowledge/sessions-and-pricing.txt',
        'knowledge/faqs.txt',
    ];

    const API_KEY = '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';

    /* ── Styles ─────────────────────────────────────────────────── */
    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

    :root {
        --c-cool:        #14b8a6;
        --c-cool-light:  #67e8d8;
        --c-cool-glow:   rgba(20,184,166,0.22);
        --c-cool-dim:    rgba(20,184,166,0.08);
        --c-cool-border: rgba(20,184,166,0.22);
        --c-bg:          #f8fafc;
        --c-bg-mid:      #f1f5f9;
        --c-card:        #ffffff;
        --c-text:        #1e2937;
        --c-text-dim:    #475569;
        --c-text-muted:  #64748b;
    }

    #ht-chat-fab {
        position: fixed;
        bottom: 36px;
        right: 36px;
        z-index: 9000;
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--c-cool), #0f766e);
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 32px var(--c-cool-glow), 0 2px 8px rgba(0,0,0,0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
        overflow: hidden;
    }
    #ht-chat-fab::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
        transform: translateX(-150%);
        transition: transform 0.55s;
        border-radius: 50%;
    }
    #ht-chat-fab:hover::after { transform: translateX(200%); }
    #ht-chat-fab:hover {
        transform: scale(1.1) translateY(-3px);
        box-shadow: 0 16px 48px var(--c-cool-glow);
    }
    #ht-chat-fab svg { transition: transform 0.35s ease, opacity 0.35s ease; }
    #ht-chat-fab.open .fab-icon-open  { transform: scale(0) rotate(90deg); opacity: 0; }
    #ht-chat-fab.open .fab-icon-close { transform: scale(1) rotate(0deg);  opacity: 1; }
    .fab-icon-close { position: absolute; transform: scale(0) rotate(-90deg); opacity: 0; }

    #ht-chat-nudge {
        position: fixed;
        bottom: 114px;
        right: 36px;
        z-index: 8999;
        background: var(--c-card);
        border: 1px solid var(--c-cool-border);
        border-radius: 12px 12px 4px 12px;
        padding: 0.9rem 1.3rem;
        font-family: 'Jost', sans-serif;
        font-size: 0.84rem;
        color: var(--c-text-dim);
        box-shadow: 0 8px 28px rgba(20,184,166,0.12);
        max-width: 220px;
        line-height: 1.5;
        animation: ht-nudge-in 0.5s cubic-bezier(0.23,1,0.32,1) forwards;
        pointer-events: none;
    }
    #ht-chat-nudge span {
        display: block;
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.05rem;
        font-style: italic;
        color: var(--c-text);
        margin-bottom: 0.2rem;
    }
    @keyframes ht-nudge-in {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    #ht-chat-panel {
        position: fixed;
        bottom: 116px;
        right: 36px;
        z-index: 8998;
        width: min(420px, calc(100vw - 32px));
        height: min(620px, calc(100dvh - 140px));
        background: var(--c-card);
        border: 1px solid var(--c-cool-border);
        border-radius: 20px;
        box-shadow: 0 32px 80px rgba(20,184,166,0.14), 0 8px 24px rgba(0,0,0,0.08);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform-origin: bottom right;
        transform: scale(0.85) translateY(20px);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.35s ease;
    }
    #ht-chat-panel.open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: all;
    }

    .ht-panel-header {
        padding: 1.3rem 1.6rem 1.1rem;
        background: linear-gradient(135deg, rgba(20,184,166,0.07), rgba(103,232,216,0.04));
        border-bottom: 1px solid var(--c-cool-border);
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-shrink: 0;
    }
    .ht-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--c-cool), #0f766e);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 14px var(--c-cool-glow);
    }
    .ht-header-info { flex: 1; }
    .ht-header-name {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: #0f172a;
        line-height: 1.1;
    }
    .ht-header-sub {
        font-family: 'Jost', sans-serif;
        font-size: 0.72rem;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        color: var(--c-cool);
        margin-top: 0.15rem;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .ht-status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #22c55e;
        animation: ht-pulse 2.2s ease-in-out infinite;
    }
    @keyframes ht-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%       { opacity: 0.55; transform: scale(0.75); }
    }
    .ht-close-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--c-text-muted);
        padding: 4px;
        border-radius: 6px;
        transition: color 0.25s, background 0.25s;
        display: flex;
    }
    .ht-close-btn:hover { color: var(--c-cool); background: var(--c-cool-dim); }

    .ht-messages {
        flex: 1;
        overflow-y: auto;
        padding: 1.4rem 1.4rem 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        scroll-behavior: smooth;
    }
    .ht-messages::-webkit-scrollbar { width: 4px; }
    .ht-messages::-webkit-scrollbar-track { background: transparent; }
    .ht-messages::-webkit-scrollbar-thumb { background: var(--c-cool-border); border-radius: 4px; }

    .ht-msg {
        display: flex;
        gap: 0.6rem;
        align-items: flex-end;
        animation: ht-msg-in 0.4s cubic-bezier(0.23,1,0.32,1) forwards;
    }
    @keyframes ht-msg-in {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    .ht-msg.user { flex-direction: row-reverse; }

    .ht-msg-avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--c-cool), #0f766e);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ht-msg.user .ht-msg-avatar {
        background: var(--c-bg-mid);
        border: 1px solid var(--c-cool-border);
    }

    .ht-bubble {
        max-width: 80%;
        padding: 0.85rem 1.1rem;
        border-radius: 16px 16px 16px 4px;
        font-family: 'Jost', sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.7;
        color: var(--c-text);
        background: var(--c-bg-mid);
        border: 1px solid rgba(20,184,166,0.1);
    }
    .ht-msg.user .ht-bubble {
        border-radius: 16px 16px 4px 16px;
        background: linear-gradient(135deg, var(--c-cool), #0f766e);
        color: white;
        border: none;
    }

    .ht-typing {
        display: flex;
        gap: 5px;
        align-items: center;
        padding: 0.85rem 1.1rem;
        background: var(--c-bg-mid);
        border: 1px solid rgba(20,184,166,0.1);
        border-radius: 16px 16px 16px 4px;
        width: fit-content;
    }
    .ht-typing span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--c-cool);
        animation: ht-dot 1.3s ease-in-out infinite;
        opacity: 0.5;
    }
    .ht-typing span:nth-child(2) { animation-delay: 0.18s; }
    .ht-typing span:nth-child(3) { animation-delay: 0.36s; }
    @keyframes ht-dot {
        0%, 100% { transform: translateY(0); opacity: 0.4; }
        40%       { transform: translateY(-5px); opacity: 1; }
    }

    .ht-suggestions {
        padding: 0.5rem 1.4rem 0.8rem;
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        flex-shrink: 0;
    }
    .ht-suggestion {
        font-family: 'Jost', sans-serif;
        font-size: 0.75rem;
        letter-spacing: 0.5px;
        color: var(--c-cool);
        background: var(--c-cool-dim);
        border: 1px solid var(--c-cool-border);
        border-radius: 100px;
        padding: 0.4rem 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
    }
    .ht-suggestion:hover {
        background: var(--c-cool);
        color: white;
        border-color: var(--c-cool);
        transform: translateY(-2px);
        box-shadow: 0 4px 14px var(--c-cool-glow);
    }

    .ht-input-row {
        padding: 0.9rem 1.2rem 1.1rem;
        border-top: 1px solid var(--c-cool-border);
        display: flex;
        gap: 0.6rem;
        align-items: flex-end;
        background: var(--c-card);
        flex-shrink: 0;
    }
    .ht-input-row textarea {
        flex: 1;
        resize: none;
        border: 1px solid var(--c-cool-border);
        border-radius: 12px;
        padding: 0.72rem 1rem;
        font-family: 'Jost', sans-serif;
        font-size: 0.88rem;
        font-weight: 300;
        color: var(--c-text);
        background: var(--c-bg-mid);
        line-height: 1.6;
        max-height: 120px;
        overflow-y: auto;
        transition: border-color 0.3s, box-shadow 0.3s;
        margin: 0;
    }
    .ht-input-row textarea:focus {
        outline: none;
        border-color: var(--c-cool);
        box-shadow: 0 0 0 3px rgba(20,184,166,0.1);
        background: white;
    }
    .ht-input-row textarea::placeholder { color: var(--c-text-muted); }
    .ht-send-btn {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--c-cool), #0f766e);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 14px var(--c-cool-glow);
        transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s;
    }
    .ht-send-btn:hover:not(:disabled) {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 8px 24px var(--c-cool-glow);
    }
    .ht-send-btn:disabled { opacity: 0.45; cursor: not-allowed; }

    .ht-panel-footer {
        text-align: center;
        padding: 0 1.2rem 0.7rem;
        font-family: 'Jost', sans-serif;
        font-size: 0.68rem;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--c-text-muted);
        flex-shrink: 0;
    }

    .ht-loading-bar {
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--c-cool), transparent);
        background-size: 200% 100%;
        animation: ht-loading 1.5s ease-in-out infinite;
        flex-shrink: 0;
    }
    @keyframes ht-loading {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }

    @media (max-width: 480px) {
        #ht-chat-fab { bottom: 20px; right: 20px; }
        #ht-chat-nudge { bottom: 100px; right: 20px; }
        #ht-chat-panel { bottom: 96px; right: 16px; left: 16px; width: auto; }
    }
    `;

    const SUGGESTIONS = [
        "How can I improve communication with my partner?",
        "I keep repeating the same patterns in relationships",
        "What's a discovery call like?",
        "I feel emotionally drained — where do I start?",
        "How does your approach work?",
    ];

    const WELCOME = `Welcome. I'm here as a gentle guide — a space to think through what's on your mind around relationships, emotions, or the patterns you find yourself in.\n\nWhat would you like to explore today?`;

    /* ── Build DOM ───────────────────────────────────────────────── */
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const nudge = document.createElement('div');
    nudge.id = 'ht-chat-nudge';
    nudge.innerHTML = `<span>Need a gentle guide?</span>Chat with me — I'm here to help.`;
    document.body.appendChild(nudge);
    setTimeout(() => { nudge.style.display = 'none'; }, 6500);

    const fab = document.createElement('button');
    fab.id = 'ht-chat-fab';
    fab.setAttribute('aria-label', 'Open guidance chat');
    fab.innerHTML = `
        <svg class="fab-icon-open" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <svg class="fab-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>`;
    document.body.appendChild(fab);

    const panel = document.createElement('div');
    panel.id = 'ht-chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Relationship guidance chat');
    panel.innerHTML = `
        <div class="ht-panel-header">
            <div class="ht-avatar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            </div>
            <div class="ht-header-info">
                <div class="ht-header-name">Your Guide</div>
                <div class="ht-header-sub"><span class="ht-status-dot"></span> Here for you</div>
            </div>
            <button class="ht-close-btn" id="ht-close-btn" aria-label="Close chat">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
        <div class="ht-loading-bar" id="ht-loading-bar" style="display:none;"></div>
        <div class="ht-messages" id="ht-messages"></div>
        <div class="ht-suggestions" id="ht-suggestions"></div>
        <div class="ht-input-row">
            <textarea id="ht-textarea" placeholder="Share what's on your mind…" rows="1" aria-label="Your message"></textarea>
            <button class="ht-send-btn" id="ht-send-btn" aria-label="Send message" disabled>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
            </button>
        </div>
        <div class="ht-panel-footer">Heal-thy-relationships • Guildford</div>`;
    document.body.appendChild(panel);

    /* ── State ───────────────────────────────────────────────────── */
    const messagesEl    = document.getElementById('ht-messages');
    const suggestionsEl = document.getElementById('ht-suggestions');
    const textarea      = document.getElementById('ht-textarea');
    const sendBtn       = document.getElementById('ht-send-btn');
    const closeBtn      = document.getElementById('ht-close-btn');
    const loadingBar    = document.getElementById('ht-loading-bar');

    let history         = [];
    let isOpen          = false;
    let isTyping        = false;
    let knowledgeBase   = '';
    let knowledgeLoaded = false;

    /* ── Load knowledge files ────────────────────────────────────── */
    async function loadKnowledge() {
        const results = await Promise.all(
            KNOWLEDGE_FILES.map(file =>
                fetch(file)
                    .then(r => r.ok ? r.text() : '')
                    .catch(() => '')
            )
        );
        knowledgeBase   = results.filter(Boolean).join('\n\n---\n\n');
        knowledgeLoaded = true;
    }

    loadKnowledge();

    function buildSystemPrompt() {
        return `You are a warm, wise, and gently perceptive relationship guidance assistant for the practice "Heal-thy-relationships", based in Guildford, England.

Your role is to:
- Offer thoughtful, emotionally intelligent support around relationships, emotional patterns, communication, self-awareness, and personal growth
- Draw specifically on the knowledge base provided below when answering questions
- Reflect the practice's ethos: deep, practical guidance rooted in timeless wisdom and modern neuroscience
- Be warm, grounded, and non-judgmental — never clinical or cold
- Use gentle, considered language
- Encourage visitors to book a session when appropriate, especially for deeper personal work
- Gently remind users this is a supportive space but not a substitute for professional therapy when relevant

Keep responses concise — 2 to 4 short paragraphs at most. Avoid bullet lists unless truly helpful.
If someone is in crisis, warmly encourage them to reach out to a professional or crisis line immediately.
When asked about sessions, pricing, booking, or background — use the knowledge base below.
If something is not in the knowledge base, say you would be happy to discuss it in a session or discovery call.

=== KNOWLEDGE BASE ===
${knowledgeBase}
=== END KNOWLEDGE BASE ===`;
    }

    /* ── Helpers ─────────────────────────────────────────────────── */
    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/\n/g, '<br>');
    }

    function appendMessage(role, text) {
        const msg = document.createElement('div');
        msg.className = `ht-msg ${role}`;
        const isUser = role === 'user';
        msg.innerHTML = `
            <div class="ht-msg-avatar">
                ${isUser
                    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`
                    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/></svg>`
                }
            </div>
            <div class="ht-bubble">${escapeHtml(text)}</div>`;
        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        return msg;
    }

    function showTyping() {
        const el = document.createElement('div');
        el.className = 'ht-msg assistant';
        el.id = 'ht-typing-indicator';
        el.innerHTML = `
            <div class="ht-msg-avatar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div class="ht-typing"><span></span><span></span><span></span></div>`;
        messagesEl.appendChild(el);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function removeTyping() {
        const el = document.getElementById('ht-typing-indicator');
        if (el) el.remove();
    }

    function buildSuggestions(items) {
        suggestionsEl.innerHTML = '';
        items.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'ht-suggestion';
            btn.textContent = text;
            btn.addEventListener('click', () => {
                textarea.value = text;
                suggestionsEl.innerHTML = '';
                sendMessage();
            });
            suggestionsEl.appendChild(btn);
        });
    }

    function autoResize() {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }

    /* ── Open / close ────────────────────────────────────────────── */
    function openPanel() {
        isOpen = true;
        fab.classList.add('open');
        panel.classList.add('open');
        nudge.style.display = 'none';
        if (history.length === 0) {
            setTimeout(() => {
                appendMessage('assistant', WELCOME);
                buildSuggestions(SUGGESTIONS);
            }, 180);
        }
        setTimeout(() => textarea.focus(), 400);
    }

    function closePanel() {
        isOpen = false;
        fab.classList.remove('open');
        panel.classList.remove('open');
    }

    fab.addEventListener('click', () => isOpen ? closePanel() : openPanel());
    closeBtn.addEventListener('click', closePanel);

    /* ── Send message ────────────────────────────────────────────── */
    async function sendMessage() {
        const text = textarea.value.trim();
        if (!text || isTyping) return;

        isTyping = true;
        sendBtn.disabled = true;
        suggestionsEl.innerHTML = '';
        textarea.value = '';
        textarea.style.height = 'auto';

        appendMessage('user', text);
        history.push({ role: 'user', content: text });

        showTyping();

        if (!knowledgeLoaded) {
            loadingBar.style.display = 'block';
            await loadKnowledge();
            loadingBar.style.display = 'none';
        }

        try {
            const res = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true',
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    system: buildSystemPrompt(),
                    messages: history,
                }),
            });

            const data = await res.json();
            removeTyping();

            const reply = data.content?.find(b => b.type === 'text')?.text
                || "I'm so sorry — something went quiet on my end. Please try again in a moment.";

            history.push({ role: 'assistant', content: reply });
            appendMessage('assistant', reply);
            buildSuggestions(getFollowUps(text, reply));

        } catch (err) {
            removeTyping();
            appendMessage('assistant', "I'm sorry, I seem to have lost connection for a moment. Please try again.");
            console.error('Heal-thy-chat error:', err);
        }

        isTyping = false;
        sendBtn.disabled = textarea.value.trim().length === 0;
    }

    function getFollowUps(userMsg, reply) {
        const lower = userMsg.toLowerCase() + reply.toLowerCase();
        if (lower.includes('partner') || lower.includes('couple'))
            return ["How do couples sessions work?", "What does a first session look like?", "Book a discovery call"];
        if (lower.includes('book') || lower.includes('session') || lower.includes('cost') || lower.includes('price'))
            return ["What's included in a discovery call?", "Do you work online?", "I'm ready to begin"];
        if (lower.includes('anxious') || lower.includes('overwhelm') || lower.includes('stress'))
            return ["How do you approach emotional regulation?", "What is somatic practice?", "Tell me more about your approach"];
        if (lower.includes('family') || lower.includes('parent') || lower.includes('sibling'))
            return ["How do family patterns form?", "Can you help with boundary setting?", "Tell me about individual sessions"];
        if (lower.includes('work') || lower.includes('colleague') || lower.includes('boss'))
            return ["How do work relationships affect us?", "What is energy management?", "Tell me about your approach"];
        return ["What can I expect from sessions?", "Tell me more about your approach", "I'd like to book a call"];
    }

    /* ── Input events ────────────────────────────────────────────── */
    textarea.addEventListener('input', () => {
        autoResize();
        sendBtn.disabled = textarea.value.trim().length === 0 || isTyping;
    });

    textarea.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!sendBtn.disabled) sendMessage();
        }
    });

    sendBtn.addEventListener('click', sendMessage);

})();
