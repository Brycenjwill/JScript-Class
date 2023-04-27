const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const Sectysect = document.createElement("section");
Sectysect.innerHTML = "<h2>CSE 121B</h2><p>Welcome to Javascript Language!</p>";
document.body.appendChild(Sectysect);

