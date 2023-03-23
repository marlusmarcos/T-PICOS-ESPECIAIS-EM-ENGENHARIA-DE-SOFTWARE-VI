import { createTheme, PaletteOptions } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

const palette : PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#1A242E', 
    },
    background: {
        default: '#1E1E1E'
    }
}

const theme = createTheme ({
    palette
});

export default theme;