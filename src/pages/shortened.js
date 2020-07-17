import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { Short } from '../components/shorteningLink';
import { context } from '../provider/react-provider'

export const Shortened = () => {
    const { domain, links, setLinks } = useContext(context)
    const [link, setLink] = useState()
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

    const shortening = async () => {
        const res = await Short(link)

        if (res !== undefined) {
            setLinks({
                long: link,
                short: domain + res
            })   
        }

    }
    const copy = () => {
        const input = document.createElement('input')
        input.id = 'copy'
        input.value = links.short
        input.style.position = "absolute"
        input.style.left = '-999em'
        document.body.appendChild(input)

        const inputCopy = document.getElementById('copy');
        inputCopy.select();

        document.execCommand("copy")
        alert('Богино линк хуулагдсан')
        document.body.removeChild(input)
    }
    return (
        <Layout>
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-6 pointer' onClick={() => homePage()}>
                    <IconStartBracket className="transform" id="leftBracket" />
                    <IconDash className="transform" id="transformLeft" />
                    <IconDash className="ml-2 mr-2" />
                    <IconDash className="transform" id="transformRigth" />
                    <IconEndBracket className="transform" id="rigthBracket" />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 pointer' onClick={() => homePage()}>
                    Boginoo
                </div>
                <div className='mt-5 flex'>
                    <Input onChange={(e) => setLink(e.target.value)} className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-58 ph-4 outline-none" placeholder='https://www.web-huudas.mn' />
                    <Button onclick={() => shortening()} className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary outline-none pointer">Богиносгох</Button>
                </div>
                <div className='flex-col justify-between font-ubuntu'>
                    <div className='mt-6'>
                        <div className='opacity-5 fs-16 lh-18'>Өгөгдсөн холбоос:</div>
                        <div className='fs-20 lh-23 mt-3'>{links.long}</div>
                    </div>
                    <div className='mt-6'>
                        <div className='opacity-5 fs-16 lh-18'>Богино холбоос:</div>
                        <div className='fs-20 lh-23 mt-3' id="short">{links.short}</div>
                        <div className='mt-4 fs-18 lh-21 c-primary pointer' onClick={() => copy()}>Хуулж авах</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}