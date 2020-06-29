import React from 'react';
import { Button } from './';

export const Navigation = (props) => {
    
    return (
        <div className='w100 mt-5 mr-7 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className='font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-18 ph-4 ml-4 b-primary'>Нэвтрэх</Button>
        </div>
    );
};