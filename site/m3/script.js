// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#btn")
      .addEventListener("click", function () {
        
        // Call server to get the name
	$ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
	      var in = document.getElementById("fname").value; 
	        
	      var arr = res.arr;
	      
	      var message = "not found"; 

	      var i;
	      for (i = 0; i<arr.length;i++)
	      {
	      	if(num === "arr[i]")
	      	{
	      		message+=arr[i];
	      	}
	      }
              document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
            
            });


 		
      });
  }
);