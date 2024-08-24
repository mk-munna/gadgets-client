
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div>
            <div className='lg:max-w-full'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;