import { useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import { Waveform } from '@uiball/loaders';
import axios from 'axios';
import {useEffect, useState} from 'react';


function URLVerification () {

    const navigate = useNavigate();

    let params = new URLSearchParams(window.location.search)

    let token = params.get('login_token');

    console.log(token);
    
    useEffect(() => {
        axios.post(`https://salarybandsapi.fly.dev/sessions/create?login_token=${token}`, {

        }).then( (response) => {
            console.log('this is the response', response.data);
            localStorage.setItem('token', response.data['auth_token'])
        }).then (() => {
            navigate('/UserPathway')
        })
    }, [])
    return (
        <div className="wrapper">
            <div className='loadingAnimation'>
                <Waveform
                    size={40}
                    lineWeight={3.5}
                    speed={1}
                    color="#088AB2"
                />
            </div>
        </div>

    )
}

export default URLVerification; 