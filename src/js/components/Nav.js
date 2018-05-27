// if using jquery with a CDN
let $ = window.$;

class Nav {
    constructor() {
        this.$activeElement = null;
        this.$navbar = $('#navbar-container a');
        this.$sidebar = $('.sidebar-nav a');
    }

    init() {
        let { $navbar, $sidebar } = this;
        if (location.hash) {
            this.$activeElement = $(`${location.hash}`);
            $(window).scrollTop(this.$activeElement.offset().top);
        }

        this.onClick($navbar);
        this.onClick($sidebar);
        $(document).on('scroll', () => this.onScroll());
    }
    onClick(element) {
        let { $navbar, $sidebar } = this;
        let $activeVal = $('.active-link').attr('href');
        let $navbarContainer = $('.navbar-container');

        element.map((i, anchor) => {
            if ($(anchor).attr('href') === location.hash) {
                $(anchor).addClass('active');
            }
        });

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

            $navbar.map((i, anchor) => {
                if (this.$activeElement.is('img')) {
                    $(anchor).removeClass('active');
                } else if ($(anchor).attr('href') === $activeVal || $(anchor).parent().prev().data('href') === $activeVal) {
                    $(anchor).addClass('active');
                    $(anchor).siblings().removeClass('active');
                    if ($(anchor).parent().hasClass('dropdown-menu')) {
                        $(anchor).parent().prev().addClass('active');
                    }
                } else {
                    $(anchor).removeClass('active');
                }
            });

            $sidebar.map((i, anchor) => {
                if (this.$activeElement.is('img')) {
                    $(anchor).removeClass('active');
                } else if ($activeVal === $(anchor).attr('href')) {
                    $(anchor).addClass('active');
                } else {
                    $(anchor).removeClass('active');
                }
            });
        });
    }

    onScroll() {
        if (this.$activeElement) {
            this.$activeElement = null;
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
    }
}

export default Nav;
