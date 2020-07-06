import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { context } from '../provider/react-provider'

export const SignOut = () => {
    const { createUser } = useContext(context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const history = useHistory();
    const homePage = () => {
        history.push('/')
    }

    return (
        <Layout status="logging">
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-7 pointer' onClick={() => homePage()}>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 pointer' onClick={() => homePage()}>
                    Boginoo
                </div>
                <div className='font-ubuntu bold c-primary fs-32 lh-37 mt-6'>
                    Бүртгүүлэх
                </div>
                <Input fatherClass="flex flex-col items-center mt-6" className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-38 ph-4 outline-none" placeholder='name@mail.domain' label="Цахим хаяг" id="gmail" labelClassName="font-ubuntu fs-18 lh-23 h-4 w-38 pa-2 mt-3" onChange={() => setEmail(document.getElementById('gmail').value)} />
                <Input fatherClass="flex flex-col items-center " className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-38 ph-4 outline-none" placeholder='••••••••••' label="Нууц үг" id="password" labelClassName="font-ubuntu fs-18 lh-23 h-4 w-38 pa-2 mt-3" onChange={() => setPassword(document.getElementById('password').value)} />
                <Input fatherClass="flex flex-col items-center " className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-38 ph-4 outline-none" placeholder='••••••••••' label="Нууц үгээ давтна уу?" id="rePassword" labelClassName="font-ubuntu fs-18 lh-23 h-4 w-38 pa-2 mt-3" onChange={() => setRePassword(document.getElementById('rePassword').value)} />
                <Button className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary mt-5 pointer outline-none mb-7" onclick={() => createUser({email, password, rePassword})}>Бүртгүүлэх</Button>
            </div>
        </Layout>
    )
}