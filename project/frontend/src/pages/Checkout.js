import React from 'react';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './Checkout.css';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

// And now we can use these
const CheckoutForm = () => {
    return (
        <>
            <h1>Checkout</h1>
            <h2>Shipping Address</h2>
            <Formik
                initialValues={{
                    name: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '', //select dropdown
                    zip: '',
                    email: '',
                    nameCard: '',
                    typeCard: '',
                    ccNumber: '',
                    exp_month: '',
                    exp_year: '',
                    secCode: '',
                    billingZip: ''

                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(40, 'Must be 26 characters or less')
                        .required('Required'),
                    address1: Yup.string()
                        .required('Required'),
                    city: Yup.string()
                        .required('Required'),
                    state: Yup.string()
                        .oneOf(
                            ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                                'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                                'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                                'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon',
                                'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont',
                                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
                            'Invalid State'
                        )
                        .required('Required'),
                    zip: Yup.string()
                        .min(5, 'Must be at least 5 digits')
                        .max(9, 'Zip code can not be longer than 9 digits')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    nameCard: Yup.string()
                        .max(40, 'Must be 26 characters or less')
                        .required('Required'),
                    typeCard: Yup.string()
                        .oneOf(
                            ['Visa', 'Mastercard', 'American Express', 'Discover'], 'Invalid Card Type'
                        )
                        .required('Required'),
                    ccNumber: Yup.string()
                        .max(20, 'Must be 20 digits or less')
                        .min(8, 'Must be at least 8 digits')
                        .required('Required'),

                    exp_month: Yup.string()
                        .oneOf(
                            ['1', '2', '3', '4', '5', '6', '7',
                                '8', '9', '10', '11', '12'],
                            'Invalid Month'
                        )
                        .required('Required'),
                    exp_year: Yup.string()
                        .oneOf(
                            ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
                            'Invalid Year'
                        )
                        .required('Required'),
                    secCode: Yup.string()
                        .min(3, 'Must be 3 or 4 digits long')
                        .max(4, 'Must be 3 or 4 digits long')
                        .required('Required'),
                    billingZip: Yup.string()
                        .min(5, 'Must be at least 5 digits')
                        .max(9, 'Zip code can not be longer than 9 digits')
                        .required('Required'),


                })}

                onSubmit={(values, { setSubmitting }) => {
                    console.log("in the frontend", values)
                    HttpUtil.post(ApiUtil.API_CHECKOUT, values)
                        // when the results return
                        .then(
                            res =>
                                console.log("data from backend to front end:", res)          
                        )
                        //return  <Redirect  to="/confirmation" />    
                        //this.props.history.push('/confirmation')  
                }}
            >
                <Form>
                    <MyTextInput
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Jane Smith"
                    />

                    <MyTextInput
                        label="Address 1"
                        name="address1"
                        type="text"
                        placeholder="Address Line 1"
                    />

                    <MyTextInput
                        label="Address 2"
                        name="address2"
                        type="text"
                        placeholder="Address Line 2"
                    />

                    <MyTextInput
                        label="City"
                        name="city"
                        type="text"
                        placeholder="City"
                    />
                    <MySelect label="State" name="state">
                        <option value="">Select a state</option>
                        <option value="Alabama">AL</option>
                        <option value="Alaska">AK</option>
                        <option value="American Samoa">AS</option>
                        <option value="Arizona">AZ</option>
                        <option value="Arkansas">AR</option>
                        <option value="California">CA</option>
                        <option value="Colorado">CO</option>
                        <option value="Connecticut">CT</option>
                        <option value="Delaware">DE</option>
                        <option value="District of Columbia">DC</option>
                        <option value="Florida">FL</option>
                        <option value="Georgia">GA</option>
                        <option value="Guam">GU</option>
                        <option value="Hawaii">HI</option>
                        <option value="Idaho">ID</option>
                        <option value="Illinois">IL</option>
                        <option value="Indiana">IN</option>
                        <option value="Iowa">IA</option>
                        <option value="Kansas">KS</option>
                        <option value="Kentucky">KY</option>
                        <option value="Louisiana">LA</option>
                        <option value="Maine">ME</option>
                        <option value="Maryland">MD</option>
                        <option value="Massachusetts">MA</option>
                        <option value="Michigan">MI</option>
                        <option value="Minnesota">MN</option>
                        <option value="Mississipi">MS</option>
                        <option value="Missouri">MO</option>
                        <option value="Montana">MT</option>
                        <option value="Nebraska">NE</option>
                        <option value="Nevada">NV</option>
                        <option value="New Hampshire">NH</option>
                        <option value="New Jersey">NJ</option>
                        <option value="New Mexico">NM</option>
                        <option value="New York">NY</option>
                        <option value="North Carolina">NC</option>
                        <option value="North Dakota">ND</option>
                        <option value="Northern Mariana Islands">MP</option>
                        <option value="Ohio">OH</option>
                        <option value="Oklahoma">OK</option>
                        <option value="Oregon">OR</option>
                        <option value="Pennsylvania">PA</option>
                        <option value="Puerto Rico">PR</option>
                        <option value="Rhode Island">RI</option>
                        <option value="South Carolina">SC</option>
                        <option value="South Dakota">SD</option>
                        <option value="Tennessee">TN</option>
                        <option value="Texas">TX</option>
                        <option value="U.S. Virgin Islands">VI</option>
                        <option value="Utah">UT</option>
                        <option value="Vermont">VT</option>
                        <option value="Virginia">VA</option>
                        <option value="Washington">WA</option>
                        <option value="West Virginia">WV</option>
                        <option value="Wisconsin">WI</option>
                        <option value="Wyoming">WY</option>
                    </MySelect>

                    <MyTextInput
                        label="Zip code"
                        name="zip"
                        type="text"
                        placeholder="Zip code"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="myemail@gmail.com"
                    />

                    <h2>Payment Information</h2>
                    <MyTextInput
                        label="Cardholder's Name"
                        name="nameCard"
                        type="text"
                        placeholder="Cardholder name"
                    />

                    <MySelect label="Credit card type" name="typeCard">
                        <option value="">Select credit card type</option>
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="American Express">American Express</option>
                        <option value="Discover">Discover</option>
                    </MySelect>


                    <MyTextInput
                        label="Credit card number"
                        name="ccNumber"
                        type="number"
                        placeholder="Insert credit card number"
                    />

                    <MySelect label="Expiration month" name="exp_month">
                        <option value="">Select expiration month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </MySelect>

                    <MySelect label="Expiration year" name="exp_year">
                        <option value="">Select expiration year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                    </MySelect>


                    <MyTextInput
                        label="Security code"
                        name="secCode"
                        type="number"
                        placeholder="Insert security code"
                    />

                    <MyTextInput
                        label="Billing zip code"
                        name="billingZip"
                        type="number"
                        placeholder="Billing zip code"
                    />
                    <button type="submit">Submit</button>

                </Form>
            </Formik>
        </>
    );
};
export default CheckoutForm;