let body = document.querySelector("body");
let hex = document.querySelector(".hex");
let rgb = document.querySelector(".rgb");
let color_1 = document.querySelector(".color1");
let color_2 = document.querySelector(".color2");
let label_hex = document.querySelector(".label_hex");
let label_rgb = document.querySelector(".label_rgb");

function set_gradient(){
  body.style.background =  
  `linear-gradient(to right,  
  ${color_1.value}, ${color_2.value}`;

  hex.textContent = `${color_1.value} to ${color_2.value}`;
  rgb.textContent = body.style.background;
  hex.style.display = "block";
  rgb.style.display = "block";
  label_hex.style.display = "block";
  label_rgb.style.display = "block";
}

color_1.addEventListener("input", set_gradient);
color_2.addEventListener("input", set_gradient);
