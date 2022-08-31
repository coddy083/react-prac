import './nav.css';
import { useState } from 'react';

function NavMenu() {
    const [MenuType, setMenuType] = useState('ORDER');

    const NewOrder = () => {
        console.log('NewOrder');
    }

    const OrderList = () => {
        setMenuType('NEWORDER');
    }

    const Logout = () => {
        localStorage.removeItem('token_access');
        localStorage.removeItem('token_refresh');
        window.location.reload();
    }

    return (
        <nav className='nav'>
            <ul>
                <li onClick={NewOrder}>주문</li>
                <li onClick={OrderList}>{MenuType}</li>
                <li onClick={Logout}>로그아웃</li>
            </ul>
        </nav>
    )
}

export default NavMenu;