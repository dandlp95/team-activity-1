export function cartAnimation() {
    let buttonStyle = document.getElementById("addToCart").style;
    document.querySelector(".svgbag").classList.add("wobbleAnimation");
    setTimeout(function(){
        buttonStyle.backgroundPosition = "left";
      },100)

      setTimeout(function(){
        buttonStyle.backgroundPosition = "right";
      },2000)    

    setTimeout(function(){
        document.querySelector(".svgbag").classList.remove("wobbleAnimation");
      }, 7000)

  }

  
  setTimeout(function(){
    document.getElementById("addToCart").addEventListener("click", cartAnimation); 
    }, 7000)