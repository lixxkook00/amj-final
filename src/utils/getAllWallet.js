import axios from 'axios'

export const getAllWallet = async () => {
    const body = new FormData();

    const userId = sessionStorage.getItem("userId")

    body.append("userId", userId)

    const res = await axios.post('/api/transaction/getAllWallet',body);

    return res
}