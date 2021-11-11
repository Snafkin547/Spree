import { useState } from "react";
import ReactDOM from "react-dom";
import './Checkout.css';

function CheckoutForm() {
  const [state, setMyState] = useState("Massachusetts");
  const [inputs, setInputs] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMyState(event.target.value)
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      setValidated(true);
      //alert("Thank you for submitting your order! You will receive a confirmation email shortly.");
    }
    
  };


  return (
    <div className="checkoutForm">
      <form onSubmit={handleSubmit}>
          <h1>Order Summary </h1>

          <h1>Shipping Address</h1>
          <br></br>

          <label>Name: 
          <input 
              type="text" 
              required={true}
              name="nameShipping" 
              placeholder="Enter name"
              value={inputs.nameShipping || ""} 
              onChange={handleChange}
          />
          </label>
          <label>Address Line 1: 
          <input 
              type="text" 
              required={true}
              name="address1" 
              placeholder="Address Line 1"
              value={inputs.address1 || ""} 
              onChange={handleChange}
          />
          </label>
          <label>Address Line 2: 
          <input 
              type="text" 
              name="address2" 
              placeholder="Address Line 2"
              value={inputs.address2 || ""} 
              onChange={handleChange}
          />
          </label>
          <label>City: 
          <input 
              type="text" 
              required={true}
              name="city" 
              placeholder="Enter city"
              value={inputs.city || ""} 
              onChange={handleChange}
          />
          </label>
          <label>State:  
          <select value={state} onChange={handleChange}>
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
          </select>
          </label>
          <label>Zipcode: 
          <input 
              type="number" 
              required={true}
              name="zip" 
              placeholder="Zipcode"
              value={inputs.zip || ""} 
              onChange={handleChange}
          />
          </label>
          <label>Email address:
          <input 
              type="email" 
              required={true}
              name="email" 
              placeholder="Email address"
              value={inputs.email || ""} 
              onChange={handleChange}
          />
          </label>
          <br></br>

          <h1>Payment Information</h1>
          <label>Name on Card: 
              <input 
              type="text"
              required={true}
              name="nameCard" 
              placeholder="Enter name on credit card"
              value={inputs.nameCard || ""} 
              onChange={handleChange}
              />
          </label>
          <label>Credit card number: 
              <input 
              type="number" 
              required={true}
              minLength={8}
              maxLength={19}
              name="ccNumber" 
              placeholder="Credit card number"
              value={inputs.ccNumber || ""} 
              onChange={handleChange}
              />
          </label>
          <label>Expiration month:  
              <select value={state} onChange={handleChange}>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">Decembe</option>
              </select>
          </label>
          <label>Expiration year: 
              <select value={state} onChange={handleChange}>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
              </select>
          </label> 
          <label>Security code: 
              <input 
              type="number" 
              required={true}
              name="secCode" 
              placeholder="Security code"
              value={inputs.secCode || ""} 
              onChange={handleChange}
              />
          </label>
          <label>Billing zipcode: 
              <input 
              type="number" 
              required={true}
              name="billingZip" 
              placeholder="Billing zipcode"
              value={inputs.billingZip || ""} 
              onChange={handleChange}
              />
          </label>
          <button type = "submit" id= "submitBtn" className = "submitBtn" onClick={handleSubmit}> SUBMIT</button>
      </form>
    </div>
  )
}

ReactDOM.render(<CheckoutForm />, document.getElementById('root'));
export default CheckoutForm;