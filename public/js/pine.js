$(window).on("scroll", function () {

  function contact_page() {
    location.href = "../view/Contact.html";
  }

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById(".header").style.fontSize = "30px";
    } else {
      document.getElementById(".header").style.fontSize = "90px";
    }
  }
  // enquiry form validation

  function validateName() {

    var name = document.getElementById('first-name').value;
    if (name.length == 0) {

      return false;


    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      $("#name").html("Required");
      $("#name").css('border', '#e66262 1px solid');


      return false;

    }

    return true;

  }

  function validatePhone() {

    var phone = document.getElementById('phone').value;

    if (phone.length == 0) {
      alert('Phone number is required.', 'phone-error', 'red');
      return false;
    }

    if (phone.length != 10) {
      alert('Include area code.', 'phone-error', 'red');
      return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
      producePrompt('Only digits, please.', 'phone-error', 'red');
      return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;

  }

  function validateEmail() {

    var email = document.getElementById('email').value;

    if (email.length == 0) {

      producePrompt('Email Invalid', 'email-error', 'red');
      return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

      producePrompt('Email Invalid', 'email-error', 'red');
      return false;

    }

    producePrompt('Valid', 'email-error', 'green');
    return true;

  }

  function validateMessage() {
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
      producePrompt(left + ' more characters required', 'message-error', 'red');
      return false;
    }

    producePrompt('Valid', 'message-error', 'green');
    return true;

  }

  function validateForm() {
    alert("inside form")
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      alert('plese insert valid data');
      style = "('Please fix errors to submit.', 'submit-error', 'red')";
      return false;
    } else {

    }
  }

  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }

  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }




  function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  }

  // function scrollFunction() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("header").style.fontSize = "30px";
  //   } else {
  //     document.getElementById("header").style.fontSize = "90px";
  //   }
  // }


  // $('.modal-content').resizable({
  //   //alsoResize: ".modal-dialog",
  //   minHeight: 300,
  //   minWidth: 300
  // });
  // $('.modal-dialog').draggable();

  // $('#exampleModal').on('show.bs.modal', function () {
  //   $(this).find('.modal-body').css({
  //     'max-height': '100%'
  //   });
  // });

});