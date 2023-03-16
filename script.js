$(document).ready(function() {
  $("#reset").click(function() {
    resetFields();
  });
  $("#submit").click(function() {
    submitForm();
  })
});

function calculateDaysAndCosts() {
  let start = $("#checkin").val();
  let startMoment = moment(start);
  let end = $("#checkout").val();
  if (start && end) {
    let endMoment = moment(end);
    let dayDiff = endMoment.diff(startMoment, 'days');
    $("#days").val(dayDiff);
    let adults = $("#select-adult").val();
    $("#costs").val(dayDiff * adults * 150);
  }
}

function resetFields() {
  $("input").val('');
  $("textarea").val('');
  $("#select-adult").val("1").change();
  $("#Low").prop("checked", true);
  $("#days").val("Displays days...");
  $("#costs").val("Displays costs...");
  $("#div-username").removeClass("has-error");
  $("#div-firstname").removeClass("has-error");
  $("#div-lastname").removeClass("has-error");
  $("#div-phone").removeClass("has-error");
  $("#div-fax").removeClass("has-error");
  $("#div-email").removeClass("has-error");
  $("#div-checkin").removeClass("has-error");
  $("#div-checkout").removeClass("has-error");
  toastr["info"]("All fields were successfully cleared!", "", {closeButton: true,
                                                              positionClass: "toast-bottom-right"});
}

function submitForm() {
  let pass = true;
  //Username field
  if (!$("#username").val()) {
    $("#div-username").addClass("has-error");
    pass = false;
    toastr["error"]("You have to fill the Username field", "", {closeButton: true});
  } else {
    $("#div-username").removeClass("has-error");
  }
  //First name field
  if (!$("#firstname").val()) {
    $("#div-firstname").addClass("has-error");
    pass = false;
    toastr["error"]("You have to fill the First Name field", "", {closeButton: true});
  } else {
    $("#div-firstname").removeClass("has-error");
  }
  //Last name field
  if (!$("#lastname").val()) {
    $("#div-lastname").addClass("has-error");
    pass = false;
    toastr["error"]("You have to fill the Last Name field", "", {closeButton: true});
  } else {
    $("#div-lastname").removeClass("has-error");
  }
  //Phone field
  if (!$("#phone").val()) {
    $("#div-phone").addClass("has-error");
    pass = false;
    toastr["error"]("You have to fill the Phone# field", "", {closeButton: true});
  } else {
    $("#div-phone").removeClass("has-error");
  }
  //Fax field
  if (!$("#fax").val()) {
    $("#div-fax").addClass("has-error");
    pass = false;
    toastr["error"]("You have to fill the Fax# field", "", {closeButton: true});
  } else {
    $("#div-fax").removeClass("has-error");
  }
  //Email field
  if (!$("#email").val()) {
    $("#div-email").addClass("has-error");
    pass = false;
    toastr["error"]("You have to fill the e-mail field", "", {closeButton: true});
  } else {
    $("#div-email").removeClass("has-error");
  }
  if (isNaN($("#costs").val()) || !$("#costs").val()) {
    pass = false;
    toastr["error"]("No cost was calculated, please fill in both Check-In and Check-Out fields", "", {closeButton: true});
  } else if ($("#costs").val() <= 0) {
    pass = false;
    toastr["error"]("Cost is nagative or zero, please make sure Check-Out date is after Check-In date", "", {closeButton: true});
  }
  if (pass == true) {
    toastr["success"]("The form was successfully submitted", "", {closeButton: true});
  }
}