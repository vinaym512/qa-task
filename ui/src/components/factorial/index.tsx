import React, { useState } from 'react';
import { Layout } from '../shared/layout';
import { FetchData } from '../shared/utiliy';

export const Factorial = () => {
    const [result, setResult] = useState<number>()
    const [input, setInput] = useState<number>()

    const handleClick = async () => {
        // input && setResult(await factorial(input))
        input && setResult(await FetchData(input, "factorial"))
    }

    return (
        <Layout pageId="factorial">
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <p>
                Calculate Factorial of given number
            </p>
            <input type='text' id='factBox' onChange={(e) => setInput(Number(e.target.value))} value={input} />
            <button id='factCalc' onClick={handleClick} >Calculate</button>
            {result && <div id= 'output'> Factorial of {input} is {result} </div>}
            
        </Layout>

    )
};