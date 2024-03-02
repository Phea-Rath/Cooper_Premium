let firstname;
let lastname;
let Email;
let phone;
let Message;

document.getElementById("mysub").onclick = function () {
  firstname = document.getElementById("mytext").value;
  lastname = document.getElementById("mytext1").value;
  Email = document.getElementById("email").value;
  phone = document.getElementById("tel").value;
  Message = document.getElementById("message").value;
  document.getElementById(
    "myh1"
  ).textContent = `Hello ${firstname} ${lastname}`;
  console.log(firstname + " " + lastname);
  console.log(Email);
  console.log(phone);
  console.log(Message);
};
