// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
                   
  
  function sayHello (event) {
      console.log(event);

      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";


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

 function add_number() {
               
                var first_number = parseInt(document.getElementById("Text1").value);
                var second_number = parseInt(document.getElementById("Text2").value);
                var result = first_number + second_number;
     
                document.getElementById("txtresult").value = result;
            }

// document.querySelector("button")
//   .onclick = sayHello;

