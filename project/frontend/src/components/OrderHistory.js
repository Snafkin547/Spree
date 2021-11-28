export default function OrderHistory(props) {


    const {
        itemName="",
        itemPrice=0,
    } = props;

    return (
        <div>
            <h3>My Orders</h3>
            <div>{itemName}</div>
            <div>{itemPrice}</div>
        </div>
    );
}