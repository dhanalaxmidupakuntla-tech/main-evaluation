let fleetArr = [];

function addFleet(){
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
