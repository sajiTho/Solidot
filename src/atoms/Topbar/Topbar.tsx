import { FC, useEffect } from 'react'

export interface ForTopBar { }
const Topbar: FC<ForTopBar> = () => {
    useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className={'flex justify-center pt-6 mx-auto w-48 h-28 sm:w-[180px] sm:h-[120px]'}>
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
