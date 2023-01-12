import { FC, useEffect } from 'react'

export interface ForTopBar { }
const Topbar: FC<ForTopBar> = () => {
    useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className={'lg:flex lg:justify-center lg:pt-6 lg:mx-auto sm:justify-start lg:w-44 lg:h-28  sm:h-16 sm:w-20 sm:top-0 sm:items-start'}>
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
