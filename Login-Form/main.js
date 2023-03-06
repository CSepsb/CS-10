// Password Strength Checker
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get variables
  let user_username = document.getElementById("user-username").value;
  let user_password = document.getElementById("user-password").value;
  let user = "admin";
  let password = "1234";

  // Test the password strength
  if (user_username != user) {
    document.getElementById("output").innerHTML = `<h2>Invalid Username</h2>`;
  } else if (user_password != password) {
    document.getElementById("output").innerHTML = `<h2>Invalid Password</h2>`;
  } else if (user_username == user && user_password == password) {
    document.getElementById("output").innerHTML = `<h2>Login Successful</h2>`;
  } else {
    document.getElementById("output").innerHTML = `<h2>IDK</h2>`;
  }
}
