let counter=0;
//object constructor (function)
function Payment(debit,credit,cardNumber,expireMonth, expireYear, cvCode){
    this.debit=debit;
    this.credit=credit;
    this.cardNumber=cardNumber;
    this.expireMonth=expireMonth;
    this.expireYear=expireYear;
    this.cvCode=cvCode;
}

function isValid(aPayment){
    let validation=true;

    if (aPayment.cardNumber==""){
        validation=false;
        alert("Please add Card Number")
    }

    if (aPayment.cvCode==""){
        validation=false;
        alert("Please add CV Code")
    }

    return validation;
}
function checkout(){
    console.log("Registering");
    //get the vlaues from the inputs
    let inputName = document.getElementById("txtCardNumber").value;
    let inputAge = document.getElementById("txtExpMonth").value;
    let inputGender = document.getElementById("txtExpYear").value;
    let inputBreed = document.getElementById("txtCVCode").value;
    let inputService = document.getElementById("txtDebit").value;
    let inputType = document.getElementById("txtCredit").value;

    //creating the obj
    let newPayment = new Payment(inputCardNumber, inputDebit, inputCredit, inputExpMonth, inputExpYear, inputCVCode);

    //push the object
    if(isValid(newPayment)==true){
        petSalon.pets.push(newPayment);
    
        //display the pets aray on the console
        displayPetCards();
    }
}


