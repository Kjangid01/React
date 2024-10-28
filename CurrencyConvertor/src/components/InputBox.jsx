import React from 'react'

function InputBox({
    label, 
    amount,
    onAmountchange,
    onCurrencychange,
    selectCurrency,
    currencyOptions=[]
    }) {
    return (
        <div className='bg-white rounded-lg flex p-4'>
            
            <div className='w-1/2 text-left'>
                <label className='mb-2 text-black/70 inline-block'>{label}</label>

                <input type='number' 
                       className='w-full bg-transparent p-2 border-2 border-gray-200 radius-md'
                       placeholder="Amount"
                       value={amount}
                       onChange={(e)=>onAmountchange(Number(e.target.value))}/>
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='mb-2 w-full'>Currency Type</p>
                <select className='rounded-md cursor-pointer px-3 py-1 bg-gray-100'
                        value={selectCurrency}
                        onChange={(e)=>onCurrencychange(e.target.value)}>

                            {currencyOptions.map((currency)=>
                            <option key={currency} value={currency}>
                                {currency}</option>)}
                    
                </select>
            </div>

        </div>
    )
}

export default InputBox