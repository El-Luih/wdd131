const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];








chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function () {
    if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    } else {
        input.setAttribute("placeholder", "Please enter a value");
        input.focus();
    }
});

function displayList(item) {
    const liCreate = document.createElement("li");
    const deleteButton = document.createElement("button");
    liCreate.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    liCreate.append(deleteButton);
    list.append(liCreate);
    deleteButton.addEventListener("click", function () {
        list.removeChild(liCreate);
        deleteChapter(liCreate.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("fav-chaps-list", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("fav-chaps-list"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
