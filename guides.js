document.addEventListener("DOMContentLoaded", function () {
    const guidesContainer = document.getElementById("guides_container");

    const guides = [
        { name: "Sarah Smith", description: "Sarah is an experienced tour guide with in-depth knowledge of Hawaii's history, culture, and natural wonders. She offers personalized tours tailored to your interests and ensures a memorable experience.", image: "guide_sarah.jpg" },
        { name: "David Johnson", description: "David is a passionate outdoor enthusiast who specializes in adventure tours. Whether you're into hiking, snorkeling, or zip-lining, David will take you on an unforgettable journey through Hawaii's breathtaking landscapes.", image: "guide_david.jpg" },
        { name: "Emily Wilson", description: "Emily is a certified marine biologist and eco-tour guide. Join her for an educational exploration of Hawaii's marine life, coral reefs, and conservation efforts. Get ready for an eye-opening experience!", image: "guide_emily.jpg" }
    ];

    guides.forEach((guide) => {
        const guideElement = document.createElement("div");
        guideElement.classList.add("guide");

        const imageElement = document.createElement("img");
        imageElement.src = "images/" + guide.image;
        imageElement.alt = guide.name;

        const infoElement = document.createElement("div");
        infoElement.classList.add("guide-info");

        const nameElement = document.createElement("h2");
        nameElement.textContent = guide.name;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = guide.description;

        infoElement.appendChild(nameElement);
        infoElement.appendChild(descriptionElement);

        guideElement.appendChild(imageElement);
        guideElement.appendChild(infoElement);

        guidesContainer.appendChild(guideElement);
    });
});
