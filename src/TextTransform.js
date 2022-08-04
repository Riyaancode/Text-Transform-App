import { useState } from "react"
import React from "react"

function TextTransform() {

    const [input, updtInput] = useState();

    var transUpText = () =>{
        let newInput = input.toUpperCase();
        updtInput(newInput)
    }

    var transLowerText = () =>{
        let newInput = input.toLowerCase();
        updtInput(newInput)
    }

    var addStateVal = (event)=>{
        updtInput(event.target.value);
    }
    return (
        <>

            <div class="form-floating">
                <textarea className="form-control py-4" style={{ height: "200px" }} value={input} onChange={addStateVal} id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Enter Text here to transform</label>
            </div>
            <div className="d-flex justify-content-center"> 
            <button type="button" className="btn btn-primary my-3" onClick={transUpText}>Upper Case</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={transLowerText}>Lower Case</button>
            </div>
        </>
    )
}

export default TextTransform;