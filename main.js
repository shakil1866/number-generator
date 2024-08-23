
let display = document.querySelector("#h3");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn = document.getElementById("btn")

let todo = () => {
    if(input1.value === "" || input2.value === ""){
        display.innerText =`Please fulfill`

    }else{    
    let result = ((Math.random() * input2.value) + input1.value);
    display.innerText = Math.round(result);
}
}


btn.addEventListener("click", () => {
    todo();
})

