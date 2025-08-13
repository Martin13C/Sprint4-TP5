import { Bounce, ToastContainer } from 'react-toastify'
import { ClipLoader } from "react-spinners";
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLocation } from 'react-router'

export function App() {

    const location = useLocation();
    const hideNavbar = location.pathname === '/';
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce} />
            {/* 
            <ClipLoader
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}
            <div className="flex flex-col min-h-screen">
                {!hideNavbar && <Navbar />}
                <div className={`flex-1 ${!hideNavbar ? 'ml-16' : ''}`}>
                    <AppRoutes />
                    {!hideNavbar && <Footer />}
                </div>

            </div>

        </div>
    )
}

export default App