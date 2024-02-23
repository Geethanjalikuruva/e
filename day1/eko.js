// const drop=document.querySelectorAll("drop")
// dropdrop.foreach(drop=>{
//     const select=drop.querySelector(".select");
//     // const car=drop.querySelector(".select");
// })

// select.addEventlistner("click", ()=>{
//     select.innerText="products"
// }

// )



// let drop =document.getElementById("drop")
// console.log(drop);
// drop.addEventListener("mouseover",()=>{
//     let  log=document.getElementById("login")
//     console.log(log);
//     let to=log.classList.toggle("none")
//     if(to){
//         log.style.display="block"
//     }
//     else{
//         log.style.display="none"
//     }

// })

// console.log(sh);
let login=document.getElementById("login")

login.addEventListener("mouseover",()=>{
    
    let sh=document.getElementById("sh")
    let a=sh.classList.toggle("none")
    if(a){
        sh.style.display="none"
    }
    else{
        sh.style.display="block"
    }
    
})

let care=document.getElementsByClassName("care")
// console.log(care);

care[0].addEventListener("mouseover",()=>{
    
    let ap=document.getElementById("ap")
   
    let b=ap.classList.toggle("none")
    if(b){
        ap.style.display="none"
    }
    else{
        ap.style.display="block"
    }
    
})


let retailer=document.getElementById("retailer")
retailer.addEventListener("mouseover",()=>{
    let  ban=document.getElementById("ban")
    let c=ban.classList.toggle("none")
    if(c){
        ban.style.display="none"
    }
        else{
            ban.style.display="block"
        }
    
})

let pan=document.getElementById("pan")
pan.addEventListener("mouseover",()=>{
    let com=document.getElementById("com")
    let d=com.classList.toggle("none")
    if(d){
        com.style.display="none"
    }
    else{
        com.style.display="block"
    }
}) 