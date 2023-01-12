import { FC, useEffect } from 'react'

export interface ForTopBar { }
const Topbar: FC<ForTopBar> = () => {
    useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className={'flex justify-start sm:justify-center pt-6 mx-auto'}>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="/Solidot.json"
                style={{ width: "180px", height: "120px" }}
            >
            </lottie-player>
        </div>
    )
}

export default Topbar
