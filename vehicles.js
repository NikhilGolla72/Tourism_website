document.addEventListener("DOMContentLoaded", function () {
    const vehiclesContainer = document.getElementById("vehicles_container");

    const vehicles = [
        { name: "SUV", description: "Explore Hawaii with style and comfort in our spacious SUVs.", image: "suv.jpg" },
        { name: "Convertible", description: "Feel the breeze and soak up the sun as you cruise around in our sleek convertibles.", image: "convertible.jpg" },
        { name: "Jeep", description: "Embark on off-road adventures and explore rugged terrain in our sturdy Jeeps.", image: "jeep.jpg" },
        { name: "Scooter", description: "Navigate through narrow streets and discover hidden gems on our convenient scooters.", image: "scooter.jpg" },
        { name: "Bicycle", description: "Experience the beauty of Hawaii at our own pace on our eco-friendly bicycles.", image: "bicycle.jpg" }
    ];

    vehicles.forEach((vehicle) => {
        const vehicleElement = document.createElement("div");
        vehicleElement.classList.add("vehicle");

        const imageElement = document.createElement("img");
        imageElement.src = vehicle.image;
        imageElement.alt = vehicle.name;

        const nameElement = document.createElement("h2");
        nameElement.textContent = vehicle.name;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = vehicle.description;

        vehicleElement.appendChild(imageElement);
        vehicleElement.appendChild(nameElement);
        vehicleElement.appendChild(descriptionElement);

        vehiclesContainer.appendChild(vehicleElement);
    });
});
