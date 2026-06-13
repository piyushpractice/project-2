// const btn=document.querySelector("button");


// btn.addEventListener("click",(events)=>{
//     console.log(events);//pointer event
// });
// btn.addEventListener("keypress",(events)=>{
//     console.log(events);
// });



// btn.addEventListener("mouseover",(events)=>{
//     console.log(events);
// });

let theme=document.querySelector(".theme");
let body=document.querySelector("body");
 
theme.addEventListener("click",()=>{
    console.log("clicked")
  

  if(body.classList.toggle("color")){

  body.setAttribute("class","color");
  theme.textContent="dark"
       

  }
  else{
  body.setAttribute("class","color2")
theme.textContent="light"
  }
    
  




})