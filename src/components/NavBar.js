import * as React from 'react';
import {Outlet} from "react-router-dom"; // NOTE: Remember to use Outlet when you create layouts!
import {Link} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Coming Soon!'];

const appBarStyle = {

}


const NavBar = (props) => {
  const pagesWithUrl = props.navbarPages
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color="transparent" sx={
      { 
        boxShadow: 0,
        outline: "#ebebff solid 1px",
        bgcolor: "white",
      }
    }>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: "flex",
          justifyContent: "space-between",
          bgColor: "white",
          '@media (min-width:992px)': {
            ml: 16,
          },
        }}>
            
          <a href="/">
            <img src={process.env.PUBLIC_URL + "/images/appbar/appbar-light.jpg"} alt="AIE Studio" width={150} />
          </a>

          <Box sx={{float: 'right', display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pagesWithUrl.map((page) => (
                <Link href={page.url} style={{textDecoration: 'none', color: '#222222'}}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pagesWithUrl.map((page) => (
              <Button href={page.url} onClick={handleCloseNavMenu} sx={{my: 2, color: 'black', textTransform: 'none'}}>
                <Typography>{page.name}</Typography>
              </Button>
            ))}

          </Box>

          <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'block'}}}>
            <Tooltip title="Open profile menu">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0, }}>
                <Avatar alt="Avatar" src={process.env.PUBLIC_URL + "/images/avatar.png"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default NavBar;