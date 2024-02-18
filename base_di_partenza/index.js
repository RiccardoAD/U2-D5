const newBanner= document.getElementById("newBanner");
window.addEventListener("scroll",function () {
    if (window.scrollY > 350) {
        newBanner.classList.add("banner-scroll");
      
        
    } else{  
         newBanner.classList.remove("banner-scroll")
    }    
})