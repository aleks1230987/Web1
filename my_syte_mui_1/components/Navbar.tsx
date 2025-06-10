import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuItem from '@mui/material/MenuItem';
import { Theme, useTheme } from '@mui/material/styles';

interface ComponentProps {
  active: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));


function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = useState(false);
    

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    return (
        <AppBar
            position="static"
            sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            mt: '28px',
            }}
        >
        <Container maxWidth="xl">
            <StyledToolbar>
                <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                    Дикие животные
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button 
                    variant={active === "1" ? "contained" : "text"} 
                    color="info" 
                    size="medium"
                    >
                    Главная
                    </Button>
                    <Button 
                    variant={active === "2" ? "contained" : "text"} 
                    color="info" 
                    size="medium"
                    >
                    Пума
                    </Button>
                    <Button 
                    variant={active === "3" ? "contained" : "text"} 
                    color="info" 
                    size="medium"
                    >
                    Статистика
                    </Button>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                    <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                    anchor="top"
                    open={ open }
                    onClose={toggleDrawer(false)}
                    >
                    <Box>
                        <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                        >
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseRoundedIcon />
                        </IconButton>
                        </Box>
                        <MenuItem 
                    selected={active === "1"}
                    sx={{
                        '&.Mui-selected': {
                          backgroundColor: '#0288d1'
                        },
                        '&:not(.Mui-selected):hover': {
                          backgroundColor: '#b5d6e9'
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: '#0288d1'
                        }
                      }}>Главная</MenuItem> 
                   <MenuItem
                    selected={active === "2"}
                    sx={{
                        '&.Mui-selected': {
                          backgroundColor: '#0288d1'
                        },
                        '&:not(.Mui-selected):hover': {
                          backgroundColor: '#b5d6e9'
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: '#0288d1'
                        }
                      }}>Пума</MenuItem> 
                   <MenuItem
                    selected={active === "3"}
                    sx={{
                        '&.Mui-selected': {
                          backgroundColor: '#0288d1'
                        },
                        '&:not(.Mui-selected):hover': {
                          backgroundColor: '#b5d6e9'
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: '#0288d1'
                        }
                      }}>Статистика</MenuItem>   
                    </Box>
                    </Drawer>
                </Box>
            </StyledToolbar>
        </Container>
        </AppBar>
    );
}

export default Navbar;
