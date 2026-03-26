
let buttons = document.querySelectorAll("input[type='button']");
let display = document.querySelector("input[name='display']")


buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.value;

if(value === "AC"){
     display.value = "";
}
   else if (value === "DE"){
    display.value = display.value.slice(0, -1);
   }

    else if (value === "=") {
    try {
       
        display.value = eval(display.value.replace(/X/g, "*"));
    } catch {
        display.value = "Error";
    }
}
      else {
            if(value === "X") {
                display.value += "X"; 
            } else {
                display.value += value;
            }
        }
    });
});







