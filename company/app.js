'use strict';
let Butn=document.getElementById("btn");
let data=[];

function storeInLocalStorage(){
    let stored=JSON.stringify(data);
    localStorage.setItem('clientsPur',stored);
}

function CallFromLocalStorage(){
    let getStored=localStorage.getItem('clientsPur');
    let StoredData=JSON.parse(getStored);
    console.log(StoredData)
    let l=StoredData.length;
    if (l != 0){
        for(let i=0; i<l; i++){
            let newRow= document.createElement('tr');
            let newCol1= document.createElement('td');
            let newCol2= document.createElement('td');
            let newCol3= document.createElement('td');
            let newCol4= document.createElement('td');
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            newRow.appendChild(newCol4);
            document.getElementById('boadTa').appendChild(newRow);
            newCol1.innerHTML=StoredData[i].Name;
            newCol2.innerHTML=StoredData[i].phoneT;
            newCol3.innerHTML=StoredData[i].price;
            newCol4.innerHTML=StoredData[i].cond;
        }
        for(let i=l-1; i>=0; i--){
            data.unshift(StoredData[i]);
        }
    }
}

Butn.addEventListener("click", phonePurchase);
function phonePurchase() {
    let clientName=document.getElementById('client').value;
    let phoneType=document.getElementById('typeName').value;

    new Client(clientName,phoneType);
}

CallFromLocalStorage()
function Client(clientName,phoneType){
    this.Name=clientName;
    this.phoneT=phoneType;
    this.price= Math.floor(Math.random()*(500-50)+50);
    let x;
    if (this.price<100){
        x= 'Used';
    }else{
        x= 'New Device';
    };
    this.cond= x;
    

    console.log(this);
    data.push(this);
    renderfun();
    storeInLocalStorage()
    console.log(localStorage.getItem('clientsPur'));
}

function renderfun(){
    let newRow= document.createElement('tr');
    let newCol1= document.createElement('td');
    let newCol2= document.createElement('td');
    let newCol3= document.createElement('td');
    let newCol4= document.createElement('td');
    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    newRow.appendChild(newCol4);
    document.getElementById('boadTa').appendChild(newRow);

    let l=data.length-1;

    newCol1.innerHTML=data[l].Name;
    newCol2.innerHTML=data[l].phoneT;
    newCol3.innerHTML=data[l].price;
    newCol4.innerHTML=data[l].cond;
}