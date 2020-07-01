import React from 'react';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom'

export const Navigation = () => {
    const location = useLocation().pathname;
    const history = useHistory();

    const newPath = () => {
        history.push('/login')
    }

    return (
        <div className='w100 mt-5 mr-7 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {
                location === '/login' || location === '/signout' || location === '/recover' ? <div></div> : <Button onclick={() => newPath()} className='font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-18 ph-4 ml-4 b-primary pointer outline-none'>Нэвтрэх</Button>
            }
        </div>
    );
};