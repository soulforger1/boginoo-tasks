import React, { useEffect, useContext } from 'react'
import { useLocation } from "react-router-dom";
import { context } from '../provider/react-provider'

export const ReDirect = () => {
    const location = useLocation();
    const id = location.pathname.slice(1);
    const { getLongLink } = useContext(context)

    useEffect(() => {
        if (id !== '') getLongLink(id)
    }, [getLongLink, id])

    return (
        <div className="font-lobster text-center fs-100">
            Loading ...
        </div>
    )
}