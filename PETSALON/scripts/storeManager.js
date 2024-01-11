function saveArray{
    console.log(anArray);
    let st = JSON.stringify(anArray);
    console.log(st);
    localStorage.setItem("services", st);
}

function readArray{
    //get the info from the LS
    //parse it back into array (obj)
    //display the array on the console
}