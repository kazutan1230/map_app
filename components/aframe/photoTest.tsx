"use client"

import { Entity, Scene } from 'aframe-react'
import React, { FC } from 'react'
import GoToTopPage from '@/components/parts/goToTopPage'

type srcProps = {
    src: string
}

const PhotoTest:FC<srcProps> = ({ src }) => {
    function handleMoveHome() {
        window.location.href = '/'
    }

    return (
        <div className='static'>
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                <Entity
                    primitive='a-sky'
                    src={src}
                />
                {/* cursor Entity VRモードだとrayorigin変える処理が必要かも。 */}
                <Entity id="camera" camera="userHeight: 1.6" cursor="rayOrigin: mouse" />
                {/* トップに飛ぶボタン */}
                <GoToTopPage />
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