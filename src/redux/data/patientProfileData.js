export const PATIENT_PROFILE_STATS = {
    appointmentSpend: "$1,240",
    pharmacySpend: "$620",
    labSpend: "$350",
    opticalStoreSpend: "$180",
    primeStoreSpend: "$75",
};

export const PATIENT_PROFILE_INFO = {
    name: "Aarav Sharma",
    email: "aaravsharma@example.com",
    phone: "+91 98765 43210",
    age: 24,
    gender: "Male",
    city: "Ahmedabad",
    notificationLanguage: "Hindi",
    country: "India",
    flag: "/image/inicon.png",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
};

const BASE_APPOINTMENTS = [
    {
        doctorName: "Dr. Anaya Patel",
        specialty: "Cardiologist",
        fee: "$99",
        city: "Ahmedabad",
        hospital: "Swami Narayan Hospital",
        status: "Upcoming",
        date: "05/29/2026",
    },
    {
        doctorName: "Dr. Rohan Mehta",
        specialty: "Dermatologist",
        fee: "$45",
        city: "Ahmedabad",
        hospital: "Swami Narayan Hospital",
        status: "Complete",
        date: "05/29/2026",
    },
    {
        doctorName: "Dr. Priya Kapoor",
        specialty: "Neurologist",
        fee: "$99",
        city: "Ahmedabad",
        hospital: "Swami Narayan Hospital",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        doctorName: "Dr. Vikram Singh",
        specialty: "Orthopedist",
        fee: "$99",
        city: "Ahmedabad",
        hospital: "Swami Narayan Hospital",
        status: "Upcoming",
        date: "05/29/2026",
    },
    {
        doctorName: "Dr. Neha Gupta",
        specialty: "Pediatist",
        fee: "$99",
        city: "Ahmedabad",
        hospital: "Swami Narayan Hospital",
        status: "Complete",
        date: "05/29/2026",
    },
];

export const PATIENT_PROFILE_APPOINTMENTS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_APPOINTMENTS[index % BASE_APPOINTMENTS.length];
    const statuses = ["Upcoming", "Complete", "Cancelled"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

const BASE_PHARMACY_ORDERS = [
    {
        pharmacyName: "CarePlus Pharmacy",
        amount: "$70",
        city: "Ahmedabad",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        pharmacyName: "MedPlus Pharmacy",
        amount: "$120",
        city: "Ahmedabad",
        status: "In Progress",
        date: "05/29/2026",
    },
    {
        pharmacyName: "Apollo Pharmacy",
        amount: "$70",
        city: "Ahmedabad",
        status: "Complete",
        date: "05/29/2026",
    },
    {
        pharmacyName: "CarePlus Pharmacy",
        amount: "$70",
        city: "Ahmedabad",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        pharmacyName: "Wellness Pharmacy",
        amount: "$120",
        city: "Ahmedabad",
        status: "Shipped",
        date: "05/29/2026",
    },
];

export const PATIENT_PROFILE_PHARMACY_ORDERS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_PHARMACY_ORDERS[index % BASE_PHARMACY_ORDERS.length];
    const statuses = ["Pending", "In Progress", "Complete", "Cancelled", "Shipped"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

const BASE_LAB_ORDERS = [
    {
        labName: "Redcliffe Lab",
        amount: "$70",
        city: "Ahmedabad",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        labName: "Metropolis Lab",
        amount: "$120",
        city: "Ahmedabad",
        status: "In Progress",
        date: "05/29/2026",
    },
    {
        labName: "SRL Diagnostics",
        amount: "$150",
        city: "Ahmedabad",
        status: "Complete",
        date: "05/29/2026",
    },
    {
        labName: "Thyrocare Lab",
        amount: "$20",
        city: "Ahmedabad",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        labName: "CarePlus Lab",
        amount: "$75",
        city: "Ahmedabad",
        status: "Shipped",
        date: "05/29/2026",
    },
];

export const PATIENT_PROFILE_LAB_ORDERS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_LAB_ORDERS[index % BASE_LAB_ORDERS.length];
    const statuses = ["Pending", "In Progress", "Complete", "Cancelled", "Shipped"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

const BASE_OPTICAL_ORDERS = [
    {
        opticalStoreName: "Redcliffe Lab",
        amount: "$70",
        city: "Ahmedabad",
        status: "Pending",
        date: "05/29/2026",
    },
    {
        opticalStoreName: "Metropolis Lab",
        amount: "$120",
        city: "Ahmedabad",
        status: "In Progress",
        date: "05/29/2026",
    },
    {
        opticalStoreName: "SRL Diagnostics",
        amount: "$150",
        city: "Ahmedabad",
        status: "Complete",
        date: "05/29/2026",
    },
    {
        opticalStoreName: "Thyrocare Lab",
        amount: "$20",
        city: "Ahmedabad",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        opticalStoreName: "CarePlus Lab",
        amount: "$75",
        city: "Ahmedabad",
        status: "Shipped",
        date: "05/29/2026",
    },
];

export const PATIENT_PROFILE_OPTICAL_ORDERS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_OPTICAL_ORDERS[index % BASE_OPTICAL_ORDERS.length];
    const statuses = ["Pending", "In Progress", "Complete", "Cancelled", "Shipped"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

const BASE_CARETAKERS = [
    {
        id: "02",
        name: "Priya Mehta",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        city: "Ahmedabad",
        date: "05/29/2026",
    },
    {
        id: "01",
        name: "Sneha Patel",
        email: "aaravsharma@example.com",
        phone: "+92 333 4567890",
        city: "Ahmedabad",
        date: "05/29/2026",
    },
];

const BASE_PRIME_STORE_ORDERS = [
    {
        name: "Priya Mehta",
        productName: "Lorem Ipsum",
        phone: "+92 333 4567890",
        price: "$75",
        city: "Ahmedabad",
        address: "Post office road, Waneekay Chowk",
        date: "05/29/2026",
    },
    {
        name: "Sneha Patel",
        productName: "Vitamin D3",
        phone: "+92 333 4567890",
        price: "$45",
        city: "Ahmedabad",
        address: "CG Road, Navrangpura",
        date: "05/28/2026",
    },
    {
        name: "Rohan Kapoor",
        productName: "Omega-3 Capsules",
        phone: "+91 98765 43210",
        price: "$60",
        city: "Ahmedabad",
        address: "Satellite Road, Jodhpur",
        date: "05/27/2026",
    },
];

export const PATIENT_PROFILE_PRIME_STORE_ORDERS = BASE_PRIME_STORE_ORDERS.map(
    (order, index) => ({
        id: String(index + 1).padStart(2, "0"),
        ...order,
    })
);

export const PATIENT_PROFILE_CARETAKERS = BASE_CARETAKERS;

export const PATIENT_PROFILE_TABS = [
    { value: "appointments", label: "Appointments", count: 5 },
    { value: "pharmacy", label: "Pharmacy Orders", count: 17 },
    { value: "lab", label: "Lab Orders", count: 11 },
    { value: "optical", label: "Optical Store Orders", count: 3 },
    { value: "primeStore", label: "Prime Store Orders", count: 3 },
    { value: "caretakers", label: "Caretakers", count: 2 },
];
