(function($) {

    $(document).ready(function() {

        // Toggle menu icon

        $(".menu-icon").on("click", function() {
            //            $(".fa-times").css("display", "block");
            //			$(".fa-bars").css("display", "none");
            $(this).toggleClass("toggle");
            //            if ($(this).hasClass("toggle")) {
            //                $(".menu").css("display", "block");
            //            } else {
            //                $(".menu").css("display", "none");
            //            }
        });
    });

    var $gridImg = $('.isotope').isotope({
        itemSelector: ".item",
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 10,
            gutter: 8
        }
    });

    $("#filters button").click(function () {
        var $this = $(this);
        if (!$this.hasClass("is-checked")) {
            $this.parents("#options").find(".is-checked").removeClass("is-checked");
            $this.addClass("is-checked");
        }
        var selector = $this.attr("data-filter");
        $gridImg.isotope({
            filter: selector
        });
    });

    $('a[href*="#"]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    });

})(jQuery);