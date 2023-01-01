import React from "react";


const UserDetail = ({ user }) => {
    // const { user } = props;

    // const chosen = user || {};

    console.log(user)

    return (

        <div id="info-content">
            <div><b>User selected:</b> {user.firstName + " " + user.lastName}</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5"  readonly>
                    {user.description}
                </textarea>
            </div>

            <div><b>Address:</b> {user.address.streetAddress}</div>

            console.log({user.address.streetAddress})
            <div><b>City:</b> {user.address.city}</div>
            <div><b>State:</b> {user.address.state}</div>
            <div><b>Zip:</b> {user.address.zip}</div>
        </div>



    );
};
export default UserDetail;