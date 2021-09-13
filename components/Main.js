import React, { useState } from "react";
import styles from '../styles/Home.module.css'

export default function Home() {
    const [cookieStands, setcookieStands] = useState([])
    function creatTabel(event) {
    event.preventDefault();
    const cookieStandsCity = {
    location: event.target.location.value,
    maximumPrehour: event.target.maximumPrehour.value,
    minimum: event.target.minimum.value,
    avarg: event.target.avarg.value

    }

    let created = cookieStandsCity
    created = JSON.stringify(created)
    setcookieStands(created)

    }
    return (
        <div>
        <div className={styles.grid}>
        <h2 > Creat Cookie Stand </h2>
        <form onSubmit={creatTabel}>
        <div>
        <label for="location" >Location</label>
        <input type="text" name="location" id="location"  />
        </div>
        <div >
        <div>
        <label for="minimum" >minimumumum Customers Per Hour <br/></label>
       
        <input type="text" name="minimum" id="minimum" className="" />
        </div>
        <div >
        <label for="maximumPrehour" >maximumPrehourimum Customers per hour<br/></label>
        
        <input type="text" name="maximumPrehour" id="maximumPrehour" className="" />
        </div>
        <div >
        <label for="avarg" >Average Cookies per Sale <br/></label>
        
        <input type="text" name="avarg" id="avarg" className="" />
        </div>
        <div >
        <button >Create </button>
        </div>
        </div>
        </form>
        </div>
        <div>
        <h3> Report Table Cominimumg Soon</h3>
                {cookieStands &&<p >{cookieStands}</p>

}
        </div>

        </div>
    )
}