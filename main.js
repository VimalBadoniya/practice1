let submit = document.addEventListener('submit' , booking);

function booking(e){
    e.preventDefault();
    let pName = document.getElementById('name-text').value;
    
    let pEmail = document.getElementById('email-text').value;
    let pContact = document.getElementById('contact-text').value;
    let pAppDate = document.getElementById('date-text').value;
    let pAppTime = document.getElementById('time-text').value;

    let patient = {Name : pName , Email : pEmail , Contact : pContact , AppDate : pAppDate , AppTime : pAppTime};

    let a = Math.random();


    localStorage.setItem( pEmail , JSON.stringify(patient));

    console.log(patient)

    

}


