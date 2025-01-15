// document.addEventListener("DOMContentLoaded", () => {
//     const burger = document.querySelector(".burger");
//     const navbarLeft = document.querySelector(".navbar-left");
//     const navbarRight = document.querySelector(".navbar-right");

//     burger.addEventListener("click", () => {
//         // Для левой части
//         navbarLeft.classList.toggle("active");
//         if (navbarLeft.classList.contains("active")) {
//             navbarLeft.style.display = "flex";
//             navbarLeft.style.flexDirection = "row"; // Горизонтальное выравнивание
//             navbarLeft.style.position = "fixed";
//             navbarLeft.style.top = "60px";
//             navbarLeft.style.left = "0"; // Прилепляем к левой части
//             navbarLeft.style.width = "50%"; // Левая часть занимает половину экрана
//             navbarLeft.style.justifyContent = "flex-start"; // Выравнивание кнопок влево
//             navbarLeft.style.backgroundColor = "#000";
//         } else {
//             navbarLeft.style.display = "none";
//         }

//         // Для правой части
//         navbarRight.classList.toggle("active");
//         if (navbarRight.classList.contains("active")) {
//             navbarRight.style.display = "flex";
//             navbarRight.style.flexDirection = "row"; // Горизонтальное выравнивание
//             navbarRight.style.position = "fixed";
//             navbarRight.style.top = "60px";
//             navbarRight.style.right = "0"; // Прилепляем к правой части
//             navbarRight.style.width = "50%"; // Правая часть занимает половину экрана
//             navbarRight.style.justifyContent = "flex-end"; // Выравнивание кнопок вправо
//             navbarRight.style.backgroundColor = "#000";
//         } else {
//             navbarRight.style.display = "none";
//         }
//     });
// });
document.getElementById('logo').addEventListener('click', function() {
    window.location.href = '#about'; // Замените на нужный URL
  });