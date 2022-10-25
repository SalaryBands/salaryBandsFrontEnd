import {useSearchParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';

function URLVerification () {


    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams);
    
    useEffect(() => {
        axios.post(`https://salarybandsapi.fly.dev/sessions/create?login_token=${searchParams}`, {

        }).then( (response) => {
            console.log(response);
        })
    }, [])
    return (
        console.log('verification successful!')

    )
}

export default URLVerification; 