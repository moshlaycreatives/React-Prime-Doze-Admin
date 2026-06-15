const BASE_PHARMACIES = [
    {
        name: "MedPlus Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "Apollo Pharmacy",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
];

export const PHARMACIES_DATA = Array.from({ length: 125 }, (_, index) => {
    const base = BASE_PHARMACIES[index % BASE_PHARMACIES.length];
    const id = String(125 - index).padStart(2, "0");

    return {
        id,
        ...base,
        name:
            index < BASE_PHARMACIES.length
                ? base.name
                : `${base.name} ${Math.floor(index / BASE_PHARMACIES.length) + 1}`,
    };
});
