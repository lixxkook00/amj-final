import axios from 'axios'

export async function handleChangePassword(e) {
    e.preventDefault();

    const oldPassword = e.target.elements.oldPassword.value
    const newPassword = e.target.elements.newPassword.value
    const confirmPassword = e.target.elements.confirmPassword.value

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    // console.log("oldPassword",oldPassword)
    // console.log("newPassword",newPassword)
    // console.log("confirmPassword",confirmPassword)
    // console.log("token",token)
    // console.log("userId",userId)

    const body = new FormData();

    body.append("oldPass", oldPassword)
    body.append("newPass", newPassword)
    body.append("confirmPass", confirmPassword)
    body.append("token", token)
    body.append("user_id", userId)
    body.append("type", "pass")

    const res = await axios.post('/api/user/changePassword',body);

    return res

    // // console.log("chien ga",res.data); 
    
    // if(res && res.data && res.data.status) { 
    //     if(res.data.status == 200) { 
    //         // console.log("sign up success :",res.data);
    //         // setError("");
            
    //         // Save token to session
    //         const token = res.data.result.token;
    //         sessionStorage.setItem("token", token);
    //         // console.log(res.data.result)

    //         // Redirect    
    //         // navigate("/dashboard");

    //         return ""
    //     }
    //     else { 
    //         const errorMess = res.data.message;
    //         // console.log(errorMess)
    //         // setError(errorMess);
    //         return errorMess
    //     }
    // }
    // else { 
    //     alert("Error while connect to server !");
    // }
}