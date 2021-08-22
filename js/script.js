// increase or decrease price of memory
function macConfiguration(isIncreasing) {
    // get memory cost
    const memoryPrice = document.getElementById('memory-cost');
    let memoryCost = memoryPrice.innerText;

    // get storage cost
    const storagePrice = document.getElementById('storage-cost');
    let storageCost = storagePrice.innerText;

    // get delivery cost
    const deliveryPrice = document.getElementById('delivery-cost');
    let deliveryCost = deliveryPrice.innerText;

    // check memory, storage, delivery as per requirment 
    if (isIncreasing == 8) {
        memoryCost = 0;
    } else if (isIncreasing == 16) {
        memoryCost = '180';
    } else if (isIncreasing == 256) {
        storageCost = 0;
    } else if (isIncreasing == 512) {
        storageCost = '100';
    } else if (isIncreasing == 1) {
        storageCost = '180';
    } else if (isIncreasing == 0) {
        deliveryCost = 0;
    } else if (isIncreasing == 20) {
        deliveryCost = '20';
    }

    // replace value after modify or re-configure
    memoryPrice.innerText = memoryCost;
    storagePrice.innerText = storageCost;
    deliveryPrice.innerText = deliveryCost;

    // total cost calculation
    const total = parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost) + 1299;
    const totalCost = document.getElementById('total-price');
    totalCost.innerText = total;

    // set value in last total area
    const grandCost = document.getElementById('grand-total-price');
    grandCost.innerText = total;

    return total;
}



// handle 16gb memory event
document.getElementById('16gb-memory').addEventListener('click', function () {
    macConfiguration(16);
});
// handle 8gb memory event
document.getElementById('8gb-memory').addEventListener('click', function () {
    macConfiguration(8);
});
// handle 256gb ssd event
document.getElementById('256gb-ssd').addEventListener('click', function () {
    macConfiguration(256);
});
// handle 512gb ssd event
document.getElementById('512gb-ssd').addEventListener('click', function () {
    macConfiguration(512);
});
// handle 1tb ssd event
document.getElementById('1tb-ssd').addEventListener('click', function () {
    macConfiguration(1);
});
// handle fast delivery event
document.getElementById('fast-delivery').addEventListener('click', function () {
    macConfiguration(20);
});
// handle free delivery event
document.getElementById('slow-delivery').addEventListener('click', function () {
    macConfiguration(0);
});


// check pomo code
document.getElementById('submit-button'), addEventListener('click', function () {
    // get pomo code
    const pomoCodeInput = document.getElementById('pomo-code');
    const pomoCode = pomoCodeInput.value;

    // check pomo code
    if (pomoCode == 'stevekaku') {

        // get value
        const trimTotal = document.getElementById('grand-total-price');
        const trimTotalCost = trimTotal.innerText;

        // discount calculation
        const discount = trimTotalCost - (20 * trimTotalCost / 100);

        // set value
        const grandCostFinal = document.getElementById('grand-total-price');
        grandCostFinal.innerText = discount;

        // clear inpur field
        pomoCodeInput.value = '';




    }

    document.getElementById("submit-button").disabled = "true";

});