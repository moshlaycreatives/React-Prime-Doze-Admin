export const OPTICAL_STORE_PROFILE_STATS = {
    totalEarnings: "$12,354",
    completed: 425,
    inProgress: 36,
    pending: 75,
    cancelled: 35,
    total: 540,
};

export const OPTICAL_STORE_PROFILE_INFO = {
    name: "Prime Vision",
    email: "aaravsharma@example.com",
    phone: "+91 98765 43210",
    deliveryFee: "No Free Delivery",
    city: "Ahmedabad",
    country: "India",
    flag: "/image/inicon.png",
    logo: "/image/logo.png",
    rating: 4.5,
    storeAddress: "Post office road, Waneekay Chowk, Ahmedabad",
    openingTime: "9:00am",
    closingTime: "11:00pm",
    about:
        "Prime Vision offers premium eyewear and professional eye care services. From designer frames to precision lens fitting, we help every customer find the perfect pair with expert guidance and personalized service.",
};

export const OPTICAL_STORE_PROFILE_IMAGES = [
    "/image/Hp1.png",
    "/image/Hp2.png",
    "/image/Hp3.png",
    "/image/Hp4.png",
    "/image/Hp5.png",
    "/image/Hp6.png",
    "/image/Hp1.png",
    "/image/Hp2.png",
    "/image/Hp3.png",
    "/image/Hp4.png",
];

const BASE_ORDERS = [
    {
        customerName: "Priya Mehta",
        glassesName: "Ray-Ban Aviator",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$30",
        status: "In Progress",
        date: "05/29/2026",
    },
    {
        customerName: "Aarav Sharma",
        glassesName: "Oakley Holbrook",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$50",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        customerName: "Arjun Patel",
        glassesName: "Ray-Ban Aviator",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$15",
        status: "Completed",
        date: "05/29/2026",
    },
    {
        customerName: "Neha Gupta",
        glassesName: "Oakley Holbrook",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$20",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        customerName: "Aditya Kapoor",
        glassesName: "Ray-Ban Aviator",
        phone: "+91 98765 43210",
        city: "Ahmedabad",
        price: "$75",
        status: "Cancelled",
        date: "05/29/2026",
    },
];

export const OPTICAL_STORE_PROFILE_ORDERS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_ORDERS[index % BASE_ORDERS.length];
    const statuses = ["In Progress", "Pending", "Completed", "Cancelled"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

export const OPTICAL_STORE_ORDER_TABS = [
    { value: "all", label: "All", count: OPTICAL_STORE_PROFILE_STATS.total },
    { value: "completed", label: "Completed", count: OPTICAL_STORE_PROFILE_STATS.completed },
    { value: "inProgress", label: "In Progress", count: OPTICAL_STORE_PROFILE_STATS.inProgress },
    { value: "pending", label: "Pending", count: OPTICAL_STORE_PROFILE_STATS.pending },
    { value: "cancelled", label: "Cancelled", count: OPTICAL_STORE_PROFILE_STATS.cancelled },
];
