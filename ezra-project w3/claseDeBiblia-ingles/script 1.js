const initialWords = ["light", "dark", "world", "pretty", "flower"];
const initialImages = [
    { word: "flower", src: "flower.png" },
    { word: "dark", src: "dark.png" },
    { word: "world", src: "world.png" },
    { word: "light", src: "light.png" },
    { word: "pretty", src: "pretty.png" }
];

const additionalWords = ["bird", "grass", "tree", "people", "children"];
const additionalImages = [
    { word: "bird", src: "bird.png" },
    { word: "grass", src: "grass.png" },
    { word: "tree", src: "tree.png" },
    { word: "people", src: "people.png" },
    { word: "children", src: "children.png" }
];

const wordListContainer = document.getElementById("word-list-container");
const imageContainer = document.getElementById("image-container");
const correctCountSpan = document.getElementById("correct-count");
const finalMessageDiv = document.getElementById("final-message");
const totalInitialImages = initialImages.length;
const totalAdditionalImages = additionalImages.length;
let correctAnswers = 0;
let currentStage = 1;
let correctAnswersStageOne = 0; // משתנה לשמירת התשובות הנכונות בשלב הראשון
let currentImages = [];

// פונקציה לשירשור רשימה באופן רנדומלי
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createImageElement(image) {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.word;

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter word";
    input.dataset.correctWord = image.word;

    const validationIcon = document.createElement("span");
    validationIcon.classList.add("validation-icon");

    input.addEventListener("input", () => {
        const isCurrentlyCorrect = input.value.toLowerCase() === input.dataset.correctWord;
        const wasPreviouslyCorrect = input.dataset.correct === 'true';

        if (isCurrentlyCorrect && !wasPreviouslyCorrect) {
            validationIcon.textContent = "✔️";
            validationIcon.classList.remove("incorrect");
            validationIcon.classList.add("correct");
            if (currentStage === 1) {
                correctAnswers++;
                correctAnswersStageOne = correctAnswers; // שמירת הניקוד של שלב א'
            } else if (currentStage === 2) {
                correctAnswers++;
            }
            updateScoreDisplay();
            input.dataset.correct = 'true';
        } else if (!isCurrentlyCorrect && wasPreviouslyCorrect) {
            validationIcon.textContent = "❌";
            validationIcon.classList.remove("correct");
            validationIcon.classList.add("incorrect");
            if (currentStage === 1) {
                correctAnswers--;
                correctAnswersStageOne = correctAnswers; // עדכון הניקוד של שלב א'
            } else if (currentStage === 2) {
                correctAnswers--;
            }
            updateScoreDisplay();
            delete input.dataset.correct;
        } else if (isCurrentlyCorrect && wasPreviouslyCorrect) {
            validationIcon.textContent = "✔️";
            validationIcon.classList.remove("incorrect");
            validationIcon.classList.add("correct");
        } else {
            validationIcon.textContent = input.value === "" ? "" : "❌";
            validationIcon.classList.remove("correct");
            validationIcon.classList.add("incorrect");
            delete input.dataset.correct;
        }

        if (checkAllCorrect()) {
            if (currentStage === 1) {
                finalMessageDiv.textContent = "👍";
                finalMessageDiv.style.display = "block";
                finalMessageDiv.classList.add("like-animation");
                setTimeout(startSecondStage, 1500); // עיכוב קצר לפני תחילת השלב השני
            } else if (currentStage === 2) {
                finalMessageDiv.textContent = "well done! 🎉";
                finalMessageDiv.style.display = "block";
                finalMessageDiv.classList.remove("like-animation");
                finalMessageDiv.classList.add("congrats-animation"); // אפשר להוסיף אנימציה אחרת
            }
        } else {
            finalMessageDiv.style.display = "none";
            finalMessageDiv.textContent = "";
            finalMessageDiv.classList.remove("like-animation", "congrats-animation");
        }
    });

    inputContainer.appendChild(input);
    inputContainer.appendChild(validationIcon);
    imageItem.appendChild(img);
    imageItem.appendChild(inputContainer);
    return imageItem;
}

function updateScoreDisplay() {
    if (currentStage === 1) {
        correctCountSpan.textContent = `${correctAnswers}`;
    } else if (currentStage === 2) {
        correctCountSpan.textContent = `${correctAnswersStageOne + correctAnswers}`;
    }
}

function checkAllCorrect() {
    const inputs = imageContainer.querySelectorAll('input[data-correct-word]');
    return Array.from(inputs).every(input => input.dataset.correct === 'true');
}

function startSecondStage() {
    currentStage = 2;
    imageContainer.innerHTML = ''; // ניקוי התמונות הקודמות
    correctAnswers = 0; // איפוס ספירת התשובות הנכונות לשלב השני
    updateScoreDisplay(); // עדכון תצוגת הניקוד לתחילת שלב ב' (אמור להיות 5)

    // מחיקת רשימת המילים הראשונה
    const wordListContainer = document.getElementById("word-list-container");
    if (wordListContainer) {
        wordListContainer.remove();
    }

    // יצירת רשימת מילים חדשה
    const newWordListContainer = document.createElement('div');
    newWordListContainer.id = 'word-list-container';
    const newWordListTitle = document.createElement('h2');
    newWordListTitle.textContent = 'Word List:';
    const newWordListUl = document.createElement('ul');
    newWordListUl.id = 'words';

    additionalWords.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        newWordListUl.appendChild(li);
    });

    newWordListContainer.appendChild(newWordListTitle);
    newWordListContainer.appendChild(newWordListUl);
    document.body.insertBefore(newWordListContainer, imageContainer); // הוספת הרשימה לפני ת container תמונות

    const shuffledAdditionalImages = [...additionalImages];
    shuffleArray(shuffledAdditionalImages);
    currentImages = shuffledAdditionalImages;

    shuffledAdditionalImages.forEach(image => {
        const imageElement = createImageElement(image);
        imageContainer.appendChild(imageElement);
    });

    finalMessageDiv.style.display = "none";
    finalMessageDiv.textContent = "";
    finalMessageDiv.classList.remove("like-animation");
}

// אתחול השלב הראשון
const shuffledInitialImages = [...initialImages];
shuffleArray(shuffledInitialImages);
currentImages = shuffledInitialImages;

shuffledInitialImages.forEach(image => {
    const imageElement = createImageElement(image);
    imageContainer.appendChild(imageElement);
});

updateScoreDisplay(); // הצגת ניקוד התחלתי 0