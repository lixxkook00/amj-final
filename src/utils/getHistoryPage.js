import axios from 'axios';

export async function getTransactionHistoryPage (page)  {
    const body = new FormData();

    const id = sessionStorage.getItem("userId")

    body.append("userId", id)
    body.append("page", page)

    const res = await axios.post('/api/transaction/history',body);

    // console.log("getTransactionHistoryPage",res)

    return res.data.result
    // if(res?.data?.status) { 
    //     // setTransaction(res.data.result)
    //     setTotalTransaction(res.data.result)
    //     // console.log("setTransaction",res.data.result)
    //     getCurrentTransactionList(res.data.result,5)
    // }
}