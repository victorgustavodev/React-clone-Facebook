import Navbar from './components/Navbar'
import BoxLogin from './components/BoxLogin'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen flex w-full flex-col '>
      <div className='bg-bg-main flex w-screen h-3/4 py-20 '>
        <div className="m-auto flex gap-12 ">
          <Navbar />
          <BoxLogin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
