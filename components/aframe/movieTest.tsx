"use client"
import "aframe"
import { Entity, Scene } from "aframe-react"
import React, { FC } from "react"
import { registerComponent } from "aframe"

// play-on-clickをEntityに登録。別の所に出したいかも。
registerComponent('play-on-click', {
    init: function () {
        this.onClick = this.onClick.bind(this);
    },
    play: function () {
        window.addEventListener('click', this.onClick);
    },
    pause: function () {
        window.removeEventListener('click', this.onClick);
    },
    onClick: function () {
        var videoEl = this.el.getAttribute('material').src;
        if (!videoEl) { return; }
        this.el.object3D.visible = true;
        videoEl.play();
    }
})

// hide-on-playをEntityに登録。別の所に出したいかも。
registerComponent('hide-on-play', {
    schema: {type: 'selector'},
    init: function () {
      this.onPlaying = this.onPlaying.bind(this);
      this.onPause = this.onPause.bind(this);
      this.el.object3D.visible = !this.data.playing;
    },
    play: function () {
      if (this.data) {
        this.data.addEventListener('playing', this.onPlaying);
        this.data.addEventListener('pause', this.onPause);
      }
    },
    pause: function () {
      if (this.data) {
        this.data.removeEventListener('playing', this.onPlaying);
        this.data.removeEventListener('pause', this.onPause);
      }
    },
    onPlaying: function () {
      this.el.object3D.visible = false;
    },
    onPause: function () {
      this.el.object3D.visible = true;
    }
})

const MovieTest:FC = () => {
    function handleMoveHome() {
        window.location.href = "/"
    }

    return (
        <div>
            <Scene className="absolute max-h-max max-w-full" vr-mode-ui="enterVRButton: #myEnterVRButton">
                <Entity primitive="a-assets">
                    <video
                        id="video"
                        src="https://bitmovin-a.akamaihd.net/content/playhouse-vr/progressive.mp4"
                        // src="/src_private/osorezan.mp4"
                        preload="auto"
                        // autoPlay
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
                <Entity
                    primitive="a-camera">
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