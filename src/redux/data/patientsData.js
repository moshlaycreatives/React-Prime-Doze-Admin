const BASE_PATIENTS = [
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        gender: "Male",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        city: "Lahore",
        gender: "Female",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        gender: "Male",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        gender: "Female",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        gender: "Male",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        gender: "Female",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        gender: "Male",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        gender: "Female",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        gender: "Male",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        gender: "Female",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
];

export const PATIENTS_DATA = Array.from({ length: 125 }, (_, index) => {
    const base = BASE_PATIENTS[index % BASE_PATIENTS.length];
    const id = String(125 - index).padStart(2, "0");

    return {
        id,
        ...base,
    };
});
