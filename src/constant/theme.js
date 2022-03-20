import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(',')
    },
    button: {
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(',')
    }
})

export default theme;