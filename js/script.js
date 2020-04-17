'use strict'
var addbdgtbtn = document.querySelector('#add');
var addexpensbtn = document.querySelector('#subtract');
var balancetxt = document.querySelector('.balance > h3 > span');
var bdgttxt = document.querySelector('.bdgt > h3 > span');
var expnstxt = document.querySelector('.expns > h3 > span');




function addbdgt(){
    var budgt = parseInt(this.previousElementSibling.value);
    if(budgt == '' || budgt == 0 || budgt <= 0){
        alert('this\'s not budget')
    }else{
        var current = parseInt(bdgttxt.textContent);
        var expense = parseInt(expnstxt.textContent);
        balancetxt.textContent = budgt+current-expense;
        bdgttxt.textContent = budgt+current;
        this.previousElementSibling.value = 0;    
    }
    
}


function addexpns(){
    
    var name = this.parentElement.querySelectorAll('input')[0].value;
    var val = parseInt(this.parentElement.querySelectorAll('input')[1].value);
    
    if(name == '' || val == '' || val <= 0){
        alert('some data are missed')
    }else{
//        creating div expense
        var items = document.querySelector('.items');

        var item = document.createElement('div');
        item.className = 'item';

        var nametxt = document.createElement('h5');
        nametxt.textContent = ('-' + name);
        item.appendChild(nametxt);

        var valtxt =  document.createElement('h5');
        valtxt.textContent = ('$' + val);
        item.appendChild(valtxt);

        var editbtn = document.createElement('I');
        editbtn.classList = 'far fa-edit';
        editbtn.addEventListener('click',editexpense);
        item.appendChild(editbtn);

        var delbtn = document.createElement('I');
        delbtn.classList = 'fas fa-trash';
        delbtn.addEventListener('click',delexpense);
        item.appendChild(delbtn);
        
        this.parentElement.querySelectorAll('input')[0].value = '';
        this.parentElement.querySelectorAll('input')[1].value = '';

        items.appendChild(item);
        
//        adding values to the analyze div
        var balance = parseInt(balancetxt.textContent);
        var expense = parseInt(expnstxt.textContent);
        expnstxt.textContent = expense + val;
        balancetxt.textContent = balance - val;
    }
}


function delexpense(){
    var item = this.parentElement;
    var val = parseInt(((item.querySelectorAll('h5')[1]).textContent).substring(1));
    var balance = parseInt(balancetxt.textContent);
    var expns = parseInt(expnstxt.textContent);
    expnstxt.textContent = expns - val;
    balancetxt.textContent = balance + val;
    item.parentElement.removeChild(item);
}


function editexpense(){
//    adding the values to the expense panels
    var item = this.parentElement;
    var nametxt = document.querySelectorAll('.subtracting > input')[0];
    var name = ((item.querySelectorAll('h5')[0]).textContent).substring(1);
    
    nametxt.value= name;
    var valtxt = document.querySelectorAll('.subtracting > input')[1];
    var val = parseInt(((item.querySelectorAll('h5')[1]).textContent).substring(1));
    valtxt.value = val;
    
//    removing te item from the item list
    var val = parseInt(((item.querySelectorAll('h5')[1]).textContent).substring(1));
    var balance = parseInt(balancetxt.textContent);
    var expns = parseInt(expnstxt.textContent);
    expnstxt.textContent = expns - val;
    balancetxt.textContent = balance + val;
    item.parentElement.removeChild(item);
}




addbdgtbtn.addEventListener('click',addbdgt);

addexpensbtn.addEventListener('click',addexpns);
