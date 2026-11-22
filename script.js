
console.log("ElectroAI JavaScript is working");

// Find the first Add to Cart button
const buttons = document.querySelectorAll(".add-to-cart");


// Listen for a click
buttons.forEach(function(button){
  button.addEventListener("click",function(){
    console.log("Add to card clicked");
  })
})

