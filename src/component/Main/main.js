import { useState,useEffect } from 'react';
import './main.css';

export default function Main(){
    const [val,setVal] = useState(null);
    const [coinVal,setCoinVal] = useState([]);
    const [searchBtn,setSearchBtn] = useState(false);
    async function fetchData(...coins) {
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins}`);
            const data = await response.json();
            const newData = data.splice(0,50);
            setCoinVal(newData);
        }catch(error){
            alert(`Error fetching data: ${error.message}`);
        }
    }
    useEffect(()=>{
        fetchData("");
    },[]);
    
    useEffect(()=>{
        fetchData(val);
    },[searchBtn]);
    return (
        <main>
            <div id='first'>
                <h1>Ready to dive into crypto? <br/> The crypto space is waiting for you!</h1>
                <p>where coins don’t jingle, but they definitely make you smile!</p>
            </div>
            <div id='second'>
                <input id='search-input' placeholder='Search Crypto' onChange={(e)=>setVal(e.target.value)}></input>
                <button id='search-btn' onClick={()=>setSearchBtn(!searchBtn)}>Search</button>
            </div>
            <div id='third'>
                <h3>Top 50 Popular Cryptocurrency Prices, 24H Change and Market Cap:</h3>
                <table>
                    <thead>
                        <tr>
                            <th id='idx'>#</th>
                            <th id='coin'>Coins</th>
                            <th>Price</th>
                            <th>24H Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coinVal.map((val,idx)=>{
                                return <tr key={idx}>
                                    <td className='idx'>{idx+1}</td>
                                    <td className='coin-info'><img className='coin-img' src={val.image} alt={val.name}/>
                                        <span>{`${val.name}-${val.symbol}`}</span>
                                    </td>
                                    <td>&#36;{`${val.current_price}`}</td>
                                    <td id={val.price_change_percentage_24h>0?'Green':'Red'}>{`${val.price_change_percentage_24h.toFixed(2)}%`}</td>
                                    <td>&#36;{val.market_cap}</td>
                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}