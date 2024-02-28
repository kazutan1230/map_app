"use client"

import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React, { FC } from 'react'

const PhotoTest:FC = () => {
    function handleMoveHome() {
        window.location.href = '/'
    }

    return (
        <div className='static'>
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                <Entity
                    primitive='a-sky'
                    src='/src/360PhotoSphereCamera.jpg'
                    // src='/src/seaSide.jpg'
                />
                <Entity
                    geometry="primitive: circle; radius: 2"
                    material="color: #000; side: double;"
                    raycaster="objects: .clickable"
                    position="-3.30 2.90 6.91"
                    rotation="0 180 0"
                    events={{click: () => handleMoveHome()}}
                />
            </Scene>
            <button
                onClick={handleMoveHome}
                className="absolute baseButton"
                type="submit"
            >
                ホーム画面へ
            </button>
        </div>
    )

}

export default PhotoTest