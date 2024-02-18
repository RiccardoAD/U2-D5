const newBanner= document.getElementById("newBanner");
window.addEventListener("scroll",function () {
    if (window.scrollY > 150) {
        newBanner.classList.add("banner-scroll");
      
        
    } else{  
         newBanner.classList.remove("banner-scroll")
    }    
})