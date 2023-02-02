const h1 = document.createElement("h1");
h1.innerText = "Welcome to my site!";

const info = document.createElement("div");
info.classList.add("info");

const infoParagraph1 = document.createElement("p");
infoParagraph1.innerText = "Hi! I'm Amin and I live in Salt Lake City, Utah, However I'm originally from Azerbaijan.";

const infoParagraph2 = document.createElement("p");
infoParagraph2.innerText = "I graduated from the University of Utah with a B.S. in Economics this past May and now I'm just beginning my Graduate studies in Software Engineering at Harvard. Although I have some background in Python because of a course I took during the summer, I'm not that great in Web development and would like to improve my skills.";

const imagetext = document.createElement("p")
imagetext.textContent = "My Favorite Place on Earth (Niagara Falls)"

const infoImage = document.createElement("img");
infoImage.src = "https://www.rd.com/wp-content/uploads/2022/11/GettyImages-977706560-scaled.jpg";
infoImage.alt = "My Favorite Place on Earth (Niagara Falls)";

const infoLink = document.createElement("a");
infoLink.innerText = "My favorite restaurant";
infoLink.href = "http://www.bohemianbrewery.com/menu";

const form = document.createElement("div");
form.classList.add("form");

const formForm = document.createElement("form");

const formLabel1 = document.createElement("label");
formLabel1.innerText = "First Name:";
formLabel1.htmlFor = "first-name";

const formInput1 = document.createElement("input");
formInput1.type = "text";
formInput1.id = "first-name";
formInput1.name = "first-name";

const formLabel2 = document.createElement("label");
formLabel2.innerText = "Last Name:";
formLabel2.htmlFor = "last-name";

const formInput2 = document.createElement("input");
formInput2.type = "text";
formInput2.id = "last-name";
formInput2.name = "last-name";

const formLabel3 = document.createElement("label");
formLabel3.innerText = "Email:";
formLabel3.htmlFor = "email";

const formInput3 = document.createElement("input");
formInput3.type = "email";
formInput3.id = "email";
formInput3.name = "email";

const formCheckbox = document.createElement("input");
formCheckbox.type = "checkbox";
formCheckbox.id = "permission";
formCheckbox.name = "permission";

const formLabel4 = document.createElement("label");
formLabel4.innerText = "I give permission to be added to the list";
formLabel4.htmlFor = "permission";

const formSubmit = document.createElement("input");
formSubmit.type = "submit";
formSubmit.value = "Submit";

formForm.appendChild(formLabel1);
formForm.appendChild(formInput1);
formForm.appendChild(formLabel2);
formForm.appendChild(formInput2);
formForm.appendChild(formLabel3);
formForm.appendChild(formInput3);
formForm.appendChild(formCheckbox);
formForm.appendChild(formLabel4);
formForm.appendChild(formSubmit);

document.body.appendChild(formForm);
const body = document.body;
body.appendChild(h1);
body.appendChild(info);
info.appendChild(infoParagraph1);
info.appendChild(infoParagraph2);
info.appendChild(infoImage);
info.appendChild(infoLink);
info.appendChild(form);
info.appendChild(formForm);
info.appendChild(formLabel1);
info.appendChild(formInput1);
info.appendChild(formLabel2);
info.appendChild(formInput2);
info.appendChild(formSubmit);
