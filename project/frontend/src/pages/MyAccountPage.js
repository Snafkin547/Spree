import UserProfile from '../components/UserProfile';
import OrderHistory from '../components/OrderHistory';
import Layout from '../components/Layout';
import styles from '../components/Layout.module.css'

export default function MyAccountPage() {
    return (
        <Layout>
            <div className="myInfo">
                <h1 className={styles.heading}>My Info</h1>
                <UserProfile />
            </div>
            <div>
            <h1 className={styles.heading}>My Orders </h1>
                <OrderHistory/>
            </div>
       </Layout>
       
    );
}