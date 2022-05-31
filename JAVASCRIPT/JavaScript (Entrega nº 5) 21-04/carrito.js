function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (isIncreasing == false && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // Actualizar productos totales
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // Calcular el total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 250000;
    const caseTotal = getInputValue('case') * 1000;
    const subTotal = phoneTotal + caseTotal;
    const totalPrice = subTotal 
    
    document.getElementById('sub-total').innerText = subTotal;

    document.getElementById('total-price').innerText = totalPrice;

}
function removeProduct(item) {
    document.getElementById(item + '-display').style.display = 'none';
}





//Agregar o quitar
document.getElementById("phone-plus").addEventListener('click', function () {
    updateProductNumber('phone', 250000, true);
});
document.getElementById("phone-minus").addEventListener('click', function () {
    updateProductNumber('phone', 250000, false);
});


document.getElementById("case-plus").addEventListener('click', function () {
    updateProductNumber('case', 1000, true);
});
document.getElementById("case-minus").addEventListener('click', function () {
    updateProductNumber('case', 1000, false);
});

// Borrar producto
document.getElementById("phone-remove").addEventListener('click', function () {
    removeProduct('phone');
});
document.getElementById("case-remove").addEventListener('click', function () {
    removeProduct('case');
});

// Productos agregados
document.getElementById("check-btn").addEventListener('click', function () {
    alert('Productos agregados al carrito');
});