import React from 'react'

export const HistoryText = ({ long, short }) => {
  const copy = () => {

    // console.log(document.getElementById('shortLink'))
    // document.getElementById("short").select();

    // document.execCommand("copy");

    // alert("Copied the text: " + document.getElementById("short").value);
  }
  return (
    <div>
      <div className='flex justify-between font-ubuntu'>
        <div className='mt-6'>
          <div className='opacity-5 fs-16 lh-18'>Өгөгдсөн холбоос:</div>
          <div className='fs-20 lh-23 mt-3'>{long}</div>
        </div>
        <div className='mt-6'>
          <div className='opacity-5 fs-16 lh-18'>Богино холбоос:</div>
          <div className='fs-20 lh-23 mt-3' id="short">{short}</div>
        </div>
        <div className='mt-6 fs-18 lh-21 c-primary pointer' onClick={() => copy()}>Хуулж авах</div>
      </div>
      <div className='br-grey-1 mt-5'></div>
    </div>
  )
}