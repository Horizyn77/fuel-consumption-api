const form = document.querySelector("form");
const descriptionInput = document.querySelector("#description-input");
const regNumberInput = document.querySelector("#reg-number-input");

form.addEventListener("submit", async (event) => {

    event.preventDefault()

    if(descriptionInput.value && regNumberInput.value) {
        const response = await axios.post("/api/vehicle", {
            description: descriptionInput.value,
            regNumber: regNumberInput.value
        })

        if (response.status === 200) {
            alert("Vehicle added")
        }
    }
})