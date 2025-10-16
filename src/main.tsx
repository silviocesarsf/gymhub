import { createRoot } from 'react-dom/client'
import "./index.css"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import Login from './pages/Login.tsx';
import { theme } from './theme.ts';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from './pages/Register.tsx';

createRoot(document.getElementById('root')!).render(
    <MantineProvider
        theme={theme}
        defaultColorScheme="light"
    >
        <BrowserRouter>
            <Routes>
                <Route Component={Login} path='/auth/login' />
                <Route Component={Register} path='/auth/register' />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
