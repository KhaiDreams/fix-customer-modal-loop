import * as React from 'react'
import {
    useNavigate
} from 'react-router-dom'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Divider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import Styles from './Header.style'

const Header = () => {
    const navigate = useNavigate()

    const [setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)

    const [menuOpen, setMenuOpen] = React.useState(false)
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    // const handleClose = () => setOpen(false);
    return (
        <>
            <Box>
                <AppBar position="static" sx={Styles.appbar}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => handleToggleMenu()}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={Styles.title}>
                            My App
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                open={menuOpen} onClose={() => handleToggleMenu()}

            >
                <List >
                    <ListItem >
                        <ListItemButton onClick={() => {navigate('/'), handleToggleMenu()}}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton onClick={() => {navigate('/clientes'), handleToggleMenu()}}>
                            <ListItemIcon><PeopleIcon /></ListItemIcon>
                            <ListItemText>Lista de Clientes</ListItemText>
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
        </>
    )
}

export default Header