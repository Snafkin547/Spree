import { Component, React, useEffect, useState } from 'react';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';


    class UserInformation extends Component {    
        render() {
            return (
                <li className='user_card'>
                    <div>
                        <span className="user_name"> { this.props.firstName } </span>
                    </div>        
                    <div>
                        <span className="user_last_name"> { this.props.lastName } </span>
                    </div> 

                    <div>
                        <span className="user_address"> { this.props.address } </span>
                    </div> 
                </li>
            )
        }
    }
    
    
    class UserProfile extends Component {
        constructor(props) {
            super(props);
            this.state = {firstName: {}, lastName: {}, address: {}};
        }
        componentDidMount () {
            fetch(ApiUtil.API_GETUSERINFO+'?'+ new URLSearchParams({
                user_id: 405
            }).toString())
               
            
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({firstName: result[0], lastName: result[1], address: result[3]});
            })};
    
        // render() ask components to describe what they want their section of the UI to look like based on the current combination of props and state
        render() {
            // product proprierties 
            const userDetails = {
                "userInformation": [this.state.firstName, 
                                        this.state.lastName,
                                             this.state.address] 
            }
            // API path
            const userInformationComponent = userDetails.userInformation.map(userInformationObject => {
                return (
                    // ... = spread operator, it deconstructs the object in this case product information object, split up the each of the fields and pass them as a props in the product information
                    <userInformation {...userInformationObject} />
                )
            })
        
          // how it will show in the DOM
          return (  
            <ul className="carousel__list">{userInformationComponent}</ul>
          ); 
      }
    }

export default UserProfile;
    