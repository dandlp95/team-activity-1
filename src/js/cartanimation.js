export function cartAnimation() {
    let buttonStyle = document.getElementById("addToCart").style;
    document.getElementById("cartsvg").classList.add("wobbleAnimation");
    setTimeout(function(){
        buttonStyle.backgroundPosition = "left";
      },100)

      setTimeout(function(){
        buttonStyle.backgroundPosition = "right";
      },2000)    

    setTimeout(function(){
      document.getElementById("cartsvg").classList.remove("wobbleAnimation");
      }, 7000)

  }

