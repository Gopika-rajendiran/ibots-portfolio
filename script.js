// ---------- Dark Mode ----------

const modeButton = document.getElementById("modeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    modeButton.textContent = "Light Mode";
}

modeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        modeButton.textContent = "Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        modeButton.textContent = "Dark Mode";

    }

});


// ---------- Typing Effect ----------

const typing = document.getElementById("typing");

const roles = [
    "IT Undergraduate",
    "Web Developer",
    "Java Programmer",
    "AI Enthusiast"
];

let role = 0;
let letter = 0;
let remove = false;

function typingAnimation() {

    let current = roles[role];

    if (remove) {
        letter--;
    } else {
        letter++;
    }

    typing.textContent = current.substring(0, letter);

    let speed = remove ? 70 : 120;

    if (!remove && letter === current.length) {

        speed = 1200;
        remove = true;

    } else if (remove && letter === 0) {

        remove = false;
        role++;

        if (role >= roles.length) {
            role = 0;
        }

        speed = 300;

    }

    setTimeout(typingAnimation, speed);

}

typingAnimation();


// ---------- Character Counter ----------

const message = document.getElementById("message");
const count = document.getElementById("count");

message.addEventListener("input", function () {

    count.innerHTML = message.value.length + " / 200";

});


// ---------- Contact Form ----------

const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const userName = document.getElementById("name").value.trim();
    const userMail = document.getElementById("email").value.trim();
    const userMessage = message.value.trim();

    if (userName === "" || userMail === "" || userMessage === "") {

        error.innerHTML = "Please fill all the fields.";
        return;

    }

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(userMail)) {

        error.innerHTML = "Enter a valid email.";
        return;

    }

    error.innerHTML = "";

    alert("Message sent successfully!");

    form.reset();

    count.innerHTML = "0 / 200";

});


// ---------- Back To Top Button ----------

const topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

topButton.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// ---------- Smooth Menu Scroll ----------

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function(link){

    link.addEventListener("click", function(event){

        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});