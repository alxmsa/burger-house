import React from 'react'
import Logo from '../assets/img/svg/Logo-burger-house.svg'
import Icone from '../assets/img/svg/ico-bag-clickAndCollect.svg'
import Button from './Button'

export default function Header() {
    return (
        <div className='relative z-10 flex item-center justify-between py-10'>
            <div className='w-full'>
                <img src={ Logo } alt='Burger House App' className='w-64'/>
            </div>
            <div className='w-full text-secondary font-secondary'>
                <div className='flex items-center justify-end'>
                    <img src={Icone} alt='' className='w-5 h-5 mr-1' />
                    <span>Commandez votre repas en ligne</span>
                </div>
                <div className='mt-3 flex items-center justify-end'>
                    <Button className="mr-3 tracking-widest" color='secondary'>
                        Inscription
                    </Button>
                    <Button className="tracking-widest">
                        Connexion
                    </Button>
                </div>
            </div>
        </div>
    )
}