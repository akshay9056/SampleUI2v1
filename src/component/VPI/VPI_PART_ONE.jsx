import React from 'react'

function VPI_PART_ONE() {
    return (
        <div className='container grid grid-cols-5 items-center gap-3 w-[100%]' >
            <div className='startdate'>
                <input type="date" className="input input-bordered w-full max-w-xs" />

            </div>
            <div className='end_date'>
                <input type="date" name="endDate" id="endDate" className="input input-bordered w-full max-w-xs" />

            </div>
            <div className='w-[100%]'> 
                <div className="dropdown dropdown-hover w-[100%]">
                    <div tabIndex={0} role="button" className="btn m-1 w-[100%]">Parameter</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Agent Id</a></li>
                        <li><a>Duration</a></li>
                        <li><a>Full Name</a></li>
                        <li><a>Extension Number</a></li>
                        <li><a>ANIALI Number</a></li>

                    </ul>
                </div>
            </div>
            <div>
                <input type="text" className="input input-bordered w-full max-w-xs"  />
            </div>
           
            <div className='w-[100%] flex justify-end'>
                <button className='btn btn-success w-[70%] text-white'>Search</button>

            </div>

        </div>
    )
}

export default VPI_PART_ONE