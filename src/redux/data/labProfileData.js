export const LAB_PROFILE_STATS = {
    totalEarnings: "$12,354",
    completed: 425,
    inProgress: 36,
    pending: 75,
    cancelled: 35,
    total: 540,
};

export const LAB_PROFILE_INFO = {
    name: "Metro City Lab",
    email: "aaravsharma@example.com",
    phone: "+91 98765 43210",
    testTypes: 20,
    city: "Ahmedabad",
    country: "India",
    flag: "/image/inicon.png",
    logo: "/image/logo.png",
    rating: 4.5,
    labAddress: "Post office road, Waneekay Chowk, Ahmedabad",
    openingTime: "9:00am",
    closingTime: "11:00pm",
    about:
        "Metro City Lab provides accurate diagnostic services with modern equipment and certified technicians. We offer a wide range of pathology tests with convenient home sample collection across Ahmedabad.",
};

export const LAB_PROFILE_IMAGES = [
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

const BASE_TESTS = [
    {
        name: "Complete Blood Count (CBC)",
        fee: "$10",
        discountedFee: null,
        discount: null,
        freeHomeSample: true,
    },
    {
        name: "Complete Blood Count (CBC)",
        fee: "$10",
        discountedFee: "$08",
        discount: "25% OFF",
        freeHomeSample: true,
    },
    {
        name: "Lipid Profile",
        fee: "$15",
        discountedFee: null,
        discount: null,
        freeHomeSample: true,
    },
    {
        name: "Thyroid Profile",
        fee: "$12",
        discountedFee: "$09",
        discount: "25% OFF",
        freeHomeSample: false,
    },
];

export const LAB_PROFILE_ALL_TESTS = Array.from({ length: 8 }, (_, index) => ({
    id: String(index + 1),
    ...BASE_TESTS[index % BASE_TESTS.length],
}));

export const LAB_PROFILE_TESTS = LAB_PROFILE_ALL_TESTS.slice(0, 4);

const BASE_REQUESTS = [
    {
        patientName: "Priya Mehta",
        testName: "Complete Blood Count (CBC)",
        city: "Ahmedabad",
        fee: "$30",
        status: "In Progress",
        date: "05/29/2026",
    },
    {
        patientName: "Karan Malhotra",
        testName: "Complete Blood Count (CBC)",
        city: "Ahmedabad",
        fee: "$40",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        patientName: "Rohan Verma",
        testName: "Complete Blood Count (CBC)",
        city: "Ahmedabad",
        fee: "$20",
        status: "Completed",
        date: "05/29/2026",
    },
    {
        patientName: "Ayanna Patel",
        testName: "Complete Blood Count (CBC)",
        city: "Ahmedabad",
        fee: "$15",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        patientName: "Neha Gupta",
        testName: "Complete Blood Count (CBC)",
        city: "Ahmedabad",
        fee: "$25",
        status: "Pending",
        date: "05/29/2026",
    },
];

export const LAB_PROFILE_REQUESTS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_REQUESTS[index % BASE_REQUESTS.length];
    const statuses = ["In Progress", "Pending", "Completed", "Cancelled"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

export const LAB_REQUEST_TABS = [
    { value: "all", label: "All", count: LAB_PROFILE_STATS.total },
    { value: "completed", label: "Completed", count: LAB_PROFILE_STATS.completed },
    { value: "inProgress", label: "In Progress", count: LAB_PROFILE_STATS.inProgress },
    { value: "pending", label: "Pending", count: LAB_PROFILE_STATS.pending },
    { value: "cancelled", label: "Cancelled", count: LAB_PROFILE_STATS.cancelled },
];
