//initialize the goods array with names of the available pictures
var goods = ["baby", "ball", "bird", "car", "dog", "rat", "tree"];

//create a global variable to store the random picture
var nextGood ="";

//create a score variable

function loadGoods(){
    //generate a random integer between 0 and 6
    var nmb = Math.floor(Math.random()*7);
    //get the random element from Array goods
    nextGood = goods[nmb];

    //load the picture of the random name
    pic.src = nextGood +".jpg";


}

function solve(n){
    if (n==nextGood){
        correct.innerHTML = "CORRECT!"
        correct.style.display = "block";
        setTimeout(function(){
            //hide the correct message
            correct.style.display = "none";
            //change the picture
            loadGoods();
            
        }, 3000);
        
    }else{
        //the user is wrong, restart the game and reset the scores
    }
}