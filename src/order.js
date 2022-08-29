import React, { useState } from "react";
import axios from "axios";
import DataList from './dataget';


const token = localStorage.getItem('token_access');

function Orders() {
    const [OrderData, setOrderData] = useState([]);
    const [service, setService] = useState([]);
    const [link, setLink] = useState('');
    const [quantity, setQuantity] = useState('');

    const Order = () => {
        const data = {
            service: service,
            link: link,
            quantity: quantity
        }

        axios.post('http://127.0.0.1:8000/order/', data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }



    const GetData = () => {
        axios.get('http://127.0.0.1:8000/order/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setOrderData(res.data);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }

    const LogOut = () => {
        localStorage.removeItem('token_access');
        localStorage.removeItem('token_refresh');
        window.location.href = '/';
    }

    return (
        <div className="App">
            <header className="App-header">
                <input value={service} type="text" onChange={(e) => { setService(e.target.value) }} placeholder="service" />
                <input value={link} type="text" onChange={(e) => { setLink(e.target.value) }} placeholder="link" />
                <input value={quantity} type="text" onChange={(e) => { setQuantity(e.target.value) }} placeholder="quantity" />
                <button onClick={Order}>주문하기</button>
                <button onClick={GetData}>조회</button>
                <button onClick={LogOut}>로그아웃</button>

                <DataList OrderData={OrderData} />
            </header>
        </div>
    )
}

export default Orders;