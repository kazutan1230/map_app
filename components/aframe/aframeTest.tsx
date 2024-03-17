"use client"
// aframeの機能を試すだけのコンポーネント

import { Entity, Scene } from 'aframe-react'
// import React, { FC, Component } from 'react'
import React, { FC } from 'react'
type srcProps = {
    src: string
}
const AframeTest:FC<srcProps> = () => {
    return (
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                {/* <!-- 
                    The camera has a cursor component,
                    which uses the mouse as the rayOrigin,
                    so that you can click entities in the scene
                    with the mouse.
                --> */}
                {/* <Entity id="camera" camera="userHeight: 1.6" look-controls cursor="rayOrigin: mouse"></Entity> */}
                <Entity id="camera" camera="userHeight: 1.6" cursor="rayOrigin: mouse"></Entity>
                <Entity primitive="a-box" position="1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow
                    event-set__enter="_event: mouseenter; color: #026fc9"
                    event-set__leave="_event: mouseleave; color: #4CC3D9"
                    link="href: /; title: Aframe page"
                    // cursor-listener
                />
                <Entity
                geometry={{ primitive: 'box' }}
                material={{ color: 'red' }}
                position={{ x: 0,y: 0,z: -5 }}
                rotation={{ x: 0,y: 45,z: 45 }}
                scale={{ x: 2,y: 2,z: 2 }}
                />

                <Entity primitive="a-sky" material="color:#ccc" />

            </Scene>
    )
}

export default AframeTest