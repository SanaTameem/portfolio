const Menu = document.querySelector('section.mobile-menu-container');
const MenuBtn = document.querySelector('a.hamburger');
const CloseBtn = document.querySelector('span.menu-icon');

const myWorksSection = document.querySelector('.myworks-container');
// Projects section
const projectList = [
  {
    id: 1,
    title: 'To do List',
    discription: 'To-do list is a tool that helps to organize a day which is built using ES6 and Webpack. It simply lists the tasks that a user wants to do and allows them to mark the tasks as completed or manage their list of tasks by adding extra tasks or removing existing ones.',
    imageLink: ['./Images/3.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveLink: 'https://sanatameem.github.io/To-do-List/dist/',
    sourceLink: 'https://github.com/SanaTameem/To-do-List',
  },

  {
    id: 2,
    title: 'Mealicious Gallery',
    discription: 'Mealicious Gallery is your go-to destination for exploring a diverse range of meals. Like and comment on your favorite dishes, and engage with a community of food enthusiasts. With a responsive design, it is powered by Webpack.',
    imageLink: ['./Images/mealicious.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveLink: 'https://sanatameem.github.io/Mealicious-Gallery-JS-Capstone/',
    sourceLink: 'https://github.com/SanaTameem/Mealicious-Gallery-JS-Capstone',
  },

  {
    id: 3,
    title: 'Math Magicians',
    discription: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: ➕➖✖️➗ Make simple calculations and read a random math-related quote.',
    imageLink: ['./Images/math-magicians.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://math-magicians-deploy.onrender.com/',
    sourceLink: 'https://github.com/SanaTameem/math-magicians',
  },

  {
    id: 4,
    title: 'Space Traveler\'s Hub',
    discription: 'Explore the cosmos with us! Embark on captivating space missions and book rockets for an unforgettable journey into the unknown. Get ready to experience the thrill of space travel like never before!',
    imageLink: ['./Images/space.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://space-travelers-hub-x05d.onrender.com/',
    sourceLink: 'https://github.com/SanaTameem/space-travelers-hub',
  },

  {
    id: 5,
    title: 'TV Maze',
    discription: 'Explore & discover TV shows from all genres with TVMAZE Shows! Powered by TVMAZE API, our user-friendly platform offers info & summaries on drama, comedy, sci-fi, reality TV & more! Explore now!',
    imageLink: ['./Images/tvmaze.jpg', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://tvmaze-shows.onrender.com/',
    sourceLink: 'https://github.com/SanaTameem/react-capstone-tvmaze',
  },

  {
    id: 6,
    title: 'Test Drive Zone',
    discription: 'This app allows users to schedule test drive appointments for cars. Users can add, delete, and view details of available cars, making it easy to manage appointments for test drives.',
    imageLink: ['./Images/test-drive-zone.png', 'Images/Snapshoot Portfolio3.svg'],
    technologies: ['JavaScript', 'Bootstrap', 'React', 'Rails'],
    liveLink: 'https://car-rent-swa4.onrender.com/',
    sourceLink: 'https://github.com/SanaTameem/book-an-appointment-back-end',
  },
];

const projectStructure = (id, title, discription, imageLink, technologies) => {
  const techListItems = technologies.map((tech) => `<li class="languages">${tech}</li>`).join('');
  return `
<div class="first-container container-${id}">
<div class="second-container">
 <h4 class="title-languages">${title}</h4>
 <ul class="list-languages">
    ${techListItems}
 </ul>
 <div class="container2-btn">
   <button type="button" class="see-project" id="project-${id}">See Project</button>
 </div>
</div>
</div>
`;
};

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
const projectPopupMobile = (
  id, title, discription, imageLink, technologies, liveLink, sourceLink,
) => {
  const techListItems = technologies.map((tech) => `<li class="languages">${tech}</li>`).join('');
  return `
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
        ${techListItems}
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
};

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

// Typewriter effect
// let i = 0;
// const text = "Hey there, I’m Sana!. I’m a software developer!";
// const typeWriter = () => {
//   if (i < text.length) {
//     const heroTitle = document.querySelector('.hero-title');
//     if (text.charAt(i) === '.') {
//       heroTitle.innerHTML += '<br>';
//     } else {
//       heroTitle.innerHTML += text.charAt(i);
//     }
//     i++;
//     setTimeout(typeWriter, 70);
//   }
// };

// window.onload = function () {
//   typeWriter();
// };

const textElement = document.querySelector('.hero-title');
const textArray = ['Hey there, I’m Sana Tameem!', 'I’m a Software Engineer!', 'I’m a Full-Stack Developer!'];
let index = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = textArray[index];
  if (!isDeleting) {
    textElement.textContent = currentText.substring(0, textElement.textContent.length + 1);
  } else {
    textElement.textContent = currentText.substring(0, textElement.textContent.length - 1);
  }

  typingSpeed = isDeleting ? 50 : 60;

  if (!isDeleting && textElement.textContent === currentText) {
    isDeleting = true;
    typingSpeed = 200; // Wait before deleting
  } else if (isDeleting && textElement.textContent === '') {
    isDeleting = false;
    index = (index + 1) % textArray.length; // Move to the next sentence
  }

  setTimeout(type, typingSpeed);
}

setTimeout(type, 100); // Start the typing effect after 1 second

// Adding functionality to form to send email to me :
const contactForm = document.querySelector('.my-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const email = formData.get('userEmail');
  const name = formData.get('userName');
  const message = formData.get('userMessage');
  const mailtoLink = `mailto:sanatameem38@gmail.com?subject=Message from ${name} ${email}&body=${message}`;

  window.location.href = mailtoLink;
});