"use client"

import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React, { FC } from 'react'
// import { ShowContentNameConsole } from "@/components/parts/testModules"

const PhotoTest:FC = () => {
    function handleClick() {
        window.location.href = '/'
    }
    // class PhotoTest extends Component {
    const [state, setState] = React.useState(false)
    // ShowContentNameConsole()

    return (
        <>
        {/* この辺をいじってる。 */}
            {/* <head>
                <script>
                    AFRAME.registerComponent('clickable', {
                        init: function () {
                            const el = this.el
                            el.addEventListener('click', function () {
                                window.location.href = '/'
                            })
                        }
                    })
                </script>
            </head> */}
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
                    events={{click: () => handleClick()}}
                />
                <button
                    // onClick={handleMoveHome}
                    className="bg-yellow-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mb-2"
                    type="submit"
                >
                    ホーム画面へ
                </button>
            </Scene>
        </>
    )

}

export default PhotoTest