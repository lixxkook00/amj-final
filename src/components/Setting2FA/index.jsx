import React , {useState ,useEffect} from 'react'

import swal from '@sweetalert/with-react'

import {useNavigate} from 'react-router-dom'

import {
        getTwoFactorQRCode,
        createTwoFactorCode,
        setEnableTwoFACode,
        handleCheckTwoFactorQRCodeStatus,
        setDisableTwoFACode
    } 
    from '../../utils/get2FACode'

export default function Setting2FA() {

    const [faCodeStatus,setFACodeStatus] = useState() 

    let navigate = useNavigate();
    
    // const [twoFACode,setTwoFACode] = useState(0)

    const [qrURL,setURL] = useState("")
    const [secretCode,setSecretCode] = useState("")

    const handleGet2FA = async () => {
        const result = await getTwoFactorQRCode()
       return result
    }

    const handleCreateQRCode = async () => {
        const result = await createTwoFactorCode()
        await console.log("handleCreateQRCode",result)
        // await console.log("handleCreateQRCode",result)
    }

    const handleEnableTwoFACode = async (e) => {
        e.preventDefault()
        const twoFACode = e.target.elements.code.value

        const result = await setEnableTwoFACode(twoFACode)

        console.log("handleEnableTwoFACode",result)

        if(result?.data?.status){
            swal(result.data.message, '', 'success', 1000, false);
            
            setTimeout(() => {
                navigate("/dashboard");
            },1800)
        }else{
            swal(result.data.message, '', 'error', 1000, false);

        } 
    }

    const handleDisableTwoFACode = async (e) => {
        e.preventDefault()
        const twoFACode = e.target.elements.code.value

        const result = await setDisableTwoFACode(twoFACode)

        if(result?.data?.status){
            swal(result.data.message, '', 'success', 1000, false);
            setTimeout(() => {
                navigate("/dashboard");
            },1800)
        }else{
            swal(result.message, '', 'error', 1000, false);

        } 
    }

    const checkStatus2FA = async () => {
        const createStatus = await createTwoFactorCode()

        if(createStatus?.data?.status){
            const resultGetStatus2FA = await handleGet2FA()

            // await console.log("resultGetStatus2FA",resultGetStatus2FA?.data?.result?.isEnable)
            await setFACodeStatus(resultGetStatus2FA?.data?.result?.isEnable)
            await setURL(resultGetStatus2FA?.data?.result?.qrCodeUrl)
            await setSecretCode(resultGetStatus2FA?.data?.result?.secretCode)
        }
    }

    useEffect(() => {
        checkStatus2FA()
    },[])

    // useEffect(() => {
    // },[faCodeStatus])

    return (
        <div className="setting-2fa">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="userinfor-title">
                            2FA Setting
                        </div>
                    </div>
                    
                    <div className="col-xl-12 centering">

                        {
                            !faCodeStatus
                            ?
                            <form className="form user-form" id="signUpForm" onSubmit={(e) => handleEnableTwoFACode(e)}>
                                <div className="form-group">
                                    <div className="user-form-item d-flex">
                                        <div className="user-form-item-title text-center">
                                            Scan the image below with the two-factor google authenticator app on your phone
                                        </div>
                                        <div className="setting-2fa-img centering">
                                            <img src={qrURL} alt="" />
                                        </div>
                                        <div className="user-form-item-title text-center">
                                            Manual setting : {secretCode}
                                        </div>
                                        <div className="user-form-item-title text-center">
                                            Enter the six-digit code from the application
                                        </div>
                                        <input 
                                            placeholder="Enter 2FA Code" 
                                            type="text" 
                                            id="code" 
                                            className="form-control" 
                                        />
                                    </div>
                                </div>

                                <div className="form-group-inline form-group">
                                    <div className="link">
                                        <span className="red-text">
                                            
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        <div className="text">Enable</div>
                                    </button>
                                </div>
                            </form>
                                
                            :

                            <form className="form user-form" id="signUpForm" onSubmit={(e) => handleDisableTwoFACode(e)}>
                                <div className="form-group">
                                        {/* <div className="user-form-item-title text-center">
                                            Scan the image below with the two-factor google authenticator app on your phone
                                        </div> */}
                                        <input 
                                            placeholder="Enter 2FA Code" 
                                            type="text" 
                                            id="code" 
                                            className="form-control" 
                                        />
                                </div>

                                <div className="form-group-inline form-group">
                                    <div className="link">
                                        <span className="red-text">
                                            
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        <div className="text">Disable</div>
                                    </button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
