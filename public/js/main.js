(function ($) {
  "use strict";

  /*--------------------------
    preloader
    ---------------------------- */

  $(window).on("load", function () {
    var pre_loader = $("#preloader");
    pre_loader.fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // // meanmenu
  // $("#mobile-menu").meanmenu({
  //   meanMenuContainer: ".mobile-menu",
  //   meanScreenWidth: "992",
  // });

  /*---------------------
     TOP Menu Stick
    --------------------- */

  var windows = $(window);
  var sticky = $("#sticker");

  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /*---------------------
     wow .js
    --------------------- */
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true,
    }).init();
  }
  wowAnimation();

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="ti-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  $(".dashboard-right-menus li a.thumbs").click(function () {
    $(".notification-area.left-part").toggleClass("active");
  });

  $(".dashboard-right-menus li a.author").click(function () {
    $(".notification-area.side-part").toggleClass("active");
  });

  // Nice Select JS
  $("select").niceSelect();
  /*---------------------
     Count Timer
    ---------------------*/
  if ($(".token-count").length > 0) {
    var your_date = "2023-08-17 00:00:00";
    var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    var countDown = new Date(your_date.replace(/-/g, "/")).getTime();

    setInterval(function () {
      var now = new Date().getTime(),
        distance = countDown - now;
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );
    }, second);
  }

  /*---------------------
     Token Progress
    ---------------------*/
  if ($(".token-progress").length > 0) {
    setTimeout(coins_progress, 3000);

    function coins_progress() {
      $(".token-progress span").each(function () {
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
          },
          1000
        );
        $(this).text($(this).attr("data-progress") + "%");
      });
    }
  }
  /*---------------------
     Brand carousel
    ---------------------*/
  var brand = $(".brand-carousel");
  brand.owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  /*----------------------------
        Contact form
    ------------------------------ */
  $("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      formError();
      submitMSG(false, "Did you fill in the form properly?");
    } else {
      event.preventDefault();
      submitForm();
    }
  });

  function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();

    $.ajax({
      type: "POST",
      url: "assets/contact.php",
      data:
        "name=" +
        name +
        "&email=" +
        email +
        "&msg_subject=" +
        msg_subject +
        "&message=" +
        message,
      success: function (text) {
        if (text === "success") {
          formSuccess();
        } else {
          formError();
          submitMSG(false, text);
        }
      },
    });
  }

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
  }

  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated text-success";
    } else {
      var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
})(jQuery);
