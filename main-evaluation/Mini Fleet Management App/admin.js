let fleetArr = [];
let imageUrl = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png";

function addfleet(){
    let reg = document.getElementById("reg").value.trim();
    let category = document.getElementById("categoory").value;
    let driver = document.getElementById("driver").value.trim();
    let availablity = document.getElementById("available").value;

    if ( !reg || !category || !driver){
        alert("All fields are required!")
        return;
    }

    let object = {reg, category, driver, availablity}
    fleetArr.push(object);

    document.getElementById('reg').value = "";
    document.getElementById('category').value = "";
    document.getElementById('driver').value = "";
    document.getElementById('available').value = "Available";

    render(fleetArr)
}


function render(data){
    document.getElementById("fleet-Container").innerHTML = "";

    data.forEach((x, index) => {
        card.innerHTML =`
        <h2>${x.reg}</h2>
        <p>Category: ${x.category}</p>
        <p>Diver Name: ${x.driver}</p>
        <p>Status: ${x.availablity}</p>
        <img src = ${imageUrl}>
        `;

    let btn1 = document.createElement("button");
    btn1.className = "btn update";
    btn1.innerHTML = "Update Driver";
    btn1.onclinck = function() {
        let newDriver = prompt("Enter new driver name:");
        if(!newDriver || newDriver.trim() === ""){
            alert("Driver name caanot be empty");
            return;
        }
        fleetArr[index].driver = newDriver;
        render(fleetArr)
    }

    btn2 = document.createElement("button");
    btn2.className = "btn availability";
    btn1.innerHTML = "change Availability";
    btn2.onclick = function(){
        fleetArr[index].availablity = 
            fleetArr[index].availablity == "Available" ? "Not Available" : "Available";

        render(fleetArr)
    }

    btn3 = document.createElement("button");
    btn3.className = "btn delete";
    btn3.onclick = function(){
        if(confirm("Are you sure you want to delete this vehicle ?")){
            fleetArr.splice(index, 1);
            render(fleetArr)
        }
    };
    card.append(btn1, btn2, btn3);
    document.getElementById("fleet-Container").append(card)
});
}

function applyFilter(){
    let c = document.getElementById("filterCategory").value;
    let a = document.getElementById("filterAvailability").value;

    let filtered = fleetArr.filter( item =>{
        let cMatch = c === "All" || item.category === c;
        let aMatch = c === "All" || item.Availablity === a;
        return cMatch && aMatch;
    });
    
    render(filtered);
}

function clearFilter(){
    let c = document.getElementById("filterCategory").value = "All";
    let a = document.getElementById("filterAvailability").value = "All";
 
}
