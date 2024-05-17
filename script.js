// alert('hello');

function newEx() {
  //console.log('clicked')

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter Experience");
  newNode.setAttribute("rows", 3);

  let we = document.getElementById("we");
  let weButton = document.getElementById("weButton");

  we.insertBefore(newNode, weButton);
}

function newQu(){

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('text');
  newNode.classList.add('aqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("placeholder", "Enter Qualification");
  newNode.setAttribute('rows',3);

  let aq = document.getElementById('aq');
  let aqButton = document.getElementById('aqButton');

  aq.insertBefore(newNode,aqButton);

}

function generateCV()
{
  let nameField = document.getElementById('nameField').value;
  let Tname = document.getElementById('Tname');
  Tname.innerHTML = nameField;

  document.getElementById('Tname2').innerHTML = nameField;

  let contactField = document.getElementById('contactField').value;
  let Tcontct = document.getElementById('Tcontact');
  Tcontct.innerHTML = contactField;

  let addressField = document.getElementById('addressField').value;
  let Taddress = document.getElementById('Taddress');
  Taddress.innerHTML = addressField;

  let fbField = document.getElementById('fbField').value;
  let Tfb = document.getElementById('Tfb');
  Tfb.innerHTML = fbField;

  let instaField = document.getElementById('instaField').value;
  let Tinsta = document.getElementById('Tinsta');
  Tinsta.innerHTML = instaField;

  let liField = document.getElementById('liField').value;
  let Tli = document.getElementById('Tli');
  Tli.innerHTML = liField;
  // direct setting 

  // document.getElementById('Tcontct').innerHTML = document.getElementById('contactField').value; 
  // document.getElementById('Taddress').innerHTML = document.getElementById('addressField').value; 
  // document.getElementById('Tfb').innerHTML = document.getElementById('fbField').value; 
  // document.getElementById('Tinsta ').innerHTML = document.getElementById('instaField').value; 
  // document.getElementById('Tli ').innerHTML = document.getElementById('liField').value; 

  let obField = document.getElementById('obField').value;
  let Tobjective = document.getElementById('Tobjective');

  Tobjective.innerHTML = obField;


  let weField = document.getElementsByClassName('weField');
  let str = '';

  for (let k of weField) {
    str = str + `<li> ${k.value} </li>` ; 
    console.log(k);
  }

  document.getElementById('Twork').innerHTML = str;

  let aqField = document.getElementsByClassName('aqField');
  let str1 = '';
  for (let k of aqField) {
    str1 = str1 + `<li> ${k.value} </li>` ; 
    console.log(k);
  }

  document.getElementById('Tacademic').innerHTML = str1;

  // code for setting image
  let file = document.getElementById('imgField').files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);

  console.log(reader.result);

reader.onload = function(){
  document.getElementById('imgTemplate').src = reader.result;
}


  document.getElementById('cv-form').style.display = 'none';
  document.getElementById('cv-template').style.display = 'block';
}

function printCV()
{
  window.print();
}


