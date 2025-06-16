let buttons = document.querySelectorAll(".button")
let display = document.querySelector("input")
 let string="";
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
    if(e.target.innerText ==="=") {
        try{
            string = eval(string);
        display.value = string;
        }
        catch(e){
              display.value = "Error";
        }
    }
   
    else if (e.target.innerText==="AC"){
        string="";
        display.value = string;
    }
    else {
       string=string + e.target.innerText;
       display.value= string;
    }
  
    })
    
});