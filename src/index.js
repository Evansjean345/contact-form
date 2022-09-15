//recuperation de l'id du form
//ajout de levenement click

document.getElementById("btn-send").addEventListener("click", (e) => {
  e.preventDefault();
  //paramettre defini du template
  //variable defini dans le template
  var templateParams = {
    from_name: document.getElementById("name_id").value,
    to_number: document.getElementById("number_id").value,
    to_email: document.getElementById("email_id").value,
    message: document.getElementById("message_id").value,
  };
//function envoyzr l'email
//1- sevice id 2- template id
  emailjs
    .send("service_mhum3tp", "template_28dskun", templateParams)
    .then((response) => console.log(response.statut))
    .catch((error) => console.log(error.message));
//indiquer un message au user
  alert("votre email a été envoyée");
  //retinialiser le form
  document.getElementById("form-send").reset();
});
