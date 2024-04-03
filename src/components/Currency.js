import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency([event.target.value,event.target.name]);

        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
        })

    }
    return (
<div className='alert alert-secondary'>
    <div className='row'>
        <div className='col'>
            <label className="input-group-text" htmlFor="inputCurrency">Currency</label>
        </div>
        <div className='col'>
            <select className="custom-select" id="inputCurrency" onChange={handleCurrencyChange}>
                            <option value="£" name="Pound"> £ Pound</option>
                            <option value="$" name="Dollar"> $ Dollar</option>
                            <option value="€" name="Euro">€ Euro</option>
                            <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    </div>
    );
};

export default Currency;