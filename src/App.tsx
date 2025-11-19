import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "styled-components";
import { TaskProvider } from "./context/TaskContext";
import GlobalStyle from "./styles/globals";
import { theme } from "./styles/theme";

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </ThemeProvider>
  );
}
