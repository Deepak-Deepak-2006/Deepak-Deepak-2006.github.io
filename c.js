function fun2(){
  alert("Request send Successfully")
}

function fun1(){
  alert("Request send successfully")
}

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);

    const icon = menuButton.querySelector("i");
    if (icon) {
      icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");

      const icon = menuButton.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const typingElement = document.querySelector("#typing-text");

if (typingElement) {
  const phrases = [
    "Web Developer & Web Research Analyst",
    "BCA Graduate",
    "Web Developer",
    "Web Research Analyst"
  ];
  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  const typeLoop = () => {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      typingElement.textContent = currentPhrase.slice(0, characterIndex + 1);
      characterIndex++;

      if (characterIndex === currentPhrase.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
      setTimeout(typeLoop, 75);
    } else {
      typingElement.textContent = currentPhrase.slice(0, characterIndex - 1);
      characterIndex--;

      if (characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 350);
        return;
      }
      setTimeout(typeLoop, 40);
    }
  };

  typeLoop();
}

const revealSections = document.querySelectorAll(
  "#about, #experience, #projects, #contact"
);

if ("IntersectionObserver" in window) {
  revealSections.forEach((section) => section.classList.add("scroll-reveal"));

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealSections.forEach((section) => sectionObserver.observe(section));
} else {
  revealSections.forEach((section) => section.classList.add("is-visible"));
}
