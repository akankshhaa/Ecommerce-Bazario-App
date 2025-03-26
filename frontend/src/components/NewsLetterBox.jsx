import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        alert("🚨 Oops! Currently offer is not available.");
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Check available offers here!!!</p>
        <p className='text-gray-400 mt-3'>Stay updated with the latest trends and exclusive offers. We bring you the best deals! 🌟</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email'required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-red-500'>CHECK OFFER</button>
        </form>
    </div>
  )
}

export default NewsLetterBox