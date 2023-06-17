const Menu = document.querySelector('section.mobile-menu-container');
const MenuBtn = document.querySelector('a.hamburger');
const CloseBtn = document.querySelector('span.menu-icon');

const myWorksSection = document.querySelector('.myworks-container');
// Projects section
const projectList = [
  {
    id: 1,
    title: 'Conference Page',
    discription: 'The Conference Page is a responsive and dynamic website created using HTML, CSS and javascript and designed to provide information about Web Science, celebrating its 13th year of interrogating.',
    imageLink: ['./Images/1.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://sanatameem.github.io/Capstone-conference-page/',
    sourceLink: 'https://github.com/SanaTameem/Capstone-conference-page',
  },

  {
    id: 2,
    title: 'Awesome Books',
    discription: '📚 Awesome Book is a simple project created using HTML , CSS and more Javascript which a user can add a book\'s title and author into it and can remove it from their list and it will be saved in the local storage of the browser so the user could have access to their list anytime.',
    imageLink: ['./Images/2.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://sanatameem.github.io/Awesome-Books-Project/',
    sourceLink: 'https://github.com/SanaTameem/Awesome-Books-Project',
  },

  {
    id: 3,
    title: 'To do List',
    discription: '📑"To-do list" is a tool that helps to organize a day which is built using ES6 and Webpack. It simply lists the tasks that a user wants to do and allows them to mark the tasks as completed or manage their list of tasks by adding extra tasks or removing existing ones.',
    imageLink: ['./Images/3.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'Javascript', 'Webpack'],
    liveLink: 'https://sanatameem.github.io/To-do-List/dist/',
    sourceLink: 'https://github.com/SanaTameem/To-do-List',
  },

  {
    id: 4,
    title: 'Photo App',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageLink: ['Images/Snapshoot Portfolio.svg', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['Ruby on Rains', 'Bootstrap', 'Javascript', 'html'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 5,
    title: 'Calculator',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageLink: ['Images/Snapshoot Portfolio.svg', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['Ruby on Rains', 'Bootstrap', 'Javascript', 'html'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 6,
    title: 'Help the Innocent bird Game',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageLink: ['Images/Snapshoot Portfolio.svg', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['Ruby on Rains', 'Bootstrap', 'Javascript', 'html'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const projectStructure = (id, title, discription, imageLink, technologies) => `
<div class="first-container container-${id}">
<div class="second-container">
 <h4 class="title-languages">${title}</h4>
 <ul class="list-languages">
   <li class="languages">${technologies[0]}</li>
   <li class="languages">${technologies[1]}</li>
   <li class="languages">${technologies[2]}</li>
 </ul>
 <div class="container2-btn">
   <button type="button" class="see-project" id="project-${id}">See Project</button>
 </div>
</div>
</div>
`;

projectList.forEach((project) => {
  const htmlAdd = projectStructure(project.id,
    project.title,
    project.discription,
    project.imageLink,
    project.technologies,
    project.liveLink,
    project.sourceLink);
  myWorksSection.innerHTML += htmlAdd;
});

// Pop up section
// pop up for mobile:
const projectPopupMobile = (id, title, discription, imageLink, technologies, liveLink, sourceLink) => `
<div class="overlay" id="popup-${id}">
<div class="popup-main-container">
<div class="project-image-container">
  <img class="project-image project-${id}-image" src="${imageLink[0]}" alt="proj-img">
  <img class="project-image2" src="Images/Snapshoot Portfolio3.svg" alt="proj-img">
  <div class="right-top-corner" >
    <button class="close-btn" id="close-btn-${id}">
      <img class="close-btn-image55" src="./Images/Disabled3.svg" >      
    </button>
  </div>
</div>

<div class="title-techs">
  <div class="pop-div-1">
    <h2 class="title-popup">${title}
    </h2>
    <ul class="tech-used">
        <li>${technologies[0]}</li>
        <li>${technologies[1]}</li>
        <li>${technologies[2]}</li>
    </ul>
  </div>
  <div class="pop-div-2"> 
  <p class="popup-descrip ">${discription}</p>
  </div>
  
  <div class="btn-container pop-div-3">
    <button class="view-project-btn1">
      <a href="${liveLink}" target="_blank">See Live</a>
      <img src="Images/Icon - Export.svg" alt="icon2">
    </button>
    <button class="view-project-btn2">
    <a href="${sourceLink}" target="_blank">See Source</a>
      <img src="Images/Icon -GitHub.svg" alt="github">
    </button>
  </div>
</div>
</div>
</div>
`;

projectList.forEach((project) => {
  const htmlPop = projectPopupMobile(project.id,
    project.title,
    project.discription,
    project.imageLink,
    project.technologies,
    project.liveLink,
    project.sourceLink);
  myWorksSection.innerHTML += htmlPop;
});

// Event listeners for see project buttons:
projectList.forEach((project) => {
  const showBtn = document.getElementById(`project-${project.id}`);
  showBtn.addEventListener('click', () => {
    const popupShow = document.getElementById(`popup-${project.id}`);
    popupShow.style.display = 'flex';
  });
});

// Event listener for close button
projectList.forEach((project) => {
  const closeBtnPop = document.getElementById(`close-btn-${project.id}`);
  closeBtnPop.addEventListener('click', () => {
    const popupShow2 = document.getElementById(`popup-${project.id}`);
    popupShow2.style.display = 'none';
  });
});

// Menu event listeners
MenuBtn.addEventListener('click', () => {
  Menu.classList.add('visible');
});

CloseBtn.addEventListener('click', () => {
  Menu.classList.remove('visible');
});
Menu.addEventListener('click', () => {
  Menu.classList.remove('visible');
});

// form validation
const myform = document.querySelector('.my-form');
const email = document.getElementById('email-input');
const errorMessage = document.querySelector('.error-message');
myform.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent = 'Your email should be in lowercase';
  }
});