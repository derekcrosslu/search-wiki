import { useEffect, useState } from "react"
import axios from 'axios'

export const useSearch = (query) => {
    const [state, setState] = useState({
        articles: [],
        status: 'IDLE',
        error: ''
    })
    useEffect(() => {
        axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`)
            .then(response => {
                const parseResponse = []
                // parsong response object
                for (let i = 0; i < response.data[1].length; i++) {
                    parseResponse.push({
                        link: response.data[3][1],
                        label: response.data[1][i]
                    })
                }
                console.log(parseResponse, 'parseResponse');
                // passing data into state object
                setState({
                    articles: parseResponse,
                    status: 'SUCCESS',
                    error: ''
                })
            })
            .catch(error => {
                //passing error object into state
                setState({
                    articles: [],
                    status: 'ERROR',
                    error: error
                })
            })
    }, [query])
    return state
}