import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [businesses, setBusinesses] = useState([]);

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'London'
                }
            });
            setBusinesses(response.data.businesses)
        }catch(e) {
            console.log(e.response);
        }
    }

    useEffect( () => {
        searchApi('pasta')
    }, []);

    return [searchApi, businesses]
};