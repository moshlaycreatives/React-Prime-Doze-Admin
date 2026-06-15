export const DOCTOR_PROFILE_STATS = {
    appointmentEarnings: "$1,240",
    completed: 98,
    today: 10,
    upcoming: 25,
    cancelled: 15,
    total: 205,
};

export const DOCTOR_PROFILE_INFO = {
    name: "Dr. Aarav Sharma",
    email: "aaravsharma@example.com",
    phone: "+91 98765 43210",
    primarySpecialization: "Dermatologist",
    clinicalExperience: "21 years",
    medicalCouncil: "Verified",
    medicalRegistrationNumber: "436324243",
    waitTime: "15 - 30 min",
    gender: "Male",
    country: "India",
    flag: "/image/inicon.png",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    biography:
        "A skilled pulmonologist dedicated to diagnosing and treating respiratory conditions. Focused on improving lung health through expert care, compassion, and personalized treatment for every patient.",
    education: "MBBS, FCPS (Dermatology)",
    services:
        "All Dermatological Diseases & Aesthetic Procedures, Diagnosing, Fillers, Laser Hair Removal, Threads, Treating Dermatological Diseases",
};

export const DOCTOR_PROFILE_DOCUMENTS = [
    {
        id: "1",
        name: "Medical Registration Certificate",
        status: "Pending",
    },
    {
        id: "2",
        name: "Degree / Qualification Certificate",
        status: "Approved",
    },
    {
        id: "3",
        name: "National ID (CNIC / Passport)",
        status: "Rejected",
    },
];

export const DOCTOR_PROFILE_CLINICS = [
    {
        id: "1",
        hospitalName: "Swami Narayan Hospital",
        address: "Post office road, Waneekay Chowk, Ahmedabad",
        days: "Mon, Wed, Thu",
        fee: "$100",
    },
    {
        id: "2",
        hospitalName: "Swami Narayan Hospital",
        address: "Post office road, Waneekay Chowk, Ahmedabad",
        days: "Mon, Wed, Thu",
        fee: "$100",
    },
];

const BASE_APPOINTMENTS = [
    {
        patientName: "Priya Mehta",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        city: "Ahmedabad",
        fee: "$100",
        hospital: "Swami Narayan Hospital",
        status: "Today",
        date: "05/29/2026",
    },
    {
        patientName: "Karan Malhotra",
        reason: "Skin Allergy",
        consultationType: "Video Call",
        city: "Ahmedabad",
        fee: "$80",
        hospital: "Swami Narayan Hospital",
        status: "Upcoming",
        date: "05/29/2026",
    },
    {
        patientName: "Rohan Verma",
        reason: "Follow-up Visit",
        consultationType: "Clinic Visit",
        city: "Ahmedabad",
        fee: "$100",
        hospital: "Swami Narayan Hospital",
        status: "Completed",
        date: "05/29/2026",
    },
    {
        patientName: "Ayanna Patel",
        reason: "General Consultation",
        consultationType: "Clinic Visit",
        city: "Ahmedabad",
        fee: "$100",
        hospital: "Swami Narayan Hospital",
        status: "Cancelled",
        date: "05/29/2026",
    },
    {
        patientName: "Neha Gupta",
        reason: "Acne Treatment",
        consultationType: "Clinic Visit",
        city: "Ahmedabad",
        fee: "$90",
        hospital: "Swami Narayan Hospital",
        status: "Today",
        date: "05/29/2026",
    },
];

export const DOCTOR_PROFILE_APPOINTMENTS = Array.from({ length: 23 }, (_, index) => {
    const base = BASE_APPOINTMENTS[index % BASE_APPOINTMENTS.length];
    const statuses = ["Today", "Upcoming", "Completed", "Cancelled"];
    return {
        id: String(index + 1).padStart(2, "0"),
        ...base,
        status: statuses[index % statuses.length],
    };
});

export const DOCTOR_APPOINTMENT_TABS = [
    { value: "all", label: "All", count: DOCTOR_PROFILE_STATS.total },
    { value: "completed", label: "Completed", count: DOCTOR_PROFILE_STATS.completed },
    { value: "today", label: "Today", count: DOCTOR_PROFILE_STATS.today },
    { value: "upcoming", label: "Upcoming", count: DOCTOR_PROFILE_STATS.upcoming },
    { value: "cancelled", label: "Cancelled", count: DOCTOR_PROFILE_STATS.cancelled },
];
