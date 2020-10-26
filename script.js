// Écrivez votre code JavaScript ici.
const list = document.querySelector('#ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.onclick =  btn () => {

        input.value =""
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');


        listItem.appendChild(listBtn)
        listText.textContent = toBuy
        listItem.appendChild(listText)
listBtn.textContent ="erase"



      }
