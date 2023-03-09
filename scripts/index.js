const Menu = document.querySelector('section.mobile-menu-container');
const MenuBtn = document.querySelector('a.hamburger');
const CloseBtn = document.querySelector('span.menu-icon');

const myWorksSection = document.querySelector('.myworks-container');
//Projects section
const projectList = [
{id: 1,
  title: 'Multi-Post Stories',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageLink: ['Images/Snapshoot Portfolio.svg','Images/Snapshoot Portfolio3.svg'],
  technologies:['Ruby on Rains','Bootstrap','Javascript','html'], 
  liveLink: '#',
  sourceLink: '#'
  },

  {id: 2,
    title: 'Game Project',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageLink:  ['Images/Snapshoot Portfolio.svg','Images/Snapshoot Portfolio3.svg'],
  technologies:['Ruby on Rains','Bootstrap','Javascript','html','Codepen','Codekit'],
  liveLink: '#',
  sourceLink: '#'
  },

  {id:3,
  title: 'Social App',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageLink: ['Images/Snapshoot Portfolio.svg','Images/Snapshoot Portfolio3.svg'],
  technologies:['Ruby on Rains','Bootstrap','Javascript','html'],
  liveLink: '#',
  sourceLink: '#'
  },

  {id:4,
  title: 'Photo App',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageLink:  ['Images/Snapshoot Portfolio.svg','Images/Snapshoot Portfolio3.svg'],
  technologies:['Ruby on Rains','Bootstrap','Javascript','html'],
  liveLink: '#',
  sourceLink: '#'
  },

  {id:5,
  title: 'Calculator',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageLink:  ['Images/Snapshoot Portfolio.svg','Images/Snapshoot Portfolio3.svg'],
  technologies:['Ruby on Rains','Bootstrap','Javascript','html'],
  liveLink: '#',
  sourceLink: '#'
  },

  {id:6,
  title: 'Help the Innocent bird Game',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  imageLink:  ['Images/Snapshoot Portfolio.svg','Images/Snapshoot Portfolio3.svg'],
  technologies:['Ruby on Rains','Bootstrap','Javascript','html'],
  liveLink: '#',
  sourceLink: '#'
  }
];

const projectStructure = (id,title,discription,imageLink,technologies,liveLink,sourceLink)=>
`
<div class="first-container">
<div class="second-container">
 <h4 class="title-languages">${title}</h4>
 <ul class="list-languages">
   <li class="languages">${technologies[0]}</li>
   <li class="languages">${technologies[1]}</li>
   <li class="languages">${technologies[2]}</li>
   <li class="languages">${technologies[3]}</li>
 </ul>
 <div class="container2-btn">
   <button type="button" class="see-project" id="project-${id}">See Project</button>
 </div>
</div>
</div>
`;

projectList.forEach((project)=>{
let htmlAdd = projectStructure(project.id,project.title,project.discription,project.imageLink,project.technologies,project.liveLink,project.sourceLink);
// myWorksSection.insertAdjacentHTML('afterend',htmlAdd);
myWorksSection.innerHTML += htmlAdd;
});



//Pop up section
//pop up for mobile: 
const projectPopupMobile = (id,title,discription,imageLink,technologies,liveLink,sourceLink)=>
`
<div class="overlay" id="popup-${id}">
<div class="popup-main-container">
<div class="project-image-container">
  <img class="project-image" src="${imageLink[0]}" alt="proj-img">
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
      <a href="${liveLink}">See Live</a>
      <img src="Images/Icon - Export.svg" alt="icon2">
    </button>
    <button class="view-project-btn2">
    <a href="${sourceLink}">See Source</a>
      <img src="Images/Icon -GitHub.svg" alt="github">
    </button>
  </div>
</div>
</div>
</div>
`;

projectList.forEach((project)=>{
  const htmlPop = projectPopupMobile(project.id,project.title,project.discription,project.imageLink,project.technologies,project.liveLink,project.sourceLink);
  myWorksSection.innerHTML += htmlPop;
});

//Event listeners for see project buttons:
projectList.forEach((project)=>{
  const showBtn = document.getElementById(`project-${project.id}`);
  showBtn.addEventListener('click',function showPop(){
    const popupShow = document.getElementById(`popup-${project.id}`);
    console.log(popupShow);
    popupShow.style.display ='flex';
});
});

//Event listener for close button
projectList.forEach((project)=>{
  const closeBtnPop = document.getElementById(`close-btn-${project.id}`);
  closeBtnPop.addEventListener('click',function closePop(){
    const popupShow2 = document.getElementById(`popup-${project.id}`);
    popupShow2.style.display ='none';
});
})


// closeBtn.addEventListener('click', () => {
//     overlay.classList.remove('visible');
//   });


//desktop popup
// const projectPopupDesktop = (title,discription,imageLink,technologies,liveLink,sourceLink)=>
// `
// <div class="project-image-container">
//   <img class="project-image" src="Images/Snapshoot Portfolio.svg" alt="proj-img">
//   <img class="project-image2" src="Images/Snapshoot Portfolio3.svg" alt="proj-img">
// <img src="Images/Disabled3.svg" class="close-btn-desktop" alt="cancel button">
// <div class="title-techs-desktop">
// <div class= "button-heading">
// <h2 class="title-popup">${title}
// </h2>
// <div class="btn-container">
// <button class="view-project-btn1">
// <a href="${liveLink}">See Live</a>
// <img src="Images/Icon - Export.svg" alt="icon2">
// </button>
// <button class="view-project-btn2">
// <a href="${sourceLink}">See Source</a>
// <img src="Images/Icon -GitHub.svg" alt="github">
// </button>
// </div>
// </div>
// <ul class="tech-used">
//     <li>${technologies[0]}</li>
//     <li>${technologies[1]}</li>
//     <li>${technologies[2]}</li>
//     <li>${technologies[3]}</li>
//     <li>${technologies[4]}</li>
//     <li>${technologies[5]}</li>
// </ul>
// <p class="popup-descrip">${discription}</p>
// </div>
// `;

// projectList.forEach((project)=>{
//   const htmlPopDesktop = projectPopupDesktop(project.title,project.discription,project.imageLink,project.technologies,project.liveLink,project.sourceLink);
//   myWorksSection.innerHTML += htmlPopDesktop;
// });




// myWorksSection.innerHTML = `
// <div class="first-container">
//   <div class="second-container">
//     <h4 class="title-languages">Multi-Post Stories Gain+Glory</h4>
//     <p class="project-description"></p>
//     <ul class="list-languages">
//       <li class="languages">Ruby on rails</li>
//       <li class="languages">css</li>
//       <li class="languages">JavaScript</li>
//       <li class="languages">html</li>
//     </ul>
//     <div class="container2-btn">
//       <button type="button" class="see-project">See Project</button>
//     </div>
//   </div>
// </div>
// <div class="first-container">
//   <div class="second-container">
//     <h4 class="title-languages">Multi-Post Stories Gain+Glory</h4>
//     <ul class="list-languages">
//       <li class="languages">Ruby on rails</li>
//       <li class="languages">css</li>
//       <li class="languages">JavaScript</li>
//       <li class="languages">html</li>
//     </ul>
//     <div class="container2-btn">
//       <button type="button" class="see-project">See Project</button>
//     </div>
//   </div>
// </div>
// <div class="first-container">
//   <div class="second-container">
//     <h4 class="title-languages">Multi-Post Stories Gain+Glory</h4>
//     <ul class="list-languages">
//       <li class="languages">Ruby on rails</li>
//       <li class="languages">css</li>
//       <li class="languages">JavaScript</li>
//       <li class="languages">html</li>
//     </ul>
//     <div class="container2-btn">
//       <button type="button" class="see-project">See Project</button>
//     </div>
//   </div>
// </div>
// <div class="first-container">
//   <div class="second-container">
//     <h4 class="title-languages">Multi-Post Stories Gain+Glory</h4>
//     <ul class="list-languages">
//       <li class="languages">Ruby on rails</li>
//       <li class="languages">css</li>
//       <li class="languages">JavaScript</li>
//       <li class="languages">html</li>
//     </ul>
//     <div class="container2-btn">
//       <button type="button" class="see-project">See Project</button>
//     </div>
//   </div>
// </div>
// <div class="first-container">
//   <div class="second-container">
//     <h4 class="title-languages">Multi-Post Stories Gain+Glory</h4>
//     <ul class="list-languages">
//       <li class="languages">Ruby on rails</li>
//       <li class="languages">css</li>
//       <li class="languages">JavaScript</li>
//       <li class="languages">html</li>
//     </ul>
//     <div class="container2-btn">
//       <button type="button" class="see-project">See Project</button>
//     </div>
//   </div>
// </div>
// <div class="first-container">
//   <div class="second-container">
//     <h4 class="title-languages">Multi-Post Stories Gain+Glory</h4>
//     <ul class="list-languages">
//       <li class="languages">Ruby on rails</li>
//       <li class="languages">css</li>
//       <li class="languages">JavaScript</li>
//       <li class="languages">html</li>
//     </ul>
//     <div class="container2-btn">
//       <button type="button" class="see-project">See Project</button>
//     </div>
//   </div>
// </div>
// `;
MenuBtn.addEventListener('click', () => {
  Menu.classList.add('visible');
});

CloseBtn.addEventListener('click', () => {
  Menu.classList.remove('visible');
});
Menu.addEventListener('click', () => {
  Menu.classList.remove('visible');
});

// const body = document.querySelector('body');
// const section = document.createElement('section');
// const showProject = document.querySelector('.see-project');
// const closeProject = document.querySelector('.close-btn-desktop');
// body.appendChild(section);
// section.className = 'project-popup';
// section.className = 'invisible';
// section.innerHTML = `
// <div class="project-image-container">
//   <img class="project-image" src="Images/Snapshoot Portfolio.svg" alt="proj-img">
//   <img class="project-image2" src="Images/Snapshoot Portfolio3.svg" alt="proj-img">
//   <img src="Images/Icon - Cancel.svg" class="close-btn" alt="cancel button">
// </div>

// <div class="title-techs">
// <h2 class="title-popup">Keeping track of hundreds of
//   components
// </h2>
// <ul class="tech-used">
//     <li>Ruby on rails</li>
//     <li>css</li>
//     <li>JavScript</li>
// </ul>
// <p class="popup-descrip">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
//  <div class="btn-container">
//   <button class="view-project-btn1">
//     See Live
//     <img src="Images/Icon - Export.svg" alt="icon2">
//   </button>
//   <button class="view-project-btn2">
//     See Source
//     <img src="Images/Icon -GitHub.svg" alt="github">
//   </button>
// </div>
// </div>
// <img src="Images/Disabled3.svg" class="close-btn-desktop" alt="cancel button">
// <div class="title-techs-desktop">
// <div class= "button-heading">
// <h2 class="title-popup">Keeping track of hundreds of
// components
// </h2>
// <div class="btn-container">
// <button class="view-project-btn1">
// See Live
// <img src="Images/Icon - Export.svg" alt="icon2">
// </button>
// <button class="view-project-btn2">
// See Source
// <img src="Images/Icon -GitHub.svg" alt="github">
// </button>
// </div>
// </div>
// <ul class="tech-used">
//     <li>Codekit</li>
//     <li>GitHub</li>
//     <li>Javasript</li>
//     <li>Bootstrap</li>
//     <li>Terminal</li>
//     <li>Codepen</li>
// </ul>
// <p class="popup-descrip">Lorem Ipsum is simply dummy text of the
//  printing and typesetting industry. Lorem Ipsum has been the
//   industry's standard dummy text ever since the 1500s, when an 
//   unknown printer took a galley of type and scrambled it 1960s 
//   with the releaLorem Ipsum is simply dummy text of the printing
//    and typesetting industry. Lorem Ipsum has been the industry's
//     standard dummy text ever since the 1500s, when an unknown 
//     printer took a galley of type and scrambled it 1960s with
//    the relea</p>
// </div>
// `;

// showProject.addEventListener('click',()=>{
//   section.classList.remove('invisible');
// });
// closeProject.addEventListener('click',()=>{
//   section.classList.add('invisible');
// });

