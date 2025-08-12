import { Bounce, ToastContainer } from 'react-toastify'
import { ClipLoader } from "react-spinners";
import AppRoutes from './routes/AppRoutes';

function App() {
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

            <ClipLoader
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            <AppRoutes/>


        </div>
    )
}

export default App