const displayedImage = document.querySelector(".displayed-img")
const overlay = document.querySelector(".overlay");

const btn = document.querySelector("button");

const thumbar = document.querySelector(".thumb-bar");

const imgs = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

for (let i = 0; i < imgs.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", "./images/" + imgs[i]);
    img.onclick = function (e) {
        displayedImage.setAttribute("src", e.target.getAttribute("src"));
    };
    thumbar.appendChild(img);
}

btn.addEventListener("click", function (e) {
    let className = e.target.getAttribute("class");
        if (className === "dark") {
            e.target.setAttribute("class", "light");
            e.target.textContent = "变亮";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        } else {
            e.target.setAttribute("class", "dark");
            e.target.textContent = "变暗";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
});



