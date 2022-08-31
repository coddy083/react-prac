import './order.css';
import './nav.css';
import React, { useState } from "react";
import axios from "axios";
import DataList from './dataget';

const token = localStorage.getItem('token_access');

function Orders() {
    const [OrderData, setOrderData] = useState([]);
    const [service, setService] = useState('');
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
                setService('');
                setLink('');
                setQuantity('');
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
                if (res.status === 200) {
                    setOrderData(res.data);
                    setOrderlist(true)
                } else if (res.status === 401) {
                    setOrderlist(false)
                    alert('로그인이 필요합니다.')
                }
            })
            .catch(err => {
                console.log(err);
            }
            )
    }

    const [Orderlist, setOrderlist] = useState(false);

    const LogOut = () => {
        localStorage.removeItem('token_access');
        localStorage.removeItem('token_refresh');
        window.location.href = '/';
    }

    function NavMenu() {
        return (
            <nav className='nav'>
                <ul>
                    <li onClick={() => { setOrderlist(false) }}>주문</li>
                    <li onClick={GetData}>주문내역</li>
                    <li onClick={LogOut}>로그아웃</li>
                </ul>
            </nav>
        )
    }

    if (Orderlist) {
        return (
            <div className="order">
                <NavMenu />
                <DataList OrderData={OrderData} />
            </div>
        )
    } else {
        return (
            <div className="order">
                <NavMenu />
                <h1>주문하기</h1>
                <select onChange={(e) => { setService(e.target.value) }}>
                    <option value="">서비스 선택</option>
                    <option value="1">1번</option>
                    <option value="2">2번</option>
                </select>
                <input value={link} type="text" onChange={(e) => { setLink(e.target.value) }} placeholder="링크" />
                <input value={quantity} type="text" onChange={(e) => { setQuantity(e.target.value) }} placeholder="수량" />
                <button onClick={Order}>주문하기</button>
            </div>
        )
    }
}

export default Orders;