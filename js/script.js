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

let btn = document.getElementById('send');
btn.addEventListener('click', function(){
    let userNameSurname = document.getElementById('nameSurname').value;
    let userRole = document.getElementById('roleWork').value;
    let userPhoto = document.getElementById('nomeFoto').value;

    let newUser = {
        'nameSurname': `${userNameSurname}`,
        'role': `${userRole}`,
        'img': `${userPhoto}`
    }
    ourTeam.push(newUser);
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'ms-4', 'mt-4','mb-4');
    cardElement.innerHTML = `
        <img class="img-fluid" src="img/${newUser.img}">
        <div class="card-body">
            <p class="card-text text-center ">
                <span class="name">${newUser.nameSurname}</span><br>
                <span>${newUser.role}</span>
            </p>
        </div>
    `
    boxElement.appendChild(cardElement);
})

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