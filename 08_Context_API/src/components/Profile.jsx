import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import userContext from '../context/UserContext';

function Profile() {
    const {User} = useContext(userContext);
    console.log(User)

 if (!User) return <h3>Please Login Your Account</h3>
 return <h3>Hare Krishna @{User}</h3>
}
export default Profile