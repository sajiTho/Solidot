import Button from '../atoms/Let\'sTalkButton/Button'
const Footer = () => {
    let socialImages = [{
        src: 'componentI.svg',
    }, {
        src: 'componentII.svg'
    }, {
        src: 'componentIII.svg'
    }, {
        src: 'componentIV.svg'
    }]
    return (
        <div className={`top-[6840px] flex justify-center items-center top=[6840px] absolute w-screen h-screen`}>
            <div name='footer' className={`flex justify-evenly relative bg-[#E5875F] w-[88%] h-[88%] rounded-2xl`}>
                <div className="grid grid-flow-col justify-center items-center">
                    <div className='grid grid-rows-3 max-w-[70%]'>
                        <div className='font-semibold text-lg self-center'>
                            Your search for a design partner ends here.
                        </div>
                        <div className='text-7xl font-extrabold'>
                            SO, HOW CAN WE HELP?
                        </div>
                        <div className='self-center'>
                            <Button
                                buttonClasses={`relative max-w-fit py-6 px-12 absolute border-black hover:bg-black text-black hover:text-white`}
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
