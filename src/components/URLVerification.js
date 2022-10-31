import { useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';


function URLVerification () {

    const navigate = useNavigate();

    let params = new URLSearchParams(window.location.search)

    let token = params.get('login_token');

    console.log(token);
    
    useEffect(() => {
        axios.post(`https://salarybandsapi.onrender.com/sessions/create?login_token=${token}`, {

        }).then( (response) => {
            console.log('this is the response', response.data);
            localStorage.setItem('token', response.data['auth_token'])
        }).then (() => {
            navigate('/UserPathway')
        })
    }, [])
    return (
        console.log('verification successful!', token)

    )
}

export default URLVerification; 