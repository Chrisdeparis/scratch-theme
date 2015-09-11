jQuery(document).ready(function($) {
  window.addEventListener('load', function() {
    var video = document.querySelector('video.scratch-video');

    function checkLoad() {
      if (video && video.readyState === 4) {
        $('video.scratch-video').velocity({
          opacity: 1
        }, {
          duration: 400,
          display: 'block'
        });
      } else {
        setTimeout(checkLoad, 100);
      }
    }

    checkLoad();
  }, false);
  $('.slider').glide({
    autoplay: false,
    arrowRightText: '',
    arrowLeftText: '',
    afterInit: function() {
      $('.slider .slider__wrapper').velocity({
        opacity: 1
      }, {
        duration: 400,
        delay: 1000
      });
    }
  });
  $('.nav-toggle').click(function() {
    if ($(this).data('direction') === 'down') {
      $('nav ul.main-nav')
        .velocity("slideDown", {
          duration: 250
        });
      $(this).data('direction', 'up');
    } else {
      $('nav ul.main-nav')
        .velocity("slideUp", {
          duration: 250
        });
      $(this).data('direction', 'down');
    }
    $(this).toggleClass('active');
  });
  $('.toggle-heading').click(function() {
    if ($(this).data('direction') === 'down') {
      $(this).next('.toggle-content')
        .velocity("slideDown", {
          duration: 250
        });
      $(this).data('direction', 'up');
    } else {
      $(this).next('.toggle-content')
        .velocity("slideUp", {
          duration: 250
        });
      $(this).data('direction', 'down');
    }
    $(this).toggleClass('active');
  });
  $('.popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });
  $('.image-link').magnificPopup({
    type: 'image',
    midClick: true
  });
  $('.iframe-link').magnificPopup({
    type: 'iframe',
    midClick: true
  });
  $('.popup-gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  });
  $('.scroll-link').click(function(e) {
    e.preventDefault();
    $(this).blur();
    var string = $(this).attr('href').split('#')[1];
    $('#' + string)
      .velocity('scroll', 400);
  });
});