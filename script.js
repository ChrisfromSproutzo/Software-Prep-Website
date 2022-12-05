  function secretTextAppears(){
    let text = document.getElementById("secretText");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }





  const dodger = document.getElementById('dodger')
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  
  function moveDodgerLeft() {
      dodger.style.left = `${left - 10}px`;
  }


  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  
  
  function moveDodgerRight(){
    if (left > 0){
      dodger.style.left = `${left + 10}px`;
      }
    }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
    });
  
    function moveDodgerUp(){
      const bottomNumbers = dodger.style.bottom.replace("px", "")
      const bottom = parseInt(bottomNumbers, 10);
      if (bottom >= 0){
        dodger.style.bottom = `${bottom + 10}px`;
        }
      }
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp") {
          moveDodgerUp();
        }
      });
  
      function moveDodgerDown(){
        const bottomNumbers = dodger.style.bottom.replace("px", "")
        const bottom = parseInt(bottomNumbers, 10);
        if (bottom >= 0){
          dodger.style.bottom = `${bottom - 10}px`;
          }
        }
      document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowDown") {
            moveDodgerDown();
          }
        });