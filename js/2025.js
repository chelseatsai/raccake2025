const menu = document.getElementById("menu");
const music = document.getElementById("music");
const resultCard = document.getElementById("resultCard");
const instergram = document.getElementById("instergram");
// 圖片的清單與機率
const cards = [
  { src: "./img/超吉.JPG", chance: 0.5 }, // 0.5% 機率
  { src: "./img/愛情.JPG", chance: 9.5 }, // 9.5% 機率
  { src: "./img/金錢.JPG", chance: 6 }, // 6% 機率
  { src: "./img/友誼.JPG", chance: 15 }, // 15% 機率
  { src: "./img/蛇年.JPG", chance: 3 }, // 3% 機率
  { src: "./img/健康.JPG", chance: 12 }, // 12% 機率
  { src: "./img/權利.JPG", chance: 15 }, // 15% 機率
  { src: "./img/幸運.JPG", chance: 11 }, // 11% 機率
  { src: "./img/睡眠.JPG", chance: 20 }, // 20% 機率
  { src: "./img/幸福.JPG", chance: 18 }, // 18% 機率
];
var startButton = document.getElementById("start");
var readyButton = document.getElementById("ready");
start.addEventListener("click", function () {
  // 隱藏首頁，顯示測驗表單
  music.style.display = "none";
  menu.style.display = "block";
  // 開始測驗，顯示第一個問題
});
ready.addEventListener("click", function () {
  // 隱藏首頁，顯示測驗表單
  menu.style.display = "none";
  resultCard.style.display = "block";
  // 開始測驗，顯示第一個問題
});
var backgroundmusic = document.getElementById("background-music");
var startbutton = document.getElementById("start");
startbutton.addEventListener("click", function () {
  if (backgroundmusic.paused) {
    backgroundmusic.play();
    startbutton.innerHTML = "START";
  } else {
    backgroundmusic.pause();
    startbutton.innerHTML = "START";
  }
});
function drawCard() {
  // 計算總機率
  const totalChance = cards.reduce((sum, card) => sum + card.chance, 0);

  // 生成隨機數並選擇圖片
  const randomNum = Math.random() * totalChance;
  let cumulativeChance = 0;
  let selectedImage = "";

  for (const card of cards) {
    cumulativeChance += card.chance;
    if (randomNum <= cumulativeChance) {
      selectedImage = card.src;
      break;
    }
  }

  // 顯示圖片
  const cardImage = document.getElementById("cardImage");
  const downloadButton = document.getElementById("downloadButton");
  cardImage.src = selectedImage;
  cardImage.style.display = "block";

  // 設定下載按鈕的連結
  downloadButton.href = selectedImage;
  downloadButton.style.display = "inline-block";
}
// 當按鈕被點擊時，執行導航函數
instergram.addEventListener("click", function () {
  // 使用 window.location.href 進行網頁導航
  window.location.href = "https://www.instagram.com/raccake222/";
});
