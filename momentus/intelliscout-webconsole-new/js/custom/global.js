// Menu Toggle Script
// $("#team-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });

// $("#user-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });

// Change Sub Sidebar Content
// $(function () {
//     $(".main").on("click", "a", function () {
//         $(".sub").removeClass("active");
//         $($(this).attr("href")).addClass("active");
//         console.log($(".sub ul"));
//     });
// });

// Sidebar Toggle
$("#navbar-sidebar-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggledSidebar");
    if ($("#wrapper").hasClass('toggledSidebar')) {
        $('.sec-chat').attr('style', 'left: 230px;');
        $('.sec-jump-back').attr('style', 'left: 230px;');
        $('.navbar-lower').attr('style', 'left: 230px;');
        $('.sec-filter').css('left', '230px');
        $('.sec-filter').css('right', '-230px');
        $('.navbar-lower ul.navbar-right').css('right', '-215px');
    }
    else {
        $('.sec-chat').attr('style', 'left: 0;');
        $('.sec-jump-back').attr('style', 'left: 0;');
        $('.navbar-lower').attr('style', 'left: 0;');
        $('.sec-filter').css('left', '0');
        $('.sec-filter').css('right', '0');
        $('.navbar-lower ul.navbar-right').css('right', '15px');
    }
});

// $(document).ready(function() {
//     var mq = window.matchMedia("(min-width: 768px)");
//     mq.addListener(function () {
//         if (mq.matches) {
//             $('.sec-chat').removeAttr('style');
//             $('.navbar-lower').removeAttr('style');
//         }
//     }); 
// });

$(document).ready(function() {
    $(window).resize(function() {
        $('.sec-chat').removeAttr('style');
        $('.navbar-lower').removeAttr('style');
        $('.sec-jump-back').removeAttr('style');
            
        if (window.matchMedia("(min-width: 768px)").matches ||
            window.matchMedia("(min-width: 992px)").matches ||
            window.matchMedia("(min-width: 1200px)").matches) {
            // $('.sec-chat').removeAttr('style');
            // $('.navbar-lower').removeAttr('style');
            // $('.sec-jump-back').removeAttr('style');
        }
        else {
            $("#wrapper").removeClass('toggledSidebar');
        }
    });
});

// $("#navbar-user-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggledUsers");
// });

//********** Export Workflow *********//

// Show report-to-export
$("#modal-export-trigger").click(function(){
    $('#modal-export').modal('show');
    // $('#modal-view-report').modal('hide');
});

$("#modal-export-to-report-trigger").click(function(){
    $('#modal-export').modal('hide');
    $('#modal-view-report').modal('show');
});

// Share Link - Click to Copy Text
$(document).on('click', '.input-share-link', function(e){
    e.preventDefault(); //for <a>
    $('.paste').val($(this).text());
});

//********** Global Search Modal *********//
// Global Search Button
$("#global-search").click(function(){
    //$('#modal-global-search').modal('show');
    var $modal = $("#modal-global-search");
    $modal.load('./global_search.html', '', function(){
        $modal.modal();
    });
});


//********** Global Search Tab List Swipe *********//
function tabSwipe(isLeft) {
    var tabList = $('#modal-global-search ul[role="tablist"] li');
    var activeTabIndex;
    for (var i = tabList.length - 1; i >= 0; i--) {
        if ($(tabList[i]).attr('class') != undefined &&
            $(tabList[i]).attr('class').indexOf('active') >= 0) {
            activeTabIndex = i;
            break;
        }
    };
    if (!isLeft && activeTabIndex > 0) {
        $('#search-tab li:eq('+ (activeTabIndex - 1) +') a').tab('show');
    }
    if (isLeft && activeTabIndex < tabList.length) {
        $('#search-tab li:eq('+ (activeTabIndex + 1) +') a').tab('show');
    }
}

$("#modal-global-search").swipe({
    swipeLeft: function() {
     tabSwipe(true); 
 },
    swipeRight: function() { tabSwipe(false); },
});

//********** Textarea Auto Resize *********//
(function($){    
    //pass in just the context as a $(obj) or a settings JS object
    $.fn.autogrow = function(opts) {
        var that = $(this).css({overflow: 'hidden', resize: 'none'}) //prevent scrollies
            , selector = that.selector
            , defaults = {
                context: $(document) //what to wire events to
                , animate: true //if you want the size change to animate
                , speed: 200 //speed of animation
                , fixMinHeight: true //if you don't want the box to shrink below its initial size
                , cloneClass: 'autogrowclone' //helper CSS class for clone if you need to add special rules
                , onInitialize: false //resizes the textareas when the plugin is initialized
            }
        ;
        opts = $.isPlainObject(opts) ? opts : {context: opts ? opts : $(document)};
        opts = $.extend({}, defaults, opts);
        that.each(function(i, elem){
            var min, clone;
            elem = $(elem);
            //if the element is "invisible", we get an incorrect height value
            //to get correct value, clone and append to the body. 
            if (elem.is(':visible') || parseInt(elem.css('height'), 10) > 0) {
                min = parseInt(elem.css('height'), 10) || elem.innerHeight();
            } else {
                clone = elem.clone()
                    .addClass(opts.cloneClass)
                    .val(elem.val())
                    .css({
                        position: 'absolute'
                        , visibility: 'hidden'
                        , display: 'block'
                    })
                ;
                $('body').append(clone);
                min = clone.innerHeight();
                clone.remove();
            }
            if (opts.fixMinHeight) {
                elem.data('autogrow-start-height', min); //set min height                                
            }
            elem.css('height', min);
            
            if (opts.onInitialize && elem.length) {
                resize.call(elem[0]);
            }
        });
        opts.context
            .on('keyup paste', selector, resize)
        ;
    
        function resize (e){
            var box = $(this)
                , oldHeight = box.innerHeight()
                , newHeight = this.scrollHeight
                , minHeight = box.data('autogrow-start-height') || 0
                , clone
            ;
            if (oldHeight < newHeight) { //user is typing
                this.scrollTop = 0; //try to reduce the top of the content hiding for a second
                opts.animate ? box.stop().animate({height: newHeight}, opts.speed) : box.innerHeight(newHeight);
            } else if (!e || e.which == 8 || e.which == 46 || (e.ctrlKey && e.which == 88)) { //user is deleting, backspacing, or cutting
                if (oldHeight > minHeight) { //shrink!
                    //this cloning part is not particularly necessary. however, it helps with animation
                    //since the only way to cleanly calculate where to shrink the box to is to incrementally
                    //reduce the height of the box until the $.innerHeight() and the scrollHeight differ.
                    //doing this on an exact clone to figure out the height first and then applying it to the
                    //actual box makes it look cleaner to the user
                    clone = box.clone()
                        //add clone class for extra css rules
                        .addClass(opts.cloneClass)
                        //make "invisible", remove height restriction potentially imposed by existing CSS
                        .css({position: 'absolute', zIndex:-10, height: ''}) 
                        //populate with content for consistent measuring
                        .val(box.val()) 
                    ;
                    box.after(clone); //append as close to the box as possible for best CSS matching for clone
                    do { //reduce height until they don't match
                        newHeight = clone[0].scrollHeight - 1;
                        clone.innerHeight(newHeight);
                    } while (newHeight === clone[0].scrollHeight);
                    newHeight++; //adding one back eliminates a wiggle on deletion 
                    clone.remove();
                    box.focus(); // Fix issue with Chrome losing focus from the textarea.
                    
                    //if user selects all and deletes or holds down delete til beginning
                    //user could get here and shrink whole box
                    newHeight < minHeight && (newHeight = minHeight);
                    oldHeight > newHeight && opts.animate ? box.stop().animate({height: newHeight}, opts.speed) : box.innerHeight(newHeight);
                } else { //just set to the minHeight
                    box.innerHeight(minHeight);
                }
            } 
        }
        return that;
    }
})(jQuery);
$('textarea').autogrow({onInitialize: true, animate:true});