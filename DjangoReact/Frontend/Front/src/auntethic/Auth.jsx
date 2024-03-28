import { useState } from 'react'
import './style/auntethic.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Auth = ()=>{
    // const[data, setData] = useState({ phone: '', password: ''})
    // const[typeError, setTypeError] = useState(false)

    // const Autoriz = ()=>{
    //     const fetchData = async ()=>{
    //         const { response } = await axios.post('http://127.0.0.1:8000/avtorizations/', data)
    //         console.log(response.status)
    //         if(response.status == 200){
    //             setTypeError(false)
    //             setData({ phone: '', password: ''})
    //         }
    //         else if(response.status == 400){
    //             setTypeError(true)
    //         }
    //     }
    //     fetchData()
    // }

    // return(
    //     <div className="main-block">
        
    //     <div className="header">
    //         <div className="header-block">
    //             <div className="header-block-container">
    //                 <div className="header-block-main">
    //                     <h1 className="site-name start">Space</h1>

    //                     <h1 className="site-name end">Space</h1>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="block-promo">
    //         <div className="block-line"></div>
    //         <div className="block-line"></div>
    //         <div className="block-line"></div>
    //         <div className="block-line"></div>
    //         <div className="block-line"></div>
    //         <div className="block-line"></div>
    //         <div className="block-line f "></div>
    //         <div className="block-line f "></div>
    //         <div className="block-line f d"></div>
    //         <div className="block-line f d"></div>
    //         <div className="block-line f d"></div>
    //         <div className="block-line f d"></div>
    //         <div className="register-block">
    //             <div className="reg-name"><h1 className="site-name">Log in</h1></div>
    //             <div className="register-form-block">
    //                 <form action="" className="form">
    //                     <div className="register-input">
    //                         <input type="text" placeholder="Mobile Phone"
    //                         onChange={e=>setData(prev=>({
    //                             ...prev, phone: e.target.value
    //                         }))}
    //                         value={data.phone}
    //                         />
    //                     </div>
    //                     <div className="register-input">
    //                         <input type="password" placeholder="Password"
    //                         onChange={e=>setData(prev=>({
    //                             ...prev, password: e.target.value
    //                         }))}
    //                         value={data.password}
    //                         />
    //                     </div>
    //                     <div className="register-agree">
    //                         <div className="check">
    //                             <input type="checkbox" name="" id=""/>
    //                         </div>
    //                         <div className="text-agree">
    //                             <p>I have read and agree to Space Conditions and Privacy Police</p>
    //                         </div>
    //                     </div>
    //                     <button type='button' onClick={Autoriz} className="register-button">Log in</button>
    //                     <div className="link-to-login">
    //                         <p>Do you have an account?<Link to='/register/'>Sing Up</Link></p>
    //                         { typeError ? <p className='error'>User has't exist</p> : <p className='sucsess'></p>}
    //                     </div>
    //                 </form>
    //             </div>
    //             <div className="go-to-titel">
    //                 <Link className="arrow-back" to='/'><ion-icon name="arrow-back-outline"></ion-icon></Link>
    //             </div>
    //         </div>
    //     </div>
        
    //     <div className="footer">
    //         <h1 className="site-name ">Space</h1> 
    //         <h1 className="site-name">Space</h1>
    //     </div>
    // </div>
    // )
}
export default Auth