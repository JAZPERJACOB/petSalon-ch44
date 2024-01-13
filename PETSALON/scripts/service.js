let services=[]; //array

//creating the constructor
function Service(description, price){
    this.description=description;
    this.price=price;
}
function isValid(newService){
    let validation=true;
    $("input").removeClass("bg-red");
    if(newService.desrciption==""){
        validation=false;
        $("#txtDescription").addClass("bg-red");
    }

    if(newService.price==""){
        validation=false;
        $("#txtPrice").addClass("bg-red");
    }

    return validation;

}
//create the register function
function register(){

    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

    let newService = new Service(inputDescription, inputPrice);
    // services.push(newService);
    if(isValid(newService)==true){
        saveArray(newService);
        $("input").val();
    }else{
        alert("fill all the inputs");
    }
}

//create the init function
function init(){
    let s1 = new Service("Grooming",20);
    services.push(s1);
    //hook events
    $("#btnRegister").on('click',register);
}
//wait for render the HTML
window.onload=init;