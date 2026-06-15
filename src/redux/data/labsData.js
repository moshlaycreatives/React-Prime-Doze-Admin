const BASE_LABS = [
    {
        name: "City lab",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        testTypes: 75,
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "Thyrocare Labs",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        testTypes: 75,
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        testTypes: 75,
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        testTypes: 75,
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        testTypes: 75,
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        testTypes: 75,
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        testTypes: 75,
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        testTypes: 75,
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        testTypes: 75,
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "SRL Diagnostics",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        testTypes: 75,
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
];

export const LABS_DATA = Array.from({ length: 125 }, (_, index) => {
    const base = BASE_LABS[index % BASE_LABS.length];
    const id = String(125 - index).padStart(2, "0");

    return {
        id,
        ...base,
        name:
            index < BASE_LABS.length
                ? base.name
                : `${base.name} ${Math.floor(index / BASE_LABS.length) + 1}`,
    };
});
