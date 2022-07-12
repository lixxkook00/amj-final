import axios from 'axios' 

export async function getDepositView() {
    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("userId", userId)

    const res = await axios.post('/api/transaction/depositView',body);

    return res

}

export async function cancelDepositView(id) {

    const body = new FormData();

    body.append("id", id)

    const res = await axios.post('/api/transaction/cancelDeposit',body);

    return res

}

export async function checkDeposit() {

    const userId = sessionStorage.getItem("userId")

    const body = new FormData();

    body.append("userId", userId)

    const res = await axios.post('/api/transaction/checkDeposit',body);

    return res
}

export const asyncInterval = async (statusTransaction) => {
    const userId = sessionStorage.getItem("userId")
    const body = new FormData();

    body.append("userId", userId)

    const status = new Promise((resolve, reject) => {
        const interval = setInterval(async function () {
            const result = await axios.post('/api/transaction/checkDeposit',body);
            
            if(result.data.status){

                clearInterval(interval);
            }else{
                
            }
            // console.log(result.data.status);

        }, 5000);
    });
    return status;
}

