let crsr=document.querySelector("#cursor")
let blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left= dets.x+"px"
   crsr.style.top= dets.y+"px"
   blur.style.left= dets.x-150+"px"
   blur.style.top= dets.y-150+"px"
})
let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -20%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -35%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    },
    

});

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    },
    

});

gsap.from("#colon", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon",
      scroller: "body",
    //   markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 3,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon2",
      scroller: "body",
    //   markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1 ",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    },
    

});