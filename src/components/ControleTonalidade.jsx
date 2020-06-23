import React from 'react'
import  './ControleTonalidade.css'

export default props=>{

    return (

        <div>

            <select className = "blue-gradient" name="" id="" onChange ={props.onChange}>
                <option value="">Tonalidade</option>
                <option value="c">C</option>
                <option value="db">Db</option>
                <option value="d">D</option>
                <option value="eb">Eb</option>
                <option value='e'>E</option>
                <option value="f">F</option>
                <option value="gb">Gb</option>
                <option value="g" >G</option>
                <option value="ab">Ab</option>
                <option value="a" >A</option>
                <option value="bb">Bb</option>
                <option value="b" >B</option>
            </select>

        </div>
    )
}