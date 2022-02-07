const img1 = document.getElementById('img1') ;
const img2 = document.getElementById('img2') ;
const heading = document.getElementById('heading') ;


let random1 = Math.floor(Math.random()*6 + 1) ;
let random2 = Math.floor(Math.random()*6 + 1) ;
console.log(random1 , random2) ;

if(random1 === 1)
{
    img1.setAttribute('src' , 'images/dice1.png') ;
}
else if(random1 === 2){
    img1.setAttribute('src' , 'images/dice2.png') ;
}
else if(random1 === 3){
    img1.setAttribute('src' , 'images/dice3.png') ;
}
else if(random1 === 4){
    img1.setAttribute('src' , 'images/dice4.png') ;
}
else if(random1 === 5){
    img1.setAttribute('src' , 'images/dice5.png') ;
}
else if(random1 === 6){
    img1.setAttribute('src' , 'images/dice6.png') ;
}



if(random2 === 1)
{
    img2.setAttribute('src' , 'images/dice1.png') ;
}
else if(random2 === 2){
    img2.setAttribute('src' , 'images/dice2.png') ;
}
else if(random2 === 3){
    img2.setAttribute('src' , 'images/dice3.png') ;
}
else if(random2 === 4){
    img2.setAttribute('src' , 'images/dice4.png') ;
}
else if(random2 === 5){
    img2.setAttribute('src' , 'images/dice5.png') ;
}
else if(random2 === 6){
    img2.setAttribute('src' , 'images/dice6.png') ;
}



if(random1 > random2){
    heading.innerText = "Player 1 Wins" ;
}else if(random1 < random2){
    heading.innerText = "Player 2 Wins" ;
}else{
    heading.innerText = "Ties" ;
}