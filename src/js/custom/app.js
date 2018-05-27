// if using jquery with a CDN
let $ = window.$;

class App {
    constructor() {
        this.$activeElement = null;
    }

    cacheDOM() {
        this.$sidebar = $('.sidebar-nav a');
        this.$navbar = $('#navbar-container a');
    }

    init() {
        this.cacheDOM();

        let { $navbar, $sidebar } = this;

        this.onClick($navbar);
        this.onClick($sidebar);
        this.onScroll();
    }

    onClick(element) {        
        let $activeVal = $('.active-link').attr('href');
        let $navbarContainer = $('.navbar-container');

        element.on('click', e => {
            this.$activeElement = $(e.target);
            // assign active value from child anchor, not dropdown parent
            if (!$(e.target).hasClass('dropdown-toggle')) {
                $activeVal = $(e.target).attr('href');

                // remove dropdown on mobile selection
                if ($navbarContainer.hasClass('show')) {
                    $navbarContainer.removeClass('show');
                }
            }

            this.$navbar.map((i, anchor) => {
                let $anchor = $(anchor);

                if (this.$activeElement.is('img')) {
                    $anchor.removeClass('active');
                } else if ($anchor.attr('href') === $activeVal || $anchor.parent().prev().data('href') === $activeVal) {
                    $anchor.addClass('active');
                    $anchor.siblings().removeClass('active');
                    if ($anchor.parent().hasClass('dropdown-menu')) {
                        $anchor.parent().prev().addClass('active');
                    }
                } else {
                    $anchor.removeClass('active');
                }
            });

            this.$sidebar.map((i, anchor) => {
                let $anchor = $(anchor);

                if (this.$activeElement.is('img')) {
                    $anchor.removeClass('active');
                } else if ($activeVal === $anchor.attr('href')) {
                    $anchor.addClass('active');
                } else {
                    $anchor.removeClass('active');
                }
            });
        });
    }

    onScroll() {
        $(document).on('scroll', () => {
            let activeElement = this.$activeElement;

            if (activeElement) {
                if (activeElement.hasClass('nav-link') || activeElement.parent().hasClass('toc-entry')) {
                    activeElement = null;
                }
            } else {
                // at top remove active class from all nav items
                $('nav a.active').removeClass('active');
                $('.sidebar-nav a.active').removeClass('active');

                $('main .section').map((i, section) => {
                    if ($(section).position().top <= $(document).scrollTop() - 200) {
                        // navbar
                        $('nav a.active').removeClass('active');
                        $('nav a').eq(i).addClass('active');

                        // sidebar
                        $('.sidebar-nav a.active').removeClass('active');
                        $('.sidebar-nav a').eq(i).addClass('active');
                    }
                });
            }
        });
    }
}
let app = new App;
app.init();
