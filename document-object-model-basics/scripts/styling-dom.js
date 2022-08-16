const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '25px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightblue';
}

// const sectionThreeContainer = document.getElementById('section-three-container');
// sectionThreeContainer.style.backgroundColor = 'yellow';

const sectionThreeContainer = document.getElementById('section-three-container');
sectionThreeContainer.classList.add('section-three-text-center');
sectionThreeContainer.classList.remove('large-text');