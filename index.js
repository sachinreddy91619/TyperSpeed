
const setOfWords = [

    "My name is sachin reddy and iam a failure in the life.",
    "Hope you are having fun this is a simple game you can make it and play it.",
    "If you want the source of life then you must read the bhagavad gita,bible,quran of respective religion and follow them in your life."];

const msg = document.getElementById('msg');

const typedwords = document.getElementById('mywords')
const btn = document.getElementById('btn')

let startTime, endTime;


playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    console.log(randomNumber)

    msg.innerText = setOfWords[randomNumber]
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";



}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let TotalTime = ((endTime - startTime) / 1000);
    console.log(TotalTime);

    let totalStr = typedwords.value;

    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / TotalTime) * 60);

    let finalMsg = "you typed total at " + speed + " words per minutes .";


    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
    typedwords.value="";




}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let ctn = 0;

    // arrayName then foreach then it will take whole function with value and index no. of that array

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            ctn++;
        }


    })
    let errorWords = (words1.length - ctn);

    return (ctn + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".")


}





const wordCounter = (str) => {

    let respone = str.split(" ").length;
    console.log(respone)
    return respone;


}



btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typedwords.disabled = false;
        playGame();

    }
    else if (this.innerText == "Done") {
      
        btn.innerText = "Start";
        endPlay();




    }
})









/*

Dynamic typing test:

1: when user pressed start button then only active the textarea else disabled it and vice-versa.

2: every time a new set of lines on top. whenever, a start button is pressed, not the done one.

3:get the time and change the button text to done.

4: get the end time when user clicked on done button,find the total,

5: find the total words on the setofwords.

6: find the speed of the user and show it on top when user clicked on done.

7: then call the comparewords fun and find how many of the words are matching and how many not, display the resulys on th etop with speed.

*/