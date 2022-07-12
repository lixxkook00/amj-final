import axios from 'axios'

// import { md5 } from "blueimp-md5";

export async function handleSignUp(e) {
     e.preventDefault();

    const userName = e.target.elements.username.value
    const passWord = e.target.elements.password.value

    const body = new FormData();

    body.append("username", userName)
    body.append("password", passWord)

    const res = await axios.post('/api/user/login',body);

    // console.log("chien ga",res.data); 
    
    if(res && res.data && res.data.status) { 
        if(res.data.status == 200) { 
            // console.log("sign up success :",res.data);
            // setError("");
            
            // Save token to session
            const token = res.data.result.token;
            sessionStorage.setItem("token", token);
            // console.log(res.data.result)

            // Redirect    
            // navigate("/dashboard");

            return ""
        }
        else { 
            const errorMess = res.data.message;
            // console.log(errorMess)
            // setError(errorMess);
            return errorMess
        }
    }
    else { 
        alert("Error while connect to server !");
    }
}