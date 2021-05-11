//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {CustomEase} from "gsap/CustomEase";
import {CustomWiggle} from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, CustomEase, CustomWiggle);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});


  function init(){

      CustomWiggle.create("myWiggle", {wiggles: 50, type:"uniform"});
    //***********  fadeInTL init ****************//
      gsap.set("#Layer_12", { y:"+=200", delay:2});

      gsap.to("#Layer_12", {duration:1, y:"1400", ease:"myWiggle"});


    //*********** zoomTL init ****************
    gsap.set(["#pbubble", "#YObubble"], {transformOrigin:"center center"});

    //*********** spaceshipTL init ****************
    //gsap.set(["#newrocket-01"], {transformOrigin:"center"});

    //*********** liftOffTL init ****************
    gsap.set(["#Layer_12"],{transformOrigin:"center center"});


    //*********** flightTL init ****************
    gsap.set("#Layer_12", {xPercent:-50, yPercent:-50, transformOrigin:"center top"});

  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    tl.from("#Layer_11", {alpha:0, duration:2, scale:10})
    .from("#pbubble", {alpha:0, duration:2, scale:10})
    .from("#pbubble", {alpha:0, duration:2, scale:10})
    .from("#backcloud", {alpha:0, duration:4, scale:10})

  
    ;//tl END

    return tl;

  }

  //*********** zoomTL ****************

  //*********** spaceshipTL ****************

  //*********** liftOffTL ****************

  //*********** flightTL ****************

  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
 mainTL.add(fadeInTL())


  ;//tl END





});
