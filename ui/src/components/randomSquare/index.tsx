import React, { useState } from 'react';
import { Layout } from '../shared/layout';
import { FetchData } from '../shared/utiliy';

export const RandomSquare = () => {
    const [result, setResult] = useState<number>()
    const [input, setInput] = useState<number>()

    const handleClick = async () => {
        input && setResult(await FetchData(input, "random-square"))
    }

    return (
        <Layout pageId="randomSquare">
            <p>
                Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <input type='text' id='sqrBox' onChange={(e) => setInput(Number(e.target.value))} value={input} />
            <button  id='sqrCalc' onClick={handleClick} >Calculate</button>
             {result && <div id= 'output'>Random square of {input}  is {result}</div>}
        </Layout>
    );
};