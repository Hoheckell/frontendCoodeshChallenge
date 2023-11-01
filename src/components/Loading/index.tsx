 

import { ILoadingProps } from "../../interfaces/loading.interface";
import style from "./Loading.module.scss";
import { CircularProgress, Grid, ThemeProvider, createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#f00",
    },
    secondary: {
      main: "#0ff",
    },
    text: {
      primary: "#f00",
    },
  },
});
const Loading: React.FC<ILoadingProps> = ({ loading, theme }) => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      mt={2}
      className={loading ? style["show__loading"] : style["hide__loading"]}
    >
      <ThemeProvider theme={theme ?? defaultTheme}>
        <CircularProgress />
      </ThemeProvider>
    </Grid>
  );
};

export default Loading;
