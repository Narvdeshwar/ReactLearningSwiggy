import Header from './components/ui/header/Header'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div className='bg-slate-800 flex flex-col gap-4 pb-4  h-fit'>
      <Header />
      <Outlet />
    </div>
  )
}


export default App