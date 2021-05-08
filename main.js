
// get document ready//
$(document).ready(function () {
      // Create an event listener for a 'change' event//
      $('input:radio').change(function () {
            // write variable for value (image)
            const display = $(this).prop('value');
            // write variable for name
            const name = $(this).prop('name')
            // Display the image on the page!
            $('#' + name).attr('src', display)

      })
});

