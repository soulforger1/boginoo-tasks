import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, HistoryText } from '../components/';
import { context } from '../provider/react-provider'
import { Short } from '../components/shorteningLink';
import { useFireStoreCol } from '../hooks/useFireStore';

export const History = () => {
    const { domain, setLinks, addHistory } = useContext(context)
    const { user } = useContext(context)
    const history = useHistory();
    const { collection } = useFireStoreCol(user)
    const [link, setLink] = useState()

    const homePage = () => {
        history.push('/')
    }

    const shortening = async () => {
        const res = await Short(link)

        if (res !== undefined) {
            setLinks({
                long: link,
                short: domain + res
            })
            await addHistory(link, domain, res)
            history.push('/shortened')
        }

    }
    return (
        <Layout>
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-6 pointer' onClick={() => homePage()}>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 pointer' onClick={() => homePage()}>
                    Boginoo
                </div>
                <div className='mt-5 flex'>
                    <Input onChange={(e) => setLink(e.target.value)} className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-58 ph-4 outline-none" placeholder='https://www.web-huudas.mn' />
                    <Button onclick={() => shortening()} className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary outline-none pointer">Богиносгох</Button>
                </div>
                <div className="mb-7">
                    <div className="font-ubuntu fs-32 lh-37 bold c-primary w-78 mt-6">Түүх</div>
                    {
                        collection.map((cur, index) => <HistoryText key={index} long={cur.long} short={cur.short} />)
                    }
                </div>
            </div>
        </Layout>
    )
}