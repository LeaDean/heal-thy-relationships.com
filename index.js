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
        { label: 'Energy',     angle: 0        },
        { label: 'Focus',      angle: 32.7272  },
        { label: 'Purpose',    angle: 65.4544  },
        { label: 'Strength',   angle: 98.1816  },
        { label: 'Peace',      angle: 130.909  },
        { label: 'Clarity',    angle: 163.636  },
        { label: 'Harmony',    angle: 196.363  },
        { label: 'Vitality',   angle: 229.090  },
        { label: 'Joy',        angle: 261.818  },
        { label: 'Growth',     angle: 294.545  },
        { label: 'Challenges', angle: 327.272  },
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

        outer.addEventListener('mouseenter', () => {
            centerText.textContent = item.label;
            centerText.classList.add('show');
        });
        outer.addEventListener('mouseleave', () => centerText.classList.remove('show'));
        outer.addEventListener('click', () => {
            window.location.href = 'orb.html?topic=' + encodeURIComponent(item.label);
        });
        outer.addEventListener('touchstart', (e) => {
            e.preventDefault();
            centerText.textContent = item.label;
            centerText.classList.add('show');
            setTimeout(() => {
                centerText.classList.remove('show');
                window.location.href = 'orb.html?topic=' + encodeURIComponent(item.label);
            }, 600);
        }, { passive: false });
    });

    document.addEventListener('visibilitychange', () => {
        const state = document.hidden ? 'paused' : 'running';
        document.querySelectorAll('.orbit-satellite').forEach(el => {
            el.style.animationPlayState = state;
        });
    });
})();
