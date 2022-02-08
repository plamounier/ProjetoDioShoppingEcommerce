import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    
    return(
        <Grid container spacing={5} className={classes.root}>
           
            <Grid item xs={3} >
                <Box 
                    sx={{  
                            p: 2 , 
                            borderColor: '#388e3c', 
                            borderStyle: 'outset', 
                            background: 'url("./images/futebolcat2.jpg") no-repeat bottom'

                        }}
                >
                    
                        <Typography variant='h5' align='center'>
                            Categorias
                        </Typography>
                        <List>
                            {category.map(
                                category => {
                                    return (
                                        <Item
                                            key = {category.id} 
                                            name= {category.name}
                                            details={count[category.name] } 
                                        /> 
                                    )
                                }
                            )} 
                        </List>
                    
                </Box>
            </Grid>
            <Grid container xs={9} spacing={4} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
             
        </Grid>
    )
}

export default HomePage;
