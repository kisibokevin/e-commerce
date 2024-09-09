import React from 'react'
import { RiSearchLine } from '@remixicon/react'

const SearchBar = () => {
    return (
        <div className='relative  border-solid border-slate-300'>
            <input type="text" placeholder="Search...." className='pl-2 pt-1 pb-1 rounded-md '  />
            <RiSearchLine size={18} className='absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer'/>
        </div>
    )
}

export default SearchBar