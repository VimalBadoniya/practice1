let submit = document.addEventListener('submit' , booking);

function booking(e){
    e.preventDefault();
    let name = document.getElementById('name-text').value;
    
    let email = document.getElementById('email-text').value;
    let contact = document.getElementById('contact-text').value;
    let appDate = document.getElementById('date-text').value;
    let appTime = document.getElementById('time-text').value;

    localStorage.setItem('Name' , name);
    localStorage.setItem('Email' , email);
    localStorage.setItem('Contact' , contact);
    localStorage.setItem('Date' , appDate);
    localStorage.setItem('Time' , appTime);
}