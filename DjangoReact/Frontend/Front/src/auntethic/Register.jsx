import { useState } from 'react';
import './style/auntethic.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = ()=>{
    
const ClearData = {
    name: '',
    surname: '',
    phone: '',
    mail: '',
    password: '',
    repassword: ''
}
const [error, setError] = useState({});
const [data, setData] = useState({
    name: '',
    surname: '',
    phone: '',
    mail: '',
    password: '',
    repassword: ''
});

const createUser = ()=>{
    const fetchData = async ()=>{
            const { answer } = await axios.post('http://127.0.0.1:8000/registrations/', data);
            setData(ClearData);
            setError(answer);
            if (error.sucsess === 'Пользователь успешно создан') {
                setData(ClearData);
            } else {
                setError(answer);
            }
    }
    fetchData();
}

    return(
        <div className="main-block">
        
        <div className="header">
            <div className="header-block">
                <div className="header-block-container">
                    <div className="header-block-main">
                        <h1 className="site-name start">Space</h1>

                        <h1 className="site-name end">Space</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="block-promo">
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line f "></div>
            <div className="block-line f "></div>
            <div className="block-line f d"></div>
            <div className="block-line f d"></div>
            <div className="block-line f d"></div>
            <div className="block-line f d"></div>
            <div className="register-block">
                <div className="reg-name"><h1 className="site-name">Sing Up</h1></div>
                <div className="register-form-block">
                    <form action="" className="form">
                        <div className="register-input">
                            <input type="text" placeholder="Name"
                                onChange={e => setData(prev =>({
                                    ...prev, name: e.target.value
                                }))}
                                value = {data.name}
                            />
                        </div>
                        <div className="register-input">
                            <input type="text" placeholder="Surname"
                                onChange={e => setData(prev =>({
                                    ...prev, surname: e.target.value
                                }))}
                                value = {data.surname}
                            />
                        </div>
                        <div className="register-input">
                            <input type="text" placeholder="Mobile Phone"
                                onChange={e => setData(prev =>({
                                    ...prev, phone: e.target.value
                                }))}
                                value = {data.phone}
                            />
                        </div>
                        <div className="register-input">
                            <input type="text" placeholder="Mail"
                                onChange={e => setData(prev =>({
                                    ...prev, mail: e.target.value
                                }))}
                                value = {data.mail}
                            />
                        </div>
                        <div className="register-input">
                            <input type="password" placeholder="Password"
                                onChange={e => setData(prev =>({
                                    ...prev, password: e.target.value
                                }))}
                                value = {data.password}
                            />
                        </div>
                        <div className="register-input">
                            <input type="password" placeholder="Repeat password"
                                onChange={e => setData(prev =>({
                                    ...prev, repassword: e.target.value
                                }))}
                                value = {data.repassword}
                            />
                        </div>
                        <div className="register-agree">
                            <div className="check">
                                <input type="checkbox" name="" id=""/>
                            </div>
                            <div className="text-agree">
                                <p>I have read and agree to Space Conditions and Privacy Police</p>
                            </div>
                        </div>
                        <button type='button' className="register-button" onClick={createUser}>Sing Up</button>
                        <div className="link-to-login">
                            <p>Do you have an account?<Link to='/auth/'>Login In</Link></p>
                            <p className='error'>{error.sucsess}</p>
                        </div>
                    </form>
                </div>
                <div className="go-to-titel">
                    <Link className="arrow-back" to='/'><ion-icon name="arrow-back-outline"></ion-icon></Link>
                </div>
            </div>
        </div>
        
        <div className="footer">
            <h1 className="site-name ">Space</h1> 
            <h1 className="site-name">Space</h1>
        </div>
    </div>
    )
}
export default Register