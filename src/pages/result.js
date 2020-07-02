import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Layout,
  Button,
  Input,
  IconDash,
  IconEndBracket,
  IconStartBracket
} from '../components/'

export const Result = () => {
  const history = useHistory()
  const homePage = () => {
    history.push('/')
  }
  const long = 'https://www.web-huudas.mn'
  const short = 'shortly.io/wbmn12'
  return (
    <Layout>
      <div className='h100 flex flex-col items-center'>
        <div
          className='flex justify-center items-center mt-6 pointer'
          onClick={() => homePage()}
        >
          <IconStartBracket />
          <IconDash />
          <IconEndBracket />
        </div>
        <div
          className='font-lobster c-primary fs-56 lh-70 pointer'
          onClick={() => homePage()}
        >
          Boginoo
        </div>
        <div className='mt-5 flex'>
          <Input
            className='fs-18 lh-23 br-none bx-sh-2 br-ra-100 c-grey h-4 w-58 ph-4 outline-none'
            placeholder='https://www.web-huudas.mn'
          />
          <Button className='font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary outline-none pointer'>
            Богиносгох
          </Button>
        </div>
        <div className='font-ubuntu mb-7 w-75'>
          <div className='mt-6'>
            <div className='opacity-5 fs-16 lh-18'>Өгөгдсөн холбоос:</div>
            <div className='fs-20 lh-23 mt-3'>{long}</div>
          </div>
          <div className="flex jusrify-between">
            <div className='mt-6'>
              <div className='opacity-5 fs-16 lh-18'>Богино холбоос:</div>
              <div className='fs-20 lh-23 mt-3'>{short}</div>
            </div>
            <div className='mt-6 ml-5 h-3 fs-18 lh-21 c-primary pointer'>Хуулж авах</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
