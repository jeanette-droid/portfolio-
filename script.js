const navLinks = document.querySelectorAll("nav a");//recupère liens 
navLinks.forEach((link)=>{
  link.addEventListener("click", function(e){
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));//retire active de ts les liens
    this.classList.add("active");//active lien cliqué
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" })
  });
});
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  const prenom = document.getElementById("prenom").value;
  const nom = document.getElementById("nom").value;
  const sujet = document.getElementById("sujet").value;
  const content = document.getElementById("content").value;
  if(prenom === ""|| nom === "" || sujet === "" || message === ""){
    alert("Merci de remplir tous les champs !")
  }else{
    alert("Merci"+prenom+"! Votre message a été envoyé.");
    form.reset();
  }
});
const btnProject= document.querySelector("#home button");
btnProject.addEventListener("click", function(){
  document.querySelector("#projects").scrollIntoView({behavior: "smooth"});
})