import React from 'react';
import logo from '../logo.svg';
import dado from '../dado.svg';
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

export default function Bet({ number }) {
    const [result, setResult] = useState(0);
    const [msg, setMsg] = useState('');

    const play = () => {
        setResult(Math.floor(Math.random() * 7));
    }
    const validate = () => {
        if (result !== 0)
            result == number ? setMsg('Apuesta ganada!🥳') : setMsg('Apuesta perdida 😭')
    }
    
    useEffect(validate, [result])

    return (
        <>
            <header className="App-header">
                <img src={dado} className="App-logo" alt="logo" />
                <br />
                <br />
                <button onClick={play} className="btn rounded"><span className="text-green">Lanzar Dado !!</span></button>
                <p>Resultado: </p>
                <label>{result}</label>
                <p>{msg}</p>

            </header>
        </>
    )
}
Bet.propTypes = {
    number: PropTypes.number.isRequired
}