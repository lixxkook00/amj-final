import axios from 'axios'

export async function handleResetSecurityPassword(e) {
    e.preventDefault();

    const newPass = e.target.elements.newSecurity.value
    const confirmPass = e.target.elements.reNewSecurity.value
    const txt2FACode = e.target.elements.code.value

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")
    

    const body = new FormData();

    body.append("newPass", newPass)
    body.append("confirmPass", confirmPass)
    body.append("txt2FACode", txt2FACode)
    body.append("token", token)
    body.append("user_id", userId)

   console.log("newPass", newPass)
   console.log("confirmPass", confirmPass)
   console.log("txt2FACode", txt2FACode)
   console.log("token", token)
   console.log("user_id", userId)

    const res = await axios.post('/api/user/resetSecurityPassword',body);

    return res
}