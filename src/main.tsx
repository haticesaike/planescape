import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "./index.css";
import {MantineProvider} from '@mantine/core';


createRoot(document.getElementById("root")!).render(
    <MantineProvider>
        <App/>
    </MantineProvider>
);
