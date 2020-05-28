$(document).ready(function() {
   $('#input-name').on('keyup', function() {
       let name = $(this).val();
      $('#feedback-message').text('Nice to meet you ' + name);
   })

   $('a').on('click', function(e) {
        e.preventDefault();
        $('#feedback-message').text('That\'s fine');
   })
});