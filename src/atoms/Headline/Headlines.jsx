import styles from './HeadlineStyles.module.css'
const Headline = () => {
    return (
        <div className={`overflow-x-clip`}>
            <div className={`grid py-4 md:pt-16 grid-rows-auto w-screen lg:text-9xl lg:font-ExtraBold font-ExtraBold text-6xl md:text:8xl whitespace-nowrap `}>

                <span className={`text-[#E6875F] animate-marqueeEffect`}>
                    {'FEATURED CASE STUDIES '.repeat(2)}
                </span>
                <div className={`${styles.dropShadow} text-white animate-marqueeEffect`}>
                    {'RECENT CASE STUDIES '.repeat(2) + 'REC'}
                </div>
            </div>
        </div >
    )
}
export default Headline
