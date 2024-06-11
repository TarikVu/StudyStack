import { useState, useEffect } from 'react'

// Custom hook used for fetching data from a REST endpoint. 
// Note custom hooks must start with "use"
const useFetch = (url) => {

    // Hooks
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        // how to use a fetch request to the json server.
        // a fetch is a promise, utilize "then" to return the 
        // res as a json, then 
        setTimeout(() => {  // MIMICS REAL FETCH TIME REMOVE LATER.
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource.');
                    }
                    return res.json();
                })
                .then(resJson => {
                    setData(resJson);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    // abort error throws an error, therefore we can just log
                    if (err.name === 'AbortError') {
                        //console.log('fetch aborted');
                    }
                    
                    // else regular errors, we can set these states.
                    else {
                        setError(err.message);
                        setIsLoading(false);
                    }
                });
        }, 1000); // set timeout waits 1s

        // UseEffect Cleanup:
        // Aborts the fetch if the page using this component unmounts fromt the DOM
        return () => abortController.abort();
        
    }, [url]); // the url is a dependency because it will fire use effect whenever it changes.

    return { data, isLoading, error };
}

export default useFetch;