const lenis = new Lenis({
  duration: 6,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -16 * t)),
  smooth: true,
  smoothTouch: false,
});

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function first() {
  var namelog = document.querySelectorAll(".namelogo h1");
  var allLetters = [];

  namelog.forEach((name) => {
    var clutter = "";
    name.textContent.split("").forEach((letter) => {
      clutter += `<div class="letterspan">${letter}</div>`;
    });
    name.innerHTML = clutter;
    allLetters.push(...name.querySelectorAll(".letterspan"));
  });

  var tl = gsap.timeline();
  tl.from(".Container", {
    opacity: 0,
    ease: "power3.inOut",
  })
    .from(
      allLetters,
      {
        y: -50,
        stagger: {
          amount: 0.5,
        },
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "a"
    )
    .from(".gallery", {
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
    });

  var gallery = document.querySelector(".gallery");

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "+=" + gallery.offsetHeight,
      scrub: 0.8,
      pin: true,
    },
  });

  tl2
    .to(
      ".nameheading",
      {
        width: "20%",
        height: "10%",
        duration: 10,
        top: "5%",
        ease: "Power4.Out",
      },
      "b"
    )
    .to(
      "#namelogo h1",
      {
        fontSize: "2.6rem",
        ease: "Power4.Out",
        duration: 12,
      },
      "b"
    )
    .to(
      ".gallery",
      {
        y: `-${gallery.offsetHeight}`, // 20vw in pixels
        duration: 20,
        ease: "power2.easeInOut",
      },
      "b"
    )
    .to(
      ".contentWraper",
      {
        opacity: 1,
      },
      "b"
    )
    .from(
      ".uperheading, .uperheading h1 ,.wfirst p, .introheading h1 ,#cta_animate",
      {
        opacity: 0,
        y: "10vh",
        duration: 1,
        stagger: {
          amount: 0.3,
        },
        ease: "Power4.Out",
      }
    );

// gsap.matchMedia().add("(min-width: 320px) and (max-width: 767px)", function() {
//   var tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#home",
//       start: "top top",
//       end: "+=" + gallery.offsetHeight,
//       scrub: 0.8,
//       pin: true,
//       markers: true,
//     },
//   });
//   tl2.to("#namelogo h1", {
//     fontSize: "1.8rem",
//     ease: "Power4.Out",
//     duration: 12,
//   }, "q");
// });


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
    },
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
    },
  });
}

second();


const mobile = 428;
const tablet = 1024;
const desktop = 1440;

function SideNavbarfun() {
  function HeaderSideNavBarDesktop() {
    var ham = document.querySelector(".hamburger");
    var line1 = document.querySelector(".hamburger .line1");
    var line2 = document.querySelector(".hamburger .line2");
    const sidebar = document.querySelector(".SideNav__Sidebar");
    const SideNavbar = document.querySelector(".SideNav__Wrapper");
    const Mosq = document.querySelector(".SideNav");
    const Noise__NoiseWrapper = document.querySelector(".Noise__NoiseWrapper");
    const Noise__NoiseAnimation = document.querySelector(
      ".Noise__NoiseAnimation"
    );
    const Contact_logo1 = document.querySelector("#main-Wrapper .Logo ");

    let isOpen = false;

    function toggleSidebar() {
      isOpen = !isOpen;

      if (isOpen) {
        transitionAnimateIn();
        Contact_logo1.style.zIndex = "9999";
      } else {
        transitionAnimateOut();
        Contact_logo1.style.zIndex = "999999999";
      }
    }

    function transitionAnimateIn() {
      ham.classList.toggle("active");
      line1.style.transform = `translate(-0%, -50%) rotate(-45deg)`;
      line1.style.top = `45%`;
      line2.style.transform = `translate(-0%, -50%) rotate(45deg)`;
      line2.style.top = `45%`;
      line1.style.backgroundColor = "#fff";
      line2.style.backgroundColor = "#fff";
      Mosq.style.opacity = 1;

      SideNavbar.style.pointerEvents = "all";
      Noise__NoiseWrapper.style.display = "block";
      Noise__NoiseAnimation.style.display = "block";
      const sidebarWidth = sidebar.getBoundingClientRect().width;
      const sidebarHeight = window.innerHeight;

      if (window.innerWidth > mobile) {
        const navOpenTimeline = gsap.timeline({
          ease: "M0,0 C0.79,0.01 0.58,1.05 1,1",
          paused: false,
        });

        navOpenTimeline.fromTo(
          sidebar,
          {
            duration: 5,
            left: "-100%",
            clipPath: () =>
              `path('` +
              `M${sidebarWidth * 0.35}, 0 ` +
              `C${sidebarWidth * 0.35}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `C${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth * 0.35}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth * 0.35}, ${sidebarHeight} ` +
              `L0, ${sidebarHeight} ` +
              `0, 0 ` +
              `Z')`,
          },
          {
            duration: 1,
            left: 0,
            ease: "power3.out",
            immediateRender: false,
            clipPath: () =>
              `path('` +
              `M${sidebarWidth}, 0 ` +
              `C${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.5} ` +
              `C${sidebarWidth}, ${sidebarHeight * 0.65} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.65} ` +
              `${sidebarWidth}, ${sidebarHeight} ` +
              `L0, ${sidebarHeight} ` +
              `0, 0 ` +
              `Z')`,
          }
        );
      } else {
        const navOpenTimeline = gsap.timeline({
          paused: false,
        });

        navOpenTimeline.fromTo(
          sidebar,
          {
            top: "-100%",
            clipPath: () =>
              // path when closed
              `path('` +
              `M0, ${window.innerHeight * 0.5} ` +
              `C${window.innerWidth * 0.35}, ${window.innerHeight * 0.5} ` +
              `${window.innerWidth * 0.35}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.5}, ${window.innerHeight} ` +
              `C${window.innerWidth * 0.65}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.65}, ${window.innerHeight * 0.5} ` +
              `${window.innerWidth}, ${window.innerHeight * 0.5} ` +
              `L${window.innerWidth}, 0 ` +
              `0, 0 ` +
              `Z')`,
          },
          {
            duration: 1,
            ease: "power3.out",
            immediateRender: false,
            top: 0,
            // path when open
            clipPath: () =>
              `path('` +
              `M0, ${window.innerHeight} ` +
              `C${window.innerWidth * 0.35}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.35}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.5}, ${window.innerHeight} ` +
              `C${window.innerWidth * 0.65}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.65}, ${window.innerHeight} ` +
              `${window.innerWidth}, ${window.innerHeight} ` +
              `L${window.innerWidth}, 0 ` +
              `0, 0 ` +
              `Z')`,
          }
        );
      }
    }

    function transitionAnimateOut() {
      const sidebar = document.querySelector(".SideNav__Sidebar");
      const sidebarWidth = sidebar?.getBoundingClientRect().width;
      const sidebarHeight = window.innerHeight;

      if (window.innerWidth > mobile) {
        const tl = gsap.timeline({
          delay: 0.5,
        });
        gsap.fromTo(
          sidebar,
          {
            left: 0,
            duration: 1,
            clipPath: () =>
              `path('` +
              `M${sidebarWidth * 0.35}, 0 ` +
              // top half of wave
              `C${sidebarWidth * 0.35}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              // bottom half of wave
              `C${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth * 0.35}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth * 0.35}, ${sidebarHeight} ` +
              // rest of the box
              `L0, ${sidebarHeight} ` +
              `0, 0 ` +
              `Z')`,
          },
          {
            ease: "power3.in",
            immediateRender: false,
            duration: 1,
            left: "-100%",
            clipPath: () =>
              `path('` +
              `M${sidebarWidth * 0.35}, 0 ` +
              `C${sidebarWidth * 0.35}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `C${sidebarWidth}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth * 0.35}, ${sidebarHeight * 0.35} ` +
              `${sidebarWidth * 0.35}, ${sidebarHeight} ` +
              `L0, ${sidebarHeight} ` +
              `0, 0 ` +
              `Z')`,
          },
          1
        );
      } else {
        gsap.fromTo(
          sidebar,
          {
            ease: "power3.out",
            immediateRender: false,
            top: "-100%",
            clipPath: () =>
              `path('` +
              `M0, ${window.innerHeight * 0.5} ` +
              `C${window.innerWidth * 0.35}, ${window.innerHeight * 0.5} ` +
              `${window.innerWidth * 0.35}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.5}, ${window.innerHeight} ` +
              `C${window.innerWidth * 0.65}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.65}, ${window.innerHeight * 0.5} ` +
              `${window.innerWidth}, ${window.innerHeight * 0.5} ` +
              `L${window.innerWidth}, 0 ` +
              `0, 0 ` +
              `Z')`,
          },
          {
            top: 0,
            duration: 1,
            clipPath: () =>
              `path('` +
              `M0, ${window.innerHeight * 0.5} ` +
              `C${window.innerWidth * 0.35}, ${window.innerHeight * 0.5} ` +
              `${window.innerWidth * 0.35}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.5}, ${window.innerHeight} ` +
              `C${window.innerWidth * 0.65}, ${window.innerHeight} ` +
              `${window.innerWidth * 0.65}, ${window.innerHeight * 0.5} ` +
              `${window.innerWidth}, ${window.innerHeight * 0.5} ` +
              `L${window.innerWidth}, 0 ` +
              `0, 0 ` +
              `Z')`,
          },
          0
        );
      }

      line1.style.transform = `translate(-0%, 0%) rotate(0deg)`;
      line1.style.top = `20%`;
      line2.style.transform = `translate(-0%, -0%) rotate(0deg)`;
      line2.style.top = `60%`;
      Mosq.style.opacity = 0;
      Mosq.style.opacity = 0;
      line1.style.backgroundColor = "rgb(153 139 139)";
      line2.style.backgroundColor = "rgb(153 139 139)";
      SideNavbar.style.pointerEvents = "none";
    }

    ham.addEventListener("click", toggleSidebar);
    const navlinks = document.querySelectorAll(".NavItem__Wrapper a");

    navlinks.forEach((navlink) => {
      navlink.addEventListener("click", function (event) {
        if (isOpen) {
          isOpen = !isOpen;
          transitionAnimateOut();
        }
      });
    });
  }

  HeaderSideNavBarDesktop();
}

function okk() {
  var widthh = window.innerWidth;
  var heighth = window.innerHeight;
  window.addEventListener("resize", function () {
    if (window.innerWidth !== widthh && window.innerHeight !== heighth) {
      window.location.reload(true);
    }
  });
  if (widthh >= 0 && widthh <= 428) {
    SideNavbarfun();
  } else if (widthh >= 429 && widthh <= 767) {
    SideNavbarfun();
  } else if (widthh >= 768 && widthh <= 1023) {
    SideNavbarfun();
  } else if (widthh >= 1024 && widthh <= 1199) {
    SideNavbarfun();
  } else if (widthh >= 1200 && widthh <= 1439) {
    SideNavbarfun();
  } else if (widthh >= 1440 && widthh <= 1600) {
    SideNavbarfun();
  } else if (widthh >= 1601) {
    SideNavbarfun();
  }
}
okk();

function hambuger() {
  const alllink = document.querySelectorAll(".NavItem__Wrapper a");
  alllink.forEach((name) => {
    let clutter = "";
    name.textContent.split("").forEach((letter) => {
      clutter += `<div class="linkspan">${letter}</div>`;
    });
    name.innerHTML = clutter;

    const linkspans = name.querySelectorAll(".linkspan");

    let tl3 = gsap.timeline({ paused: true });

    tl3.from(linkspans, {
      y: "100%",
      duration: 1,
      delay: 1.8,
      stagger: { amount: 0.9 },
      ease: "power3.inOut",
    });

    let flag = 0;
    const headerRight = document.querySelector("#click");

    function toggleAnimation() {
      if (flag === 0) {
        console.log("hello");
        tl3.play();
        flag = 1;
      } else {
        tl3.reverse();
        flag = 0;
      }
    }

    headerRight.addEventListener("click", toggleAnimation);
  });
}

hambuger();

function third() {
  gsap.matchMedia().add("(min-width: 768px) and (max-width: 1024px)", function () {
    gsap.to(".slidelogo", {
      y: () => `${window.innerHeight * 0.6}px`, 
      x: () => `${window.innerWidth * 0.4}px`,
      rotation: "180deg",
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".third",
        scroller: "body",
        start: "10% 30%",
        end: "20% 0%",
        scrub: 1,
        onLeave: () => {
          gsap.to(".slidelogo", {
            y: () => `${window.innerHeight * 2.3}px`,
            x: () => `${-window.innerWidth * 0.45}px`, 
            rotation: "-360deg",
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".third",
              scroller: "body",
              start: "30% 30%",
              end: "100% 0%",
              scrub: 1,
            },
          });
        },
      },
    });
  });


  gsap.matchMedia().add("(min-width: 1025px)", function () {
    gsap.to(".slidelogo", {
      rotation: "360deg",
      y: () => `${window.innerHeight * 0.6}px`, 
      x: () => `${window.innerWidth * 0.4}px`, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".third",
        scroller: "body",
        start: "10% 20%",
        end: "20% 0%",
        scrub: 1,
        onLeave: () => {
          gsap.to(".slidelogo", {
            rotation: "-360deg",
            y: () => `${window.innerHeight * 2.1}px`, 
            x: () => `${-window.innerWidth * 0.45}px`, 
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".third",
              scroller: "body",
              start: "30% 30%",
              end: "100% 0%",
              scrub: 1,
            },
          });
        },
      },
    });
  });

  gsap.from(".content div h1 ,.slidelogo ", {
    y: "100",
    opacity: 0,
    duration: 0.9,
    ease: "linear",
    scrollTrigger: {
      trigger: ".third",
      scroller: "body",
      start: "top 60%",
      end: "10% 50%",
      scrub: 3,
    },
  });
  let clutter = "";
  document.querySelectorAll(".text-intro p").forEach((p) => {
    Array.from(p.textContent.split("")).forEach((char) => {
      clutter += `<span>${char}</span>`;
    });
    p.innerHTML = clutter;
    clutter = "";
  });

  gsap.from(".leftsection-intro .text-intro p  span", {
    opacity: 0,
    y: 50,
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "Power4.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".instoductionsection",
      scroller: "body",
      start: "top 70%",
      end: "10% 50%",
      scrub: 1,
    },
  });
  gsap.from(".rightsection-intro .text-intro p  span", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "Power4.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".rightsection-intro",
      scroller: "body",
      start: "70% 80%",
      end: "80% 70%",
      scrub: 1,
    },
  });
  gsap.to(".marquee_part",{
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "linear",
  })
  .totalProgress(0.5)
  gsap.set( ".marquee_part",{xPercent:-50})
}
third() 
function fourth() {
  var tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".fourthvideopin",
          scroller: "body",
          start: "0% 0%",
          end: "bottom -100%",
          scrub: true,
          pin: true,
      }
  });
  tl.to(".videoinfonext1 ", {
      y: "-100vh",
      duration: 3,
      ease: "Power3.out"
  }, "a")
  .from(".videonext2", {
      y: "100vh",
      duration: 3,
      ease: "Power4.out"
  }, "a")
  .from(".videoinfonext2 ", {
      y: "100vh",
      duration: 3,
      ease: "Power4.out"
  }, "a")
  .to(".videoinfonext2 ", {
      y: "-100vh",
      duration: 3,
      ease: "Power3.out"
  }, "b")
  .from(".videonext3", {
      y: "100vh",
      duration: 3,
      ease: "Power4.out"
  }, "b")
  .from(".videoinfonext3 ", {
      y: "100vh",
      duration: 3,
      ease: "Power4.out"
  }, "b")
  .to(".videoinfonext3 ", {
      y: "-100vh",
      duration: 3,
      ease: "Power3.out"
  }, "c")
  .from(".videonext4", {
      y: "100vh",
      duration: 3,
      ease: "Power4.out"
  }, "c")
  .from(".videoinfonext4 ", {
      y: "100vh",
      duration: 3,
      ease: "Power4.out"
  }, "c");
  
  function animateCounts() {
      document.querySelectorAll('.count').forEach((countElement) => {
          let count = { value: 0 }; 
          let target = parseInt(countElement.getAttribute('data-count'));
          let span = countElement.querySelector('span');
  
          gsap.to(count, {
              value: target, 
              duration: 3, 
              ease: "power4.out", 
              onUpdate: () => {
                  span.textContent = Math.floor(count.value); 
              }
          });
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);
  
      ScrollTrigger.create({
          trigger: ".countdown",
          scroller: "body",
          start: "top 80%", 
          end: "50% 75%",   
          once: true,
          onEnter: animateCounts, 
      });
  })

    gsap.to(".marquee_part1",{
      xPercent: -70,
      repeat: -1,
      duration: 30,
      ease: "linear",
    })
    .totalProgress(0.4)
    gsap.set( ".marquee_part1",{xPercent:-50})
}
fourth()  
function fiveth() {
  if (window.matchMedia("(min-width: 769px)").matches) {
      var tl = gsap.timeline({
          scrollTrigger: {
              trigger: ".fiveth",
              scroller: "body",
              start: "top 0%",
              end: "bottom -100%",
              scrub: 3,
              pin: true,
          }
      });

      tl.from(".brandingwarper", {
          y: "100vh",
      });
      tl.to(".brandingwarper", {
          y: "-100vh",
      }, "a");
      tl.from(".uxuiwarepr", {
          y: "100vh",
      }, "a");
      tl.to(".uxuiwarepr", {
          y: "-100vh",
      }, "b");
      tl.from(".saaswarepr", {
          y: "100vh",
          duration: 1,
          ease: "power4.out",
      }, "b");

      gsap.to('.slidelinebox', {
          '--after-width': '100%',
          scrollTrigger: {
              trigger: ".fiveth",
              scroller: "body",
              start: "top 0%",
              end: "bottom -100%",
              scrub: 3,
          }
      });
  }
}
fiveth()
function six() {
  var tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".sixth",
          scroller: "body",
          start: "top 0%",
          end: "bottom -100%",
          scrub: 3,
          pin: true,
      }
  });
  tl.to(".blandoverlay", {
      clipPath: `polygon(0 100%, 100% 100%, 100% 0%, 0 0%)`,
      duration: 4,
      ease: "power4.Out",
  });
}
six()
function seven() {
  gsap.from(".seventh .leftphoneimg .phoneimg img", {
      y: "100vh",
      stagger: {
          amount: 0.5
      },
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
          trigger: ".seventh",
          scroller: "body",
          start: "top 60%",
          end: "30% 40%",
          scrub: 1,
      }
  }, "a");
  gsap.from(".seventh .rightpera h1  ,.seventh .rightpera p", {
      y: "10vh",
      stagger: {
          amount: 0.5
      },
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
          trigger: ".rightpera",
          scroller: "body",
          start: "top 60%",
          end: "30% 40%",
          scrub: 1,
      }
  }, "a");
}
seven()

function eight() {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".eight",
          start: "top 85%",
          end: "30% 40%",
          scrub: 4,
        }
      });
      tl.from(".eightsilder .slidetext1", {
        y: "-42vh", duration: 3, ease: "Power4.Out"
      }, "a")
      .to(".eightsilder2 .slidetext2 ", {
        y: "40vh", duration: 3, ease: "Power4.Out"
      }, "a");
    }
  });

  ScrollTrigger.matchMedia({
    "(max-width: 767px)": function () {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".eight",
          start: "top 80%",
          end: "40% 40%",
          scrub: 4,
        }
      });
      tl.to(".eightsilder .slidetext1", {
        y: "10vh", duration: 3, ease: "Power4.Out"
      }, "a");
      tl.to(".eightsilder2 .slidetext2", {
        y: "10vh", duration: 3, ease: "Power4.Out"
      }, "a");
    }
  });

  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      on: {
          slideChange: function () {
              if (this.activeIndex > this.previousIndex) {
                  document.querySelector('.buttonnext').style.backgroundColor = '#1b1c15';
                  document.querySelector('.buttonprev').style.backgroundColor = '';
              } else {
                  document.querySelector('.buttonprev').style.backgroundColor = '#1b1c15';
                  document.querySelector('.buttonnext').style.backgroundColor = '';
              }
          },
      },
  });


}
eight()

function fotter() {
  const namelog = document.querySelectorAll(".fotternamelogo h1");

  namelog.forEach((name, index) => {
      const letters = name.textContent.split("").map(letter => `<div class="letterspan">${letter}</div>`).join("");
      name.innerHTML = letters;
      const spans = name.querySelectorAll('.letterspan');
      const targets = index === 0 ? spans : Array.from(spans).reverse();

      gsap.from(targets, {
          y: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
              trigger: ".fotter",
              scroller: "body",
              start: "top 70%",
              end: "30% 60%",
              scrub: 1,
          }
      });
  });
}
fotter()

let resizeTimeout;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    location.reload();
  }, 200);
});


