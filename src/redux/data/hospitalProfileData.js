export const HOSPITAL_PROFILE_STATS = {
    appointmentEarnings: "$12,354",
    completed: 425,
    today: 36,
    upcoming: 75,
    cancelled: 35,
    total: 540,
};

export const HOSPITAL_PROFILE_INFO = {
    name: "City Hospital",
    email: "aaravsharma@example.com",
    phone: "+91 98765 43210",
    doctors: 20,
    city: "Ahmedabad",
    country: "India",
    flag: "/image/inicon.png",
    logo: "/image/logo.png",
    helpline: "042 35302701",
    about:
        "After graduating in 2002, I have dedicated my career to pulmonology—a vital field focused on lung health and respiratory care. Over the last two decades, I've honed my skills and expertise to provide top-tier care to patients with respiratory conditions.",
    services:
        "Emergency Care, Banking Services, Nuclear Medicine, Clinical Psychology, Dermatology, Pain Relief Center, Nutrition/Dietitian, Nephrology",
    facilities:
        "Emergency Care, Banking Services, Nuclear Medicine, Clinical Psychology, Dermatology, Pain Relief Center, Nutrition/Dietitian, Nephrology",
};

export const HOSPITAL_PROFILE_IMAGES = [
    "/image/Hp1.png",
    "/image/Hp2.png",
    "/image/Hp3.png",
    "/image/Hp4.png",
    "/image/Hp5.png",
    "/image/Hp6.png",
];

const BASE_DOCTOR = {
    name: "Dr. Ayanna Patel",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=180&h=180&fit=crop&crop=face",
    verified: true,
    specialty: "Dermatologist, Cosmetologist",
    qualifications: "MBBS, FCPS (Dermatology), D-DERM Ireland",
    isPrime: true,
};

export const HOSPITAL_PROFILE_ALL_DOCTORS = Array.from({ length: 11 }, (_, index) => ({
    id: String(index + 1),
    ...BASE_DOCTOR,
}));

export const HOSPITAL_PROFILE_DOCTORS = HOSPITAL_PROFILE_ALL_DOCTORS.slice(0, 3);

const BASE_APPOINTMENTS = [
    {
        patientName: "Ayanna Patel",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        doctorName: "Dr. Ayanna Patel",
        specialty: "Cardiologist",
        fee: "$100",
        status: "Today",
        date: "05/29/2026",
    },
    {
        patientName: "Ayanna Patel",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        doctorName: "Dr. Ayanna Patel",
        specialty: "Cardiologist",
        fee: "$100",
        status: "Upcoming",
        date: "05/29/2026",
    },
    {
        patientName: "Ayanna Patel",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        doctorName: "Dr. Ayanna Patel",
        specialty: "Cardiologist",
        fee: "$100",
        status: "Completed",
        date: "05/29/2026",
    },
    {
        patientName: "Ayanna Patel",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        doctorName: "Dr. Ayanna Patel",
        specialty: "Cardiologist",
        fee: "$100",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        patientName: "Ayanna Patel",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        doctorName: "Dr. Ayanna Patel",
        specialty: "Cardiologist",
        fee: "$100",
        status: "Today",
        date: "05/29/2026",
    },
];

export const HOSPITAL_PROFILE_APPOINTMENTS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_APPOINTMENTS[index % BASE_APPOINTMENTS.length];
    const statuses = ["Today", "Upcoming", "Completed", "Cancelled"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

export const APPOINTMENT_TABS = [
    { value: "all", label: "All", count: HOSPITAL_PROFILE_STATS.total },
    { value: "completed", label: "Completed", count: HOSPITAL_PROFILE_STATS.completed },
    { value: "today", label: "Today", count: HOSPITAL_PROFILE_STATS.today },
    { value: "upcoming", label: "Upcoming", count: HOSPITAL_PROFILE_STATS.upcoming },
    { value: "cancelled", label: "Cancelled", count: HOSPITAL_PROFILE_STATS.cancelled },
];
