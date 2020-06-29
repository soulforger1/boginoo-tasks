import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import '../style/main.scss'

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-8'>
                    {/* <IconStartBracket /> */}
                    <IconDash />
                    {/* <IconEndBracket /> */}
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex'>
                    <Input className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 c-grey h-4 w-58 ph-4" placeholder='https://www.web-huudas.mn' />
                    <Button className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}