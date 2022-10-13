let submit = document.addEventListener('submit' , booking);

function booking(e){
    e.preventDefault();  //to prevent default refreshing of the page when form is submitted
    let pName = document.getElementById('name-text').value;
    let pEmail = document.getElementById('email-text').value;   //to get value entered by patient
    let pContact = document.getElementById('contact-text').value;
    let pAppDate = document.getElementById('date-text').value;
    let pAppTime = document.getElementById('time-text').value;

    let patient = {Name : pName , Email : pEmail , Contact : pContact , AppDate : pAppDate , AppTime : pAppTime};
    localStorage.setItem( pEmail , JSON.stringify(patient)); //local storage can store only string so convert obj to str

    // in local storage , the patient details are saved in a string format ,  so first we have to convert it to object after that we can display it on the page
    let patientStr = JSON.parse(localStorage.getItem(pEmail));  
    
    let PatientList =  document.getElementById('list');
    let newPatient = document.createElement('li');
    let patientDetails = document.createTextNode(pName + " " + pEmail + " " + pContact + " " + pAppDate + " " + pAppTime);
    newPatient.appendChild(patientDetails);
    PatientList.appendChild(newPatient);
}


