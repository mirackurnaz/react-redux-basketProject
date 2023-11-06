
import Navbar from "./Commponent/Navbar"
import './App.css'
import CourseList from "./Commponent/CourseList"
import { useEffect } from 'react';
import { calculateTotal } from "./Redux/CartSlice";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
   <Navbar/>
   <CourseList/>
    </>
  )
}

export default App
