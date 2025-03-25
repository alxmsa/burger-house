import React from 'react'
import '../style/App.css'
import BgImage from '../assets/img/bg-food.jpg'

export default function HeroTop() {
    return (
        <div className='bg-primary w-full'>
            <div className='bg-repeat w-full h-full' style={{backgroundImage: `url(${BgImage})`}}>Je suis la, text à enlever bien sûr !</div>
        </div>
    )
}