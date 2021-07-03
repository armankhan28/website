(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {



        //------------progress bar-------------
        var smProgress = $('.sm-progress');
        if (smProgress.length > 0) {
            smProgress.waypoint(function () {
                jQuery('.skill-bar').each(function () {
                    jQuery(this).find('.progress-content').animate({
                        width: jQuery(this).attr('data-percentage')
                    }, 2000);
                    jQuery(this).find('.progress-mark').animate({
                        left: jQuery(this).attr('data-percentage')
                    }, {
                        duration: 2000,
                        step: function (abb, ab) {
                            var data = Math.round(abb);
                            jQuery(this).find('.percent').html(data + '%')
                        }
                    })
                })
            }, {
                offset: '90%'
            })
        }



        //------------ Counter up -------------

        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });


        //------------ Venobox popup -------------


        $('.venobox').venobox({

            framewidth: '1000px',
            border: '5px',
            spinner: 'wave'
        });

        $('.venobox_custom').venobox({
            framewidth: '1000px', // default: ''


        });

          //------------ Testimonial -------------

        $('.testi-blk').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        
        
        //------------ Main menu -------------
        
          $('#mobile-menu-active').meanmenu({
                meanScreenWidth: "767",
                meanMenuContainer: '.menu-prepent',
             });






    }); //---document-ready-----





}(jQuery));
