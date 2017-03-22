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
		console.log(res.States);
    var message=" ";
		var answer=" ";
              if (res.name === "Manan") {
		      message += " Done";
		      
		      if(res.States == 29){
			      answer += "Correct Ans";
		      }
		      else
		      {
		      answer += "Wrong Answer";
		      }
		      
			      
			      
              }

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2";	
		      document.querySelector("#content")
                .innerHTML = "<h2>" + answer + "</h2";	
});




      });
});
