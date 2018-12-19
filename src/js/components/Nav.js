let $ = window.$;

class Nav {
  constructor() {
    this.$activeElement = null;
    this.$elements = {
      $navbar: $('#navbar-container a'),
      $navbarIcon: $('.navbar .icon'),
      $sidebar: $('.sidebar-nav a')
    };
  }

  init() {
    let { $navbar, $sidebar } = this.$elements;
    if (location.hash) {
      this.$activeElement = $(`${location.hash}`);
      $(window).scrollTop(this.$activeElement.offset().top);
    }

    // Event Listeners
    this.onClick($navbar);
    this.onClick($sidebar);
    this.onScroll();
  }

  onClick(element) {
    let { $navbar, $navbarIcon, $sidebar } = this.$elements;
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
      if ($(e.target).hasClass('dropdown-toggle') === false) {
        $activeVal = $(e.target).attr('href');

        // remove dropdown on mobile selection
        if ($navbarContainer.hasClass('show')) {
          $navbarContainer.removeClass('show');
        }
      }

      $navbar.map((i, anchor) => {
        if ($(window).width() > 992) {
          if (
            this.$activeElement.is('img') ||
            this.$activeElement.hasClass('dropdown-toggle')
          ) {
            $(anchor).removeClass('active');
          } else if (
            $(anchor).attr('href') === $activeVal ||
            $(anchor)
              .parent()
              .prev()
              .data('href') === $activeVal
          ) {
            $(anchor).addClass('active');
            $(anchor)
              .siblings()
              .removeClass('active');
            if (
              $(anchor)
                .parent()
                .hasClass('dropdown-menu')
            ) {
              $(anchor)
                .parent()
                .prev()
                .addClass('active');
            }
          } else {
            $(anchor).removeClass('active');
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

    $navbarIcon.on('click', () => {
      if ($navbarContainer.hasClass('show')) {
        $navbarContainer.removeClass('show');
      }
    });
  }

  onScroll() {
    $(document).on('scroll', () => {
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
            $('nav a')
              .eq(i)
              .addClass('active');

            // sidebar
            $('.sidebar-nav a.active').removeClass('active');
            $('.sidebar-nav a')
              .eq(i)
              .addClass('active');
          }
        });
      }
    });
  }
}

let nav = new Nav();
nav.init();
