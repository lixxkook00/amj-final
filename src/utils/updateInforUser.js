import axios from 'axios'

export async function handleUpdateInforUser(e) {
    e.preventDefault();

    const firstname = e.target.elements.firstname.value
    const lastname = e.target.elements.lastname.value
    const phone = e.target.elements.phone.value
    const email = e.target.elements.email.value

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("first_name", firstname)
    body.append("last_name", lastname)
    body.append("phone", phone)
    body.append("email", email)
    body.append("id", userId)
    body.append("token", token)

    const res = await axios.post('/api/user/update/profile',body);

    return res; 
    
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