let contador = 0;
let name =0;
function pintar(name) {
  const ele = document.getElementById(name);
  if (contador % 2 == 0) {
    ele.style.backgroundColor = "yellow";
  } else {
    ele.style.backgroundColor = "red";
  }
  
  
}

// ele.addEventListener("click", pintar);

document.addEventListener("click", (event) => {

    if(name ==0){
        name = event.target.id;
        if (name) pintar(name);
    }  
  
});
