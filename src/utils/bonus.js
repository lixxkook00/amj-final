import axios from "axios";

export async function getBonus() {
    const token = sessionStorage.getItem("token")

    const body = new FormData();

    body.append("token", token)

    const res = await axios.post('/api/user/bonus',body);

    return res

}