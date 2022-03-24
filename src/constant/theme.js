import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        black: {
            main: "rgba(0,0,0.3)"
        }
    },
    typography: {
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(',')
    },
    button: {
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(',')
    }
})

export default theme;