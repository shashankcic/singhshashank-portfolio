function SmoothScroll(e) {
  e.preventDefault();
  const target = e.currentTarget.getAttribute("href");
  document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

export default SmoothScroll;
