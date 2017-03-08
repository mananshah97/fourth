// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
  function call(event){
    console.log(event);
var q=parseInt(document.getElementById("txt1").value);
var w=parseInt(document.getElementById("txt2").value);
var result=q+w;
     console.log("The sum is " +result);
   }  
  
  function sayHello (event) {
      console.log(event);

      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>The sum is " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      
  
      }
    }
 
  
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

    document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );

  }
);



// document.querySelector("button")
//   .onclick = sayHello;

