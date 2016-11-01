setup form with 1 text input
  check no special characters or numbers
  var userName = $("input#user").val();

setup a dropdown menu with 1 blank placeholder
  ("input#userName").append("userName");

output text input into <select><option></option></select>
  ("select#userName").append("<option>" + userName + </option>");
output form value into dropdown menu using .append  
  push value into an array simultaneously
  get .length of array, and assign an id to new <option> with value
