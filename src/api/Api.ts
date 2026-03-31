


import axios, { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useGetType, usePostType } from './ApiType';
import { useSelector } from 'react-redux';
import { APP_BASE_URL } from './Url';

// Create an axios instance
export const instance = axios.create({
    baseURL: APP_BASE_URL,
    timeout: 20000,
});


export const useGet: useGetType = ({
    endpoint,
    getInitial = false,
    reqBody = undefined,
    interProcess,
    getFullResponse = false,
    authToken
}) => {
    const [data, setData] = useState<any | null>(null)
    const [body, setBody] = useState<any>({
        reqBody: {
            ...reqBody
        }
    });
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);
    const [makeCall, setMakeCall] = useState<number>(getInitial ? 1 : 0);

    const get = useCallback((innerBody: any) => {
        innerBody && setBody(innerBody);
        setMakeCall(_ => _ + 1);
    }, [makeCall, setMakeCall]);
    const reset = useCallback((resetData: any = null) => {
        setData(resetData);
    }, []);
    const token = useSelector((state: any) => state.authReducer.token)
    useEffect(
        () => {
            if (makeCall > 0) {
                setLoader(true);
                const params = new URLSearchParams({
                    ...(body?.reqBody ? JSON.parse(JSON.stringify(body?.reqBody)) : {})
                })
                instance.get?.(`${endpoint}?${params}`, {
                    'headers': {
                        ...(
                            (token || authToken) ?
                                { 'Authorization': `Bearer ${token || authToken}` }
                                : {

                                }
                        )
                    }
                })
                    .then(responseData => {
                        if (getFullResponse) {
                            setData(responseData)
                            return
                        } else {
                            if (responseData) {
                                setData(
                                    Array.isArray(responseData.data.data) ?
                                        [...(interProcess ? interProcess(responseData)
                                            : responseData.data.data)] :
                                        {
                                            ...(interProcess ? interProcess(responseData) : responseData.data.data)

                                        })
                                return;
                            }
                            throw responseData;
                        }
                    })
                    .catch(setError)
                    .finally(() => {
                        setLoader(false);
                    });
            }
        },
        [makeCall, body, token]
    );

    return { data, error, loader, get, reset };
};


export const usePost: usePostType = ({ endpoint, formData = false, authToken }) => {
    const [loader, setLoader] = useState(false)
    const token = useSelector((state: any) => state.authReducer.token)
    const post = async (body: any) => new Promise(async (resolve, reject) => {
        setLoader(true)
        instance.post(endpoint, formData ? objectToFormData(body.reqBody) : {

            ...body.reqBody,
        },
            {
                'headers': {
                    'Content-Type': formData ? 'multipart/form-data' : 'application/json',
                    'Accept': 'application/json',
                    ...(
                        (token || authToken) ?
                            { 'Authorization': `Bearer ${(token || authToken)}` }
                            : {

                            }
                    )
                }
            }).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error?.response?.data || error)
            }).finally(() => {
                setLoader(false)
            })
    }) as Promise<any>;
    return { post, loader };
}


export const useDirectGet = ({ endpoint, authToken }: { endpoint: string, authToken: string }) => {
    const [loader, setLoader] = useState(false)
    const get = async (body: any) => new Promise(async (resolve, reject) => {
        const params = new URLSearchParams({
            ...(body?.reqBody ? JSON.parse(JSON.stringify(body?.reqBody)) : {})
        })
        setLoader(true)
        instance.get(`${endpoint}?${params}`, {
            'headers': {
                ...(
                    authToken ?
                        { 'Authorization': `Bearer ${authToken}` }
                        : {

                        }
                )
            }
        },
        ).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error?.response?.data || error)
        }).finally(() => {
            setLoader(false)
        })
    })
    return { get, loader, };
}

function objectToFormData(obj: any, form?: any, formArray = true) {
    const fd = form || new FormData();

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            const value = obj[property];
            if (property === 'profile_pic') {


            }
            if (Array.isArray(value)) {
                // If the value is an array, append each item individually
                if (formArray) {
                    value.forEach((item, index) => {
                        fd.append(`${property}[]`, item);
                    });
                }
                else {
                    value.forEach((item) => {
                        const splitItems = item?.split(',');
                        splitItems.forEach((splitItem: any) => {
                            fd.append(`${property}[]`, splitItem.trim());
                        });
                    });
                }
            } else {
                // Otherwise, append the value directly
                fd.append(property, value);
            }
        }
    }

    return fd;
}