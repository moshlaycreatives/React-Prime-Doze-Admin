export const PHARMACY_PROFILE_STATS = {
    totalEarnings: "$12,354",
    completed: 425,
    inProgress: 36,
    pending: 75,
    cancelled: 35,
    total: 540,
};

export const PHARMACY_PROFILE_INFO = {
    name: "MedPlus Pharmacy",
    email: "aaravsharma@example.com",
    phone: "+91 98765 43210",
    deliveryFee: "Free Delivery",
    city: "Ahmedabad",
    country: "India",
    flag: "/image/inicon.png",
    logo: "/image/logo.png",
    rating: 4.5,
    labAddress: "Post office road, Waneekay Chowk, Ahmedabad",
    openingTime: "9:00am",
    closingTime: "11:00pm",
    about:
        "A skilled pulmonologist dedicated to diagnosing and treating respiratory conditions. Focused on improving lung health through expert care, compassion, and personalized treatment for every patient. A skilled pulmonologist dedicated to diagnosing and treating respiratory conditions. Focused on improving lung health through expert care, compassion, and personalized treatment for every patient.",
};

export const PHARMACY_PROFILE_IMAGES = [
    "/image/Hp1.png",
    "/image/Hp2.png",
    "/image/Hp3.png",
    "/image/Hp4.png",
    "/image/Hp5.png",
    "/image/Hp6.png",
    "/image/Hp1.png",
    "/image/Hp2.png",
];

const BASE_ORDERS = [
    {
        patientName: "Priya Mehta",
        medicineName: "Panadol, No Pain",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$30",
        status: "In Progress",
        date: "05/29/2026",
    },
    {
        patientName: "Rahul Shah",
        medicineName: "Panadol, No Pain",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$45",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        patientName: "Arjun Pate",
        medicineName: "Panadol, No Pain",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$15",
        status: "Completed",
        date: "05/29/2026",
    },
    {
        patientName: "Neha Gupta",
        medicineName: "Panadol, No Pain",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$20",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        patientName: "Aditya Kapoor",
        medicineName: "Panadol, No Pain",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$75",
        status: "Cancelled",
        date: "05/29/2026",
    },
];

export const PHARMACY_PROFILE_ORDERS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_ORDERS[index % BASE_ORDERS.length];
    const statuses = ["In Progress", "Pending", "Completed", "Cancelled"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

export const PHARMACY_ORDER_TABS = [
    { value: "all", label: "All", count: PHARMACY_PROFILE_STATS.total },
    { value: "completed", label: "Completed", count: PHARMACY_PROFILE_STATS.completed },
    { value: "inProgress", label: "In Progress", count: PHARMACY_PROFILE_STATS.inProgress },
    { value: "pending", label: "Pending", count: PHARMACY_PROFILE_STATS.pending },
    { value: "cancelled", label: "Cancelled", count: PHARMACY_PROFILE_STATS.cancelled },
];
