const form = document.querySelector("form");
const vehicleIdInput = document.querySelector("#vehicle-id-input");
const litresInput = document.querySelector("#litres-input");
const amountInput = document.querySelector("#amount-input");
const distanceInput = document.querySelector("#distance-input");

form.addEventListener("submit", async (event) => {
    
    event.preventDefault()
    const filledUpRadioBtn = document.querySelector("input[name='filled-up']:checked");
    const boolString = filledUpRadioBtn.value === "true";

    if(vehicleIdInput.value && litresInput.value && amountInput.value && distanceInput.value && filledUpRadioBtn) {
        const response = await axios.post("/api/refuel", {
            vehicleId: Number(vehicleIdInput.value),
            liters: Number(litresInput.value),
            amount: Number(amountInput.value),
            distance: Number(distanceInput.value),
            filledUp: boolString
        })

        if (response.status === 200) {
            alert("Vehicle refuelled")
        }
    }
})