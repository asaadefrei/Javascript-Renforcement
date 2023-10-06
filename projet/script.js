var myButton = document.getElementById("myButton");
var nomElement = document.getElementById("nom"); 
var prenomElement = document.getElementById("prenom"); 
var phoneElement = document.getElementById("phone"); 
var pictureElement = document.getElementById("picture"); 



myButton.addEventListener("click", function () {
  const min = 1; 
  const max = 100; 
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(json => {
        var results = json.results;
        var prenom = results.map(obj => (obj.name.first));
        var nom  = results.map(obj => (obj.name.last));
        var phone = results.map(obj => (obj.phone));
        var picture = results.map(obj => (obj.picture.medium));
        nomElement.textContent = nom[randomInt];
        prenomElement.textContent = prenom[randomInt];
        phoneElement.textContent = phone[randomInt];
        pictureElement.src = picture[randomInt];

  
    })
  
  
}); 
