jQuery('.panel-heading').click(function() {
    jQuery(this).siblings('.panel-body').slideToggle();
});

dragDrop('.moveItem', 'leftPanel', 'rightPanel');

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

        // console.log(jQuery(this).parent('#selectedList') );

        // var id = jQuery(this).parents('.list-group')[0].id;
        // console.log(id);
        // var replaced;
        // if(id.indexOf('left') + 1) {
        //     replaced = id.replace(/left/gi, '#right');
        // } else {
        //     replaced = id.replace(/right/gi, '#left');
        // }
        //
        // jQuery(this).parent('.group-item').hide();
        // jQuery('#selectedList').append(jQuery(this).parents('.group-item'));
        // jQuery(this).parent('.group-item').show('slow');
        // console.log(jQuery(this).parents('.group-item'));
        //
        //
        //
    });
}

function reculcPrice() {
    var price = 0;
    jQuery('#selectedList').find('li').each(function() {
        price += +jQuery(this).attr('price') || 0;
    });
    return price;
}