document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
		console.log(res.name);
    var message="fd";
              if (res.name === "Manan") {
                message += "Done";
              }

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2";	
});




      });
});
