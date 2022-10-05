import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2FbsKLDEVJSX5mbWU505HwM31QsPdVDVO_TIYNWqeiUjjeZ1Y8Bzd5LoDSQyVMqDR3pbP0sGP1-U1jdFtEbxDBZMBEjO1aI-l8PYgPn5QPNLe4bdHcsrOrYfVPxwYXYx'
    }
});