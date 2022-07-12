import axios from 'axios'

export async function resetPassword (e,tokenURL)  {

    const newPass = e.target.elements.newPass.value
    const reNewPass = e.target.elements.reNewPass.value
    const code = e.target.elements.code.value

    const body = new FormData();

    body.append("password", newPass)
    body.append("password_confirm", reNewPass)
    body.append("verify_code", code)
    body.append("token", tokenURL)

    const res = await axios.post('/api/user/reset/password',body);
    return res
}