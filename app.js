document.addEventListener("DOMContentLoaded", () => {
  const listBg = document.querySelectorAll(".bg");
  const listTab = document.querySelectorAll(".tab");
  const titleBanner = document.querySelector(".banner h1");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Apply parallax to background elements
    listBg.forEach((bg, index) => {
      let translateY;

      // Customize movement speed per index for finer control
      if (index === 0) {
        translateY = scrollY / 3;
      } else if (index === listBg.length - 1) {
        translateY = 0; // Fixed or no movement for last element
      } else {
        translateY = scrollY * (index / 2);
      }

      bg.style.transform = `translateY(${translateY}px)`;
    });

    // Apply parallax to banner title
    if (titleBanner) {
      titleBanner.style.transform = `translateY(${scrollY * 2}px)`;
    }

    // Activate tabs based on scroll position
    listTab.forEach((tab) => {
      const tabTop = tab.getBoundingClientRect().top + scrollY;
      const threshold = 550;

      if (tabTop - scrollY < threshold) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
});
