const BASE_HOSPITALS = [
    {
        name: "City Hospital",
        email: "aaravsharma@example.com",
        phone: "+91 98765 43210",
        doctors: 20,
        city: "Ahmedabad",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "HealthCare Hospital",
        email: "ahmed.ali@example.com",
        phone: "+92 300 1234567",
        doctors: 45,
        city: "Lahore",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Grand Medical Center",
        email: "ali.reza@example.com",
        phone: "+92 312 9876543",
        doctors: 32,
        city: "Karachi",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Sunrise Hospital",
        email: "fahad.khan@example.com",
        phone: "+92 321 4567890",
        doctors: 18,
        city: "Islamabad",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Metro Care Hospital",
        email: "priya.mehta@example.com",
        phone: "+91 87654 32109",
        doctors: 28,
        city: "Mumbai",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Global Health Institute",
        email: "omar.hussain@example.com",
        phone: "+92 333 1122334",
        doctors: 40,
        city: "Faisalabad",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "LifeLine Hospital",
        email: "sanjay.patel@example.com",
        phone: "+91 76543 21098",
        doctors: 35,
        city: "Surat",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "PrimeCare Hospital",
        email: "bilal.ahmed@example.com",
        phone: "+92 344 5566778",
        doctors: 22,
        city: "Multan",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
    {
        name: "Unity Medical Center",
        email: "neha.gupta@example.com",
        phone: "+91 65432 10987",
        doctors: 30,
        city: "Pune",
        country: "India",
        flag: "/image/inicon.png",
    },
    {
        name: "Hope Hospital",
        email: "danish.malik@example.com",
        phone: "+92 355 8899001",
        doctors: 25,
        city: "Rawalpindi",
        country: "Pakistan",
        flag: "/image/pkicon.png",
    },
];

export const HOSPITALS_DATA = Array.from({ length: 125 }, (_, index) => {
    const base = BASE_HOSPITALS[index % BASE_HOSPITALS.length];
    const id = String(125 - index).padStart(2, "0");

    return {
        id,
        ...base,
        name:
            index < BASE_HOSPITALS.length
                ? base.name
                : `${base.name} ${Math.floor(index / BASE_HOSPITALS.length) + 1}`,
    };
});
