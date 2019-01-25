// Déclaration de ma fonction "keypressed".
function keypressed(){
  // On vérifie que l'utilisateur ne rentre que des lettres
  var regex = /^[a-zA-Z ]+$/
  // Si c'est le cas, on applique la fonction
  if(regex == true){
    var lastname = document.getElementById('lastname').value;
    alert(lastname);
    //Sinon, on le préviens qu'il s'est trompé
  }else{
    alert('vous n\'avez pas entré uniquement des lettres')
  }
}
