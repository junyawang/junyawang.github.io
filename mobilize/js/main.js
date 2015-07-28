//Make .particles-js-canvas-el 's height always equal to #header-content height
var callSameHeight = function sameHeight(){
    var headerContentHeight = $('#header-content').css("height");
    console.log("headerContentHeight = " + headerContentHeight);
    $('.particles-js-canvas-el').css("height", headerContentHeight);
};

$( document ).ready(callSameHeight);
$( window ).resize(callSameHeight);

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

/******** ScrollMagic *********/

$(function() {
    // Create new instance of a controller
    var controller = new ScrollMagic.Controller();

    // Create new instance of a scene
    // A scene defines where the controller should react and how
    var scene = new ScrollMagic.Scene({
        triggerElement: '.sec-showcase-analytics', // starting scene, when reaching this element
        // duration: 400 // pin the element for 400px of scrolling
    });

    // .setPin('#pinned-element1'); // the element we want to pin
    var myNewChart = new Chart(ctx).Line(data);
    new Chart(ctx).Line(data, options);
    // Add Scene to ScrollMagic Controller
    controller.addScene(scene);
});
