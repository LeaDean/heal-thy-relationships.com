// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// Burger menu
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
    burger.classList.add('open');
    mobileMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    burger.classList.remove('open');
    mobileMenu.style.display = 'none';
    document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
    burger.classList.contains('open') ? closeMenu() : openMenu();
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fade in observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.18 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Orbit
(function () {
    const ITEMS = [
        { label: 'Energy',     angle: 0,       preview: 'Reconnect with the vitality that is your natural state.'              },
        { label: 'Focus',      angle: 32.7272, preview: 'A clear mind is the foundation of a meaningful life.'                 },
        { label: 'Purpose',    angle: 65.4544, preview: 'The question beneath all questions: why am I here?'                   },
        { label: 'Strength',   angle: 98.1816, preview: 'True strength is knowing when to soften, and when to hold firm.'      },
        { label: 'Peace',      angle: 130.909, preview: 'Peace is not the absence of difficulty — it is a way of meeting it.'  },
        { label: 'Clarity',    angle: 163.636, preview: 'When the noise settles, you already know what is true.'               },
        { label: 'Harmony',    angle: 196.363, preview: 'Harmony is the art of holding difference without discord.'            },
        { label: 'Vitality',   angle: 229.090, preview: 'Aliveness is your birthright — let\'s find what\'s dimming it.'      },
        { label: 'Joy',        angle: 261.818, preview: 'Joy is not frivolous. It is one of the most reliable compasses we have.' },
        { label: 'Growth',     angle: 294.545, preview: 'Growth is rarely comfortable — and almost always worth it.'           },
        { label: 'Challenges', angle: 327.272, preview: 'The hardest moments carry the seeds of our deepest becoming.'         },
    ];

    const DURATION = 36;
    const wrap = document.getElementById('orbitWrap');
    const centerText = document.getElementById('orbitCenterText');

    ITEMS.forEach(item => {
        const delay = -((item.angle / 360) * DURATION);
        const outer = document.createElement('div');
        outer.className = 'orbit-satellite';
        outer.style.setProperty('--orbit-delay', delay + 's');

        const inner = document.createElement('div');
        inner.className = 'orbit-satellite-inner';

        const label = document.createElement('span');
        label.className = 'orbit-satellite-label';
        label.textContent = item.label;

        inner.appendChild(label);
        outer.appendChild(inner);
        wrap.appendChild(outer);

        function showPreview() {
            centerText.innerHTML =
                '<span class="orb-center-label">' + item.label + '</span>' +
                '<span class="orb-center-preview">' + item.preview + '</span>';
            centerText.classList.add('show');
        }

        outer.addEventListener('mouseenter', showPreview);
        outer.addEventListener('mouseleave', () => centerText.classList.remove('show'));
        outer.addEventListener('click', () => {
            window.location.href = 'orb.html?topic=' + encodeURIComponent(item.label);
        });
        outer.addEventListener('touchstart', (e) => {
            e.preventDefault();
            showPreview();
            setTimeout(() => {
                centerText.classList.remove('show');
                window.location.href = 'orb.html?topic=' + encodeURIComponent(item.label);
            }, 900);
        }, { passive: false });
    });

    document.addEventListener('visibilitychange', () => {
        const state = document.hidden ? 'paused' : 'running';
        document.querySelectorAll('.orbit-satellite').forEach(el => {
            el.style.animationPlayState = state;
        });
    });
})();
