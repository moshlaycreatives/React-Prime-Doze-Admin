import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
    Box,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { fontFamily } from "../../theme/responsiveTypography";


const headerCellSx = {
    fontFamily,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "21px",
    color: "#7C7C7C",
    borderBottom: "1px solid #EFEFEF",
    py: 2,
    px: 2.5,
};

const bodyCellSx = {
    fontFamily,
    fontSize: "16px",
    fontWeight: 400,
    color: "#2F2F2F",
    borderBottom: "1px solid #EFEFEF",
    py: 2,
    px: 2.5,
};

const navButtonSx = {
    fontFamily,
    fontSize: "14px",
    fontWeight: 400,
    color: "#2F2F2F",
    border: "1px solid #D9D9D9",
    borderRadius: "6px",
    px: 2,
    py: 0.75,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
        backgroundColor: "#F5F5F5",
    },
    "&:disabled": {
        color: "#BDBDBD",
        borderColor: "#EFEFEF",
        cursor: "not-allowed",
        backgroundColor: "#FFFFFF",
    },
};

const pageButtonSx = (active) => ({
    fontFamily,
    minWidth: 36,
    height: 36,
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 400,
    color: active ? "#FFFFFF" : "#2F2F2F",
    backgroundColor: active ? "#2F2F2F" : "#FFFFFF",
    border: active ? "1px solid #2F2F2F" : "1px solid #D9D9D9",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        backgroundColor: active ? "#2F2F2F" : "#F5F5F5",
    },
});

const paginationLabelSx = {
    fontFamily,
    fontSize: "14px",
    fontWeight: 400,
    color: "#7C7C7C",
    whiteSpace: "nowrap",
};

const getPageNumbers = (currentPage, totalPages) => {
    if (totalPages <= 9) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 7) {
        const pages = Array.from({ length: 9 }, (_, i) => i + 1);
        pages.push("...");
        pages.push(totalPages);
        return pages;
    }

    if (currentPage >= totalPages - 6) {
        const pages = [1, "..."];
        for (let i = totalPages - 8; i <= totalPages; i += 1) {
            pages.push(i);
        }
        return pages;
    }

    return [
        1,
        "...",
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        "...",
        totalPages,
    ];
};

const DataTable = ({
    columns,
    rows,
    getRowId,
    emptyMessage = "No data available",
    minWidth = "70rem",
    tableLayout = "auto",
    defaultRowsPerPage = 10,
    rowsPerPageOptions = [10, 25, 50],
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

    useEffect(() => {
        setPage(0);
    }, [rows]);

    const totalRows = rows.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

    const paginatedRows = useMemo(() => {
        const start = page * rowsPerPage;
        return rows.slice(start, start + rowsPerPage);
    }, [rows, page, rowsPerPage]);

    const startRow = totalRows === 0 ? 0 : page * rowsPerPage + 1;
    const endRow = Math.min((page + 1) * rowsPerPage, totalRows);

    const handlePageChange = (newPage) => {
        setPage(Math.max(0, Math.min(newPage, totalPages - 1)));
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setPage(0);
    };

    return (
        <Box
            sx={{
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #EFEFEF",
                overflow: "hidden",
            }}
        >
            <Box sx={{ overflowX: "auto" }}>
                <Table
                    sx={{
                        minWidth,
                        width: tableLayout === "fixed" ? "100%" : undefined,
                        tableLayout,
                        borderCollapse: "collapse",
                    }}
                >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || "left"}
                                    sx={{
                                        ...headerCellSx,
                                        ...(column.width ? { width: column.width } : {}),
                                        ...column.headerSx,
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.length > 0 ? (
                            paginatedRows.map((row) => (
                                <TableRow key={getRowId(row)} hover>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align || "left"}
                                            sx={{
                                                ...bodyCellSx,
                                                ...(column.width ? { width: column.width } : {}),
                                                ...column.cellSx,
                                            }}
                                        >
                                            {column.render
                                                ? column.render(row)
                                                : row[column.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    align="center"
                                    sx={bodyCellSx}
                                >
                                    {emptyMessage}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Box>

            {totalRows > 0 && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        px: 2.5,
                        py: 2,
                        borderTop: "1px solid #EFEFEF",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            component="button"
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 0}
                            sx={navButtonSx}
                        >
                            {"< Back"}
                        </Box>

                        {getPageNumbers(page + 1, totalPages).map((pageNum, index) =>
                            pageNum === "..." ? (
                                <Typography
                                    key={`ellipsis-${index}`}
                                    sx={{ ...paginationLabelSx, px: 0.5 }}
                                >
                                    ...
                                </Typography>
                            ) : (
                                <Box
                                    key={pageNum}
                                    component="button"
                                    onClick={() => handlePageChange(pageNum - 1)}
                                    sx={pageButtonSx(page + 1 === pageNum)}
                                >
                                    {pageNum}
                                </Box>
                            )
                        )}

                        <Box
                            component="button"
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page >= totalPages - 1}
                            sx={navButtonSx}
                        >
                            {"Next >"}
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={paginationLabelSx}>Result per page</Typography>
                        <Select
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            IconComponent={KeyboardArrowDownIcon}
                            renderValue={(value) => String(value).padStart(2, "0")}
                            sx={{
                                fontFamily,
                                fontSize: "14px",
                                color: "#2F2F2F",
                                height: 36,
                                minWidth: 64,
                                borderRadius: "6px",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#D9D9D9",
                                },
                                "& .MuiSelect-select": {
                                    py: 0.75,
                                    px: 1.5,
                                },
                                "& .MuiSvgIcon-root": {
                                    color: "#7C7C7C",
                                    fontSize: 20,
                                },
                            }}
                        >
                            {rowsPerPageOptions.map((option) => (
                                <MenuItem
                                    key={option}
                                    value={option}
                                    sx={{ fontFamily, fontSize: "14px" }}
                                >
                                    {String(option).padStart(2, "0")}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>

                    <Typography sx={paginationLabelSx}>
                        {startRow}-{endRow} of {totalRows}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

DataTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            align: PropTypes.oneOf(["left", "center", "right"]),
            width: PropTypes.string,
            headerSx: PropTypes.object,
            cellSx: PropTypes.object,
            render: PropTypes.func,
        })
    ).isRequired,
    rows: PropTypes.array.isRequired,
    getRowId: PropTypes.func.isRequired,
    emptyMessage: PropTypes.string,
    minWidth: PropTypes.string,
    tableLayout: PropTypes.oneOf(["auto", "fixed"]),
    defaultRowsPerPage: PropTypes.number,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
};

export default DataTable;
