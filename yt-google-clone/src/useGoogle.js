import React, { useEffect, useState } from 'react'

const useGoogle = term => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://www.googleapis.com/customsearch/v1?key={'REACT_APP_API_KEY'}cx={'REACT_APP_CONTEXT_KEY'}q=${'term'}')
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
    }, [term])
    return { data }
}

export default useGoogle