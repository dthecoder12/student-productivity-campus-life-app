let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let events = JSON.parse(localStorage.getItem("events")) || [];

let activities = JSON.parse(localStorage.getItem("activities")) || [];



function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";


    tasks.forEach(function(task) {

        let li = document.createElement("li");

        li.textContent = task;


        li.onclick = function() {

            li.style.textDecoration = "line-through";

        };


        taskList.appendChild(li);

    });

}





function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;



    if (taskText === "") {

        alert("Please enter a task");

        return;

    }



    tasks.push(taskText);



    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );



    taskInput.value = "";


    displayTasks();

    updateDashboard();

}





function checkIn(eventName) {


    document.getElementById("checkInMessage").textContent =
        "✔ Successfully checked in to " + eventName + "!";


    activities.push(eventName);


    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );


    updateDashboard();

}





function updateDashboard() {


    document.getElementById("taskCount").textContent =
        "Tasks Created: " + tasks.length;



    let lastCheckIn = localStorage.getItem("checkIn");



    if (lastCheckIn) {

        document.getElementById("activityStatus").textContent =
            "Last Activity: ✔ " + lastCheckIn;

    }


    displayActivities();

}





function displayActivities() {


    let activityList = document.getElementById("activityList");

    activityList.innerHTML = "";


    activities.forEach(function(activity) {


        let li = document.createElement("li");


        li.textContent = "✔ " + activity;


        activityList.appendChild(li);


    });

}





function displayEvents() {


    let eventList = document.getElementById("eventList");

    eventList.innerHTML = "";


    events.forEach(function(event) {


        let eventDiv = document.createElement("div");


        eventDiv.className = "event";


        eventDiv.innerHTML = `

            <h3>${event.name}</h3>

            <p>Date: ${event.date}</p>

            <p>Location: ${event.location}</p>

            <button onclick="checkIn('${event.name}')">
                Check In
            </button>

        `;


        eventList.appendChild(eventDiv);


    });

}





function addEvent() {


    let name = document.getElementById("eventName").value;

    let date = document.getElementById("eventDate").value;

    let location = document.getElementById("eventLocation").value;



    if (name === "" || date === "" || location === "") {

        alert("Please complete all event information");

        return;

    }



    let newEvent = {

        name: name,

        date: date,

        location: location

    };



    events.push(newEvent);



    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );



    document.getElementById("eventName").value = "";

    document.getElementById("eventDate").value = "";

    document.getElementById("eventLocation").value = "";



    displayEvents();

}





displayTasks();

displayEvents();

displayActivities();

updateDashboard();