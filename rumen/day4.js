let titles = [
    'Sticke to it',
    'Target: Develop',
    'Together',
    'Fourth'
]

let addText = function() {
    let index = Math.floor(Math.random() * titles.length + 0);
    let div = document.createElement("div");
    let textNode = document.createTextNode(titles[index]);
    div.appendChild(textNode);
    div.style.color = "#FE7235";
    div.style.lineHeight = 2;
    let contentDiv = document.getElementById("content");
    contentDiv.appendChild(div);
}