import React, { useState } from 'react';
import { Layout } from '../shared/layout';
import { FetchData } from '../shared/utiliy';

export const Fibonacci = () => {
    const [result, setResult] = useState<number>()
    const [input, setInput] = useState<number>()

    const handleClick = async () => {
        input && setResult(await FetchData(input, "fibonacci"))
    }

    return (
        <Layout pageId="fibonacci">
            <p>
                Calculate n-th Fibonacci number - Fib(n)
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <input type='text' id='fibBox' onChange={(e) => setInput(Number(e.target.value))} value={input} />
            <button  id='fibCalc' onClick={handleClick} >Calculate</button>
            {result && <div id= 'output'> Fibonacci number at position {input}  is {result}</div>}
        </Layout>
    );
};