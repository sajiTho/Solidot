import Image from 'next/image';
import { FC, useState } from 'react'
import BrandImages from './BrandImages';
import { ForBrandItems, ForBrands } from './BrandTypes'
let BrandData: ForBrandItems[] = [{
    defaultImage: 'TheDegens.svg',
    hoverdImage: 'one.svg'
}, {
    defaultImage: 'two.svg',
    hoverdImage: 'two.svg'
}, {
    defaultImage: 'Cryptor.svg',
    hoverdImage: 'three.svg'
}, {
    defaultImage: 'ChadVerse.svg',
    hoverdImage: 'chadVerse.svg'
}, {
    defaultImage: 'BiHover.png',
    hoverdImage: 'BiDefault.png'

}, {
    defaultImage: 'CookeasyDefault.png',
    hoverdImage: 'CookeasyHover.png'
}, {
    defaultImage: 'ReveDefault.png',
    hoverdImage: 'RevmeHover.png'
}, {
    defaultImage: 'SalamDefault.png',
    hoverdImage: 'SalamHover.png'
}

]

const Brands: FC<ForBrands> = ({ }) => {
    return (
        <div className='lg:pt-28  p-12'>
            <div className='lg:grid lg:grid-cols-4 sm:block bg-[url("/TRUSTEDBY.svg")] bg-no-repeat bg-center justify-end justify-items-center mx-auto w-8/12'>
                {
                    BrandData.map((data, i) =>
                        <div key={i}>
                            <BrandImages data={data} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Brands