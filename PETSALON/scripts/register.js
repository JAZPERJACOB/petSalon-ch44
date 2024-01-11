//object literal

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"640 West Lincoln Ave",
        number:"2280",
        zip:"92026",
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },

    pets:[]

}
let counter=0;
//object constructor (function)
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
    this.id=counter++;
}

function isValid(aPet){
    let validation=true;

    if (aPet.name==""){
        validation=false;
        $("#notifications").text("Insert the name").fadeIn(300).delay(2000).slideUp(300);
    }

    if (aPet.service==""){
        validation=false;
        $("#notifications").text("Insert the age").fadeIn(300).delay(2000).slideUp(300);
    }

    return validation;
}
function register(){
    console.log("Registering");
    //get the vlaues from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;

    //creating the obj
    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType);

    //push the object
    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
    
        //display the pets aray on the console
        displayPetCards();
        $("#notifications").text("The registration was successful").addClass("alert-success").fadeIn(300).delay(2000).slideup(300);
    }
    else{
        showNotification("notifications","alert-danger","Please add all the required fields!");
    }
}
function showNotification(id,styling,message){
$("$"+id).text(message).addClass(styling).fadeIn(300).delay(2000).slideUp(300);
}


function deletePet(petID){
    console.log("Deleting pet" + petID);
    let deleteIndex;
    document.getElementById(petID).remove(); //remove from HTML
    for(let i=0; i<petSalon.pets.length;i++){//travelin the array
        let pet=petSalon.pet[i];//getting the current pet
        if (pet.id==petID){
            deleteIndex=i; //we found the pet, store the index
        }
    }
    petSalon.pets.splice(deleteIndex,1);//remove the pet form the array
}
function init(){
    //creating pets using constructor
    let p1= new Pet("Scooby", 60, "Male","pitbull", "Grooming", "Dog");
    let p2= new Pet("Tweety",20,"Female","Parrot", "Wash", "Bird");
    let p3= new Pet("Max", 50, "Male","Long haired", "Grooming", "Cat");
    //pushing pets into the pets array
    petSalon.pets.push(p1,p2,p3);

    displayPetCards();

    //hook events
    $("#notifications").hide();

}

window.onload=init; //waits for render the HTML
