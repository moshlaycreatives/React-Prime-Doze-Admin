import { fontFamily } from "./responsiveTypography.js";

export const formColors = {
  text: "#2F2F2F",
  placeholder: "#7C7C7C",
  border: "#D9D9D9",
  borderHover: "#BDBDBD",
  focus: "#1472FF",
  primary: "#1472FF",
  primaryHover: "#0F5FDB",
  divider: "#EFEFEF",
  white: "#FFFFFF",
  backdrop: "rgba(0, 0, 0, 0.25)",
};

export const labelSx = {
  fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "21px",
  color: formColors.text,
  mb: "8px",
};

export const inputRootSx = {
  height: "50px",
  borderRadius: "33px",
  fontFamily,
  fontSize: "16px",
  color: formColors.text,
  "& fieldset": {
    borderColor: formColors.border,
  },
  "&:hover fieldset": {
    borderColor: formColors.borderHover,
  },
  "&.Mui-focused fieldset": {
    borderColor: formColors.focus,
    borderWidth: 1,
  },
};

export const fieldSx = {
  "& .MuiOutlinedInput-root": inputRootSx,
  "& .MuiOutlinedInput-input": {
    px: "20px",
    py: 0,
    height: "50px",
    boxSizing: "border-box",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: formColors.placeholder,
    opacity: 1,
  },
};

export const selectSx = {
  ...inputRootSx,
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    height: "50px",
    px: "20px",
    py: 0,
    boxSizing: "border-box",
  },
  "& .MuiSelect-icon": {
    color: formColors.placeholder,
    right: "16px",
  },
};

export const selectPlaceholderSx = {
  color: formColors.placeholder,
  fontFamily,
  fontSize: "16px",
};

export const submitButtonSx = {
  backgroundColor: formColors.primary,
  color: formColors.white,
  fontFamily,
  fontSize: "18px",
  fontWeight: 400,
  borderRadius: "33px",
  textTransform: "none",
  width: "100%",
  height: 50,
  mt: "16px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: formColors.primaryHover,
    boxShadow: "none",
  },
};

export const dialogBackdropSx = {
  backgroundColor: formColors.backdrop,
};

export const dialogPaperSx = {
  borderRadius: "15px",
  width: "calc(100% - 32px)",
  maxWidth: "480px",
  maxHeight: "calc(100vh - 32px)",
  m: 2,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  boxShadow: "none",
};

export const dialogTitleSx = {
  fontFamily,
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "26px",
  color: formColors.text,
};

export const dialogHeaderBoxSx = {
  px: "20px",
  pt: "20px",
  pb: "14px",
  flexShrink: 0,
};

export const dialogDividerSx = {
  borderColor: formColors.divider,
  flexShrink: 0,
};

export const formBodyBoxSx = {
  px: "20px",
  pt: "20px",
  pb: "20px",
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
};

export const fieldGroupSx = {
  mb: "18px",
};

export const mutedIconButtonSx = {
  color: formColors.placeholder,
  mr: "8px",
};

export const selectIconSx = {
  fontSize: 22,
  color: formColors.placeholder,
};
