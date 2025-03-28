import React from 'react'

export default function Button({children, className, color, theme}) {

    let background
    
    switch (color) {
        case 'secondary': background = 'bg-secondary'
            break
        case 'danger': background = 'bg-red-primary'
            break
        default : background = 'bg-primary'
    }

    switch (theme) {
        case 'small' : 
            return (
                <div>
                    <button className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}>{children}</button>
                </div>
            )
        case 'big' : 
            return (
                <div>
                    <button className={`${className} ${background} px-8 py-4 uppercase shadow-xl text-white text-base font-medium animate`}>{children}</button>
                </div>
            )
        default: 
            return (
                <div>
                    <button className={`${className} ${background} px-4 py-3 uppercase shadow-xl text-white text-sm font-medium animate`}>{children}</button>
                </div>
            )
    }
}