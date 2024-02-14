
function makeRed(){
                document.body.style.backgroundColor='red';
}

// most used
document.getElementById('orange').addEventListener('click', function(){
        document.body.style.backgroundColor='orange';
}
)



function doSomethingAsync(callback) {
        // Simulating an asynchronous operation, like fetching data from an API
        setTimeout(function() {
          console.log("Async operation completed");
          callback(); // Call the callback function once the asynchronous operation is done
        }, 1000);
      }
      
      function handleCallback() {
        console.log("Callback function executed");
      }
      
      // Call the function with a callback
      doSomethingAsync(handleCallback);
      