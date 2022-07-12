import React, { useState , useEffect} from 'react'

import {getBonus} from '../../utils/bonus'

import FormatAmount from '../../components/FormatAmount'

export default function Bonus() {

    const [referralBonus,setReferralBonus] = useState(0)
    const [matchingBonus,setMatchingBonus] = useState(0)

    const handleGetBonus = async () => {
        const result = await getBonus()

        await setReferralBonus(result?.data?.result?.referral_bonus)
        await setMatchingBonus(result?.data?.result?.matching_bonus)
    }

    useEffect(() => {
        handleGetBonus()
    },[])

    return (
        <div className="bonus">
            <div className="container">
                <div className="row">

                    <div className="col-lx-6 col-lg-6 col-md-6">
                        <div className="bonus-content gradient-box">
                            <div className="bonus-content-title primary-title primary-gradient-text">
                                TOTAL COMMISSION
                            </div>

                            <div className="bonus-content-value">
                                <span className="value">
                                    <FormatAmount amount={referralBonus}/>
                                    USDT
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lx-6 col-lg-6 col-md-6">
                        <div className="bonus-content gradient-box">
                            <div className="bonus-content-title primary-title primary-gradient-text">
                                BONUSES OF STAKING PROGRAM
                            </div>
                            <div className="bonus-content-value">
                                <span className="value">
                                    <FormatAmount amount={matchingBonus}/>
                                    USDT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
