function init(){gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  
  init() //locomotiv js end
var anim = document.querySelector(".div-anim h5")
var click = document.querySelector(".nav-h")

click.addEventListener("click",function(){
  gsap.to(".div-anim h5",{
    transform: "translateY(10%)",
    stagger:0.2,
    });

    click.style.display="none"
})

var cursor = document.querySelector(".curser")

var main = document.querySelector(".main")

document.addEventListener("mousemove", function (dets) {

    cursor.style.left = dets.x +"px"

    cursor.style.top = dets.y + "px"

})

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from(".nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".hidden h1,.hidden h2,.hidden h5,.hidden h4 ", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from(".page1-end", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
  firstPageAnim();
 


  document.querySelectorAll(".border").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

  var show = document.querySelector(".nav-hh")
  var hide = document.querySelector(".close")
  var shows = document.querySelector(".show-and-hide")


show.addEventListener("click",function(){
gsap.to(".show-and-hide",{
transform: "translateY(0%)",
duration:1,
display:"block"
 
})

})

hide.addEventListener("click",function(){
  gsap.to(".show-and-hide",{
    transform: "translateY(-100%)",
    duration:1,
    display:"none"
     
    })
})

var time = document.querySelector(".time")

setInterval(function(){
    let date = new Date();
    time.innerHTML= date.toLocaleTimeString();
},1000)