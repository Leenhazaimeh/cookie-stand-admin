import React, { useState } from "react";
export default function Home() {

    const [cookieStands, setcookieStands] = useState([])

    function tabelHandelar(event) {

        event.preventDefault();

        const tabelHandelar = {

            location: event.target.location.value,
            maximumPrehour: event.target.maximumPrehour.value,
            minimum: event.target.minimum.value,
            avg: event.target.avg.value
        }
      
        // let created = tabelHandelar
        // created = JSON.stringify(created)
        // console.log(created)
        setcookieStands([...cookieStands,tabelHandelar])

    }
    return (
     <div>
    <div className="w-2/3 h-56 mx-auto my-10 bg-green-300 rounded-lg ">
    <h2 className="flex items-center justify-center text-xl h-12 "> Cookie Stand Admin</h2>

    <form onSubmit={tabelHandelar}>
 <div>
                       
     <label for="location" className="ml-3 mr-2">Location</label>
     <input type="text" name="location" id="location" className="flex-auto w-10/12 mt-2 rounded-sm bg-gray-200" />
     </div>
    <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
    <div >
     <label for="minimum" className="pr-1">minimum Customers Per Hour</label>
    <br/>
   <input type="text" name="minimum" id="minimum" className="" />
    </div>
   <div>
   <label for="maximumPrehour" className="pr-1">maximum Customers per hour
    </label>
    <br/>
    <input type="text" name="maximumPrehour" id="maximumPrehour" className="" />
    </div>
     <div>
     <label for="avg" className="pr-1">Average Cookies per Sale </label>
    <br/>
    <input type="text" name="avg" id="avg" className="" />

    </div>
    <div className="mx-3 my-1 font-semibold bg-green-500 rounded flex-grow ">
    <button className="ml-16 text-xl h-12" >Create </button>
    </div>
    </div>


    </form>

    </div>
    <h3> Report Table Cominig Soon...</h3>
    <div className="flex items-center justify-center text-xl h-12 flex-col">
    
    {
                    cookieStands.map(item => {
                        return (
                            <p class="m-2 text-xl">{JSON.stringify(item)}</p>
                        )
                    })
                }
            </div>

        </div>
    )
}