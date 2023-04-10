import React, { useEffect, useState } from 'react'

const useGoogle = term => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyDllAEYccmViJJQafUn3Vyil-Xo6AK26Vc&cx=b4274515b53a641ea&q=${term}')
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
    }, [term])
    return { data }
}

export default useGoogle