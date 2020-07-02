import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    const history = useHistory();
    const homePage = () => {
        history.push('/')
    }

    useEffect(() => {
        document.getElementById('transformLeft').style.transform = "translate(30px)"
        document.getElementById('transformRigth').style.transform = "translate(-30px)"
        document.getElementById('leftBracket').style.transform = "translate(28px)"
        document.getElementById('rigthBracket').style.transform = "translate(-28px)"
    }, [])
    return (
        <Layout>
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-8 pointer' onClick={() => homePage()}>
                    <IconStartBracket className="transform" id="leftBracket"/>
                    <IconDash className="transform" id="transformLeft"/>
                    <IconDash className="ml-2 mr-2"/>
                    <IconDash className="transform" id="transformRigth"/>
                    <IconEndBracket className="transform" id="rigthBracket"/>
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 pointer' onClick={() => homePage()}>
                    Boginoo
                </div>
                <div className='mt-5 flex'>
                    <Input className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-58 ph-4 outline-none" placeholder='https://www.web-huudas.mn' />
                    <Button className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary outline-none pointer">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}