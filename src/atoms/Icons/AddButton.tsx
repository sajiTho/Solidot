import React, { FC } from 'react'
export interface ForIcon {
    height: number;
    width: number;
}
const AddButton: FC<ForIcon> = ({ height, width }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.5V19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 10.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default AddButton
