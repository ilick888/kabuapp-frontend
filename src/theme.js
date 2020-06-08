import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: blue
    },
    props: {
        MuiCheckbox: {
            color: "primary"
        },
        MuiRadio: {
            color: "primary"
        },
        MuiSwitch: {
            color: "primary"
        },
        MuiTextField: {
            variant: "outlined"
        }
    },
    typography: {
        //fontFamily: "Indie Flower",
        fontSize: 13,
        button: {
            textTransform: "none"
        }
    }
});
