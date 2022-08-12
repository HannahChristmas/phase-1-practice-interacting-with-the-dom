
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const counter = document.getElementById('counter');
let seconds = 0;

function setTimer(){
    counter.innerText = seconds ++;
}

let intervalId = setInterval(setTimer, 1000);

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', pauseTimer);


function pauseTimer(){
    if(pauseButton.innerText === 'pause') {
        console.log("pause button clicked")
        pauseButton.innerText = 'resume'
    clearInterval(intervalId)
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeHeart.disabled = true;
    } else if (pauseButton.innerText === 'resume'){
        intervalId = setInterval(setTimer, 1000);
        pauseButton.innerText = 'pause'
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeHeart.disabled = false;
    } 
    }


function resumeTimer(){
   
}




const submitButton = document.getElementById('submit');


const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', submitComment);
let commentArea = document.querySelector('.comments');
// let commentArray = [];


function submitComment(e){
    let userComment = document.getElementById('comment-input').value;
    // console.log(e.target[0].value)
    console.log(userComment)
    e.preventDefault()
    const displayComments = document.createElement('ul')
    displayComments.innerText = `${userComment}`;
    commentArea.appendChild(displayComments);
    // commentArray.push(userComment)
}















const minusButton = document.getElementById('minus');

minusButton.addEventListener('click', decrementSeconds)

function decrementSeconds() {
    counter.innerText = seconds --;
}



const plusButton = document.getElementById('plus');

plusButton.addEventListener('click', incrementSeconds)

function incrementSeconds() {
    counter.innerText = seconds++;
}

// the button
const likeHeart = document.getElementById('heart');
//the list
const likesList = document.getElementsByClassName('likes')[0];
//list item


// When you click the heart, bigLike happens
likeHeart.addEventListener('click', bigLike);

let likeHeartClicks = 0;
let bigLikeTimer = seconds;
let likeArray=[];

// Here we need a variable for bigLikeTimer

//bigLike highlights appends a list item to an unordered list
function bigLike(){
    if(seconds === likeArray.find(element => element === seconds)) {
        let someLikes = document.getElementById(`${seconds}`)
        likeHeartClicks += 1
        someLikes.innerText = `${seconds} was liked ${likeHeartClicks} times.`
        
    } 
    else {
        likeHeartClicks = 1
        const displayLikes = document.createElement('li');
        //creating a new li
        displayLikes.id = seconds;
        displayLikes.innerText = `${seconds} has been liked ${likeHeartClicks} times`
        likesList.appendChild(displayLikes);
        likeArray.push(seconds)
    }
    
}