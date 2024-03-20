import './style/App.css'
import Menu from './menu.jsx'
import Header from './Header.jsx'
import { useState, useEffect } from 'react'

const WindowPopup = ()=>{

    const [open, setOpen] = useState(false);
    const delOpen = ()=>{
        setOpen(false);
    }

    return(
        <div className="">
            {open ? 
                <div className = "popup open"> <Menu delOpen={delOpen} /></div>
                 :
                 <div  className="popup"><Menu delOpen={delOpen} /></div>
            }
            <Header setOpen={setOpen} />
        </div>
        
    )
}

export default WindowPopup