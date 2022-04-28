const rezultat = document.querySelector(".rezultat");
const buttons = document.querySelectorAll(".button");
const operation = document.querySelectorAll(".operation")
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

console.log(rezultat);
console.log(buttons);
console.log(operation);
console.log(equal);
console.log(clear);

buttons.forEach(button =>{
    button.addEventListener("click", (e) => {
        switch(e.target.innerHTML){
            case `C`:
                rezultat.innerHTML = ``;
                break;
            case `=`:
                rezultat.innerHTML = eval(rezultat.innerHTML);
                break
            default:
                rezultat.innerHTML += e.target.innerHTML;
        }

    })
});
