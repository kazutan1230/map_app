"use client"

import type { Contents } from "@/interfaces/contents"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useFormState, useFormStatus } from "react-dom"

export function UploadForm(): React.JSX.Element {
    const srcType: { name:string, display:string}[] = [
        { name: "image", display: "画像" },
        { name: "movie", display: "動画" },
    ]    
    
    const {
        // formState,
        register,
        // handleSubmit
    } = useForm<Contents>()
    const router = useRouter()
    const [state, action ] = useFormState(
        sendData,
        new FormData(),
        // upload,
        // undefined,
    )

    // useEffect(() => {
    //     if (state?.isSuccsess) {
    //         router.push("/success_signin")
    //         router.refresh()
    //     }
    // }, [state, router])

    // const [ state, formAction ] = useFormState(
    //     sendData,
    //     new FormData(),
    // )

    async function sendData(_preveState: FormData,
        formData:FormData): Promise<FormData> {
            fetch("/api/upload", {
                method: "POST",
                body: formData
            })
            .then((res) => {
                if (!res.ok) {
                    console.log("Error")
                    return formData
                }
                console.log("Success")
                // router.push("/upload/success")
            })
            .catch((err) => {
                console.log(err)
            })
            return formData
    }

    function UploadButton() {
        const { pending } = useFormStatus()
        return (
            <button
                type="submit"
                className="btn btn-primary"
                // onClick={() => {onSubmit}}
                disabled={pending}
            >
                {pending ? "送信中..." : "アップロード"}
            </button>
        )
    }
    
    // latlngtupple型に二つを入れるとき、片方が変化した際にlatlngtuppleを更新する。
    // const [coods, setCoods] = useState([] as unknown as LatLngTuple)
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target
    //     if (name === "coods[0]" || name === "coods[1]") {
    //         setCoods((prevCoods) =>({ ...prevCoods, [name]: value }))
    //         console.log(coods)
    //         // {coods && setContents((prevContents) => ({ ...prevContents, coods: coods }))}
    //         register("coods")
    //     }
    //     console.log("changecoods")
    // }

    return (
        <form action={action} className="mt-5 justify-items-center">
            {/* 後々、apiを使って地図上をクリックして入れられるようにすること。 */}
            <p>緯度</p>
            <label htmlFor="coods" className="input input-bordered flex items-center gap-2">
            <input
                name="lat"
                type="number"
                step={0.00000000000001}
                min={-90}
                max={90}
                placeholder="緯度"
                className="grow"
                // value={coods[0]}
                // onChange={handleChange}
                required={true}
                // {...register("coods")}
            />
            </label>
            <p>経度</p>
            <label htmlFor="coods" className="input input-bordered flex items-center gap-2">
            <input
                name="lng"
                type="number"
                step={0.00000000000001}
                min={-180}
                max={180}
                placeholder="経度"
                className="grow"
                // value={coods[1]}
                // onChange={handleChange}
                required={true}
                // {...register("coods")}
            />
            </label>
            <br />
            <p>場所名称</p>
            <label htmlFor="name" className="input input-bordered flex items-center gap-2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg> */}
                <input
                    // name="str"
                    type="text"
                    placeholder="場所名称"
                    // className="grow"
                    // onChange={handleChange}
                    required={true}
                    {...register("name")}
                />
            </label>
            <br />
            <p>コンテンツタイプ</p>
            <label htmlFor="srcType" className="input input-bordered flex items-center gap-2">
                <select
                    // name="srcType"
                    // value={contents.srcType}
                    defaultValue=""
                    className="grow"
                    required={true}
                    // onChange={(e) => setContents((prevContents) => ({ ...prevContents, srcType: e.target.value }))}
                    {...register("srcType")}>
                    <option value="" disabled={true}>選択してください</option>
                    {srcType.map((type, i) => (
                        <option key={i} value={type.name}>
                            {type.display}
                        </option>
                    ))}
                </select>   
            </label>
            <br />
            <p>ファイル</p>
            <label htmlFor="src" className="input input-bordered flex items-center gap-2">
                <input
                    // name="src"
                    type="file"
                    placeholder="アップロードするファイルを選択してください"
                    className="grow"
                    // onChange={(e) => setContents((prevContents) => ({ ...prevContents, src: e.target.files }))}
                    {...register("src")}
                    required={true} />
            </label>
            <br />
            <UploadButton />
        </form>
    )
}
