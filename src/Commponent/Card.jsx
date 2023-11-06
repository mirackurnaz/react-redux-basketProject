import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch} from 'react-redux';
import {removeItem,increase,decrease} from "../Redux/CartSlice"

function Cardd({id,title,price,img,quantity}) {
  const dispactt=useDispatch()
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
        
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        > 
        </CardMedia>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}   
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price} TL
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack sx={{display:"flex" ,flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
            <Button  onClick={()=>{dispactt(decrease(id))
      }}>
       <ChevronLeftIcon fontSize='small'/>
      </Button>
      <Typography  >{quantity} </Typography>
      <Button onClick={()=>{dispactt(increase(id))
      }}>
       <ChevronRightIcon/>
      </Button>
      </Stack>
      <Box>
      <Button
      onClick={()=>{
        dispactt(removeItem(id))
      }}
       sx={{marginLeft:"5%",marginTop:"10px",marginBottom:"10px",height:"40px", height:"30px", width:"90%"}} variant="outlined" color='error' size='small' startIcon={<DeleteIcon />}>
            Delete
            </Button>
      
            </Box>
    </Card>
    </div>
  )
}

export default  Cardd