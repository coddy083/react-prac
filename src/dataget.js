import './dataget.css';
import NavMenu from './nav';

function DataList(props) {
    const CompleteStyle = {
        backgroundColor: 'yellow',
    }
    const FailStyle = {
        backgroundColor: '#ff0000',
        color: '#ffffff'
    }
    return (
        <NavMenu />,
        <div>
            <table>
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>링크</th>
                        <th>시작수량</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {props.OrderData.map((data, index) => {
                        if (data.status === "완료") {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td><a href={data.link}>{data.link}</a></td>
                                    <td>{data.start_count}</td>
                                    <td style={CompleteStyle}>{data.status}</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td><a href={data.link}>{data.link}</a></td>
                                    <td>{data.start_count}</td>
                                    <td style={FailStyle}>{data.status}</td>
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