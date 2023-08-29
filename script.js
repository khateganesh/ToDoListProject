const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("listcontainer")

function addTask() {
    if(inputBox.value === '') {
        alert("Task can not be empty!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName = "span") {
        e.target.parentElement.remove();
    }
},false);
