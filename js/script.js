const delay = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const pageTransition = async () => {
  let tl = gsap.timeline();
  await tl.to(".loader-wrapper", {
    duration: 1.1,
    width: "100%",
    left: "0",
    ease: "Expo.easeInOut",
  });
  const polyTeamTitle = document.querySelector(".loader-wrapper .loader h1");
  polyTeamTitle.style.webkitAnimationPlayState = "running";
  tl.to(".loader-wrapper", {
    duration: 0.9,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 5.4,
  });
  tl.set(".loader-wrapper", { left: "-100%" });
};

const contentAnimation = () => {
  let tl = gsap.timeline();
  tl.from(".animate-this", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2,
  });
};

const polyTeamTitle = document.querySelector(".loader-wrapper .loader h1");
polyTeamTitle.style.webkitAnimationPlayState = "paused";

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(6600);
        done();
      },
      async enter() {
        contentAnimation();
      },
      async once() {
        contentAnimation();
      },
    },
  ],
});
