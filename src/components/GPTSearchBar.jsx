import React from 'react'
import { lang } from '../utils/languageConstants'

const GPTSearchBar = () => {
  return (
    <div className='pt-[7%] flex justify-end'>
        <form onSubmit={e => e.preventDefault()} className='p-6 m-3 grid grid-cols-12 w-1/2 items-center bg-black bg-opacity-35 '>
            <input type="text" className='px-4 p-2 m-2 rounded-lg border col-span-9' placeholder={lang.kannada.gptSearchPlaceHolder}/>
            <button className='px-4 h-10 rounded bg-red-500 col-span-3'>{lang.kannada.search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar