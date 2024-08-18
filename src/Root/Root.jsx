
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Root = () => {
    return (
        <div>
            <div className='lg:max-w-full'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;