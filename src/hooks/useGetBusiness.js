import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default (id) => {
    const [business, setBusiness] = useState(null);

    const searchApi = async (id) => {
        try{
            const response = await yelp.get(`/${id}`);
            setBusiness(response.data)
        }catch(e) {
            console.log(e.response);
        }
    }

    useEffect( () => {
        searchApi(id)
    }, []);

    return [searchApi, business]
};