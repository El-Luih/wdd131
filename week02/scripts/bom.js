const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");





button.addEventListener("click", function () {
    const liCreate = document.createElement("li");
    const deleteButton = document.createElement("button");
    if (input.value !== "") {
        liCreate.textContent = input.value;
        deleteButton.textContent = "❌";
        liCreate.append(deleteButton);
        list.append(liCreate);
    } else {
        input.setAttribute("placeholder", "Please enter a value");
        input.focus();
    }
    deleteButton.addEventListener("click", function () {
        list.removeChild(liCreate);
        input.focus();
    })
    input.value = "";
    input.focus();
})

