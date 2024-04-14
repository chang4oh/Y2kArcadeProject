

const guestForm = document.getElementById('guestForm'); 
const guestList = document.getElementById('guestList'); 
  
guestForm.addEventListener('submit', function (e) { 
    e.preventDefault(); 
  
    const name = document.getElementById('name').value; 
    const note = document.getElementById('note').value; 
  
    const guestCard = document.createElement('div'); 
    guestCard.classList.add('guest-card'); 
    guestCard.innerHTML = ` 
                <h2>${name}</h2> 
                <p><strong>Note:</strong> ${note}</p> `; 
  
    guestList.appendChild(guestCard); 
  
    guestForm.reset(); 
});
