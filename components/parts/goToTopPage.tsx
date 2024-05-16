import { Entity } from 'aframe-react'

import React, { FC } from 'react'

// aframe内でトップページに飛ぶボタンEntity
const GoToTopPage:FC = () => {
    return (
        <Entity
            geometry="primitive: plane; width: 5; height: 1;"
            material="color: #EF2D5E; opacity: 0.2;"
            position="3.30 2.90 -6.91"
            text="width: 10; color: white; align: center; font: https://cdn.aframe.io/fonts/DejaVu-sdf.fnt;
                value: Go Back to TopPage;"
            link="href: /; title: TopPage"
            event-set__enter="_event: mouseenter; material: opacity: 1"
            event-set__leave="_event: mouseleave; material: opacity: 0.2"
            visible-on-play="#video"
        />
    )
}
export default GoToTopPage