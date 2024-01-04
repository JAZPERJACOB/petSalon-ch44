function displayPetCards(){
    const DIV = document.getElementById("pets")
    let card = "";
    //travel the array (for)
    for (let i=0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create HTML template
        card += `
        <div>
            <p> Name: ${pet.name}</p>
            <p> Age: ${pet.age}</p>
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Service: ${pet.service}</p>
            <p> Type: ${pet.type}</p>
        </div>
        `
    }
    DIV.innerHTML=card;
    //insert the HTML template into the register.html
}