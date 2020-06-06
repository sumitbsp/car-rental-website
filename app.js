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
    let priceOfVehicle;
    let displayVehicle;
    calculatedPrice = nightStay.value * 200;


    if (vehicleType.value === 'hatch') {
        priceOfVehicle = 15;
        calculatedPrice += (kms.value * priceOfVehicle) + 500;
        displayVehicle = 'Hatch-Back';
    }
    if (vehicleType.value === 'sedan') {
        priceOfVehicle = 18;
        calculatedPrice += (kms.value * priceOfVehicle);
        displayVehicle = 'Sedan';
    }
    if (vehicleType.value === 'mpv') {
        priceOfVehicle = 20;
        calculatedPrice += (kms.value * priceOfVehicle);
        displayVehicle = 'MPV';
    }

    const priceDiv = document.querySelector('.price');
    priceDiv.innerHTML = `
        <h2 class="text-center mt-5">Calculated Price: Rs.${calculatedPrice}</h2>
        <p class="text-center mb-1">Fair breakup-</p>
        <p class="small text-center">Service charge = Rs.500
            <br/>
            ${kms.value} kms x ${priceOfVehicle} ( ${displayVehicle} = Rs.${priceOfVehicle}/km ) 
            <br/>
            Night Stay: Rs.500/night
        </p>
    `
})



const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Hello')
    // generate the contact number value
    emailjs.sendForm("gmail", "email", ".contact-form", "user_hXfP1MsYfR8rUrke4qGpG")
        .then(() => {
            flashMessage = document.querySelector('.form-flash');
            flashMessage.classList.add('show')
            contactForm.reset();
        })
});
