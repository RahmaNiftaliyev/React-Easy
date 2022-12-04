import React, { useReducer ,useState} from "react";
import styles from "./registration.module.css";
import { GiCheckMark } from "react-icons/gi";
import {Input, Button} from '@chakra-ui/react' 
import {BsGithub} from 'react-icons/bs'
import {FcGoogle}from 'react-icons/fc'

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>

      </div>
      <div className={styles.loginRight}>
        <div>
          <Button >Sign in with Github
             <BsGithub className={styles.signin_github_icon} />
          </Button>
          <Button colorScheme={"telegram"}>Sign In with Google
          <FcGoogle className={styles.signin_google_icon}/>
          </Button>
        </div>
        <div className={styles.line}>
          <div className={styles.left_line}></div>
          <span>OR</span>
          <div className={styles.left_line}></div>
        </div>
        <form className={styles.loginForm} action="">
          <Input className={styles.login_email}  type={"email"} value={email} placeholder={"Email"} onChange={(e)=>{setEmail(e.target.value)}} />
          <Input className={styles.login_password} type={"password"} value={password} placeholder={"Password"} onChange={(e)=>{setPassword(e.target.value)}} />
          <Button colorScheme={"whatsapp"} className={styles.btn_login_submit} >Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
