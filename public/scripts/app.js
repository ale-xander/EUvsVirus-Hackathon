console.log('testing')

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

  li.setAttribute('patients-id', doc.id);
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


// -------- Highcharts -------- 
Highcharts.chart('container', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'COVID-19 PATIENTS'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  credits:{
    enabled: false
  },  
  exporting: {
    enabled: true
  },
  yAxis: {
    title: {
      text: 'Patients (thousands)'
    },
    labels: {
      formatter: function () {
        return this.value / 1000;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  series: [{
    name: 'North America',
    data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
    name: 'Africa',
    data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
    name: 'Europe',
    data: [163, 203, 276, 408, 547, 729, 628]
  }, {
    name: 'Asia',
    data: [18, 31, 54, 156, 339, 818, 1201]
  }]
});