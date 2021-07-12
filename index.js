// Selecting Elements
const btn = document.querySelector("#getFullNameBtn");
const fullName = document.querySelector("#nameSurname");
const age = document.querySelector("#age");
const linkednLink = document.querySelector("#linkedinUrl");
const githubLink = document.querySelector("#githubUrl");

// setting name surname and age variables
const NAME = "Aze";
const SURNAME = "Bilir";
const AGE = 26;

// setting attributes to <a> elements
linkednLink.setAttribute("href", "https://www.linkedin.com/in/aze-bilir/");
githubLink.setAttribute("href", "https://github.com/AzeBilir");

//getfullName function
function getfullName() {
  fullName.innerHTML = `${NAME} ${SURNAME}`;
  age.innerHTML = AGE;
  btn.style.display = "none";
}
  


 
