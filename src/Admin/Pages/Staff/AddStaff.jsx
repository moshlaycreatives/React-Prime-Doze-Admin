import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks.js";
import { addStaff } from "../../../redux/slices/staffSlice.js";
import {
    Box,
    Button,
    Dialog,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    dialogBackdropSx,
    dialogDividerSx,
    dialogHeaderBoxSx,
    dialogPaperSx,
    dialogTitleSx,
    fieldGroupSx,
    fieldSx,
    formBodyBoxSx,
    labelSx,
    mutedIconButtonSx,
    selectIconSx,
    selectPlaceholderSx,
    selectSx,
    submitButtonSx,
} from "../../../theme/formTheme";

const COUNTRIES = [
    { label: "India", value: "India" },
    { label: "Pakistan", value: "Pakistan" },
];

const AddStaff = ({ open, onClose }) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClose = () => {
        setName("");
        setEmail("");
        setCountry("");
        setPassword("");
        setShowPassword(false);
        onClose();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addStaff({
                Name: name.trim(),
                Mail: email.trim(),
                Country: country,
            })
        );
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
                backdrop: {
                    sx: dialogBackdropSx,
                },
                paper: {
                    elevation: 0,
                    sx: dialogPaperSx,
                },
            }}
        >
            <Box sx={dialogHeaderBoxSx}>
                <Typography sx={dialogTitleSx}>Add Staff Details</Typography>
            </Box>

            <Divider sx={dialogDividerSx} />

            <Box component="form" onSubmit={handleSubmit} sx={formBodyBoxSx}>
                <Box sx={fieldGroupSx}>
                    <Typography sx={labelSx}>Name</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={fieldSx}
                    />
                </Box>

                <Box sx={fieldGroupSx}>
                    <Typography sx={labelSx}>Email</Typography>
                    <TextField
                        fullWidth
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={fieldSx}
                    />
                </Box>

                <Box sx={fieldGroupSx}>
                    <Typography sx={labelSx}>Country</Typography>
                    <FormControl fullWidth>
                        <Select
                            displayEmpty
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            sx={selectSx}
                            IconComponent={(props) => (
                                <KeyboardArrowDownIcon
                                    {...props}
                                    sx={selectIconSx}
                                />
                            )}
                            renderValue={(selected) =>
                                selected ? (
                                    selected
                                ) : (
                                    <Typography sx={selectPlaceholderSx}>
                                        Select country
                                    </Typography>
                                )
                            }
                        >
                            {COUNTRIES.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <Typography sx={labelSx}>Password</Typography>
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={fieldSx}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                            onClick={() =>
                                                setShowPassword((prev) => !prev)
                                            }
                                            edge="end"
                                            sx={mutedIconButtonSx}
                                        >
                                            {showPassword ? (
                                                <VisibilityOff sx={{ fontSize: 20 }} />
                                            ) : (
                                                <Visibility sx={{ fontSize: 20 }} />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Box>

                <Button type="submit" variant="contained" sx={submitButtonSx}>
                    Add Staff
                </Button>
            </Box>
        </Dialog>
    );
};

export default AddStaff;
