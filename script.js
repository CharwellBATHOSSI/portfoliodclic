/* ------------------ MENU CHANGE ON SCROLL ------------------ */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ------------------ SMOOTH SCROLL ------------------ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* ------------------ ANIMATION BARRES DE COMPÉTENCE ------------------ */
const skillBars = document.querySelectorAll(".skill-level");
let skillsAnimated = false;

function animateSkills() {
    const skillsSection = document.querySelector(".skills");
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!skillsAnimated && skillsPosition < windowHeight - 100) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.transition = "2s";
                bar.style.width = width;
            }, 200);
        });
        skillsAnimated = true;
    }
}

window.addEventListener("scroll", animateSkills);

/* ------------------ ANIMATION HOVER SUR LES IMAGES ------------------ */
const projectImages = document.querySelectorAll(".projet-item img");

projectImages.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.3s";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

/* ------------------ BOUTON RETOUR EN HAUT ------------------ */
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 12px";
backToTop.style.fontSize = "20px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.background = "#00aaff";
backToTop.style.color = "white";
backToTop.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
