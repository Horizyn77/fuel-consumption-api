const vehiclesContainer = document.querySelector(".vehicles-container");
//making a request to an api endpoint to get all the vehicles added
async function getData() {
    const response = await axios.get("/api/vehicles")

    return response.data;
}

const vehicles = await getData();
//looping over each vehicle item and creating html/dom elements
vehicles.data.forEach(item => {
    const vehicleItem = document.createElement("div")
    const imgContainer = document.createElement("div")
    const descriptionItem = document.createElement("div")
    const regNumberItem = document.createElement("div")
    const totalDistanceItem = document.createElement("div")
    const fuelSpentItem = document.createElement("div")
    const fuelConsumptionItem = document.createElement("div")
    const img = document.createElement("img")
    const descriptionItemDiv = document.createElement("div")
    const regNumberItemDiv = document.createElement("div")
    const totalDistanceItemDiv = document.createElement("div")
    const fuelSpentItemDiv = document.createElement("div")
    const fuelConsumptionItemDiv = document.createElement("div")
    const descriptionItemDiv2 = document.createElement("div")
    const regNumberItemDiv2 = document.createElement("div")
    const totalDistanceItemDiv2 = document.createElement("div")
    const fuelSpentItemDiv2 = document.createElement("div")
    const fuelConsumptionItemDiv2 = document.createElement("div")
    const vehicleIdItem = document.createElement("div");
    const vehicleIdItemDiv = document.createElement("div");
    const vehicleIdItemDiv2 = document.createElement("div");

    vehicleItem.className = "vehicle-item";
    imgContainer.className = "img-container";
    img.src = "/images/sedan-car-model.png";

    descriptionItem.classList.add("vehicle-data", "description-item")
    regNumberItem.classList.add("vehicle-data", "reg-number-item")
    totalDistanceItem.classList.add("vehicle-data", "total-distance-item")
    fuelSpentItem.classList.add("vehicle-data", "total-spent-item")
    fuelConsumptionItem.classList.add("vehicle-data", "fuel-consumption-item")
    vehicleIdItem.classList.add("vehicle-data", "vehicle-id")

    descriptionItemDiv.innerHTML = "Description:&nbsp;"
    regNumberItemDiv.innerHTML = "Reg Number:&nbsp;"
    totalDistanceItemDiv.innerHTML = "Total Distance:&nbsp;"
    fuelSpentItemDiv.innerHTML = "Fuel Spent:&nbsp;"
    fuelConsumptionItemDiv.innerHTML = "Fuel Consumption:&nbsp;"
    vehicleIdItemDiv.innerHTML = "Vehicle ID:&nbsp;"
//getting data from api and inserting into elements from the dom
    descriptionItemDiv2.innerText = item.description;
    regNumberItemDiv2.innerText = item.reg_number;
    totalDistanceItemDiv2.innerText = item.total_distance;
    fuelSpentItemDiv2.innerText = item.total_amount;
    fuelConsumptionItemDiv2.innerText = item.fuel_consumption;
    vehicleIdItemDiv2.innerText = item.id;
//appending elements to the container on the html page
    imgContainer.append(img)
    descriptionItem.append(descriptionItemDiv, descriptionItemDiv2);
    regNumberItem.append(regNumberItemDiv, regNumberItemDiv2);
    totalDistanceItem.append(totalDistanceItemDiv, totalDistanceItemDiv2);
    fuelSpentItem.append(fuelSpentItemDiv, fuelSpentItemDiv2);
    fuelConsumptionItem.append(fuelConsumptionItemDiv, fuelConsumptionItemDiv2);
    vehicleIdItem.append(vehicleIdItemDiv, vehicleIdItemDiv2)

    vehicleItem.append(imgContainer, descriptionItem, regNumberItem, totalDistanceItem, fuelSpentItem, fuelConsumptionItem, vehicleIdItem)

    vehiclesContainer.append(vehicleItem)
});