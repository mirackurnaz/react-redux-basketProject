import React from 'react'
import "./course.css"
import { useSelector ,useDispatch} from 'react-redux';
import Cardd from './Card';
import {clearCart} from "../Redux/CartSlice"
import Button from '@mui/material/Button';
function CourseList() {
    const {cartItems,quality,total}=useSelector((store)=>store.cart)    //2.yol const [count, setCount] = useState(1);
   const dispact=useDispatch()

  return (
    <div>
        {quality<1 ? (
            <section className='header'>
                <header >
                    <h2 >BASKET</h2>
                    <h4 >boş</h4>
                   
                </header>
            </section>
        ):(
            <section>
                <header className='header'>
                    <h2 style={{marginLeft:"800px"}}>BASKET</h2>
                    
                    <Button onClick={()=>dispact(clearCart())} sx={{marginLeft:"470px"}} variant="contained" color='error'>
                    Clean
                            </Button>
                            <Button sx={{ marginLeft:"5px"}} variant="contained" color='success'>
                            Total amount = {total} TL
                            </Button>
                   
                    </header>
                    <div className='cardd'>
                {cartItems.map((item,keys)=>{
                   return <Cardd key={keys} {...item} />
                })}
                    </div>
                    
               
            </section>
        )}
    </div>
  )
}

export default CourseList