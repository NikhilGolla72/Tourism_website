document.addEventListener("DOMContentLoaded", function () {
    const hotelsContainer = document.getElementById("hotels_container");

    const hotels = [
        { name: "Sunset Paradise Resort", description: "Indulge in luxury at the Sunset Paradise Resort. Located on the pristine shores of Hawaii, our resort offers breathtaking ocean views, world-class amenities, and unparalleled hospitality. Whether you're seeking relaxation or adventure, our resort is the perfect destination for your dream vacation.", image: "paradise.jpg" },
        { name: "Tropical Oasis Hotel", description: "Escape to the Tropical Oasis Hotel and experience the ultimate getaway. Nestled amidst lush tropical gardens and just steps away from the beach, our hotel offers comfortable accommodations, delicious dining options, and a variety of recreational activities. Discover paradise with us!", image: "C:\Users\golla\OneDrive\Desktop\web development\tropical.jpg" },
        { name: "Palm Beach Resort", description: "Experience paradise at the Palm Beach Resort. Situated on a pristine stretch of white sandy beach, our resort offers luxury accommodations, gourmet dining, and a host of leisure activities. Whether you're lounging by the pool or exploring the island, your stay with us will be unforgettable.", image: "css baconfansite\css\palm.jpg" },
        { name: "Seaside Haven Hotel", description: "Discover serenity at the Seaside Haven Hotel. With its tranquil oceanfront location and picturesque views, our hotel provides the perfect escape from the hustle and bustle of everyday life. Relax in our spacious rooms, indulge in delicious cuisine, and unwind with a variety of leisure activities.", image: "hotel_seaside.jpg" },
        { name: "Island Retreat Resort", description: "Relax and rejuvenate at the Island Retreat Resort. Surrounded by lush tropical foliage and azure waters, our resort offers a peaceful sanctuary for your Hawaiian getaway. From luxurious accommodations to exciting recreational options, we have everything you need for an unforgettable vacation experience.", image: "hotel_retreat.jpg" }
    ];

    hotels.forEach((hotel) => {
        const hotelElement = document.createElement("div");
        hotelElement.classList.add("hotel");

        const imageElement = document.createElement("img");
        imageElement.src = hotel.image;
        imageElement.alt = hotel.name;

        const nameElement = document.createElement("h2");
        nameElement.textContent = hotel.name;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = hotel.description;

        hotelElement.appendChild(imageElement);
        hotelElement.appendChild(nameElement);
        hotelElement.appendChild(descriptionElement);

        hotelsContainer.appendChild(hotelElement);
    });
});
