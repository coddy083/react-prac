import React from 'react';
import './dataget.css';

function DataList(props) {
    console.log(props.OrderData);
    const CompleteStyle = {
        backgroundColor: 'yellow',
    }
    const FailStyle = {
        backgroundColor: '#ff0000',
        color: '#ffffff'
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>링크</th>
                        <th>시작수량</th>
                        <th>주문수량</th>
                        <th>상태</th>
                        <th>시작일</th>
                    </tr>
                </thead>
                <tbody>
                    {props.OrderData.map((data, index) => {
                        if (data.status === "완료") {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td><a href={data.link}>링크</a></td>
                                    <td>{data.start_count}</td>
                                    <td>{data.quantity}</td>
                                    <td style={CompleteStyle}>{data.status}</td>
                                    <td>{data.create_date}</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td><a href={data.link}>링크</a></td>
                                    <td>{data.start_count}</td>
                                    <td>{data.quantity}</td>
                                    <td style={FailStyle}>{data.status}</td>
                                    <td>{data.create_date}</td>
                                </tr>
                            )
                        }

                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DataList;