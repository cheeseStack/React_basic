import { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null); // this sets a blank db by default
    const [isPending, setIsPending] = useState(true); // this shows the loading messge or screen //
    const [error, setError] = useState(null);

    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal})
            .then(response => {
                console.log(response);
                if(!response.ok) {
                    throw Error('could not fetch the data for that resourse');
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => { 
                if (error.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;