// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {
//     console.log("CLICK!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {        
        createListElement();
    }
}
// keycode 이제 안쓰고 key 씀
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === 'Enter') {        
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);