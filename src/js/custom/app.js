import 'babel-polyfill';

let $ = window.$;

let $sectionAnchors = $('.section-nav a');
let $navAnchors = $('#navbar-container a');
let activeVal = '#prerequisites';

$navAnchors.on('click', e => {
    if (!$(e.target).hasClass('dropdown-toggle')) {
        activeVal = $(e.target).attr('href');
    }
    
    
    $sectionAnchors.map((i, a) => {
        if ($(a).attr('href') === activeVal) {
            $(a).addClass('active');
        } else {
            $(a).removeClass('active');
        }
    });

    $navAnchors.map((i, n) => {
        if ($(n).attr('href') === activeVal) {
            $(n).addClass('active');
            if ($(n).parent().hasClass('dropdown-menu')) {
                $(n).parent().prev().addClass('active');
            }
        } else {
            $(n).removeClass('active');
        }
    });
});

$sectionAnchors.on('click', e => {
    activeVal = $(e.target).attr('href');

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
