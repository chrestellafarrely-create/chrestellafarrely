// Scroll animation
const scrollElements = document.querySelectorAll(".scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight)/dividend);
};
const displayScrollElement = (element) => { element.classList.add("scrolled"); };
const handleScrollAnimation = () => { scrollElements.forEach(el => { if(elementInView(el,1.25)) displayScrollElement(el); }); };
window.addEventListener("scroll", handleScrollAnimation);

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => { navLinks.classList.toggle("active"); });
