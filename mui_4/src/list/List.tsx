import Navbar from "../components/Navbar";
import AnimalsGrid from "./components/AnimalsGrid";
import Footer from '../components/Footer';

function List() { 
    return ( 
      <div> 
        <Navbar active="2"/>
        <AnimalsGrid/>
        <Footer/>
      </div> 
    ); 
} 
   
export default List; 