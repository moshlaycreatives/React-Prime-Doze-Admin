const BASE_CARETAKERS = [
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
        linkedPatient: "Priya Mehta",
    },
    {
        name: "Aarav Sharma",
        email: "aaravsharma@example.com",
        phone: "+92 321 4567890",
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
        linkedPatient: "Priya Mehta",
    },
];

export const CARETAKERS_TOTAL_COUNT = 2514;

export const CARETAKERS_DATA = Array.from({ length: 125 }, (_, index) => {
    const base = BASE_CARETAKERS[index % BASE_CARETAKERS.length];
    const id = String(125 - index).padStart(2, "0");

    return {
        id,
        ...base,
    };
});
