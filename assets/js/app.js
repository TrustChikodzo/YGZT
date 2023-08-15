const ourTeam = [
  {
    username: 'Learnmore Chikwewo',
    position: 'Executive Director',
    resume: 'U=U Ambassador',
    picture: 'assets/images/lenny.jpg',
    alt: 'YGZT Executive Director',
  },
  {
    username: 'Blessed',
    position: 'Programs Manager',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/blessed.jpg',
    alt: 'ZYGZT Programs Officer',
  },
  {
    username: 'Munashe Tagarira',
    position: 'Finance Manager',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/munashe.jpg',
    alt: 'YGZT Finance Manager',
  },
  {
    username: 'Takundaishe Makuwerere',
    position: 'Programs Officer',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/takundaishe.jpg',
    alt: 'prog officer 1',
  },
  {
    username: 'Laura Magama',
    position: 'Programs Officer',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/laura.png',
    alt: 'prog officer 2',
  },
  {
    username: ' ??',
    position: '??',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/',
    alt: 'officer',
  },
];

const createHeaderSection = (title, content, elClass = 'text-center') => {
  const header = document.createElement(title);
  header.className = elClass;
  header.textContent = content;
  return header;
};

const createButtonSection = () => {
  const toggleButtonSection = document.createElement('div');
  toggleButtonSection.className = 'team-members-expand';
  const toggleButton = document.createElement('button');
  toggleButton.innerHTML = '<span class=\'more\'> MORE </span> <span class=\'fa fa-angle-down fa-lg mx-1\'></span>';
  toggleButton.className = 'btn btn-inverse d-flex flex-center d-flex-sm-none mb-1';
  toggleButtonSection.appendChild(toggleButton);

  return toggleButtonSection;
};

const teamMembers = (member, index) => {
  const memberRow = document.createElement('div');
  memberRow.className = (index <= 1) ? 'd-flex flex-center flex-sm-start team-member' : 'd-none flex-center d-flex-sm team-member flex-sm-start';

  const imgHolder = document.createElement('div');
  imgHolder.className = 'our-team-profile pos-rel';

  const profileImg = document.createElement('img');
  profileImg.src = member.picture;
  profileImg.alt = member.alt;

  const bgImage = document.createElement('span');
  bgImage.className = 'bg-team-section';

  imgHolder.appendChild(profileImg);
  imgHolder.appendChild(bgImage);
  memberRow.appendChild(imgHolder);

  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'team-member-details';
  const memberName = document.createElement('h3');
  memberName.textContent = member.username;

  const memberPosition = document.createElement('div');
  memberPosition.className = 'team-member-position mb-1';
  memberPosition.innerHTML = `<em><strong>${member.position}</strong></em>`;

  const memberDescription = document.createElement('div');
  memberDescription.className = 'team-member-bio';
  memberDescription.textContent = member.resume;

  detailsDiv.appendChild(memberName);
  detailsDiv.appendChild(memberPosition);
  detailsDiv.appendChild(memberDescription);

  memberRow.appendChild(detailsDiv);

  return memberRow;
};

const ourTeamSection = () => {
  const section = document.createElement('section');
  section.id = 'team';
  section.className = 'container d-flex flex-column our-team';

  const header = createHeaderSection('h2', 'Our Team', 'text-center title-underline');
  const headerContainer = document.createElement('div');
  headerContainer.className = 'pos-rel mb-2';
  headerContainer.appendChild(header);
  section.appendChild(headerContainer);

  const teamContainer = document.createElement('div');
  teamContainer.className = 'd-flex-sm flex-sm-row';
  ourTeam.forEach((member, index) => { teamContainer.appendChild(teamMembers(member, index)); });
  const teamSection = document.getElementById('our-team');
  if (teamSection) {
    section.appendChild(teamContainer);
    teamSection.appendChild(section);
  }
  const toggleButtonSection = createButtonSection();
  section.appendChild(toggleButtonSection);
};
ourTeamSection();

const showMenu = () => {
  const userMenu = document.querySelector('nav ul');
  const documentBody = document.querySelector('body');

  if (document.documentElement.clientWidth <= 767) {
    userMenu.classList.toggle('mobile-menu');
    documentBody.classList.toggle('fixed');
  }
};

const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.close-menu');

menuIcon.addEventListener('click', showMenu);
menuClose.addEventListener('click', showMenu);

const showTeamSection = () => {
  const teamSection = document.querySelectorAll('.team-member');
  const buttonText = document.querySelector('.team-members-expand span.more');
  const buttonClicked = document.querySelector('.team-members-expand span.fa');

  teamSection.forEach((section, index) => {
    if (index > 1) {
      section.classList.toggle('d-none');
      section.classList.toggle('d-flex');
    }
  });

  const changeText = buttonText.textContent.trim() === 'MORE' ? 'LESS' : 'MORE';
  buttonText.textContent = changeText;

  buttonClicked.classList.toggle('fa-angle-up');
  buttonClicked.classList.toggle('fa-angle-down');
};

const teamToggleButton = document.querySelector('.btn-inverse');

if (teamToggleButton) {
  teamToggleButton.addEventListener('click', showTeamSection);
}

const fixedMenu = () => {
  const header = document.querySelector('.menu');
  const isFixed = this.window.scrollY > 200 ? header.classList.add('sticky') : header.classList.remove('sticky');

  return isFixed;
};

window.addEventListener('scroll', fixedMenu);
