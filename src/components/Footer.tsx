import Image from 'next/image'
import Button from '../atoms/Let\'sTalkButton/Button'
let socialImages = [{
    src: 'componentI.png',
}, {
    src: 'componentIV.png'
}, {
    src: 'componentIII.png'
}, {
    src: 'componentII.png'
}]
const Footer = () => {
    return (
        <div id='footer' className={`flex justify-center items-center top=[6840px] sm:top-[40px] relative py-20 lg:w-screen lg:h-screen sm:items-center`}>
            <div className={`flex justify-evenly relative  bg-[rgb(229,135,95)] w-[88%] lg:h-[88%] rounded-2xl sm:h-auto `}>
                <div className=" lg:grid grid-flow-col justify-center items-center sm:mx-auto  sm:block">
                    <div className='grid grid-rows-3 max-w-[70%]  -my-20 mx-auto'>
                        <div className='lg:font-semibold lg:text-2xl self-end pb-4 text-lg'>
                            Your search for a design partner ends here.
                        </div>
                        <div className='lg:text-7xl font-ExtraBold text-5xl leading-relaxed md:6xl'>
                            SO, HOW CAN WE HELP?
                        </div>
                        <div className='self-start pt-6 '>
                            <Button
                                buttonClasses={`max-w-fit py-4 px-8 content-center sm:py-6 sm:px-12 text-xl absolute border-black hover:bg-black text-black hover:text-white`}
                                textClasses=''
                                defaultImage='arrowtwo.svg'
                                hoverdImage='arrow.svg'
                            />
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 mx-12 pb-12 my-3 items-end gap-10 self-end scroll ">
                            {socialImages.map((socialimage, i) =>

                                <div key={i} >
                                    <Image
                                        src={`/${socialimage.src}`}
                                        // layout="fill"
                                        alt={socialimage.src}
                                        height={70}
                                        width={80}
                                        className={`rounded-lg hover:bg-[#ff976b]`}
                                    />
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
