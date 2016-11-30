/********************
 ** Global Variables
 ********************/

var mq = jQuery('#js-mediaQueryReference')[0],
    mqSupport = Modernizr.mq('only all'),
    prevDevice = '',
    device = '',
    activeClass = 'is-active',
    stickyClass = 'is-sticky',
    staticClass = 'is-static';

/********************
 ** Custom Functions
 ********************/

 function checkDevice()
 {
    //Set up event listeners tied to media queries
    mq.addEventListener('webkitTransitionEnd', checkMediaQuery, true);
    mq.addEventListener('MSTransitionEnd', checkMediaQuery, true);
    mq.addEventListener('oTransitionEnd', checkMediaQuery, true);
    mq.addEventListener('transitionend', checkMediaQuery, true);
 }

//Create an event checker function that grabs the current value of the after pseudo class of the #js-mediaquery-reference <div>
//Based on: http://seesparkbox.com/demos/css-content-check/index.html
function checkMediaQuery()
{
    if (mqSupport)
    {
        prevDevice = device;
        device = window.getComputedStyle(mq, ':after').getPropertyValue('content').replace(/"/g, '');
        resetStyles();
    }
    else
    {
        device = 'desktop';
    }
}

//Function to reset any styles that may have been changed on screen resize
function resetStyles()
{
    //
}

/********************
 ** Event Listeners
 ********************/

//Any kind of on('click') or on('change') type functions would go here

/********************
 ** jQuery Window Load
 ********************/

jQuery(window).load(function ()
{
    //
});

/********************
 ** jQuery DOM Ready
 ********************/

jQuery(document).ready(function ()
{
    //If the browser supports media queries
    if (mqSupport)
    {
        //Check what device we're on
        checkDevice();
    }
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});