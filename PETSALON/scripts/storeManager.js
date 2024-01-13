function saveArray (item){
    let anArray = readArray();
    anArray.push(item);
    let st = JSON.stringify(anArray);
    console.log(st);
    localStorage.setItem("services", st);
}

function readArray(){
    //get the info from the LS
    let data=localStorage.getItem("services");
    if (!data){//not data?
        return[];// creating the array the first time
    }else{
        //parse it back into array (obj)
        let list = JSON.parse(data);
        //display the array on the console
        return list;
    }
}