import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { fontFamily } from "../../theme/responsiveTypography";
import { mutedIconButtonSx } from "../../theme/formTheme";





const viewerBackdropSx = {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const navButtonSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    color: "#2F2F2F",
    width: 36,
    height: 36,
    zIndex: 1,
    "&:hover": {
        backgroundColor: "#FFFFFF",
    },
    "&.Mui-disabled": {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: "#BDBDBD",
    },
};

const ImageViewerPopup = ({
    open,
    onClose,
    images = [],
    initialIndex = 0,
    altPrefix = "Image",
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const imageCount = images.length;
    const hasMultipleImages = imageCount > 1;
    const currentImage = images[currentIndex];
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < imageCount - 1;

    useEffect(() => {
        if (open) {
            const safeIndex = Math.min(
                Math.max(initialIndex, 0),
                Math.max(imageCount - 1, 0)
            );
            setCurrentIndex(safeIndex);
        }
    }, [open, initialIndex, imageCount]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, imageCount - 1));
    }, [imageCount]);

    useEffect(() => {
        if (!open) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                goToPrev();
            } else if (event.key === "ArrowRight") {
                goToNext();
            } else if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, goToPrev, goToNext, onClose]);

    if (!currentImage) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    sx: viewerBackdropSx,
                },
                container: {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                },
                paper: {
                    elevation: 0,
                    sx: {
                        borderRadius: "15px",
                        width: "calc(100% - 48px)",
                        maxWidth: "560px",
                        maxHeight: "calc(100vh - 32px)",
                        m: 2,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "none",
                        position: "relative",
                        top: "auto",
                        left: "auto",
                        transform: "none",
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: "16px",
                    py: "12px",
                    flexShrink: 0,
                }}
            >
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#2F2F2F",
                    }}
                >
                    {hasMultipleImages
                        ? `${currentIndex + 1} / ${imageCount}`
                        : "Image Preview"}
                </Typography>
                <IconButton
                    aria-label="Close image viewer"
                    onClick={onClose}
                    sx={{
                        ...mutedIconButtonSx,
                        mr: 0,
                        border: "1px solid #2F2F2F",
                        width: 28,
                        height: 28,
                    }}
                >
                    <CloseOutlinedIcon sx={{ fontSize: 16, color: "#2F2F2F" }} />
                </IconButton>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    px: hasMultipleImages ? { xs: "44px", sm: "52px" } : "16px",
                    pb: "20px",
                    pt: 0,
                    flex: 1,
                    minHeight: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {hasMultipleImages && (
                    <IconButton
                        aria-label="Previous image"
                        onClick={goToPrev}
                        disabled={!canGoPrev}
                        sx={{
                            ...navButtonSx,
                            left: { xs: 8, sm: 16 },
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                )}

                <Box
                    component="img"
                    src={currentImage}
                    alt={`${altPrefix} ${currentIndex + 1}`}
                    decoding="sync"
                    sx={{
                        display: "block",
                        width: "100%",
                        maxHeight: "calc(100vh - 180px)",
                        objectFit: "contain",
                        borderRadius: "8px",
                        imageRendering: "auto",
                    }}
                />

                {hasMultipleImages && (
                    <IconButton
                        aria-label="Next image"
                        onClick={goToNext}
                        disabled={!canGoNext}
                        sx={{
                            ...navButtonSx,
                            right: { xs: 8, sm: 16 },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                )}
            </Box>
        </Dialog>
    );
};

ImageViewerPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    initialIndex: PropTypes.number,
    altPrefix: PropTypes.string,
};

export default ImageViewerPopup;
