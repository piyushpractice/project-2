let nam=document.querySelector(".name");
let email=document.querySelector(".email");
let url=document.querySelector(".url");
let btn=document.querySelector(".btn");
let form=document.querySelector(".form2");
let div=document.querySelector("#cparent");

let dlt =document.querySelector(".dlt");

form.addEventListener("submit",(event)=>{
     event.preventDefault();

 let Name= nam.value.trim();
 let Email=email.value.trim();
 let URL=url.value.trim();



    console.log("clicked");
    div.innerHTML +=`<div class="card">
            <div class="pic">
                <img src="${URL}">
            </div>
            <div class="info">
                <p><b>NAME- </b>${Name}</p>
                <p>
                <b>Email-</b>${Email}
                </p>
            </div>
            <div class="change">
                <button class="dlt">delete</button>
                <button class="edit">EDIT</button>
            </div>
        </div>`
        form.reset();


}

);
div.addEventListener("click", (event) => {
    if (event.target.classList.contains("dlt")) {
        event.target.closest(".card").remove();
    }
});