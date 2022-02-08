import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import { Grid, Button} from '@material-ui/core/';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Cart from './Cart';
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import SportsIcon from '@material-ui/icons/Sports';

const useStyles = makeStyles((theme) => ({
    botao: {
        my: 2, 
        color: 'white', 
        display: 'block',
        fontSize: 17,
    },
    tamanhoicone: {
        fontSize: 90,
    },
  }));

const Header = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <AppBar position="static">
              <Box sx={{bgcolor: 'success.main'}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <SportsIcon className={classes.tamanhoicone}/>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, bgcolor: 'success.main'}}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Button 
                                        onClick={handleCloseNavMenu}
                                        className={classes.botao}
                                    >
                                        Home
                                    </Button>
                                </Link>

                                <Button
                                    onClick={handleCloseNavMenu}
                                    className={classes.botao}
                                >
                                    Categorias
                                </Button>
                                <Link to="/contato" style={{ textDecoration: 'none' }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        className={classes.botao}
                                    >
                                        Contato
                                    </Button>
                                </Link>
                            </Box>

                        <Cart />   
                        </Toolbar>
                    </Container>
                </Box>
            </AppBar>
            
        </Grid>
    )
}

export default Header;
