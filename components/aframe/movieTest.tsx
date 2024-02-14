"use client"
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React, { FC } from 'react'


const MovieTest:FC = () => {
    return (
        <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
            <Entity
                primitive='a-videosphere'
                // gitHubにはsrc_privateを上げていない。
                // src='/src_private/osorezan.insv'
                src='/src_private/osorezan.mp4'
                autoplay
                loop="true"
            />
        </Scene>
    )
}


export default MovieTest