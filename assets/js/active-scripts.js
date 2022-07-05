jQuery(document).ready(function($){
    if (!$('.elementor-editor-active').length && $('.tabi').length) {
        $('.tabi:not(:first)').addClass("hidden_tab");
        var tab_list = "<ul id='tab_list'>";
        $('.tabi h2').each(function(i) {
            tab_list += "<li class='tab_link'><a href='tabi"+ (i+1) +"'>" + $(this).text() + "</a></li>";
        });
        tab_list += "</ul>";
     
        $('.tabi').first().addClass('tab_active').before(tab_list);
        $('.tab_link a').first().addClass('link_active');
        $('.tab_link a').on('click', function(event) {
            event.preventDefault();
            if (!$(this).hasClass('link_active')) {
                $('.tab_link a').removeClass('link_active');
                $(this).addClass('link_active');
                tab = "#" + $(this).attr('href');
                $('.tab_active').addClass("hidden_tab").removeClass('tab_active visible_tab');
                $(tab).addClass('tab_active visible_tab').removeClass('hidden_tab');
            }
        });
    }
    if  ($('.single_hero').length) {
        var align=$('.single_hero .elementor-widget-image').css('text-align');
        if (align!=="") {
            if (align=="center") {
                $('.single_hero img').css('object-position','50% 50%');
                $('.single_hero').addClass('img_ready');
            }
            if (align=="left") {
                $('.single_hero img').css('object-position','0% 50%');
                $('.single_hero').addClass('img_ready');
            }
            if (align=="right") {
                $('.single_hero img').css('object-position','100% 50%');
                $('.single_hero').addClass('img_ready');
            }
        }
    }
    $(window).load(function() {
        $( '.elementor-accordion .elementor-tab-title' ).removeClass( 'elementor-active' );
        $( '.elementor-accordion .elementor-tab-content' ).css( 'display', 'none' ); 
    });
});