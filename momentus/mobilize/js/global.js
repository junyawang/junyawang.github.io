// Nav bar background color change on scroll
$(window).scroll(function() {    
   var scroll = $(window).scrollTop();

   if (scroll >= 50) {
       $(".navbar").addClass("navbar-white");
   } else {
       $(".navbar").removeClass("navbar-white");
   }
});

$("#mobilize-logo").click(function() {
   $('html, body').animate({
       scrollTop: $("index.html#page-top").offset().top
   }, 800);
});

$("#mobilize-name").click(function() {
   $('html, body').animate({
       scrollTop: $("index.html#page-top").offset().top
   }, 800);
});

/******** ScrollMagic *********/

$(function() { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene - HR Step 1
    var sceneHrStep1 = new ScrollMagic.Scene({
        triggerElement: '#sec-steps', // starting scene, when reaching this element
    })
    .setClassToggle("#img-connect-team", "fadeInDown")
    .addTo(controller);

    // build scene - HR Step 2
    var sceneHrStep2 = new ScrollMagic.Scene({
        triggerElement: '#sec-steps', // starting scene, when reaching this element
    })
    .setClassToggle("#img-share-with-team", "fadeInDown")
    .addTo(controller);

    // build scene - HR Step 3
    var sceneHrStep3 = new ScrollMagic.Scene({
        triggerElement: '#sec-steps', // starting scene, when reaching this element
    })
    .setClassToggle("#img-get-analytics", "fadeInDown")
    .addTo(controller);

    // build scene - Sales Step 1
    var sceneSalesStep1 = new ScrollMagic.Scene({
        triggerElement: '#sec-steps', // starting scene, when reaching this element
    })
    .setClassToggle("#img-create-org", "fadeInDown")
    .addTo(controller);

    // build scene - Sales Step 2
    var sceneSalesStep2 = new ScrollMagic.Scene({
        triggerElement: '#sec-steps', // starting scene, when reaching this element
    })
    .setClassToggle("#img-share-links", "fadeInDown")
    .addTo(controller);

    // build scene - Pricing Step 1
    // var scenePricingStep1 = new ScrollMagic.Scene({
    //     triggerElement: '#sec-pricing-steps', // starting scene, when reaching this element
    // })
    // .setClassToggle("#img-connect-team", "fadeInDown")
    // .addTo(controller);

    // // build scene - Pricing Step 2
    // var scenePricingStep2 = new ScrollMagic.Scene({
    //     triggerElement: '#sec-pricing-steps', // starting scene, when reaching this element
    // })
    // .setClassToggle("#img-share-with-team", "fadeInDown")
    // .addTo(controller);

    // // build scene - Pricing Step 3
    // var scenePricingStep3 = new ScrollMagic.Scene({
    //     triggerElement: '#sec-pricing-steps', // starting scene, when reaching this element
    // })
    // .setClassToggle("#img-get-analytics", "fadeInDown")
    // .addTo(controller);

    sceneHrStep1.reverse(false);
    sceneHrStep2.reverse(false);
    sceneHrStep3.reverse(false);
    sceneSalesStep1.reverse(false);
    sceneSalesStep2.reverse(false);
});