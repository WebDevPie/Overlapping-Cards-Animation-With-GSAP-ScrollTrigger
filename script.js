gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        scrub: 1
    }
});

timeln.addLabel('card1');
timeln.to('.card-1', {
    xPercent: 0,
    opacity: 1
});

timeln.from('.card-2', {
    xPercent: 75,
    opacity: 0
});
timeln.addLabel("card2");

timeln.to(".card-1", {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5
}, "-=0.3");

timeln.to('.card-2', {
    xPercent: 0,
    opacity: 1
});

timeln.from('.card-3', {
    xPercent: 75,
    opacity: 0
});
timeln.addLabel('card3');

timeln.to(".card-2", {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6
}, "-=0.3");

timeln.to(".card-3", {
    xPercent: 0,
    opacity: 1
});

timeln.to('.card-3', {});