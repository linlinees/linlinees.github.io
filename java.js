const wrapper document.querySelector(".wrapper"); const question = document.querySelector(".question");
const gif document.querySelector(".gif"); const yesBtn = document.querySelector(*.yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () {
question.innerHTML = "i love u more cilpin ♡ before this year ends, i want to say thank u for being the best part of this year. thank u for accepting every my shortcomings. i hope that next year u will still be by my side forever. there is nothing imperfect about u. everything about u always makes me smile. u are my everything and my world. i love you more than anything in this world!!";
gif.src =
}); "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
noßtn.addEventListener("mouseover", () {
const noBtnRect const maxx noBtn.getBoundingClientRect(); window.innerWidth noßtnRect.width;
const maxy window.innerHeight noßtnRect.height;
const randomX = Math.floor(Math.random()* maxx); const randomy Math.floor(Math.random() maxY);
noBtn.style.left randomX + "px";
noBtn.style.top = randomY + "px";
});