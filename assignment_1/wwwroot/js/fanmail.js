var submit = document.getElementById("submitButton")

submit.addEventListener("click", function () {
    alert(
    "From: " + document.getElementById("fromField").value + "\n" +
    "Email: " + document.getElementById("emailField").value + "\n" +
    "Subject: " + document.getElementById("subjectField").value + "\n" +
    "Message: " + document.getElementById("messageField").value)
});