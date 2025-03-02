import { Outlet, useNavigation } from 'react-router-dom';
import './App.css'
import './index.css'
import Footer from './Component/Page/Footer';
import Navbar from './Component/Page/Navbar';

function App() {
  const navigation = useNavigation()

  return (
    <>
      <div className='h-12'>
        <Navbar></Navbar>
      </div>

      {/* Dynamic page */}
      <div className="min-h-[calc(100vh-240px)]">
        {
          navigation.state === 'loading' ? <p className='text-2xl font-bold text-white'>Loading....</p> : <Outlet></Outlet>
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
