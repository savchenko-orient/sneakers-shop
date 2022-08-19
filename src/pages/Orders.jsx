import React from 'react';
import Card from '../components/Card';
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://62e927ef01787ec712126779.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Виникла помилка під час запиту замовленнь!');
                console.log('error: ', error);
            }
        })();
    }, []);

    return (
        <div className="content p-40">
            <div className="mb-40 align-center justify-between d-flex">
                <h1>Мої замовлення</h1>
            </div>
            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(10)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item} />
                ))}
            </div>
        </div>
    )
}

export default Orders;