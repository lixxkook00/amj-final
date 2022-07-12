import axios from 'axios'

export async function handleSetSecuirtyPass(e) {
    e.preventDefault();

    const yourPassword = e.target.elements.yourPassword.value
    const securityPassword = e.target.elements.securityPassword.value
    const reSecurityPassword = e.target.elements.reSecurityPassword.value

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("oldPass", yourPassword)
    body.append("newPass", securityPassword)
    body.append("confirmPass", reSecurityPassword)
    body.append("token", token)
    body.append("user_id", userId)

    const res = await axios.post('/api/user/setSecurityPassword',body);

    return res
}

export async function checkStatusSecuirtyPass() {
    const token = sessionStorage.getItem("token")

    const body = new FormData();

    body.append("token", token)

    const res = await axios.post('/api/user/checkExistSecurityPassword',body);

    return res
}

export async function handleChangeSecuirtyPass(e) {
    e.preventDefault();

    const yourPassword = e.target.elements.yourPassword.value
    const securityPassword = e.target.elements.securityPassword.value
    const reSecurityPassword = e.target.elements.reSecurityPassword.value

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("type", "secpass")
    body.append("oldPass", yourPassword)
    body.append("newPass", securityPassword)
    body.append("confirmPass", reSecurityPassword)
    body.append("token", token)
    body.append("user_id", userId)

    const res = await axios.post('/api/user/changePassword',body);

    return res
}