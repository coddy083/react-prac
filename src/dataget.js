import React, { useState } from 'react';
import axios from 'axios';

function DataList(props) {
    console.log(props.OrderData);

    return (
        <div>
            <h1>DataList</h1>
            <table>
                <thead>
                    <tr>
                        <th>주문자</th>
                        <th>시작수량</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {props.OrderData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.user_name}</td>
                                <td>{data.start_count}</td>
                                <td>{data.status}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DataList;