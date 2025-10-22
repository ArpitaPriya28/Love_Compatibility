let heartRainStarted = false; //This makes sure the rain starts only once, even if the button is clicked multiple times.

function calculateLove() {

  // Step 1: Access input values

  /* "document" refers to the HTML document currently loaded in the browser */

  /*"getElementById("name1")" is a method of document. It searches the HTML page for an element with the unique ID name1. */

  /*".value" is a property of an input element. It contains the text that the user typed into the input box. */

  /*".trim()" is a string method in JavaScript. It removes unwanted spaces from the beginning and end of the text. */

  /*The Dot (.) Is the "Access Operator" In JavaScript, the dot (.) is used to access a property or method of an object. Think of it like: Saying: "Hey object, give me this part of you" */

  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();

  // Step 2: Check if both names are entered

  // "=" is a Assignment Operator
  // "==" is a Loose Equality (Compares two values, but ignores the data type.)
  // "===" is a Strict Equality (Compares both value and data type.)
  if (name1 === "" || name2 === "") { 
    document.getElementById("result").innerText = "Please enter both names!";
    return;
  }

  // Step 3: Generate random love score (1–100)
  let loveScore = Math.floor(Math.random() * 100) + 1; 
  
  /*Math.random() gives a random number between 0 and 1. Multiplying it by 100 gives something like 0–99.99. Math.floor() rounds it down to the nearest integer.Adding +1 makes the range 1 to 100 (instead of 0–99). */

  // Step 4: Pick message based on score
  let message = "";
  if (loveScore > 80) message = "Perfect Match! 💕";
  else if (loveScore > 50) message = "There's some spark! ✨";
  else if (loveScore > 30) message = "Needs work... 😅";
  else message = "Uh-oh. Better stay friends 😬";

  // Step 5: Show the result using DOM
  document.getElementById("result").innerText =
    `${name1} ❤️ ${name2} = ${loveScore}%\n${message}`;


    //play only when score is more than 50
    if (loveScore > 50) {
  document.getElementById("loveSound").play();
}



    // Step 6: Start heart rain after result is shown

    /* "heartRainStarted" is a Boolean flag. Initially it's false.
When the user clicks the "Check Compatibility" button:
If the heart rain hasn’t started, it:
Calls the startHeartRain() function to begin the falling hearts.
Sets heartRainStarted = true, so that if the button is clicked again, rain doesn't start again (avoids duplicates or infinite loops).
This ensures heart rain starts only the first time after showing the result  */
if (!heartRainStarted) {
  startHeartRain();
  heartRainStarted = true;
}
}


function startHeartRain() {
  const container = document.getElementById("heart-rain");//selects the empty <div> in your HTML meant to hold the falling heart elements.

  // Heart emojis of different colors and styles
  const heartTypes = [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "🩵", "🤍", "🤎", "🖤",
    "💖", "💘", "💝", "💞", "💓"
  ];
//we are repeating it every 200ms (5 times per second). So a new heart is created and dropped every 0.2 seconds.
  setInterval(() => {

    /*This creates a new <div> for each heart
"document.createElement("div") "creates an empty div element.".classList.add("heart")" gives it the ".heart" class so it follows the CSS animation that is written. */
    const heart = document.createElement("div");
    heart.classList.add("heart");//classList is a property of an HTML element that gives you access to the list of classes it has.

    // Random heart emoji from the array
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];  //"* heartTypes.length" if your array has 16 emojis, this gives 0 to 15.99.

    // Random position, size, and duration
    heart.style.left = Math.random() * 100 + "vw";//left = ... vw means the heart starts somewhere randomly across the width of the screen.  vw means viewport width:

    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    /*This sets random size for each heart, from 20px to 40px. Let’s break it: 
    Math.random() * 20 → gives 0 to 19.99 
    + 20 → gives 20 to 39.99
    + "px" → makes it valid CSS */
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";//Animation lasts between 3s to 5s. So some hearts fall fast, others more slowly — just like real rain or snow! 


    //Add the heart to the page

    /*This line adds the heart emoji div to the #heart-rain container. Once added, it starts falling because of the .heart CSS animation */
    container.appendChild(heart);

    // Remove after it falls
    setTimeout(() => {
      heart.remove();
    }, 5000); //After 5 seconds, the heart is removed from the page.
  }, 200); // every 200ms
}


