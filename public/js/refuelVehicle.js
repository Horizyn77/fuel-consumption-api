const form = document.querySelector("form");
const vehicleIdInput = document.querySelector("#vehicle-id-input");
const litresInput = document.querySelector("#litres-input");
const amountInput = document.querySelector("#amount-input");
const distanceInput = document.querySelector("#distance-input");
//adding an event listener when the form is submitted
form.addEventListener("submit", async (event) => {
    //preventing default submit behaviour
    event.preventDefault()
    const filledUpRadioBtn = document.querySelector("input[name='filled-up']:checked");
    const boolString = filledUpRadioBtn.value === "true";
//checking that the inputs are not empty
    if(vehicleIdInput.value && litresInput.value && amountInput.value && distanceInput.value && filledUpRadioBtn) {
  
  //making a post request to the api endpoint to refuel with the values from the dom
        const response = await axios.post("/api/refuel", {
            vehicleId: Number(vehicleIdInput.value),
            liters: Number(litresInput.value),
            amount: Number(amountInput.value),
            distance: Number(distanceInput.value),
            filledUp: boolString
        })
//if the request return a successful response alerting the user that the vehicle is refuelled
        if (response.status === 200) {
            alert("Vehicle refuelled")
        }
    }
})