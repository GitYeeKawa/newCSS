let header = document.querySelector("header")

// window.addEventListener("scroll", () =>{
//     if(window.scrollY != 0){
//         document.querySelector("header").style.boxShadow = "0 3px 3px 1px #757575";
//     }
//     else{
//         document.querySelector("header").style.boxShadow = "none"
//     }
// });

window.addEventListener("scroll", () =>{
    if(window.scrollY != 0){
        header.style.boxShadow = "0 3px 3px 1px #757575";
    }
    else{
        header.style.boxShadow = "none";
    }
});