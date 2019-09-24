document.getElementById("cn").onclick = () => {
    document.title = "笑话呵呵哒";
    document.getElementById("lbl-customname").textContent = "请输入自定义的名字：";
    document.getElementById("lbl-cn").textContent = "中国";
    document.getElementById("lbl-us").textContent = "美国";
    document.getElementById("lbl-uk").textContent = "英国";
    document.getElementById("customname").textContent = "李雷";
    document.getElementById("customname").placeholder = "张雷";
    document.querySelector(".randomize").textContent = "随机生成笑话";
};

document.getElementById("us").onclick = 
document.getElementById("uk").onclick = 
() => {
    document.title = "Silly story generator";
    document.getElementById("lbl-customname").textContent = "Enter custom name: ";
    document.getElementById("lbl-cn").textContent = "CN";
    document.getElementById("lbl-us").textContent = "US";
    document.getElementById("lbl-uk").textContent = "UK";
    document.getElementById("customname").textContent = "Bob";
    document.getElementById("customname").placeholder = "Mary";
    document.querySelector(".randomize").textContent = "Generate random story";
};

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize")
const story = document.querySelector(".story");

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let storyText = "It was 94 :insertx:, went for a walk. When Bob :inserty:, they start in :insertz:.";

let insertX = ["Willy", "the"];

let insertY = ["the", "soup", "kitchen"];

let insertZ = ["spontaneously", "combusted"];

let storyTextZH = "外面下很大雪 :insertx:, 想出去走走. 李雷当想做点 :inserty:, 他们突然 :insertz:。";

let insertA = ["怪兽", "圣诞"];

let insertB = ["救助站", "迪士尼", "厨房"];

let insertC = ["🔥了", "编程一陀螺"];

randomize.addEventListener("click", result);

function result() {
    let newStory, xItem, yItem, zItem, name;
    if (document.getElementById("cn").checked) {
        newStory = storyTextZH;

        xItem = randomValueFromArray(insertA);
        yItem = randomValueFromArray(insertB);
        zItem = randomValueFromArray(insertC);

        newStory = newStory.replace(":insertx:", xItem);
        newStory = newStory.replace(":inserty:", yItem);
        newStory = newStory.replace(":insertz:", zItem);

        if (customName.value !== "") {
            name = customName.value;
            newStory = newStory.replace("李雷", name);
        }
    } else {
        newStory = storyText;

        xItem = randomValueFromArray(insertX);
        yItem = randomValueFromArray(insertY);
        zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(":insertx:", xItem);
        newStory = newStory.replace(":inserty:", yItem);
        newStory = newStory.replace(":insertz:", zItem);

        if (customName.value !== "") {
            name = customName.value;
            newStory = newStory.replace("Bob", name);
        }
        
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}


var select = document.querySelector("select");
var h1 = document.querySelector("h1");
var list = document.querySelector("ul");

select.onchange = function () {
    let choice = select.value;
    let days = 31;

    if (choice === "Fabruary") {
        days = 28;
    } else if (choice === 'April' || 
        choice === 'June' || 
        choice === 'September'|| 
        choice === 'November') {
        days = 30;
    }
    createCalendar(days, choice);
};

function createCalendar(days, choice) {
    list.innerHTML = "";
    h1.textContent = choice;
    for (let i = 0; i < days; i++) {
        const element = document.createElement("li");
        element.textContent = i + 1;
        list.appendChild(element);      
    }
}

createCalendar(31, "January");