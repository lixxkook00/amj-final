import axios from 'axios' 

export async function getTwoFactorQRCode() {

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("token", token)
    body.append("user_id", userId)

    const res = await axios.post('/api/user/getTwoFactorQRCode',body);

    return res

}

export async function createTwoFactorCode() {

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("token", token)
    body.append("user_id", userId)

    const res = await axios.post('/api/user/createTwoFactorCode',body);

    return res
}

export async function setEnableTwoFACode(twoFACode) {

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("token", token)
    body.append("user_id", userId)
    body.append("twoFACode", twoFACode)

    const res = await axios.post('/api/user/setEnableTwoFACode',body);

    return res
}

export async function setDisableTwoFACode(twoFACode) {

    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("token", token)
    body.append("user_id", userId)
    body.append("twoFACode", twoFACode)

    const res = await axios.post('/api/user/setDisableTwoFACode',body);

    return res
}

export async function handleCheckTwoFactorQRCodeStatus () {
    const token = sessionStorage.getItem("token")
    const userId = sessionStorage.getItem("userId")
    
    const body = new FormData();
    body.append("token", token)
    body.append("user_id", userId)

    const res = await axios.post('/api/user/getTwoFactorQRCode',body);

    return res
}

