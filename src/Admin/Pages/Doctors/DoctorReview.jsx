import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import TableFilterBar from "../../../SharedComponent/TableFilterBar";
import { DOCTOR_REVIEWS_DATA } from "../../../redux/data/doctorReviewsData";

const pageTitleSx = {
    fontFamily,
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "31px",
    color: "#2F2F2F",
    mb: 2.5,
};

const pageSubtitleSx = {
    color: "#7C7C7C",
    fontSize: "25px",
    fontWeight: 400,
};

const compactCellSx = {
    whiteSpace: "nowrap",
    verticalAlign: "middle",
};

const reviewCellSx = {
    whiteSpace: "normal",
    wordBreak: "break-word",
    lineHeight: "24px",
    verticalAlign: "middle",
    py: 2.5,
};

const DoctorReview = () => {
    const [search, setSearch] = useState("");

    const filteredRows = useMemo(() => {
        if (!search.trim()) {
            return DOCTOR_REVIEWS_DATA;
        }

        const query = search.trim().toLowerCase();
        return DOCTOR_REVIEWS_DATA.filter(
            (row) =>
                row.id.includes(query) ||
                row.name.toLowerCase().includes(query) ||
                row.city.toLowerCase().includes(query) ||
                row.review.toLowerCase().includes(query) ||
                String(row.rating).includes(query)
        );
    }, [search]);

    const columns = [
        { id: "id", label: "Id", width: "6%", cellSx: compactCellSx },
        { id: "name", label: "Name", width: "14%", cellSx: compactCellSx },
        { id: "city", label: "City", width: "12%", cellSx: compactCellSx },
        {
            id: "review",
            label: "Review",
            width: "58%",
            cellSx: reviewCellSx,
            render: (row) => row.review,
        },
        {
            id: "rating",
            label: "Rating",
            width: "10%",
            cellSx: compactCellSx,
            render: (row) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <StarIcon sx={{ fontSize: 18, color: "#F5A623" }} />
                    {row.rating}
                </Box>
            ),
        },
    ];

    return (
        <Box>
            <Typography sx={pageTitleSx}>
                Dashboard/
                <Box component="span" sx={pageSubtitleSx}>
                    {" "}
                    Doctors/
                </Box>
                <Box component="span" sx={pageSubtitleSx}>
                    {" "}
                    Reviews
                </Box>
            </Typography>

            <TableFilterBar
                search={search}
                onSearchChange={setSearch}
                searchAriaLabel="Search doctor reviews"
            />

            <DataTable
                columns={columns}
                rows={filteredRows}
                getRowId={(row) => row.reviewId}
                emptyMessage="No Reviews Available"
                minWidth="100%"
                tableLayout="fixed"
                defaultRowsPerPage={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
            />
        </Box>
    );
};

export default DoctorReview;
