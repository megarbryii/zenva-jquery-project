function addItem(name, desc, price, moreInfo) {
    let html = '';
    html += '<div class="item">';
         html += '<div class="name">' + name + '</div>';
         html += '<img src="assests/origamiFlower.jpg" alt="Tokyo pic">';
         html += '<div class="desc">' + desc + '</div>';
         html += '<div class="price">' + price + '</div>';
         html += '<button class="item-add">Add to cart</button>';
         html += '<button class="item-remove">Remove</button>';
         html += '<br/>';
         html += '<a class="more-info-link" href="#">More info</a>';
         html += '<div class="more-info">'+ moreInfo + '</div>';
     html += '</div>';

     $('#container').append(html);
}

$(document).ready(function() {
        $('#container').on('click', '.more-info-link', function(e) {
            e.preventDefault();

            $(this).parent().find('.more-info').slideToggle('fast');
            $(this).animate({ 'opacity': 0.5, "margin-left": 10 }, 'fast').animate({'opacity': 1.0, 'margin-left': 0}, 'fast');
        });

        $('#container').on('click', '.item-remove', function() {
            $(this).parent().remove();
        });

        $.ajax('data/item.json', {
            dataType: 'json',
            contentType: 'application/json',
            cache: false
        })
        .done(function(res) {
            let items = res.items;
            items.forEach(function(item) {
                addItem(item.name, item.desc, item.price, item.moreInfo);
            })
        })
        .fail(function(req, errType, errMsg) {
                console.log(errMsg);
        })
        .always(function(){

        });
   });

   
 