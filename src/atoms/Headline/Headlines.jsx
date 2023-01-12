import styles from './HeadlineStyles.module.css'
const Headline = () => {
    return (
        <div className={`grid grid-rows-auto lg:text-9xl lg:font-ExtraBold overflow-hidden sm:font-ExtraBold sm:text-6xl md:text:8xl `}>
            <marquee direction="left" scrollamount="10" behavior='Alternate'>
                <div className={`text-[#E6875F]`}>
                    {'FEATURED CASE STUDIES FEATURED CASE STUDIES '}
                </div>  
                <div className={`${styles.dropShadow} text-white`}>
                    {'RECENT CASE STUDIES RECENT CASE STUDIES REC '}
                </div>
            </marquee>
        </div >
    )
}
export default Headline
