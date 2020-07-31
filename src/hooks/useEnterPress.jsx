import { useState, useEffect } from 'react'

export const useKeyPress = (key) => {
    const [answer, setAnswer] = useState(false)

    useEffect(() => {
        const keypress = (event) => {
            if (event.isComposing || event.keyCode === key) setAnswer(true)
        }
        const keyUp = () => {
            setAnswer(false)
        }
        document.body.addEventListener("keypress", keypress);
        document.body.addEventListener("keyup", keyUp)
        return () => {
            document.body.removeEventListener('keypress', keypress)
            document.body.removeEventListener('keyup', keyUp)
        }
    }, [key])

    return answer;
}