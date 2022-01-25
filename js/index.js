// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = (price * quantity)

  product.querySelector(".subtotal span").innerText = subTotal
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test
const singleProduct = document.querySelector('.product')
updateSubtotal(singleProduct);


let result = 0;

const totalPrice = document.querySelectorAll(".product").forEach((element) => { 
  result += updateSubtotal(element)
})


  // ITERATION 2
  //... your code goes here
  /* ---- First solution idea -----------------
  const allProducts = Array.from(document.querySelectorAll('.product'));
  
  allProducts.forEach((element) => { 
    return updateSubtotal(element)})
  -------------------------------------------- 
    
  ---------- Different solution --------------  
  const allProducts = document.getElementsByClassName('product');

  for (let i=0; i<allProducts.length; i++) {

  updateSubtotal(allProducts[i]);

  }
  ----------------------------------------------
  */

  // ITERATION 3
  //... your code goes here
  let sumResults = document.querySelector("#total-value span");
  
  sumResults.innerText = result;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
