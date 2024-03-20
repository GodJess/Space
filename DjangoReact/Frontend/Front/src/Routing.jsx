import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import App from './App.jsx'
import RoomCart from './RoomCart.jsx'
import Titul from './Titul.jsx'
import Register from './auntethic/Register.jsx'
import Auth from './auntethic/Auth.jsx'


const Router = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route element={<Titul />} path="/" />
            <Route element={<App />} path='/home/' />
            <Route element={<RoomCart />} path='/room/:id'/>
            <Route element={<Register />} path='/register/' />
            <Route element={<Auth />} path='/auth/' />
        </Routes>
    </BrowserRouter>
    ) 
}

export default Router