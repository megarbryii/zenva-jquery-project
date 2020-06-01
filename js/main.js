$(document).ready(function() {
   $('#button-create-item').on('click', function() {
       let name = $('#input-create-item').val();
       $('#input-create-item').val('');

       let html = '';
       html += '<div class="item">';
            html += '<div class="name">' + name + '</div>';
            html += '<img src="assests/origamiFlower.jpg" alt="Tokyo pic">';
            html += '<div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>';
            html += '<div class="price">499</div>';
            html += '<button class="item-add">Add to cart</button>';
            html += '<button class="item-remove">Remove</button>';
            html += '<br/>';
            html += '<a class="more-info-link" href="#">More info</a>';
            html += '<div class="more-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>';
        html += '</div>';

        $('#container').append(html);

        $('#container').on('click', '.more-info-link', function(e) {
            e.preventDefault();

            $(this).parent().find('.more-info').slideToggle('fast');
            $(this).animate({ 'opacity': 0.5, "margin-left": 10 }, 'fast').animate({'opacity': 1.0, 'margin-left': 0}, 'fast');
        })

        $('#container').on('click', '.item-remove', function() {
            $(this).parent().remove();
        })
   })

   $.ajax('data/item.json', function(res) {
       console.log(res);
   });
});