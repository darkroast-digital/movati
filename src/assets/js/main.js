// *********************************************************************
// *********************************************************************
// *********************************************************************

import slick from 'slick-carousel';

import grid from './components/Grid.vue';
import column from './components/Column.vue';
import box from './components/Box.vue';
import mediaobject from './components/MediaObject.vue';
import alert from './components/Alert.vue';
import navbar from './components/Navbar.vue';
import btn from './components/Button.vue';
import modal from './components/Modal.vue';
import modaltrigger from './components/ModalTrigger.vue';
import field from './components/Field.vue';
import textfield from './components/Textfield.vue';

new Vue({
    el: '#app',
    delimiters: ['@{', '}'],
    components: {
        grid,    
        column, 
        box, 
        mediaobject, 
        alert, 
        navbar, 
        btn, 
        modal,
        modaltrigger,
        field,
        textfield,
    },
    data: {
        searrch: '',
        items: [
            {category: 'Customer Service', position: 'Customer Service Associate', location: 'Kingsville', type: 'Full Time', date: '3 days ago'},
            {category: 'Group Fitness', position: 'Group Fitness Instructor', location: 'Brantford', type: 'Full Time', date: '4 days ago'},
            {category: 'Personal Training and Fintess Coach', position: 'Personal Trainer', location: 'London - North', type: 'Part Time', date: '5 days ago'},
            {category: 'Playroom Programs', position: 'Playroom Leader', location: 'Nepean', type: 'Seasonal', date: '6 days ago'},
            {category: 'Sales', position: 'Membership Coordinator', location: 'Burlington (Coming Soon)', type: 'Internship', date: '3 days ago'},
            {category: 'Maintenance and Operations', position: 'Senior Maintenance Tech.', location: 'Burlington (Coming Soon)', type: 'Full Time', date: '6 days ago'},
            {category: 'Personal Training and Fintess Coach', position: 'Fitness Coach', location: 'Guelph', type: 'Full Time', date: '6 days ago'},
            {category: 'Sales', position: 'Sales Team Leader', location: 'Ottawa - Orleans', type: 'Seasonal', date: '4 days ago'},
            {category: 'Personal Training and Fintess Coach', position: 'Personal Trainer', location: 'Amherstburg', type: 'Part Time', date: '7 days ago'},
            {category: 'Aquatics', position: 'Aquatics Instructor', location: 'Thunder Bay', type: 'Full Time', date: '7 days ago'}
        ]
    }
});

// *********************************************************************
// *********************************************************************
// *********************************************************************

///* ========================================================================
//   #FORM
//   ======================================================================== */

var careersForm = $('#contact-form');
var formMessages = $('.form-messages');

$(careersForm).submit(function (event) {
    event.preventDefault();
    //grab all form data  
    var formData = new FormData($(this)[0]);

    $.ajax({
        url: $(careersForm).attr('action'),
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
            $(formMessages).html('<div class="alert success">Thanks for your interest in Rochester Place Resort &amp; Golf.  We\'ll be in touch soon!</div>');

            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            $('#contact-form input').val('');
            $('#contact-form textarea').val('');
        },
        error: function () {
            $(formMessages).html('<div class="alert error">Oh no!  Something went wrong, give it a try agian.</div>');

            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            $('#contact-form input').val('');
            $('#contact-form textarea').val('');
        }
    });

    return false;
});


///* ========================================================================
//   #TABS
//   ======================================================================== */

$(function () {
  $('.c-tabs__nav li').first().addClass('active');
  $('.c-tab__drawer').first().addClass('active');
  $('.c-tab').hide().first().show();

  // when tabs are tabs
  $('.c-tabs__nav li').click(function () {

    $('.c-tab').hide();
    var activeTab = $(this).find('a').attr('rel');
    console.log(activeTab);
    $('#' + activeTab).fadeIn();

    $('.c-tabs__nav li').removeClass('active');
    $(this).addClass('active');

    $('.c-tab__drawer').removeClass('active');
    $('.c-tab__drawer[rel^="' + activeTab + '"]').addClass('active');

  });

  // when tabs are accordions
  $('.c-tab__drawer').click(function () {

    $('.c-tab__drawer').removeClass('active');
    $(this).addClass('active');

    $('.c-tab').slideUp({
      duration: 400
    });
    var a_activeTab = $(this).attr('rel');
    $('#' + a_activeTab).slideDown({
      duration: 400
    });

    $('.c-tabs__nav li').removeClass('active');
    $('.c-tabs__nav li[rel^="' + a_activeTab + '"]').addClass('active');

  });

});

///* ========================================================================
//   #CAROUSEL
//   ======================================================================== */

$('.js-slider').slick();

$('.slick-next').html('<i class="fa fa-angle-right"></i>');
$('.slick-prev').html('<i class="fa fa-angle-left"></i>');


var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}







