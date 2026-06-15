const BASE_OPTICAL_STORES = [
    {
        name: "Vision Care Optical",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        rating: 4.5,
    },
    {
        name: "ClearView Optical",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        rating: 4.5,
    },
];

export const OPTICAL_STORES_DATA = Array.from({ length: 125 }, (_, index) => {
    const base = BASE_OPTICAL_STORES[index % BASE_OPTICAL_STORES.length];
    const id = String(125 - index).padStart(2, "0");

    return {
        id,
        ...base,
        name:
            index < BASE_OPTICAL_STORES.length
                ? base.name
                : `${base.name} ${Math.floor(index / BASE_OPTICAL_STORES.length) + 1}`,
    };
});
