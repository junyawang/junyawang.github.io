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

// Show createTeam-to-inviteMembers
$("#modal-createTeam-to-inviteMembers-trigger").click(function(){
    $('#modal-invite-members-new-team').modal('show');
    $('#modal-create-team').modal('hide');
});

// Show inviteMembers-to-createTeam
$("#modal-inviteMembers-to-createTeam-trigger").click(function(){
    $('#modal-invite-members-new-team').modal('hide');
    $('#modal-create-team').modal('show');
});

// Show inviteMembers-to-assignAdmin
$("#modal-inviteMembers-to-assignAdmin-trigger").click(function(){
    $('#modal-assign-team-admin').modal('show');
    $('#modal-invite-members-new-team').modal('hide');
});

// Show assignAdmin-to-inviteMembers
$("#modal-assignAdmin-to-inviteMembers-trigger").click(function(){
    $('#modal-assign-team-admin').modal('hide');
    $('#modal-invite-members-new-team').modal('show');
});

//********** Team Management *********//
// Edit Team
$("#modal-editTeam-trigger").click(function(){
    $('#modal-edit-team').modal('show');
});

//Invite Members
$("#modal-inviteMembers-trigger").click(function(){
    $('#modal-invite-members').modal('show');
});

function setJumpSecOpacity() {
    var allHeight = $(document).height()-$(window).height();
    var percent = (allHeight - $(this).scrollTop()) / allHeight;
    $('.sec-jump-back').css('opacity', percent);
}

$(document).ready(function() {
    $('.token-input').clearSearch();
    $('#search-keyword-tokenfield').attr('token-selector', '#search-keyword');
    $('#startdatetimepicker').clearSearch();
    $('#enddatetimepicker').clearSearch();
    setJumpSecOpacity();
});

//********** Filter Flyover *********//
// Filter Button
$(document).on('click', "#filter", function(e){
    if ($('#filter').attr('value') == 'closed') {
        $('.sec-filter').slideDown('slow');
        $('.fa-filter').css('color','#18b750');
        $('#filter').css('color','#18b750');
        $('#filter').attr('value', 'open');
    }
    else {
        $('.sec-filter').slideUp('slow');
        $('.fa-filter').removeAttr('style');
        $('#filter').removeAttr('style');
        $('#filter').attr('value', 'closed');
    }
});

$(window).scroll(function() {
    setJumpSecOpacity();
});

//********** Team Select *********//
$('.selectpicker').selectpicker();
$('#search-keyword').tokenfield({
    showAutocompleteOnFocus: true
});

//********** Date & Time Picker *********//
$(function () {
    $('#startdatetimepicker').datetimepicker({
        format: 'MM/DD/YYYY'
    });
    $('#enddatetimepicker').datetimepicker({
        format: 'MM/DD/YYYY'
    });
    $("#startdatetimepicker").on("dp.change", function (e) {
        $('#enddatetimepicker').data("DateTimePicker").minDate(e.date);
    });
    $("#enddatetimepicker").on("dp.change", function (e) {
        $('#startdatetimepicker').data("DateTimePicker").maxDate(e.date);
    });
});

//********** Smooth Scroll *********//
$(".sec-jump-back").click(function() {
    $('html, body').animate({
        scrollTop: $("#recent-message").offset().top
    }, 700);
});
