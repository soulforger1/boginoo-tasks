import React from 'react';

export const Input = (props) => {
    let { fatherClass, className, labelClassName, label, id, ...others } = props;

    /* 
        https://boginoo.firebaseapp.com/input

        Input component-ийн жишээ

            <Input className='h-5 w-8' placeholder='https://www.web-huudas.mn' />
            <Input className='h-5 w-8' placeholder='password' type='password' />

        - className props -оор дамжуулан button-ний style өөрчилж болдог байх

        - бусад дамжуулсан others props ийг button элемэнт дээр нэмж өгөх ингэснээр onClick event өөр ямарч хамаагүй props-ийг нэмж ашиглах боломжтой болно

        HINT: className={`input ${className}`}
      
    */

    return (
        <div className={fatherClass}>
            <label htmlFor={id} className={labelClassName}>{label}</label>
            <input id={id} className={`input ${className}`} {...others} />
        </div>
    );
};