let parent = document.getElementsByClassName('parent')[0];
let btnAddnew = document.getElementsByTagName('button')[0];

btnAddnew.addEventListener('click', function {
    let newChild = document.createElement('div');
    newChild.className = 'child';
    parent.appendChild(newChild);
}