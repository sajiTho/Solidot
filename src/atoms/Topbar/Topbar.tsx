import { FC, useEffect } from 'react'

export interface ForTopBar { }
const Topbar: FC<ForTopBar> = () => {
    useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className={'flex justify-center'}>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="/Solidot.json"
                style={{ width: "150px", height: "100px" }}
            >
            </lottie-player>
        </div>
    )
}

export default Topbar
