
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
    // when window reach 600px alert the user to turn cellphone to landscape//
    // create an event listener for a resize event
      $(window).resize(function () {
        // if user reach 600px alert 
        if ($(window).width() <= 600) {
          alert("turn your cellphone to landscape");
        } else {
          console.log('created at Juno College')
        }
      });


});

