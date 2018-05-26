// if using jquery with a CDN
let $ = window.$;

let $sectionAnchors = $('.section-nav a');
let $navAnchors = $('#navbar-container a');
let $navbarContainer = $('.navbar-container');
let activeVal = $('.active-link').attr('href');

const listen = element => {
    element.on('click', e => {
        // assign active value from child anchor, not dropdown parent
        if (!$(e.target).hasClass('dropdown-toggle')) {
            activeVal = $(e.target).attr('href');

            // remove dropdown on mobile selection
            if ($navbarContainer.hasClass('show')) {
                $navbarContainer.removeClass('show');
            }
        }

        $sectionAnchors.map((i, a) => {
            if ($(a).attr('href') === activeVal) {
                $(a).addClass('active');
            } else {
                $(a).removeClass('active');
            }
        });

        $navAnchors.map((i, n) => {
            if ($(n).attr('href') === activeVal || $(n).parent().prev().data('href') === activeVal) {
                $(n).addClass('active');
                if ($(n).parent().hasClass('dropdown-menu')) {
                    $(n).parent().prev().addClass('active');
                }
                $(n).siblings().removeClass('active');
            } else {
                $(n).removeClass('active');
            }
        });
    });
};

listen($sectionAnchors);
listen($navAnchors);
