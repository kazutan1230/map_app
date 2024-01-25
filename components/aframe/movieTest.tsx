"use client"
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React, { Component } from 'react'


class MovieTest extends Component {
    render() {
        return (
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                <Entity
                    primitive='a-videosphere'
                    // gitにはsrcを上げていない。
                    // src='/src_private/osorezan.insv'
                    src='/src_private/osorezan.mp4'
                    autoplay
                    loop="true"
                />
            </Scene>
        )
    }
}

export default MovieTest