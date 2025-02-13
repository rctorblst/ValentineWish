// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .map(char => (char === " " ? "&nbsp;" : char))
    .join("</span><span>")}</span>`;
  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );


    
    // At the end of the timeline, reveal the Valentine section and animate the full-screen extra message:
    tl.call(() => {
      // Ensure the Valentine section is visible
      document.getElementById("valentineSection").style.display = "block";
      // Hide the yes/no buttons for now
      document.getElementById("responseButtons").style.display = "none";
      // Prepare the full-screen extra message:
      const extraScreen = document.getElementById("extraScreenFull");
      extraScreen.style.display = "block";
      extraScreen.style.opacity = 0;
    }, null, "+=1");  // Adjust the delay as needed
    
    
    // Fade in the full-screen extra message over 1 second:
    tl.to("#extraScreenFull", 1, { opacity: 1 });
    
    // Hold it on screen longer (5 seconds here; adjust as needed):
    tl.to("#extraScreenFull", 1, { opacity: 1 }, "+=50");
    
    // Fade it out over 1 second:
    tl.to("#extraScreenFull", 1, { opacity: 0 });
    
    // Finally, hide the full-screen extra message and reveal the yes/no buttons:
    tl.call(() => {
      document.getElementById("extraScreenFull").style.display = "none";
      document.getElementById("responseButtons").style.display = "flex";
    });
    
    
    
    // Set up interactive behavior for the Valentine prompt:
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const imageDisplay = document.getElementById("imageDisplay");
const valentineQuestion = document.getElementById("valentineQuestion");
const responseButtons = document.getElementById("responseButtons");

let noClickCount = 0;
let helper = 0;
let buttonHeight = 48*2; // starting height in px
let buttonWidth = 80*2;  // starting width in px
let fontSize = 15;     // starting font size in px

// Array of image paths (update these to match your source files)
const imagePaths = [
  "img/image1.gif",
  "img/image2.gif",
  "img/image3.gif",
  "img/image4.gif",
  "img/image5.gif",
  "img/image6.gif",
  "img/image7.gif", // add 4/5 more
  "img/image8.gif",
  "img/image9.gif",
  "img/image10.gif",
  "img/image11.gif",
  "img/image12.gif",

];

noButton.addEventListener('click', function() {
  if (noClickCount < 10) {
    noClickCount++;
    // Change the displayed image on each click
    helper = noClickCount
    if (helper > 5) {
      helper = 5;
    }

    imageDisplay.src = imagePaths[noClickCount];
    // Increase the Yes button's size:
    buttonHeight += 25;
    buttonWidth += 25;
    fontSize += 25;
    yesButton.style.height = `${buttonHeight}px`;
    yesButton.style.width = `${buttonWidth}px`;
    yesButton.style.fontSize = `${fontSize}px`;
    // Update No button's text:
    const messages = [
      "No", 
      "Are you sure?", 
      "Booboo please", 
      "Don't do this to me :(", 
      "You're breaking my heart", 
      "I'm gonna cry...",
      "Nooo...",
      "Me sad",
      "Me big big sad :(",
      "Okay stopp",
      "You dont have a choice anymore >:("
    ];
    noButton.textContent = messages[noClickCount] || "No";

    // (Optional) Re-trigger the bounce animation:
    // Remove the bounce class (if it was added via HTML, you can force a reflow and then re-add it)
    noButton.classList.remove("bounce2");
    // Force a reflow so that the removal takes effect (this makes the browser re-read the CSS)
    void noButton.offsetWidth;
    // Add the bounce class back to trigger the animation
    noButton.classList.add("bounce2");  }
});

yesButton.addEventListener('click', () => {
  // Change to your final image (image7, index 6)
  imageDisplay.src = imagePaths[11];
  // Update the question text:
  valentineQuestion.textContent = "YUUUPPPPPIEEEEEEEEEEEEEEEEEEEEEE :DDDDD HAPPPY VALNETINESS DAY BABBYYYYYYYYYYYYYYYYYY 🥺💝🌹❣️💞💕💓";
  // Hide the buttons:
  responseButtons.style.display = 'none';
  // Trigger a confetti animation.
  // (Make sure you have loaded confetti; e.g., add this script in your HTML:)
  // <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
});


  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
//   const replyBtn = document.getElementById("replay");
//   replyBtn.addEventListener("click", () => {
//     tl.restart();
//   });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
