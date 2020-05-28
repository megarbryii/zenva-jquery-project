$(document).ready(function() {
   $('#select-menu').on('change', function(){
       let name = $('#select-menu option:selected').text();
       let dist = $('#select-menu option:selected').val();
       let price = $('#select-menu option:selected').data('price');

       if(dist) {
            $('#feedback-message').text('You are signing up for a ' + name + ', which costs ' + price + ', to a distance of ' + dist + 'km');
       } else {
           $('#feedback-message').text('');
       }

       
   })
});