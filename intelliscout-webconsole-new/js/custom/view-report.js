// Modal Toggle

//********** Field Report Workflow *********//

// Show modal-photo-to-report
$("#modal-photo-to-report-trigger").click(function(){
    $('#modal-view-photo').modal('hide');
    $('#modal-view-report').modal('show');
});

// Show modal-note-to-report
$("#modal-note-to-report-trigger").click(function(){
    $('#modal-view-note').modal('hide');
    $('#modal-view-report').modal('show');
});

// Show modal-report-to-photo
$("#modal-report-to-photo-trigger").click(function(){
    $('#modal-view-report').modal('hide');
    $('#modal-view-photo').modal('show');
});

// Show modal-report-to-note
$("#modal-report-to-note-trigger").click(function(){
    $('#modal-view-report').modal('hide');
    $('#modal-view-note').modal('show');
});

//********** Create Team Workflow *********//

// Show createTeam-to-assignAdmin
$("#modal-createTeam-to-assignAdmin-trigger").click(function(){
    $('#modal-assign-team-admin').modal('show');
    $('#modal-create-team').modal('hide');
});

// Show assignAdmin-to-createTeam
$("#modal-assignAdmin-to-createTeam-trigger").click(function(){
    $('#modal-assign-team-admin').modal('hide');
    $('#modal-create-team').modal('show');
});

// Show assignAdmin-to-inviteMembers
$("#modal-assignAdmin-to-inviteMembers-trigger").click(function(){
    $('#modal-assign-team-admin').modal('hide');
    $('#modal-invite-members').modal('show');
});

// Show inviteMembers-to-assignAdmin
$("#modal-inviteMembers-to-assignAdmin-trigger").click(function(){
    $('#modal-assign-team-admin').modal('show');
    $('#modal-invite-members').modal('hide');
});

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

// Tokenfield for Email

// $('#tokenfield-typeahead').tokenfield(); //enable tokenfield-typeahead

// check if token's value is equal to any of the existing token's value
$('#tokenfield-typeahead').on('tokenfield:createtoken', function (event) {
    var existingTokens = $(this).tokenfield('getTokens');
    $.each(existingTokens, function(index, token) {
        if (token.value === event.attrs.value)
            event.preventDefault();
    });
});

$("#carousel-generic").swipe({
    swipeLeft: function() { $(this).carousel('next'); },
    swipeRight: function() { $(this).carousel('prev'); },
});

$(document).ready(function() {
    if (
        window.matchMedia("(min-width: 1200px)").matches) {
    }
    else {
        $('.carousel .item.active').click(function(e) {
            if($('.carousel .item.active .carousel-caption').css('visibility') == 'hidden'){
                $('.carousel .item.active .carousel-caption').addClass('fadeInUp');
                $('.carousel .item.active .carousel-caption').css('visibility', 'visible');
            }
            else {
                if($('.carousel .item.active .carousel-caption').attr('class').indexOf('fadeInUp') >= 0){
                    $('.carousel .item.active .carousel-caption').removeClass('fadeInUp');
                    $('.carousel .item.active .carousel-caption').addClass('fadeOutDown');
                }
                else {
                    $('.carousel .item.active .carousel-caption').removeClass('fadeOutDown');
                    $('.carousel .item.active .carousel-caption').addClass('fadeInUp');
                }
            }
        });
    }
});

//enable tokenfield-typeahead - email validation function
$('#tokenfield-typeahead')
    .on('tokenfield:createtoken', function (e) {
        var data = e.attrs.value.split('|')
        e.attrs.value = data[1] || data[0]
        e.attrs.label = data[1] ? data[0] + ' (' + data[1] + ')' : data[0]
    })

    .on('tokenfield:createdtoken', function (e) {
        // Über-simplistic e-mail validation
        var re = /\S+@\S+\.\S+/
        var valid = re.test(e.attrs.value)
        if (!valid) {
            $(e.relatedTarget).addClass('invalid')
        }
    })

    .on('tokenfield:edittoken', function (e) {
        if (e.attrs.label !== e.attrs.value) {
            var label = e.attrs.label.split(' (')
            e.attrs.value = label[0] + '|' + e.attrs.value
        }
    })

    // Alert when removing token
    // .on('tokenfield:removedtoken', function (e) {
    //   alert('Token removed! Token value was: ' + e.attrs.value)
    // })

.tokenfield();

// Textarea Auto Resize
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