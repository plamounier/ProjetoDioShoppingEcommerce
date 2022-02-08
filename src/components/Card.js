import React from 'react';
import { Paper, Grid, Typography, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      borderColor: '#228B22'
    },
    botao: {
        display: 'block',
        fontSize: 17,
        backgroundColor: '#2e7d32',
        color: 'white'
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    const theme = useTheme();


    return(
        <Grid item xs={11}>
            <Paper className={classes.paper} >
                <Grid container direction='column'>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                            <CardContent sx={{ flex: '0 0 auto' }}>
                            <Typography>
                            <Avatar alt={product.name_product} src={product.image} sx={{ width: 220, height: 220 }} />
                            </Typography>
                            </CardContent>

                            <CardContent sx={{ flex: '2 0 auto' }}>
                            <Typography variant="h5" color="text.secondary" component="div">
                            {children}
                            </Typography>
                            <br/>
                                <Rating name="no-value" value={null} /> 
                                Sem avaliações
                            </CardContent>
                                
                            <CardContent >
                            <Typography variant="h5" component="div">
                            R$ {product.price.toFixed(2)}
                            </Typography>
                            <Typography variant="subtitle1" align="right" component="div">
                            3x sem juros no cartão
                            </Typography>

                            <Box sx={{ pl: 1, pr:1, pt: 10 }}>
                                    <Button 
                                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                                    className={classes.botao}
                                    variant="contained"
                                    color="success"
                                     
                                >
                                    Adicionar
                                </Button>
                             </Box>

                            </CardContent>

                     </Box>
                    
                </Grid>
            </Paper>             
        </Grid>
        
        
        
    )
}

export default Card;
