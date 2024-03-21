let ourTeam = [
    {
        'nameSurname': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'img': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nameSurname': 'Angela Caroll',
        'role': 'Chief Editor',
        'img': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nameSurname': 'Walter Gordon',
        'role': 'Office Manager',
        'img': 'walter-gordon-office-manager.jpg'
    },
    {
        'nameSurname': 'Angela Lopez',
        'role': 'Social Media Manager',
        'img': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nameSurname': 'Scott Estrada',
        'role': 'Developer',
        'img': 'scott-estrada-developer.jpg'
    },
    {
        'nameSurname': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'img': 'barbara-ramos-graphic-designer.jpg'
    }
];

const ulElement  = document.querySelector('ul');

for(let i = 0; i < ourTeam.length; i++){
    const liElement = document.createElement('li');
    liElement.innerHTML = `
    Nome: ${ourTeam[i].nameSurname} Ruolo: ${ourTeam[i].role}
    <img src="img/${ourTeam[i].img}">
    `;
    ulElement.appendChild(liElement);
}