jQuery('.panel_header').click(function() {
    jQuery(this).siblings('.panel-body').slideToggle();
    jQuery(this).children('.toggleIcons').children().siblings().toggle();
});

dragDrop('.moveItem', '', '');

function dragDrop(item, firstParent, secondParent) {
    jQuery(item).click(function() {
        if (jQuery(this).parents('#selectedList').length) {
            var parent = '#' + jQuery(this).parents('.group-item').attr('data-parent');
            jQuery(parent).append(jQuery(this).parents('.group-item'));
        } else {
            jQuery('#selectedList').append(jQuery(this).parents('.group-item'));
        }
        jQuery('#summBox').html(reculcPrice());
        jQuery(this).children().siblings().toggle();
    });
}

function reculcPrice() {
    var price = 0;
    jQuery('#selectedList').find('li').each(function() {
        price += +jQuery(this).attr('price') || 0;
    });
    return price;
}