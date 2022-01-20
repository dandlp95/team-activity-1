export function cartAnimation() {
    let numItemsInCart = localStorage.length;
    console.log(numItemsInCart);
    let cartsvgStyle = document.getElementById("cartsvg").style;
    let buttonStyle = document.getElementById("addToCart").style;
    cartsvgStyle.position = "relative";
    cartsvgStyle.top = "845px";
    cartsvgStyle.right = "380px";
    cartsvgStyle.width = "50px";
    setTimeout(function(){
        buttonStyle.backgroundPosition = "left";
      },100)

      setTimeout(function(){
        buttonStyle.backgroundPosition = "right";
        cartsvgStyle.fill = "var(--primary-color)";
      },2000)

      setTimeout(function(){
        cartsvgStyle.fill = "black";
        cartsvgStyle.position = "relative";
        cartsvgStyle.top = "0px";
        cartsvgStyle.right = "0px";
        cartsvgStyle.width = "25px";
        
      },4000)
    

  }

