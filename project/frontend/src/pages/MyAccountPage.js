import UserProfile from '../components/UserProfile';
import OrderHistory from '../components/OrderHistory';
import Layout from '../components/Layout';



export default function MyAccountPage() {
    return (
        
        <Layout>
            <div>
                <UserProfile 
                    firstName="Michael"
                    lastName="Jordan"
                    email="michael@jordan.com"
                />
            </div>
            <div>
                <OrderHistory
                    itemName="iPhone 13 Pro"
                    itemPrice="1200"
                />
            </div>
       </Layout>
       
    );
}