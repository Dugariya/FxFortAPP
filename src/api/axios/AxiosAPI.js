import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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


export { postData };