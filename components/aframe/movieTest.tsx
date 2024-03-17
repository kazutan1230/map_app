"use client"

import { Entity, Scene } from "aframe-react"
import React, { FC } from "react"
import GoToTopPage from "@/components/parts/goToTopPage"

type srcProps = {
    src: string
}

const MovieTest:FC<srcProps> = ({ src }) => {
    function handleMoveHome() {
        window.location.href = "/"
    }

    return (        
        <div>
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                <Entity primitive="a-assets">
                    <video
                        id="video"
                        // src={src}
                        // Githubには100MB以上のfileは上げられないようなので、一旦、aframeのsampleを使う。
                        src="https://bitmovin-a.akamaihd.net/content/playhouse-vr/progressive.mp4"
                        // src="/src_private/osorezan.mp4"
                        preload="auto"
                        loop={true}
                        crossOrigin="anonymous"
                    />
                </Entity>
                <Entity primitive="a-videosphere"
                    rotation="0 -90 0"
                    src="#video"
                    visible="false"
                    play-on-click
                />
                    {/* cursor Entity VRモードだとrayorigin変える処理が必要かも。 */}
                    <Entity
                    primitive="a-camera" cursor="rayOrigin: mouse">
                    <Entity
                        position="0 0 -1.5"
                        text="align: center;
                            width: 6;
                            wrapCount: 100;
                            color: black;
                            value: Click or tap to start video"
                            // AFRAME内での日本語入力は一旦保留する。
                            // value: クリック又はタップすると動画を再生します。"
                        hide-on-play="#video"
                    />
                    {/* <Entity id="camera" camera="userHeight: 1.6" cursor="rayOrigin: mouse" /> */}
                    {/* トップに飛ぶボタン */}
                    <GoToTopPage />
                </Entity>
            </Scene>
            <div className="absolute space-x-4 top-1 left-1">
                <button
                    onClick={handleMoveHome}
                    className="baseButton"
                    type="submit"
                >
                    ホーム画面へ
                </button>
            </div>
                {/* 後々再生ボタンとか作りたいところではある。 */}
                {/* <button
                    onClick={handleVideoPlay}
                    className="baseButton"
                >
                    再生
                </button> */}
        </div>
    )
}

export default MovieTest