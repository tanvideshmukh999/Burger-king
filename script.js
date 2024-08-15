let checkBox = [...document.querySelectorAll(`input[type="checkbox"]`)];
let orderBtn = document.querySelector("#btn");
let orderId = document.querySelector(".orderId");
let imageContainer = document.querySelector(".food-img-container");
let image = document.querySelector(".food-img");

function randomTime() {
  return Math.floor(Math.random() * 3000) + 2000; //random number between 2000 to 4999
}
function randomId() {
  return Math.floor(Math.random() * 900) + 100; //random id between 0 and 999
}
function getTime() {
  const h = String(new Date().getHours()).padStart("2", "0");
  const m = String(new Date().getMinutes()).padStart("2", "0");
  const s = String(new Date().getSeconds()).padStart("2", "0");
  const date = String(new Date().getDate()).padStart("2", "0");
  const mon = String(new Date().getMonth() + 1).padStart("2", "0");
  const year = String(new Date().getFullYear());
  let time = year + date + mon + h + m + s;
  return time;
}

orderBtn.addEventListener("click", (e) => {
  
  let selectedFood = [];
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      selectedFood.push(checkBox[i].value);
    }
  }
  
  if (selectedFood.length < 1) {
    alert("Please select atleast one item");
    return;
  }
  //   orderId.style.display = "none";
  orderId.innerHTML = `Preparing Food...`;
 
  imageContainer.style.display = "none";
  orderBtn.disabled = true;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, randomTime());
  });
  promise.then(() => {
    orderId.innerHTML = `<span class = "uniqueId">Your OrderId:</span> ${getTime()}<span class = "myId">${randomId()}</span>`;
    image.src = ""; 

    // 
    if (selectedFood.includes('Fries') && selectedFood.includes('Drink')) {
      image.src = "./Assets/friesDrink.jpg";
  } 
  else if(selectedFood.includes('Burger') && selectedFood.includes('Drink')) {
    image.src = "./Assets/burgerDrink.jpg";
  }
  else if(selectedFood.includes('Burger') && selectedFood.includes('Fries')) {
    image.src = "./Assets/friesBurger.jpg";
  }
  else if(selectedFood.includes('Burger') && selectedFood.includes('Fries') && selectedFood.includes('Drink')) {
    image.src = "./Assets/burgerfriesdrinks.jpg";
}
 

   else  {
    selectedFood.forEach(food => {
      switch(food) {
          case 'Burger':
              image.src = "./Assets/burger.jpg";
              break;
          case 'Fries':
              image.src = "./Assets/fries.jpg";
              break;
          case 'Drink':
              image.src = "./Assets/drink.jpg";
              break;
      }
    });
  }
 
    
    
   
   
    imageContainer.style.display = "block";
    orderId.style.display = "block";
    orderBtn.disabled = false;
  });
});