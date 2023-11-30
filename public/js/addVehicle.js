const form = document.querySelector("form");
const descriptionInput = document.querySelector("#description-input");
const regNumberInput = document.querySelector("#reg-number-input");
//adding an event listener when the form is submitted
form.addEventListener("submit", async (event) => {
//preventing default submit behaviour
    event.preventDefault()
//checking that the inputs are not empty
    if(descriptionInput.value && regNumberInput.value) {
        //making a post request to the api endpoint to add a vehicle using the values from the form
        const response = await axios.post("/api/vehicle", {
            description: descriptionInput.value,
            regNumber: regNumberInput.value
        })
//if the request returns a successful response alerting a user that the vehicle has been added
        if (response.status === 200) {
            alert("Vehicle added")
        }
    }
})