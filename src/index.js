document.getElementById("btn-send").addEventListener("click", (e) => {
  e.preventDefault();
  var templateParams = {
    from_name: document.getElementById("name_id").value,
    to_number: document.getElementById("number_id").value,
    to_email: document.getElementById("email_id").value,
    message: document.getElementById("message_id").value,
  };

  emailjs
    .send("service_mhum3tp", "template_28dskun", templateParams)
    .then((response) => console.log(response.statut))
    .catch((error) => console.log(error.message));

  alert("votre email a été envoyée");
  document.getElementById("form-send").reset();
});
