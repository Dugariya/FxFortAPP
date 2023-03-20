import axios from 'axios';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

const postData = async (url, data) => {

    const res = await axios.post(url, data,
        {
            headers: { 'Content-Type': 'application/json', },
        }

    ).catch(err => {
        return err.response;
    });
    // console.log("Response from axios", res.data);
    return res;
}

const postApiData = async (url, data) => {
    const val = await getUserTokenData();
    const res = await axios.post(url, data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${val}`
            },
        }

    ).catch(err => {
        return err.response;
    });
    // console.log("Response from axios", res.data);
    return res;
}
const getData = async (url, options) => {
    const val = await getUserTokenData();
    const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${val}`, ...options }
    }).catch(err => {
        console.log(err, 'error');
        return err;
    });
    return res.data
}
const getUserTokenData = async () => {
    try {
        const res = await RNSecureStorage.exists("userToken")
        if (res) {
            const token = await RNSecureStorage.get("userToken")
            return token
        }
    } catch (e) {
        console.log(e);
    }
}

export { postData, getData, postApiData };