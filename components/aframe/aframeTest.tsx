"use client"
// aframeの機能を試すだけのコンポーネント

import { Entity, Scene } from 'aframe-react'
import React, { FC, Component } from 'react'


const AframeTest:FC = () => {
// class AframeTest extends Component {
    // render() {
        return (
                <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
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
    // }
}

export default AframeTest