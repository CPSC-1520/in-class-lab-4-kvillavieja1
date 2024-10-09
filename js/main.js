
// Enter your code below.
let newForm = document.querySelector("#new-order-form");

newForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  let orderItemName = event.target.elements["order-item-name"].value;
  let orderItemPrice = event.target.elements["order-item-price"].value;
  let orderSize = event.target.elements["order-size"].value;

  addOrderItem(orderItemName, orderItemPrice, orderSize);

  event.target.elements["order-item-name"].value = "";
  event.target.elements["order-item-price"].value = "";
  event.target.elements["order-size"].value = "";

  let isFormValid = addOrderItem;
  isFormValid = true;
  let errorMsg = '';

  if (orderItemName == isValueNotEmpty)
  {
    orderItemName.classList.remove('.invalid-feedback');
  }
  else {
    orderItemName.classList.add('.invalid-feedback');
    errorMsg = 'Please enter a valid item.';
    isFormValid = false;
  }

  if ((orderItemPrice == isValueNotEmpty) && (orderItemPrice == isGreaterThanFive))
  {
    orderItemPrice.classList.remove('.invalid-feedback');
  }
  else {
    orderItemPrice.classList.add('.invalid-feedback');
    errorMsg = 'Please enter a valid item.';
    isFormValid = false;
  }
  
  if (orderSize == isValueNotEmpty)
  {
    orderSize.classList.remove('.invalid-feedback');
  }
  else {
    orderSize.classList.add('.invalid-feedback');
    isFormValid = false;
  }

})

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}