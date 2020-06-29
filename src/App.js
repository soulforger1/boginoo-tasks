import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from './components/';

import './style/main.scss';

const App = () => {
    /*
        Figma design-ний home-default хуудас
    */

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input placeholder='https://www.web-huudas.mn' />
                    <Button>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}

export default App;