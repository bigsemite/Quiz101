//Make array of picture names

var pics=["ball","bird","baby","car","rat","dog","tree","lion","fish","cat"];
var selectedPic="";
var count =0;
function loadPic(){

//generate a random number between 0 and 6
var num = Math.floor(Math.random()*10);
//select the randomly generated name from the pics
selectedPic = pics[num];

//load the picture with selected name
ourPic.src = selectedPic+".jpg";
}


function clearRad(){
//CLEARING THE CHECKED RADIOS
cat.checked=false;
rat.checked=false;
lion.checked=false;
bird.checked=false;
baby.checked=false;
car.checked=false;
dog.checked=false;
tree.checked=false;
fish.checked=false;
ball.checked=false;
}

function sol(n){
if(n == selectedPic){
result.innerHTML = "THE ANSWER IS CORRECT";
count+=10;
result.style.color ="green";
result.style.display="block";
setTimeout(function(){
result.style.display="none";
score.innerHTML="Score = "+count;
clearRad();
loadPic();
},2500);

}

else{

document.getElementById("result").innerHTML = "THE ANSWER IS WRONG";
result.style.color="red";
result.style.display="block";
count=0;
setTimeout(function(){
result.style.display="none";
score.innerHTML="Score = "+count;
alert("SORRY! GAME OVER");
clearRad();
},2000);
}
}
