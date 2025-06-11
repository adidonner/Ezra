const words = ["light", "dark", "world", "pretty", "flower"];
const images = [
    { word: "in the middle", src: "middle.png" },
    { word: "behind", src: "behind.png" },
    { word: "up", src: "up.png" },
    { word: "toward", src: "toward.png" },
    { word: "love", src: "love.png" },
    { word: "dust", src: "dust.png" },
    { word: "point", src: "point.png" }
];

const imageContainer = document.getElementById("image-container");
const correctCountSpan = document.getElementById("correct-count");
let correctAnswers = 0;

// פונקציה לשירשור רשימה באופן רנדומלי
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// שירשור תמונות
const shuffledImages = [...images];
shuffleArray(shuffledImages);

const finalMessageDiv = document.getElementById("final-message");
const totalImages = images.length;

function checkAllCorrect() {
    return Array.from(document.querySelectorAll('input[data-correct-word]')).every(input => input.dataset.correct === 'true');
}

// יצירת HTML עבור כל תמונה
shuffledImages.forEach(image => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.word;

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "הכנס מילה";
    input.dataset.correctWord = image.word; // שומרים את המילה הנכונה כמאפיין data

    const validationIcon = document.createElement("span");
    validationIcon.classList.add("validation-icon");

    input.addEventListener("input", () => {
        const isCurrentlyCorrect = input.value.toLowerCase() === input.dataset.correctWord;
        const wasPreviouslyCorrect = input.dataset.correct === 'true';

        if (isCurrentlyCorrect && !wasPreviouslyCorrect) {
            validationIcon.textContent = "✔️";
            validationIcon.classList.remove("incorrect");
            validationIcon.classList.add("correct");
            correctAnswers++;
            correctCountSpan.textContent = correctAnswers;
            input.dataset.correct = 'true';
        } else if (!isCurrentlyCorrect && wasPreviouslyCorrect) {
            validationIcon.textContent = "❌";
            validationIcon.classList.remove("correct");
            validationIcon.classList.add("incorrect");
            correctAnswers--;
            correctCountSpan.textContent = correctAnswers;
            delete input.dataset.correct;
        } else if (isCurrentlyCorrect && wasPreviouslyCorrect) {
            // נשאר נכון - אין צורך לעדכן את המונה
            validationIcon.textContent = "✔️";
            validationIcon.classList.remove("incorrect");
            validationIcon.classList.add("correct");
        } else {
            // לא נכון או ריק
            validationIcon.textContent = input.value === "" ? "" : "❌";
            validationIcon.classList.remove("correct");
            validationIcon.classList.add("incorrect");
            delete input.dataset.correct;
        }

        if (checkAllCorrect()) {
            finalMessageDiv.textContent = "well done! 🎉";
            finalMessageDiv.style.display = "block";
        } else {
            finalMessageDiv.style.display = "none";
            finalMessageDiv.textContent = "";
        }
    });

    inputContainer.appendChild(input);
    inputContainer.appendChild(validationIcon);
    imageItem.appendChild(img);
    imageItem.appendChild(inputContainer);
    imageContainer.appendChild(imageItem);
});

