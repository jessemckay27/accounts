var accounts = [];

var addAccounts = function(userName) {
  accounts.push(userName);
}

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var userName = $("input#user-name").val();

    addAccounts(userName);
    $("#output").html("<div class='account" + accounts.length + "'>" + userName + "</div>");
    $("select").append("<option class='account" + accounts.length + "'>" + userName + "</option>");
    $("input#user-name").val("");
  });

  $('#select-user').change(function(event){
    event.preventDefault();
    $('#output').html($('#select-user').val());
  });
});
