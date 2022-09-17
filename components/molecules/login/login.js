import style from './login.module.css'
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from "react-toastify";
import axios from 'axios';





export default function Login ({isShowingLoginCard,handleOpenLoginCard}) {

    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [mobile , setMobile] = useState('')
    const [isShowingLogin , setIsShowingLogin] = useState(false)

    const setUserDetails = {
        userName : setUserName,
        mobile : setMobile,
        password : setPassword
    }
    function handleFields ( value,key) {
        setUserDetails[key](value)
    }
    function handleLoginRegister () {
        setIsShowingLogin(!isShowingLogin)
    }

     

    async function submitDetails(event) {
        handleOpenLoginCard()
        event.preventDefault();
        const userData = {
            userName,
            password,
            mobile
        }
        if(mobile.length != 10){
            return  toast.error('Provide valid mobile number')
        }
        const isAllFieldsOk = Object.values(userData).every(value => value.trim().length)
        if(!isAllFieldsOk){
             toast.error('Please Fill Valid Info')
             return
        }
        // going api 
        const body = {
            name:"jagfsih"
        }
        // const data  = axios.post('http://localhost:3000/user/getUser')
    //    axios.post('http://localhost:3000/user/getUser')
        
    
      }

    return(
        <div className={style.wrapper}>

            <Dialog 
                open = {isShowingLoginCard}
                fullWidth
                maxWidth="sm"
                className={style.dialog}
            >
            <div className={style.secondaryWrapper}>

                <div className={style.closeBtnWrapper}>
                        <bold className={style.matajiText}>
                            Dhamangaon Shajayoga Center
                        </bold>
                        <CloseIcon 
                            color = 'error'
                            onClick = {handleOpenLoginCard}
                            sx = {{cursor:'pointer'}}
                        />
                    </div>
                <div className={style.inputFieldWrapper}>
                    
                    <form onSubmit={submitDetails}>
                       { !isShowingLogin && <input
                            required
                            type="text"
                            value={userName}
                            placeholder="user name"
                            className={style.inputStyle}
                            onChange={(e) => handleFields(e.target.value, "userName")}
                        />}
                        <input
                            required
                            type="number"
                            value={mobile}
                            placeholder="mobile number"
                            className={style.inputStyle}
                            onChange={(e) => handleFields(e.target.value, "mobile")}
                        />
                        <input
                            required
                            type="password"
                            value={password}
                            placeholder="password"
                            className={style.inputStyle}
                            onChange={(e) => handleFields(e.target.value, "password")}
                        />    
                        <Button 
                            variant="outlined"
                            sx={{width:'100%'}}
                            type='submit'
                        >
                        {isShowingLogin ? 'Login' : 'Register'}
                        </Button >
                     </form>
                </div>
                <div className={style.buttonWrapper}> 
                    <p className={style.redirectText}>
                       { isShowingLogin ? "New User ?" : "Already Registered ?" }
                        <span 
                            className={style.loginText}
                            onClick = {handleLoginRegister}
                        >
                           { isShowingLogin ? 'Register Here' : 'Login Here'}
                        </span>
                    </p>
                </div>
            </div>
            </Dialog>         
        </div>
    )
}