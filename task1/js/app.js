function validate() {
  var $form = $('[data-validate]');
  var $name = $form.children().eq(0);
  var $email = $form.children().eq(1);
  var $date = $form.children().eq(2);
  var $ip = $form.children().eq(3);
  var required = 0;


  $form.children().each(function(index) {
    $(this).removeClass("error");
    if ((this.hasAttribute('data-validate-required')) && (this.value.length == 0)) {
      $(this).addClass("error");
      required++;
    }
  });

  var validName = validateName($name);
  var validEmail = validateEmail($email);

  if ($date.val().length !== 0) {
    var validDate = validateDate($date);
  }

  if ($ip.val().length !== 0) {
    var validIp = validateIp($ip);
  }


  console.log(validName, validEmail, validDate, validIp);


  return false;
}

function validateName($name) {
  var incorrect = true;
  var minlength = $name.attr('data-validate-minlength');
  var maxlength = $name.attr('data-validate-maxlength');
  if (($.trim($name.val()).length < minlength) || ($.trim($name.val()).length > maxlength)) {
    alert('Incorrect length of name, white spaces are not allowed');
    $name.addClass('error');
    incorrect = false;
  }
  return incorrect;
}

function validateEmail($email) {
  var incorrect = false;
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if ($.trim($email.val()).match(pattern)) {
    incorrect = true;
  } else {
    alert('Email is invalid');
  }
  return incorrect;
}

function validateDate($date) {
  var incorrect = false;
  if ($date.val().split("/").length == 3) {
    if (($date.val().split("/")[0] <= 31) && (($date.val().split("/")[1]) <= 12)) {
      incorrect = true;
    } else {
      alert("Your date is unreal");
    }
  } else {
    alert("Your date is invalid, it should be in dd/mm/yyyy formar");
  }
  return incorrect;
}

function validateIp($ip) {
  var validIp = false;
  var overflow = false;
  var ipPattern = $ip.attr('data-validate-regexp');
  var ipArr = $ip.val().split(".")
  if ($ip.val().search(ipPattern) !== -1) {
    for (var i = ipArr.length - 1; i >= 0; i--) {
      if (ipArr[i] > 255) {
        overflow = true
      } else {
        validIp = true;
      }
    }
  } else {
    alert('Format of ip is 0.0.0.0')
  }
  if (overflow) {
    alert('Maximum value of each is 255');
  }
  return validIp;
}
