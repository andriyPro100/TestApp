import * as React from 'react'

export interface ButtonProps {
    text: string
    color: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "submit"|"button"
}

export default function Button ({text, color, onClick, type}:ButtonProps) {
    return (
        <button type={type} className={color + " m-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"}
                onClick={onClick}>
            {text}</button>
    )
}
