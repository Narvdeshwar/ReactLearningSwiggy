import Header from './components/ui/header/Header'
import { Outlet } from 'react-router-dom'
import useOnlineStatus from './utils/useOnlineStatus'

function App() {
  const isConnected = useOnlineStatus();
  
  return (
    <>
      {!isConnected ? (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-red-500 text-xl mb-2">⚠️</div>
            <h2 className="text-lg font-semibold text-red-600 mb-2">
              No Internet Connection
            </h2>
            <p className="text-gray-600">
              Please check your connection and try again
            </p>
          </div>
        </div>
      ) : (
        <div className='bg-slate-800 flex flex-col gap-4 pb-4 min-h-screen'>
          <Header />
          <Outlet />
        </div>
      )}
    </>
  )
}

export default App