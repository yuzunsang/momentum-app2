const images = [
  "neom-THlO6Mkf5uI-unsplash (1).jpg",
  "thomas-de-luze-jrjc4CsZmaw-unsplash.jpg",
  "sarah-sheedy-rVYKYyKbqE8-unsplash.jpg",
];
const pickImage = images[~~(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${pickImage}`;
bgImage.className = "bgimage";
bgImage.classList.add("kenburns-top");

document.body.appendChild(bgImage);
