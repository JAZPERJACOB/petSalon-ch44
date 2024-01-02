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
    pets:[
        {
            name:"Lucas",
            age:80,
            gender:"Male",
            service:"Grooming",
            breed:"Cat"
        },
        {
            name:"Scooby",
            age:30,
            gender:"Male",
            service:"Nail Cut",
            breed:"Dog"
        },
        {
            name:"Tweety",
            age:60,
            gender:"Female",
            service:"Vaccines",
            breed:"Bird"
        }
        
    ]
}

console.log(petSalon.pets);
//displaying names
console.log(petSalon.pets[0].name);

//total of elements in the array
console.log(petSalon.pets.length);

//document.getElementById("title").innerHTML=petSalon.name;