
// get document ready//
$(document).ready(function () {
      // Create an event listener for a 'checked' event//
      $('input:checkbox').on('change',function () {
            //create variable to match name and image//
           const display = $(this).prop('name');
           const value = $(this).value();
             // Display the image on the page!//
            if (value === true) {
                  // if value is true append image//
                  $('div.options.photo').append(`<img src=./assets/${display}.png />`)
                  // if value is false remove image//
            if (value === false) {
                   $(`img[src=./assets/${display}.png]`.remove());

                  }
            }
      })
      
});

