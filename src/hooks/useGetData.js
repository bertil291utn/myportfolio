import { useState, useEffect } from 'react';
const api = 'https://us-central1-curriculum-backend.cloudfunctions.net/api';
// const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

const useGetData = () => {
    const [mydata, setData] = useState([]);

    
    useEffect(() => {
        fetch(api).then(res => res.json()).then(data => {
            //console.log(data.data);
            setData(data.data)
        })
    }, []);//sirve para actualiza estados de cualquier indole en caso de que qeuira escuchar el cambo de uan variable. la actualiza y devuelve el nuevo valor 
    return mydata;
}

export default useGetData;
