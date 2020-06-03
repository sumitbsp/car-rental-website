$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

const form = document.querySelector('#price-calc');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const vehicleType = document.getElementById('vehicle-type');
    const kms = document.getElementById('kms');
    const nightStay = document.getElementById('night-stay');

    let calculatedPrice;

    calculatedPrice = nightStay.value * 200;

    if (vehicleType.value === 'hatch') {
        calculatedPrice += (kms.value * 12);
    }
    if (vehicleType.value === 'sedan') {
        calculatedPrice += (kms.value * 15);
    }
    if (vehicleType.value === 'mpv') {
        calculatedPrice += (kms.value * 18);
    }

    const priceDiv = document.querySelector('.price');
    priceDiv.innerHTML = `
        <h2 class="text-center mt-5">Calculated Price: Rs.${calculatedPrice}<h2/>
    `
})