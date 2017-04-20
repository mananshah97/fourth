// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
          var message = " ";
          var num =Number(document.getElementById("fname").value);    
          var flag=0;
          var arr=res.arr;
          for ( var i=1;i<11;i++){
                if (num==i) {
                flag=1;
                  message = res.i;
                  
              }
              else {
                flag=0;
              }
          }
          if( flag==0)
          {
            message="not found";
          }
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
