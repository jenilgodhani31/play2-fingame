import React from 'react'

function NavBar() {
    return (
        <div className='bg-primary1 w-full pt-1'>
            <a href="/">
                <div className="h-[50px] flex  items-center justify-center ">
                    <img src="/gameImage/logo.png" className=" h-[200px] py-5 " />
                </div>
            </a>
        </div>
    )
}

export default NavBar
