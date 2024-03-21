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

const boxElement = document.querySelector('.box-flex');

for(let i = 0; i < ourTeam.length; i++){
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'ms-4', 'mt-4','mb-4');
    cardElement.innerHTML = `
    <img class="img-fluid" src="img/${ourTeam[i].img}">
    <div class="card-body">
        <p class="card-text text-center ">
            <span class="name">${ourTeam[i].nameSurname}</span><br>
            <span>${ourTeam[i].role}</span>
        </p>
    </div>
    `
    boxElement.appendChild(cardElement);
}