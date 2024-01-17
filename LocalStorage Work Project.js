
let ToDoform = document.querySelector("form");
let MainDiv = document.getElementById("main");

ToDoform.addEventListener("submit", (event)=>{
    let Name = event.target.UserName.value;
    let Email = event.target.Email.value;
    let Number = event.target.number.value;

     let UserData = JSON.parse(localStorage.getItem("UserData")) ?? [];
     UserData.push({
        "Name":Name,
        "Email":Email,
        "Number":Number,
     });

     localStorage.setItem("UserData",JSON.stringify(UserData));
     event.target.reset();

     displayData();


   event.preventDefault();
   
});

let displayData =()=> {
    let UserData = JSON.parse(localStorage.getItem("UserData")) ?? [];
    let finalDataDisplay = "";
    UserData.forEach((element,i) => {

        finalDataDisplay += `
        <div class="items">
        <span onclick="remove(${i})">&times;</span>
        <h4>Your Name</h4>
        <div>${element.Name}</div>

        <h4>Your Email</h4>
        <div>${element.Email}</div>

        <h4>Mobile Number</h4>
        <div>${element.Number}</div>
    </div>`;
    });

    MainDiv.innerHTML = finalDataDisplay;
}

function remove(index) {

    let UserData = JSON.parse(localStorage.getItem("UserData")) ?? [];
    UserData.splice(index,1);
    localStorage.setItem("UserData",JSON.stringify(UserData));
    displayData();

};


displayData();



// For Practice..Only!

// let UserName= [
//     {
//         "Name": "Hadi",
//         "Age": "19"
//     },
//     {
//         "Name":"Ali",
//         "Age":"20"
//     },
// ]

// localStorage.setItem("Name",JSON.stringify(UserName));

// console.log(JSON.parse(localStorage.getItem("Name")));
// console.log(localStorage)
