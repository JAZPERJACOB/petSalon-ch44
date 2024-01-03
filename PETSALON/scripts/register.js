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

//object constructor (function)
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    console.log("Registering");
    //get the vlaues from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;

    //creating the obj
    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed);

    //push the object
    petSalon.pets.push(newPet);

    //display the pets aray on the console
    console.log(petSalon.pets);
}

//creating pets using constructor
let p1= new Pet("Scooby", 60, "Male","Dog");
let p2= new Pet("Tweety",20,"Female","Bird");
let p3= new Pet("Max", 50, "Male","Cat");
//pushing pets into the pets array
petSalon.pets.push(p1,p2,p3);

console.log(petSalon)

