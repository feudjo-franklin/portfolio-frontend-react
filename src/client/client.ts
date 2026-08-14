import axios from "axios";
import ClientModel from "../models/ClientModel";

const API_VERSION = "/api/v1";

export const fetchGetData = (uri: string) => {
    const url =`${API_VERSION}${uri}`;

    return axios.get(url)
    .catch((error: any) => {
        // Handle exception errors
        console.error("Error fetching data for URL:", url, "Error", error.message);
        // You can throw the error again if you want to handle it elsewhere
        throw error;
    });
}

const fetchPostData = (uri: string, payload: ClientModel) => {

    console.log("payload: ", payload)
    const url = `${API_VERSION}${uri}`;
    return axios.post(url, payload)
        .catch( (error: any) => {
            // Handle exceptions/errors
            console.error('Error fetching data for URL:', url, 'Error', error.message);
            // You can throw the error again if you want to handle it elsewhere
            //throw error;
        })
}

const fetchGetDataArrayBuffer = (uri: string) => {

    const url = `${API_VERSION}${uri}`;
    
    return axios.get(url, {responseType: 'arraybuffer'});
   
}

export {fetchGetDataArrayBuffer, fetchPostData};