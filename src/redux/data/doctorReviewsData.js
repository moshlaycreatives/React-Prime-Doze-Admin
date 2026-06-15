const REVIEW_TEXT =
    "Dr. Aarav Sharma is truly exceptional. His compassion, patience, and expertise made a world of difference in my recovery journey. He never made me feel judged — only supported.";

export const DOCTOR_REVIEWS_DATA = Array.from({ length: 125 }, (_, index) => ({
    reviewId: index + 1,
    id: String(5 - (index % 5) || 5).padStart(2, "0"),
    name: "Aarav Sharma",
    city: "Ahmedabad",
    review: REVIEW_TEXT,
    rating: 4.5,
}));
