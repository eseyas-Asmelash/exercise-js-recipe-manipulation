//The logo text of the site has the wrong color. Change it to the correct one.
const logoText = document.querySelector('.logo-text');

logoText.style.color = '#384241';

//The alignment of the elements inside the header element are wrong. Change it to the correct one. 
const header = document.querySelector('header');

header.style.justifyContent = 'flex-start';

//The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
header.style.borderBottom = '1px solid lightgray';

//The recipe name is wrong, change it to the correct one.
const changeName = document.getElementById('recipe-name');

changeName.textContent = 'Frozen Cheescake'; 

//The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
//This can be fixed by adding a class to that element.
const iconSpan = document.querySelector('.time-container span:first-child');

iconSpan.classList.add('material-icons');

//The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const timeElement = document.querySelector('.time-container .time');


timeElement.textContent = '60+ min';

//The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. 
//The available images can be found in the assets folder.
const imageElement = document.querySelector('.image-container img');


imageElement.src = './assets/frozen-cheesecake-slice.jpg';

//The background color of the ingredients list container is wrong. Fix it.
const ingredientsContainer = document.querySelector('.ingredients-container');


ingredientsContainer.style.backgroundColor = 'white';

//The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the 
//ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.

const bottomList = document.querySelector('.ingredients-list-bottom');
const pasteList = document.querySelector('.ingredients-list-paste');

bottomList.innerHTML = '';

const ingredientItems = [
  '15st digistivetex',
  'Lite smör'  
];

ingredientItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  bottomList.appendChild(li);
});
 
const liPaste = document.createElement('li')
liPaste.textContent = '400g naturell philadelphiaost';
pasteList.appendChild(liPaste);

//The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.

const incorrectIngredient = pasteList.children[2];

incorrectIngredient.textContent = '3tsk vaniljsocker';


// Remove the shadow from the instruction title
const instructionsHeader = document.querySelector('.instructions');

// Remove the 'shadow' class if it exists
instructionsHeader.classList.remove('shadow');

//
// Select the <ol> element containing the instructions
const instructionsList = document.querySelector('.instructions-list');

// Define the incorrect and correct instructions
const incorrectInstructions = [
  "Separera ägggulor och äggvitor. Kasta äggvitorna på din partner och drick upp äggulorna som om du vore Rocky Balboa.",
  "Gå in till din granne och släng det över deras vardagsrumsgolv!"
];

const correctInstructions = [
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.",
  "Ställ in i frysen över natten."
];

// Iterate over the list items and update the incorrect ones
Array.from(instructionsList.children).forEach((li) => {
  const text = li.textContent.trim();
  const index = incorrectInstructions.indexOf(text);
  if (index !== -1) {
    li.textContent = correctInstructions[index];
  }
});



