const langList = document.getElementById('program-list');

const itemOfLi = document.createElement('li');
itemOfLi.innerText = 'MYSQL';
langList.appendChild(itemOfLi);


//added section and child element in main container
const mainContainer = document.getElementById('main-container');

const itemOfSection = document.createElement('section');

const itemOfH1 = document.createElement('h1');
itemOfH1.innerText = 'Welcome to Bangladesh.';
const itemOfp = document.createElement('p');
itemOfp.innerText = 'Bangladesh is a beautiful country, i lile so much';

itemOfSection.appendChild(itemOfH1);
itemOfSection.appendChild(itemOfp);

const itemOfUl = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Naogaon';

const li2 = document.createElement('li');
li2.innerText = 'Rajshahi';

const li3 = document.createElement('li');
li3.innerText = 'khulna';

itemOfUl.appendChild(li1);
itemOfUl.appendChild(li2);
itemOfUl.appendChild(li3);

itemOfSection.appendChild(itemOfUl);

mainContainer.appendChild(itemOfSection);

//set inner HTMl directly
const sectionFriend = document.createElement('section');
sectionFriend.innerHTML = `
            <h1>Welcome to bangladesh</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem repudiandae cum dolorem,
                tenetur provident quo eaque odit enim perferendis.</p>
            <ul>
                <li>Sajal</li>
                <li>Akashi</li>
                <li>Babu</li>
                <li>Samiha</li>
                <li>Suchi</li>
            </ul>
`
mainContainer.appendChild(sectionFriend);