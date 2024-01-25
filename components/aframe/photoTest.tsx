"use client"
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React, { Component } from 'react'


class PhotoTest extends Component {
    render() {
        return (
            <>
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                <Entity
                    primitive='a-sky'
                    src='/src/360PhotoSphereCamera.jpg'
                    // src='/src/seaSide.jpg'
                />
            </Scene>
            </>
        )
    }
}

export default PhotoTest