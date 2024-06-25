import gsap from "gsap";

export const animatePageIn = () => {
  const banner = document.querySelectorAll("#banner");
  const tl = gsap.timeline();
  tl.set(banner, {
    yPercent: 0,
  }).to(banner, {
    yPercent: 100,
    stagger: 0.2,
  });
};
export const animatePageInY = () => {
  const banner = document.querySelectorAll("#banner");
  const tl = gsap.timeline();
  tl.set(banner, {
    xPercent: 0,
  }).to(banner, {
    xPercent: -100,
    stagger: 0.2,
  });
};
