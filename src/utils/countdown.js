import axios from 'axios'

export async function getCountDownTime() {
    const body = new FormData();

    body.append("coin", "AMJ")

    const res = await axios.post('/api/package/coin',body);

    // console.log(res.data);

    if(res.data.message){
        return res.data.result
    }else{
        alert("server error",res.data.message)
        return false
    }
}