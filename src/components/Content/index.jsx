import React from 'react';
import {useState} from 'react'

Content.propTypes = {
};

function Content({data}) {
    const [info,setInfo] = useState(0)
    const [money,setMoney] = useState(0)

    
    var priceProduct = 5000;
    // Increament - tăng giá trị
    const handelInceament = () =>{
        if(info >=0){
            setInfo( preValue => preValue +1)
        }else{
            setInfo(0)
        }
        setMoney(priceProduct * info)
    }

    // Decreament -  Giảm value
    const handelDecreament = () =>{
        if(info >0 ){
            setInfo(preValue => preValue - 1)
        }else{
            setInfo(0)
        }
        setMoney(priceProduct * info - priceProduct)
    }

    

    return (
        <>
            <h1>{info}</h1>
            <ul>
                <li><button type='button' onClick={handelInceament}>+</button></li>
                <li><button type='button' onClick={handelDecreament}>-</button></li>
            </ul>
            <ul>
                <li >Total Money: {money} </li>
            </ul>
            <h1>MAIN CONTENT</h1>
            {
                data.map(item => <p key={item.id}>{item.fullname}</p>)
            }
        </>
    )
}

export default Content;