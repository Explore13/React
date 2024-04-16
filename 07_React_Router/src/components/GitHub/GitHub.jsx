import React, { useState, useEffect } from 'react';
import {useLoaderData} from 'react-router-dom';



function GitHub() {
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Explore13')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    const data = useLoaderData()
    
    return (
        <div className='text-center flex justify-center items-center flex-col-reverse gap-3 m-4 bg-gray-600 text-white p-4 text-2xl font-bold'>
            GitHub Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} height={300} />
        </div>
    );
}

export default GitHub;

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/Explore13')
    return res.json()
}