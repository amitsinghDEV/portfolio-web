function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function send() {
  var name = document.getElementById("fname").value;
  var Contactemail = document.getElementById("C_email").value;
  var Contactsubject = document.getElementById("C_subject").value;
  var ContactMessage = document.getElementById("C_message").value;
  var body =
    "Name : " +
    name +
    "<br/> Client mail : " +
    Contactemail +
    "<br/> Client Message : " +
    ContactMessage;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "amitsinghmca2021@gmail.com",
    Password: "293CC7C239F281438B655E569D226D991B07",
    To: "amitsingh280899@gmail.com",
    From: "amitsinghmca2021@gmail.com",
    Subject: Contactsubject,
    Body: body,
  }).then((message) => {
    if ((message = "OK")) {
      swal("Successful", "Your Message is Sent", "success");
      console.log(body);
    } else {
      swal("Error", "Your Message is not sent", "error");
    }
  });
}
