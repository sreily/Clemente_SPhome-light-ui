const rooms = document.querySelectorAll(".room-card");
const masterButton = document.getElementById("masterToggle");

let allLightsOn = false;

rooms.forEach(room => {
    const toggleButton = room.querySelector(".toggle");
    const slider = room.querySelector(".brightness");
    
    slider.value = 0;
    let previousValue = 0;
    slider.disabled = true;
    slider.style.background = "#555";
    toggleButton.textContent = "OFF";
    toggleButton.classList.add("off");

    slider.addEventListener("input", () => {
        previousValue = slider.value;
        slider.style.background = `linear-gradient(to right, #ffc011 ${slider.value}%, #555 ${slider.value}%)`;
    });
    
    toggleButton.addEventListener("click", () => {
        const isOff = toggleButton.textContent === "OFF";

        if (isOff) {
            toggleButton.textContent = "ON";
            toggleButton.classList.remove("off");
            slider.disabled = false;

            let fillValue = previousValue;
            if (fillValue == 0) fillValue = 1;

            slider.value = previousValue;
            slider.style.background = `linear-gradient(to right, #ffc011 ${previousValue}%, #555 ${previousValue}%)`;
        } else {
            toggleButton.textContent = "OFF";
            toggleButton.classList.add("off");
            slider.disabled = true;
            previousValue = slider.value;
            slider.value = 0;
            slider.style.background = "#555";
        }
    });
});

masterButton.addEventListener("click", () => {
    allLightsOn = !allLightsOn;

    if (allLightsOn){
        masterButton.classList.add("on");
        masterButton.classList.remove("off");
    } 
    else {
        masterButton.classList.remove("on");
        masterButton.classList.add("off");
    }
    rooms.forEach(room => {
        const toggleButton = room.querySelector(".toggle");
        const slider = room.querySelector(".brightness");

        slider.value = 0;
        let previousValue = 0;
        slider.disabled = true;
        slider.style.background = "#555";
        toggleButton.textContent = "OFF";
        toggleButton.classList.add("off");

    slider.addEventListener("input", () => {
        previousValue = slider.value;
        slider.style.background = `linear-gradient(to right, #ffc011 ${slider.value}%, #555 ${slider.value}%)`;
    });

        if (allLightsOn) {
            toggleButton.textContent = "ON";
            toggleButton.classList.remove("off");
            slider.disabled = false;
        } else {
            toggleButton.textContent = "OFF";
            toggleButton.classList.add("off");
            slider.disabled = true;
        }
    });
});
