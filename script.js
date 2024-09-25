const lenis = new Lenis({
  duration: 6,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -16 * t)),
  smooth: true,
  smoothTouch: false,
});

lenis.on('scroll', (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


function first() {
  var namelog = document.querySelectorAll(".namelogo h1");
  var allLetters = [];

  namelog.forEach((name) => {
      var clutter = '';
      name.textContent.split("").forEach((letter) => {
          clutter += `<div class="letterspan">${letter}</div>`;
      });
      name.innerHTML = clutter;
      allLetters.push(...name.querySelectorAll('.letterspan'));
  });

  var tl = gsap.timeline();
  tl.from(".Container", {
      opacity: 0,
      ease: "power3.inOut"
  })
      .from(allLetters, {
          y: -50,
          stagger: {
              amount: 0.5
          },
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.inOut"
      }, "a")
      .from(".gallery", {
          opacity: 0,
          duration: 1,
          ease: "power4.inOut"
      });

  var gallery = document.querySelector(".gallery");

  if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "+=" + gallery.offsetHeight,
              scrub: 0.8,
              pin: true,
          }
      });
      tl.to(".nameheading", {
          width: "20%",
          height: "10%",
          duration: 50,
          top: "-15%",
          ease: "linear",
      }, "b")
          .to("#namelogo h1", {
              fontSize: "2rem",
              ease: "linear",
              duration: 50,
          }, "b")
          .to(".gallery", {
              y: () => `-${document.querySelector(".gallery").offsetHeight + 300}`,
              duration: 50,
              ease: "linear",
          }, "b")
          .to(".contentWraper", {
              opacity: 1,
          }, "b")
          .from(".uperheading, .uperheading h1 ,.wfirst p, .introheading h1 ,#cta_animate", {
              opacity: 0,
              y: "10vh",
              duration: 5,
              stagger: {
                  amount: 0.3
              },
              ease: "linear"
          });
  } else if (window.matchMedia("(min-width: 768px) and (max-width: 1020px)").matches) {
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "+=" + gallery.offsetHeight,
              scrub: 0.8,
              pin: true,
          }
      });
      tl.to(".nameheading", {
          width: "20%",
          height: "10%",
          duration: 10,
          top: "5%",
          ease: "Power4.Out",
      }, "b")
          .to("#namelogo h1", {
              fontSize: "2rem",
              ease: "Power4.Out",
              duration: 12,
          }, "b")
          .to("#namelogo h1", {
              fontSize: "3rem",
              ease: "Power4.Out",
              duration: 12,
          }, "b")
          .to(".gallery", {
              y: () => `-${document.querySelector(".gallery").offsetHeight + 190}`,
              duration: 20,
              ease: "power2.easeInOut",
          }, "b")
          .to(".contentWraper", {
              opacity: 1,
          }, "b")
          .from(".uperheading, .uperheading h1 ,.wfirst p, .introheading h1 ,#cta_animate", {
              opacity: 0,
              y: "10vh",
              duration: 1,
              stagger: {
                  amount: 0.3
              },
              ease: "Power4.Out"
          });
  } else {
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "+=" + gallery.offsetHeight,
              scrub: 0.8,
              pin: true,
          }
      });

      tl.to(".nameheading", {
          width: "20%",
          height: "10%",
          duration: 10,
          top: "5%",
          ease: "Power4.Out",
      }, "b")
          .to("#namelogo h1", {
              fontSize: "2.6rem",
              ease: "Power4.Out",
              duration: 12,
          }, "b")
          .to(".gallery", {
              y: () => `-${document.querySelector(".gallery").offsetHeight + 280}`,
              duration: 20,
              ease: "power2.easeInOut",
          }, "b")
          .to(".contentWraper", {
              opacity: 1,
          }, "b")
          .from(".uperheading, .uperheading h1 ,.wfirst p, .introheading h1 ,#cta_animate", {
              opacity: 0,
              y: "10vh",
              duration: 1,
              stagger: {
                  amount: 0.3
              },
              ease: "Power4.Out"
          });
  }
}

first();

function second() {
  gsap.from(".second .videosection", {
      width: "90%",
      ease: "Power4.Out",
      borderRadius: "12px",
      duration: 3,
      scrollTrigger: {
          trigger: ".second",
          scroller: "body",
          start: "top 90%",
          end: "50% 90%",
          scrub: 1,
      }
  });
  gsap.from(".second .videosection", {
      width: "100%",
      ease: "Power4.Out",
      borderRadius: "12px",
      duration: 3,
      scrollTrigger: {
          trigger: ".second",
          scroller: "body",
          start: "bottom 90%",
          end: "bottom  50%",
          scrub: 1,
      }
  });
}

second();

  let initialScreenSize = window.innerWidth;
  let resizeTimeout;
  
  window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
          let currentScreenSize = window.innerWidth;
  
          const smallDeviceMin = 320;
          const smallDeviceMax = 677;
          const responsiveBreakpoint = 768; 
          const largeScreenBreakpoint = 1024;
  
          if (
              (initialScreenSize < smallDeviceMax && currentScreenSize >= smallDeviceMax) ||
              (initialScreenSize >= smallDeviceMax && currentScreenSize < smallDeviceMax) ||
              (initialScreenSize < responsiveBreakpoint && currentScreenSize >= responsiveBreakpoint) ||
              (initialScreenSize >= responsiveBreakpoint && currentScreenSize < responsiveBreakpoint) ||
              (initialScreenSize < largeScreenBreakpoint && currentScreenSize >= largeScreenBreakpoint) ||
              (initialScreenSize >= largeScreenBreakpoint && currentScreenSize < largeScreenBreakpoint)
          ) {
              location.reload();
          }
  
          initialScreenSize = currentScreenSize;
      }, 200);
  });
  
 