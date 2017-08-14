$(document).ready(function() {
  
  $("#login").prop("checked", true);
  $("#reg-item").css("height", "0");
  
  $("#login").click(function() {
    $("#reg-item").css("height", "0");
    $("#login").prop("checked", true);
    $("#register").prop("checked", false);
    $("#submit").val("login");
  });
  
  $("#register").click(function() {
    $("#reg-item").css("height", "2rem");
    $("#register").prop("checked", true);
    $("#login").prop("checked", false);
    $("#submit").val("register");
  });
  
});