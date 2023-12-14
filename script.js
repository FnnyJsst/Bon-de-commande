let dateInput = document.getElementById('date_commande');
let brandInput = document.querySelector('select[name="marque"]');
let colorInput = document.getElementsByClassName('couleur');
let optionInput = document.querySelectorAll('input[name="option"]');
let sendButton = document.getElementById('envoyer');
let date;
let regexDate = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
let resultDate = regexDate.test(date);
let typeOfVehicle = document.getElementById('type_vehicule');
let color = colorInput[0].value;



//Pour vérifier le format de la date
function checkDate() {
    if (dateInput) {
        
        date = dateInput.value; 
        let resultDate = regexDate.test(date);
        
        if (!resultDate) {
            alert("La date n'est pas au bon format.");
        }
    }
}


function checkColor() {
    if (colorInput.length > 0) {
        let regexColor = /#[A-Za-z0-9]+/i;
        color = colorInput[0].value;
        let resultColor = regexColor.test(color);

        if (!resultColor) {
            alert("La couleur n'est pas au bon format");
        }
    }
}


function requiredInputs() {
    if (dateInput.value && brandInput[0].value && colorInput[0].value) {
        dateInput.setAttribute('required', 'true');
        brandInput[0].setAttribute('required', 'true');
        colorInput[0].setAttribute('required', 'true');
        
        optionInput.forEach(function(option) {
            option.setAttribute('required', 'true');
        });
    } else {
        alert("Merci de compléter tous les champs du formulaire");
    }
}

function recap() {
    let dateRecap = document.getElementById('date');
    dateRecap.innerText = date;

    
    let typeRecap = document.getElementById('type');
    typeRecap.innerText = typeOfVehicle.innerHTML;

    let brandRecap = document.getElementById('marque');
    brandRecap.innerText = brandInput.value;

    let colorRecap = document.getElementById('couleur');
    colorRecap.innerHTML = color;

    let optionRecap = document.getElementById('options');
    let selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        optionRecap.innerText = selectedOption.value;
    } else {
        optionRecap.innerText = "Aucune option sélectionnée";
    }

}

sendButton.addEventListener('click', function() {
    checkDate();
    checkColor();
    requiredInputs();
    recap();
});







