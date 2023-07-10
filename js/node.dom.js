const names = document.getElementById('section-1');
console.log(names);
console.log(names.firstChild);
console.log(names.lastChild);
console.log(names.childNodes);
console.log(names.childNodes[1]);
console.log(names.childNodes[5].childNodes);
console.log(names.childNodes[5].childNodes[3]);
console.log(names.childNodes[5].childNodes[3].nextSibling);
console.log(names.childNodes[5].childNodes[3].previousSibling);

const nameList = document.querySelector('#section-1 ul');
console.log(nameList);

const li = document.createElement('li');
li.innerText = 'Safaet';
console.log(li);
nameList.appendChild(li);

console.log(nameList.parentNode);
console.log(nameList.parentNode.parentNode);
console.log(nameList.parentNode.parentNode.parentNode);
console.log(nameList.parentNode.parentNode.parentNode.parentNode);
