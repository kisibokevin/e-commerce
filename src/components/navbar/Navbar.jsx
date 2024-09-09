import React from 'react'
import SearchBar from '../searchbar/SearchBar'

const Navbar = () => {
    return (
        <div className='bg-light-background dark:bg-dark-background flex justify-between items-center h-20 mt-0' >
            <h2 className='text-light-accentPrimary dark:text-dark-accentPrimary text-xl font-medium'>
                CodiShop
            </h2>
            <SearchBar />
            <div className='text-light-text dark:text-dark-text'>
                account
            </div>
            <div className='text-light-text dark:text-dark-text'>
                cart
            </div>
            <div className='text-light-text dark:text-dark-text'>
                help
            </div>
            <div className='text-light-text dark:text-dark-text'>
                Dashboard
            </div>
        </div>
    )
}

export default Navbar