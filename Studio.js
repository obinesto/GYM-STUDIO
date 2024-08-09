// logic for nav sections and anchor tags
const navLinks = document.querySelectorAll('nav, .anchor-2')

document.addEventListener('DOMContentLoaded',function(){
    navLinks.forEach(link => {

        link.addEventListener('click', function(event){

            event.preventDefault(); // prevent default anchor tag behaviour

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            //smoothly scroll into view
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// logic for headers

window.onscroll = function(){displayHeader()}
const section1 = document.querySelector('.section-1')
const section2 = document.querySelector('.section-2')
const header1 = document.querySelector('.header-1')
const header2 = document.querySelector('.header-2')

var sticky = section2.offsetTop

function displayHeader() {
    if(window.scrollY >= sticky) {
        header2.style.display = 'block'
        header1.style.display = 'none'
    }else{
        header2.style.display = 'none'
        header1.style.display = 'block'
    }

}
displayHeader()

//logic for H1 TRAINING STUDIO in the headers
function h1Click(){
 window.location.reload()
}


// logic for training classes ===>
document.addEventListener('DOMContentLoaded', function() {
    const classView = document.querySelector('.training-1-view')
    const classDivs = document.querySelectorAll('#class-sideA div')

    //content for each class
    const classContent = {
        firstClass: {
            imageSrc: 'Assets/Images/training-image-01.jpg',
            imgAltText: 'training image 1',
            headerText: 'First Training Class',
            paragraphText: 'Lifting an appropriate amount of weight. Start with a weight you can lift comfortably 12 to 15 times, instructors would be around to guide you. Learn to do each exercise correctly'
        },
        secondClass: {
            imageSrc: 'Assets/Images/training-image-02.jpg',
            imgAltText: 'training image 2',
            headerText: 'Second Training Class',
            paragraphText: 'Yoga is a mind and body practice. Various styles of yoga combines physical postures, breathing techniques, and meditation or relaxation.'
        },
        thirdClass: {
            imageSrc: 'Assets/Images/training-image-03.jpg',
            imgAltText: 'training inage 3',
            headerText: 'Third Training Class',
            paragraphText: "Your induction should include a brief 'how to' for every machine. If there's one that was missed out and you want to use it, don't try to figure it out on your own: ask a staff member to show you how to use it properly."
        },
        fourthClass: {
            imageSrc: 'Assets/Images/training-image-04.jpg',
            imgAltText: 'training image 4',
            headerText: 'Fourth Training Class',
            paragraphText: 'Warm ups are crucial as they prepare the body for the demands of exercise, loosening up the muscles and reducing the risk of injury.'
        }
    }

    function renderClassContent(classKey) {

        classView.innerHTML = ''

        //create and append new elements
        const imageElement = document.createElement('img')
        imageElement.src = classContent[classKey].imageSrc
        imageElement.alt = classContent[classKey].imgAltText

        const headerElement = document.createElement('h1')
        headerElement.innerHTML = classContent[classKey].headerText

        const paragraphElement = document.createElement('p')
        paragraphElement.innerHTML = classContent[classKey].paragraphText

        const buttonElement = document.createElement('button')
        buttonElement.textContent = 'VIEW SCHEDULE'
        buttonElement.onclick = function() {
        window.location.href = '#schedules'
    }
       //appending elements to the .training-1-view div
       classView.appendChild(imageElement)
       classView.appendChild(headerElement)
       classView.appendChild(paragraphElement)
       classView.appendChild(buttonElement)
    }
    
    //initial render for first training class
    renderClassContent('firstClass')

    // adding event listeners to each div inside class-sideA
    classDivs.forEach(classDiv => {
        classDiv.addEventListener('click', function(){
            //removing active class from all divs
            classDivs.forEach(div =>
                div.classList.remove('active'))
                //adding active class to the clicked div
                this.classList.add('active')
                //getting the selected class id and rendering the corresponding content
                const selectedClassId = this.id
                renderClassContent(selectedClassId)
        })
    }
    )
})

// logic for schedule table
const scheduleArrays = [
    { time1: "10:00AM - 11:30AM", time6: "2:00PM - 3:30PM" },
    { time2: "2:00PM - 3:30PM", time5: "10:00AM - 11:30AM" },
    { time7: "10:00AM - 11:30AM", time10: "2:00PM - 3:30PM" },
    { time4: "2:00PM - 3:30PM", time9: "10:00AM - 11:30AM" },
    { time3: "10:00AM - 11:30AM", time8: "2:00PM - 3:30PM" }
];

document.addEventListener('DOMContentLoaded', () => {
    populateSchedule(scheduleArrays[0]);

    document.getElementById('mon').addEventListener('click', () => {
        highlightDay('mon');
        populateSchedule(scheduleArrays[0]);
    });

    document.getElementById('tue').addEventListener('click', () => {
        highlightDay('tue');
        populateSchedule(scheduleArrays[1]);
    });

    document.getElementById('wed').addEventListener('click', () => {
        highlightDay('wed');
        populateSchedule(scheduleArrays[2]);
    });

    document.getElementById('thur').addEventListener('click', () => {
        highlightDay('thur');
        populateSchedule(scheduleArrays[3]);
    });

    document.getElementById('fri').addEventListener('click', () => {
        highlightDay('fri');
        populateSchedule(scheduleArrays[4]);
    });

    function highlightDay(day) {
        const days = ['mon', 'tue', 'wed', 'thur', 'fri'];
        days.forEach(d => {
            document.getElementById(d).classList.remove('highlight');
        });
        document.getElementById(day).classList.add('highlight');
    }
    highlightDay('mon')
    
    function populateSchedule(schedule) { // this logic iterates through i and then matches the object in scheduleArrays to the id of the
        for (let i = 1; i <= 10; i++) {   // <td></td> in my DOM
            if (schedule[`time${i}`]) {
                document.getElementById(`td-${i}`).textContent = schedule[`time${i}`];
            } else {
                document.getElementById(`td-${i}`).textContent = '';
            }
        }
    }
});

//logic for map
function handleMap() {
    var map = L.map('map', {
        center: [7.3776, 3.9059],
        zoom: 13,
        dragging: false,
        zoomControl: true,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false
      });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    var marker = L.marker([7.3776, 3.9059]).addTo(map)
        .bindPopup('Hover over the map to see the coordinates.');

        var hoveringEnabled = true;

        function onMouseMove(e) {
          if (hoveringEnabled) {
            var lat = e.latlng.lat.toFixed(4);
            var lng = e.latlng.lng.toFixed(4);
            marker.setLatLng(e.latlng)
              .getPopup()
              .setContent('Coordinates: ' + lat + ', ' + lng)
              .openOn(map);
          }
        }
  
        map.on('mousemove', onMouseMove);
  
        map.on('dblclick', function() {
          hoveringEnabled = !hoveringEnabled;
          if (!hoveringEnabled) {
            map.off('mousemove', onMouseMove);
        } else {
          map.on('mousemove', onMouseMove);
        }
      });
} handleMap()

// sign up page
function handleSignUp(){
    window.location.href = 'sign_up.html'
}

// logic toggle bars
document.addEventListener('DOMContentLoaded', () => {
    const barsIcons = document.querySelectorAll('.fa-bars');
    barsIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('fa-xmark'); 
        });
    });
});

// logic for background video
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
        video.muted = true;
        video.play();
    }
});
