//console.log('Welcome to Dom');

console.log(document.body);
// option-1 = li colection
const liColection = document.getElementsByTagName('li');
for (const li of liColection) {
    console.log(li.innerText);
}

// h1 colection
const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    console.log(h1.innerText);
}

// option-2 = using id
const lang = document.getElementById('lang-list');
lang.innerText = 'All Program language list';
console.log(lang);

// option-3 = using class
const sameClass = document.getElementsByClassName('same-rules-apply');
//console.log(sameClass);
for (const same of sameClass) {
    console.log(same.innerText);
}

// option-4 = querySelector

const heading = document.querySelector('#hGroup h1');
console.log(heading.innerText);

const onlyFirstLi = document.querySelector('.lang-container li');
console.log(onlyFirstLi.innerText);

// option-5 = querySelectorAll

const title = document.querySelectorAll('#hGroup h1');
//console.log(title);
for (const h1 of title) {
    console.log(h1.innerText);
}

const listOfLi = document.querySelectorAll('.lang-container li');
for (const li of listOfLi) {
    console.log(li.innerText);
}

//css style apply by js
document.getElementById('bangladesh').style.color = 'gold';
document.getElementById('bangladesh').style.background = 'green';
document.getElementById('bangladesh').style.padding = '10px';
document.getElementById('bangladesh').style.borderRadius = '15px';
document.getElementById('bangladesh').style.borderRadius = '15px';
document.getElementById('bangladesh').style.textAlign = 'center';
document.getElementById('bangladesh').style.width = '300px';


//get Attribute(id or class)
const headingTwo = document.getElementById('bangladesh');

console.log(headingTwo.getAttribute('class'));
console.log(headingTwo.getAttribute('id'));

//remove a class
headingTwo.classList.remove('border');
console.log(headingTwo.classList);

//add a class
headingTwo.classList.add('fontSize');
console.log(headingTwo.classList);

//set Attribute
headingTwo.setAttribute('title', 'Md Sajal Hossain');

//innerHtml and innerText
const viewInner = document.getElementsByClassName('lang-container');
//console.log(viewInner);
//console.log(viewInner[0]);
//console.log(viewInner[0].innerHTML);
//console.log(viewInner[0].innerText);
viewInner[0].innerHTML = '<h2>This is dom heading</h2>';

//innerHtml and innerText more example
// innerText
const div1 = document.getElementById('hGroup');
const viewText = div1.innerText;
console.log(viewText);

// innerHTML
const div2 = document.getElementById('hGroup');
const viewhtml = div2.innerHTML;
console.log(viewhtml);





