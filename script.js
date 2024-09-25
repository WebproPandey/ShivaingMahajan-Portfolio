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
          console.log(isOpen);
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
    } 
    else if (widthh >= 429 && widthh <= 767) {
      SideNavbarfun();
    } 
    else if (widthh >= 768 && widthh <= 1023) {
      SideNavbarfun();
    } 
    else if (widthh >= 1024 && widthh <= 1199) {
      SideNavbarfun();
    } 
    else if (widthh >= 1200 && widthh <= 1439) {
      SideNavbarfun();
    } else if (widthh >= 1440 && widthh <= 1600) {
      SideNavbarfun();
    } else if (widthh >= 1601) {
      SideNavbarfun();
    }
}
okk();
  