
document.getElementById("postBtn").addEventListener("click",function(){

    const container= document.querySelector("#text-container");

  let textField=  document.getElementById("input-field");
  const text=textField.value;

const ul= document.createElement("ul");
const li= document.createElement("li");
li.innerText=text;
container.appendChild(ul);
ul.appendChild(li);
textField.value="";





})