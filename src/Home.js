import React from 'react'
import Header from './Common/Header'
import './Home.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";



function Home() {
  return (
    
    <div>
      
        <Header/>
        <div className='main'>
            <h1>Say Yes to The World</h1>
            <p>Pulvinar rhoncus eget non vulputate varius ullamcorper enim arcu mauris. Pharetra augue amet sit cursus. Leo commodo neque neque praesent. Aliquet tincidunt maecenas elementum eu ipsum erat. Velit quisque morbi nisl accumsan auctor at at nec.</p>
        </div>
        <div class="input">
                <label>Departure Airport</label><br></br>
                <span className='icon'><FaLocationDot /></span><input type="text"  placeholder='Where are you now?' ></input>
                
            </div>
            <div class="input1">
                <label className='one'>Arrival Airport</label><br></br>
                <span className='icon1'><FaLocationDot /></span> <input for='Location' type="text"  placeholder='Where are you going?' ></input>
            </div>
            <div class="input2">
                <span className='icon2'><MdOutlineDateRange /></span><label>Date</label><br></br>
                <input for='Location' type="text"  placeholder='When are you leaving?' ></input>
            </div>
            <div class="input3">
            <span className='icon3'><IoMdPerson /></span>
                <label>Travellers</label><br></br>
                <select className="passenger" > 
                <option className='pass' value="" disabled selected>Select number of passengers</option>
                <option value="1">1 passenger</option>
                <option value="2">2 passengers</option>
                <option value="3">3 passengers</option>
                <option value="4">4 passengers</option>
                </select>
            </div>--
            <div className='search'>
              <button>Search Your Flight</button>
            </div>
        </div>
  )
}

export default Home