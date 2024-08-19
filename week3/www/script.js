$(document).ready(function () {
  console.log("Page Ready");
  $("#loginform").submit(function (event) {
    event.preventDefault();
    ajaxPost();
  });

  function ajaxPost() {
    var formData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/login",
      data: JSON.stringify(formData),
      dataType: "json",
      success: function (isValid) {
        if (isValid.valid == true) {
          $(".login__field").addClass("success");
          $(".login__field").removeClass("fail");
          $("#errormsg").removeClass("hidemessage");
          $("#errormsg").addClass("showmessage");
        } else {
          $(".login__field").addClass("fail");
          $(".login__field").removeClass("success");
          $("#errormsg").removeClass("hidemessage");
          $("#errormsg").addClass("showmessage");
        }
      },
      error: function (e) {
        alert("Error!");
        console.log("ERROR: ", e);
      },
    });

    resetData();
  }

  function resetData() {
    $("#username").val("");
    $("#password").val("");
  }
});
