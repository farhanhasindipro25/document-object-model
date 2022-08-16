// Where to add
let sectionThreeLists = document.getElementById('section-three-list');
// console.log(sectionThreeLists);

// What to add
const LI = document.createElement('li');
LI.innerText = 'Item NEW';

// adding the child
sectionThreeLists.appendChild(LI);

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
mainContainer.appendChild(section);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Item 1";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Item 2";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Item 1";
ul.appendChild(li3);

section.appendChild(ul);

// set innerHTML directly
const sectionFive = document.createElement('section');
sectionFive.innerHTML = 
`
<h1>This section is directly added via innerHTML</h1>
<ul>
    <li> Item 1 </li>
    <li> Item 2 </li>
    <li> Item 3 </li>
</ul>
`

mainContainer.appendChild(sectionFive);