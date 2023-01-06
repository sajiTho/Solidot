import styles from './HeadlineStyles.module.css'
const Headline = () => {
    return (
        <div className='grid grid-rows-auto text-9xl font-ExtraBold'>
            <marquee direction="left" scrollamount="10" Behavior='Alternate'>
                <div className={`text-[#E6875F] `}>
                    {'FEATURED CASE STUDIES '.repeat(7)}
                </div>
                <div className={`${styles.dropShadow} text-white`}>
                    {'RECENT CASE STUDIES '.repeat(8) + 'RE'}
                </div>
            </marquee >
        </div >
    )
}

export default Headline
