// Assignment Code
var generateBtn = document.querySelector("#generate");
var special_characters = ["!", "@", "#", "$", "&", "/", "(", ")", "=", "?", "¿", "¡"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalized_letters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var result = ``;


// Write password to the #password input
function print_result(){
  let text = document.querySelector(`#password`);
  text.innerHTML = "";
  text.innerHTML = gen_password();

}

function get_length(){
  let pass_lenght =  window.prompt(`Password Lenght, Must be between 8 & 128 Characters`, "0").trim();
  pass_lenght = parseInt(pass_lenght);
  if(pass_lenght == ""){
    window.alert("Invalid Input");
    return get_length();
  }else if(isNaN(pass_lenght)){
    window.alert("Invalid Input");
    return get_length();
  }else if(pass_lenght < 8){
    window.alert("Invalid Input");
    return get_length();
  }else if(pass_lenght > 128){
    window.alert("Invalid Input");
    return get_length();
  }else {
    return pass_lenght
  }
}
function get_uppercase(){
  let pass_uppercase = window.prompt(`Add Upercasse Letters`, "Y/N").trim();
  
  pass_uppercase = pass_uppercase.toUpperCase();
  if(pass_uppercase == ""){
    window.alert("Invalid Input");
    return get_uppercase();
  }else if(pass_uppercase == "Y"){
    return true
  }else if(pass_uppercase == "N"){
    return false
  }else{
    window.alert(`Invalid Input`);
    return get_uppercase();
  }

}
function get_specialCharacters(){
  let pass_specialCharacters = window.prompt(`Add Special Characters`, "Y/N").trim();
  pass_specialCharacters = pass_specialCharacters.toUpperCase();
  if(pass_specialCharacters == ""){
    window.alert("Invalid Input");
    return get_specialCharacters();
  }else if(pass_specialCharacters == "Y"){
    return true
  }else if(pass_specialCharacters == "N"){
    return false
  }else{
    window.alert(`Invalid Input`);
    return get_specialCharacters();
  }
}
function gen_password(){
  let lenght = get_length();
  let uppercase = get_uppercase();
  let spe_char = get_specialCharacters();
  
  if(uppercase == false && spe_char == false){
    let chars = [numbers, letters];
    let pass = ""
    for (let index = 0; index < lenght; index++) {
      pass = pass + get_random(get_random(chars));
    }
    return pass
    
  }else if(uppercase == true && spe_char == true){
    let chars = [numbers, letters, capitalized_letters, special_characters];
    let pass = ""
    for (let index = 0; index < lenght; index++) {
      pass = pass + get_random(get_random(chars));
    }
    return pass

  }else if(uppercase == false && spe_char == true){
    let chars = [numbers, letters, special_characters]
    let pass = ""
    for (let index = 0; index < lenght; index++) {
      pass = pass + get_random(get_random(chars));
    }
    return pass

  }else if(uppercase == true && spe_char == false){
    let chars = [numbers, letters, capitalized_letters];
    let pass = ""
    for (let index = 0; index < lenght; index++) {
      pass = pass + get_random(get_random(chars));
    }
    return pass
  }

}

function get_random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}




// Add event listener to generate button

generateBtn.addEventListener("click", print_result);
