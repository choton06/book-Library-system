
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appstore from './utils/appStore';
function App() {

  return (
    <div >
    <Provider store={appstore} >
    <Header />
    <Outlet />
    </Provider>
 
     
    </ div>
     
  )
}

export default App
