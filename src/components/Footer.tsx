import Button from '../atoms/Let\'sTalkButton/Button'
let socialImages = [{
    src: 'componentI.svg',
}, {
    src: 'componentII.svg'
}, {
    src: 'componentIII.svg'
}, {
    src: 'componentIV.svg'
}]
const Footer = () => {
    return (
        <div id='footer' className={`flex justify-center items-center top=[6840px] sm:top-[40px] relative lg:w-screen lg:h-screen sm:items-center `}>
            <div className={`flex justify-evenly relative bg-[#E5875F] w-[88%] lg:h-[88%] rounded-2xl sm:h-auto`}>
                <div className="lg:grid grid-flow-col justify-center items-center sm:mx-auto sm:block">
                    <div className='grid grid-rows-3 max-w-[70%]'>
                        <div className='lg:font-semibold lg:text-2xl self-center sm:text-xs'>
                            Your search for a design partner ends here.
                        </div>
                        <div className='lg:text-7xl font-ExtraBold sm:text-5xl'>
                            SO, HOW CAN WE HELP?
                        </div>
                        <div className='self-center'>
                            <Button
                                buttonClasses={`relative max-w-fit lg:py-6 lg:px-12  sm:py-3 sm:px-6 absolute border-black hover:bg-black text-black hover:text-white`}
                                textClasses=''
                                defaultImage='arrowtwo.svg'
                                hoverdImage='arrow.svg'
                            />
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            {socialImages.map((social, i) =>
                                <img key={i} src={social.src} alt={social.src} className={`rounded-lg hover:bg-[#ff976b]`} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
