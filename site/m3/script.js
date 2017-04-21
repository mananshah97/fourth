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
	      var getvalue = document.getElementById("fname").value; 
		var arr;
	        
	      
	      
	      var message = "not found"; 

	      var i;
	      for (i = 0; i<4;i++)
	      {
	      	if(getvalue === res.arr[i].sapid || getvalue === res.arr[i].email || getvalue === res.arr[i].contact || getvalue === res.arr[i].date_of_birth || getvalue === res.arr[i].cgpa)
	      	{
	      		message = res.arr[i].name;
	      	}
	      }
              document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
            
            });


 		
      });
  }
);
