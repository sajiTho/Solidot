import Image from 'next/image';
import { FC, useState } from 'react'
import BrandImages from './BrandImages';
import { ForBrandItems, ForBrands } from './BrandTypes'
let BrandData: ForBrandItems[] = [{
    defaultImage: 'TheDegens.svg',
    hoverdImage: 'one.svg'
}, {
    defaultImage: 'Gorillainu.svg',
    hoverdImage: 'two.svg'
}, {
    defaultImage: 'Cryptor.svg',
    hoverdImage: 'three.svg'
}, {
    defaultImage: 'ChadVerse.svg',
    hoverdImage: 'Four.svg'
}, {
    defaultImage: 'BiDefault.png',
    hoverdImage: 'BiHover.png'

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
        <div className='pt-28'>
            <div className='grid grid-cols-4 bg-[url("/TRUSTEDBY.svg")] bg-no-repeat bg-center justify-end justify-items-center mx-auto w-8/12'>
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