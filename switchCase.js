/*
objective is to check each case and output the case for each activation
*/

function checkCar() {
    var text;
    var favCar = prompt("input a car");
    
    
    switch(favCar) {
        case "BMW":
            text = "German car";
            break;
        case "Ford":
            text = "American car";
            break;
        case "Peugeot":
            text = "French car";
            break;
        default:
            text = "Unkown car name";
        
    }
}
