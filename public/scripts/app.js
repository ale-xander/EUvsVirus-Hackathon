console.log('testing')
// var mykey = config.MY_KEY;


// -------- Maps --------
function initMap () {
  // The location of Uluru
  var SJC = { lat: 37.3353, lng: -121.8919 }
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: SJC
  })
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: SJC, map: map })
}

// -------- Firebase --------
db.collection('patients').get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderPatients(doc)
  });
});

// -------- render patient info --------
const patientList = document.querySelector('#patients');

function renderPatients(doc){
 
  let li = document.createElement('li');

  let patient_id = document.createElement('span');
  let age = document.createElement('span');
  let location = document.createElement('span');
  let vitals = document.createElement('span');
  let symptopms_span = document.createElement('span');
  let diagnosis_span = document.createElement('span');
  let risk = document.createElement('span');
  let status = document.createElement('span');

  li.setAttribute('patients', doc.id);
  // console.log(doc.id)
  patient_id.textContent = doc.data().patient_id;
  age.textContent = doc.data().age;
  location.textContent = JSON.stringify(doc.data().location);
  vitals.textContent = doc.data().vitals;
  symptopms_span.textContent = doc.data().symptopms_span;
  diagnosis_span.textContent = doc.data().diagnosis_span;
  risk.textContent = doc.data().risk;
  status.textContent = doc.data().status;


  li.appendChild(patient_id);
  li.appendChild(age);
  li.appendChild(location);
  li.appendChild(vitals);
  li.appendChild(symptopms_span);
  li.appendChild(diagnosis_span);
  li.appendChild(risk);
  li.appendChild(status);

  patientList.appendChild(li);
}