
  $(document).ready(function() {
    $('.testimonial-carousel').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 500,
      fade: false,
      cssEase: 'linear',
      slidesToShow: 1,
      adaptiveHeight: true
    });

    $('.testimonial-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var currentHeight = $('.testimonial-box.slick-active').outerHeight();
      $('.testimonial-carousel').css('height', currentHeight + 'px');
    });

    $(window).on('resize', function() {
      var currentHeight = $('.testimonial-box.slick-active').outerHeight();
      $('.testimonial-carousel').css('height', currentHeight + 'px');
    });
  });

  $(document).ready(function() {
  // Add a submit event listener to the form
  $('#contact-form').on('submit', function(e) {
    // Prevent the form from submitting normally
    e.preventDefault();
    
    // Submit the form via AJAX
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json',
      success: function() {
        // Clear the form fields
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');

        // Scroll to the top of the page
        $('html, body').animate({scrollTop: 0}, 'slow');
      }
    });
  });
});



