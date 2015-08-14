// Slick Carousel

// $(document).ready(function(){
//     var slickCarousel = $('.slick-carousel');
    
//     slickCarousel.slick({
//         accessibility: false,
//         autoplay: false,
//         autoplaySpeed: 2500,
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         draggable: false,
//         infinite: true,
//         pauseOnHover: false,
//         slidesToShow: 1,
//         slideToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });

// Owl Carousel 2
// $(document).ready(function(){
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//         center: true,
//         items: 1,
//         loop: true,
//         margin: 40,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: false,
//         mouseDrag: false,
//         touchDrag: false,
//         pullDrag: false,
//         responsiveRefreshRate: 200,
//         responsiveBaseElement: '.owl-carousel'
//     });
// });

// Bootstrap Carousel
$('.carousel').carousel({
    interval: 4000,
    pause: false,
    keyboard: false
});



// Make .particles-js-canvas-el 's height always equal to #connect-content height
var callSameHeight = function sameHeight(){
    var connectContentHeight = $('#connect-content').css("height");
    console.log("connectContentHeight = " + connectContentHeight);
    $('.particles-js-canvas-el').css("height", connectContentHeight);
};


/******* Line Chart ********/
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(250,213,175,0.7)",
            strokeColor: "rgba(250,213,175,0.7)",
            pointColor: "rgba(250,213,175,0.7)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(250,213,175,0.7)",
            data: [26, 18, 40, 26, 38, 20, 16]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(245,171,179,0.7)",
            strokeColor: "rgba(245,171,179,0.7)",
            pointColor: "rgba(245,171,179,0.7)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(245,171,179,0.7)",
            data: [8, 20, 12, 42, 18, 24, 5]
        },

        {
            label: "My Third dataset",
            fillColor: "rgba(37,133,196,0.7)",
            strokeColor: "rgba(37,133,196,0.7)",
            pointColor: "rgba(37,133,196,0.7)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(37,133,196,0.7)",
            data: [28, 10, 34, 27, 30, 6, 20]
        }
    ]
};

Chart.defaults.global.showScale = false;
// Chart.defaults.global.scaleLineColor = "rgba (37,133,196,1)";
// Chart.defaults.global.scaleShowLabels = false;
Chart.defaults.global.showTooltips = false;
Chart.defaults.global.responsive = true;

Chart.defaults.Line.pointDot = false;

// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
// var myNewChart = new Chart(ctx).Line(data);
// new Chart(ctx).Line(data, options);


/******** ScrollMagic *********/

$(function() { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller();

    //build scene - Section Analytics - Engagement Score Panel
    var sceneAnalyticsEngagementScore = new ScrollMagic.Scene({
        triggerElement: '#sec-analytics', // starting scene, when reaching this element
    })
    .setClassToggle("#browser-analytics", "fadeInUp")
    .addTo(controller);


    // build scene - Section Analytics - Chart
    var sceneAnalyticsChart = new ScrollMagic.Scene({
        triggerElement: '#sec-analytics', // starting scene, when reaching this element
    })
    .on("enter", function () {
        // on enter, draw line chart
        var myNewChart = new Chart(ctx).Line(data);
        new Chart(ctx).Line(data, {});
    })
    .addTo(controller);


    // build scene - Section Notification - Left
    var sceneNotificationLeft = new ScrollMagic.Scene({
        triggerElement: '#sec-notification', // starting scene, when reaching this element
    })
    .setClassToggle(".notification-container-fadeInLeft", "fadeInLeft")
    .addTo(controller);

    // build scene - Section Notification - Right
    var sceneNotificationRight = new ScrollMagic.Scene({
        triggerElement: '#sec-notification', // starting scene, when reaching this element
    })
    .setClassToggle(".notification-container-fadeInRight", "fadeInRight")
    .addTo(controller);

    // build scene - Section Notification - Bell
    var sceneNotificationBell = new ScrollMagic.Scene({
        triggerElement: '#sec-notification', // starting scene, when reaching this element
    })
    .setClassToggle(".notification-bell", "swing")
    .addTo(controller);

    sceneAnalyticsChart.reverse(false);
    sceneAnalyticsEngagementScore.reverse(false);
    sceneNotificationLeft.reverse(false);
    sceneNotificationRight.reverse(false);
    sceneNotificationBell.reverse(true);
});


$( window ).resize(callSameHeight);
$( document ).ready(callSameHeight);


/******** Add particle.js if window width>=960 *********/
// $("header").each(function () {    
//     if($(this).has("canvas")){
//         headerHasCanvas = true;
//     }
//     else {
//         headerHasCanvas = false;
//     }
// });

// $( document ).ready(function(){
//     if ($(window).width() < 992) {
//         if (headerHasCanvas == true) {
//             console.log("document ready: header has canvas");
//             $(".particles-js-canvas-el").attr("style", "display: none;");
//         }
//         else {
//             console.log("document ready: header no canvas");
//         }
//     }

//     else {
//         $(".particles-js-canvas-el").attr("style", "display: block;");
//     }
// });

// $(window).resize(function() {
//     if ($(window).width() < 992) {
//         if (headerHasCanvas == true) {
//             console.log("resize: header has canvas");
//             $(".particles-js-canvas-el").attr("style", "display: none;");
//         }
//         else {
//             console.log("resize: header no canvas");
//         }
//     }

//     else {
//         $(".particles-js-canvas-el").attr("style", "display: block;");
//     }
// });


/******** Change Background Color *********/
// $(function() {  
//     var i = 0;  
//     var bgColors = ["linear-gradient(170deg, #66D1CD, #66D1CD, #E5F7F6)", 
//                     "linear-gradient(170deg, blue, #66D1CD, #E5F7F6)", 
//                     "green" ];  

//     // set initial header color  
//     $("header").css('backgroundColor', bgColors[0]);  

//     // change color every 30 milliseconds
//     window.setInterval(function() {  
//         i = i == bgColors.length ? 0 : i;  
//         $("header").animate({'backgroundColor':bgColors[i]}, 3000);  
//         i++;  
//     }, 30);

//     // window.setInterval(function() {  
//     //     i = i == bgColors.length ? 0 : i;  
//     //     $("header").css('background', bgColors[i]);  
//     //     i++;  
//     // }, 3000);
// });  

// Super Simple Text Rotator
$(".rotate").textrotator({
  animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 8000 // How many milliseconds until the next word show.
});