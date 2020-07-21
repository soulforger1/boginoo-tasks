import React from 'react'

export const HistoryText = ({ long, short }) => {
  const copy = () => {
    const input = document.createElement('input')
    input.id = 'copy'
    input.value = short
    input.style.position = "absolute"
    input.style.left = '-999em'
    document.body.appendChild(input)

    const inputCopy = document.getElementById('copy');
    inputCopy.select();

    document.execCommand("copy")
    alert('Богино линк хуулагдсан')
    document.body.removeChild(input)
  }
  long = long.slice(0, 32) + '...'
  return (
    <div>
      <div className='flex justify-between font-ubuntu'>
        <div className='mt-6'>
          <div className='opacity-5 fs-16 lh-18'>Өгөгдсөн холбоос:</div>
          <div className='fs-20 lh-23 mt-3 w-40'>{long}</div>
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