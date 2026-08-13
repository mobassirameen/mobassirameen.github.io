// ==========================================
// Smooth Scrolling
// ==========================================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// Navbar Background on Scroll
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,12,25,0.95)";
        header.style.padding = "14px 8%";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.25)";
        header.style.padding = "20px 8%";
        header.style.boxShadow = "none";

    }

});


// ==========================================
// Scroll Reveal Animation
// ==========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card,.publication,.about-card,.contact-box")
    .forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


// ==========================================
// Typing Effect
// ==========================================

const title = document.querySelector(".hero-text h2");

const text = "Experimental Particle Physicist";

let index = 0;

function typeWriter() {

    if (!title) return;

    if (index <= text.length) {

        title.textContent = text.substring(0, index);

        index++;

        setTimeout(typeWriter, 70);

    }

}

if (title) {

    title.textContent = "";

    window.addEventListener("load", typeWriter);

}


// ==========================================
// Button Hover Glow
// ==========================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow = "0 0 35px rgba(46,168,255,.8)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "none";

    });

});


// ==========================================
// Project Card Tilt Effect
// ==========================================

document.querySelectorAll("#projects .card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;

        const rotateX = (0.5 - y / rect.height) * 12;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});


// ==========================================
// Floating Background Effect
// ==========================================

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hero.style.backgroundPosition =
        `${50 + x * 4}% ${50 + y * 4}%`;

});

// ==========================================
// Gallery Lightbox
// ==========================================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const lightboxClose = document.querySelector(".lightbox-close");


galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});


lightboxClose.addEventListener("click", () => {

    lightbox.style.display = "none";

});


lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// ==========================================
// Footer Year
// ==========================================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Dr. Mohammad Mobassir Ameen | Indian Institute of Technology Madras`;

}
