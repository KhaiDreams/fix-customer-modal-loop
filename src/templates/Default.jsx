import Header from "../partials/Header/Header"
import { Outlet } from 'react-router-dom'
import {
    Container,
} from '@mui/material';

const Default = () => {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{
                padding: '15px 0',

            }}>

                <Outlet />
            </Container>

        </>
    )
}

export default Default