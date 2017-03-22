document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
		console.log(res.lastName);
              var message = 
                res.firstName + " " + res.lastName + " " + res.phonenumber.number
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2";	
});


 $ajaxUtils
          .sendGetRequest("https://mananshah97.github.io/fourth/site/json/name1.json", 
       function(ser)
{
var hello = ser.lastName
document.querySelector("#hi")
                .innerHTML = "<h2>" + hello + "</h2>";
});


      });
});
