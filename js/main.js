$(document).ready(function() {
   $('.box').on('click', '.box-button', function() {
       $(this).parent().toggleClass('highlight');
   })
});