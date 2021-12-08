import UserProfile from '../components/UserProfile';
import OrderHistory from '../components/OrderHistory';
import Layout from '../components/Layout';

export default function MyAccountPage() {
    return (
        <Layout>
            <div>
                <header>My Info</header>
                <UserProfile />
            </div>
            <div>
                <header>My Orders</header>
                <OrderHistory/>
            </div>
       </Layout>
       
    );
}