
// get document ready//
$(document).ready(function () {
      // Create an event listener for a 'change' event//
      $('input:checkbox').change(function () {
            //variable to match picture location-to display image when the option is clicked
            const display = $(this).prop('name');
            if ($(this).is(':checked'))
             // Display the image on the page!//
                  $('div.options.photo').append(`<img src=./assets/${display}.png/>`)
            //remove image if another option is selected
            else {
                   $(`img[src=./assets/${display}.png]`.remove());

           }  
      })
});





