let btn = document.querySelector("span")
let serial =document.querySelector(".serial")
let showpass =document.querySelector(".reveal")
let char ="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^&@.*&";
let RegExp=/^(?=.*[0-9])(?=.*[!@#%$&*^])[a-zA-Z0-9!@#$%^&*]{7}/;

btn.addEventListener("click",function(){
serial.style.color="transparent";
serial.style.textShadow="1px 0px 9px white";
serial.style.userSelect="none"
let start =false;
let k=[];
let count =7;
let variable=[];

while(!start){
    for(let i=0;i<count;i++){
k=[...char][Math.floor(Math.random()*char.length)]
variable.push(k);

    }
    if(RegExp.test(variable.join(""))){
start=true;



    }else{
k=[];
variable=[];

    }




}
serial.innerHTML=variable.join("");



})
showpass.addEventListener("click",function(){
serial.style.color="white";
serial.style.userSelect="auto";
serial.style.textShadow="none";



})