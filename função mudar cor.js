

function verde(flavio){

  if(flavio.style.backgroundColor == "red" || flavio.style.backgroundColor == ""){

      flavio.style.backgroundColor = "green";
      flavio.style.boxShadow = " 0 4px 10px 10px rgba(0, 255, 0, 0.80)";

 
  }
  else{

      flavio.style.backgroundColor = "red";
      flavio.style.boxShadow = " 0 4px 10px 10px rgba(255, 0,  0, 0.80)";

  }
}