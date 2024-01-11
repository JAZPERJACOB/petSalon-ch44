let services=[]; //array

//creating the constructor
function Service(desrciption, price){
    this.desrciption=desrciption;
    this.price=price;
}
//create the register function
function register(){

    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

    let newService = new Service(inputDescription, inputPrice);
    services.push(newService);

    saveArray(services);
}

//create the init function
function init(){
    let s1 = new Service("Grooming",20);
    services.push(s1);
    //hook events
    $("btnRegister").on('click',register);
}
//wait for render the HTML
window.onload=init;