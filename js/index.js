jQuery('.panel_header').click(function() {
    jQuery(this).siblings('.panel-body').slideToggle();
    jQuery(this).children('.toggleIcons').children().siblings().toggle();
});

dragDrop('.moveItem', '', '');

function dragDrop(item, firstParent, secondParent) {
    var arr = JSON.parse(jQuery.cookie('items'));


    console.log(arr);
    // savedItems.each(function() {
    //
    // });
    for (var i = 0; i < arr.length; i++) {
        jQuery('#selectedList').append(jQuery('#' + arr[i]));
    }
    jQuery('#summBox').html(reculcPrice());
    // jQuery(this).children().siblings().toggle();

    jQuery(item).click(function() {
        if (jQuery(this).parents('#selectedList').length) {
            var parent = '#' + jQuery(this).parents('.group-item').attr('data-parent');
            jQuery(parent).append(jQuery(this).parents('.group-item'));

            var indexOfItem = arr.indexOf(jQuery(this).parents('.group-item').attr('id'));
            arr.splice(indexOfItem);
            console.log(arr);
        } else {
            jQuery('#selectedList').append(jQuery(this).parents('.group-item'));

            arr.push(jQuery(this).parents('.group-item').attr('id'));
            console.log(arr);
        }
        jQuery.cookie('items', JSON.stringify(arr));




        jQuery(this).children().siblings().toggle();
        jQuery('#summBox').html(reculcPrice());


    });

    jQuery('#saveItems').click(function() {

    });
}


function reculcPrice() {
    var price = 0;
    jQuery('#selectedList').find('li').each(function() {
        price += +jQuery(this).attr('price') || 0;
    });
    return price;
}