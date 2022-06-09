import {useEffect} from 'react';
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'auth1',
        text: 'learning React 1'
    },
    {
        id: 'q2',
        author: 'auth2',
        text: 'learning React 2'
    }
]

const AllQoutes = () => {
    const {
        sendRequest,
        status,
        data: loadedQoutes,
        error
    } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )
    }

    if(error) {
        return (
            <p className='centered focused'>
                {error}
            </p>
        )
    }

    if(status === 'completed' && (!loadedQoutes || loadedQoutes.length === 0)) {
        return (
            <NoQuotesFound />
        )
    }

    return (
        <QuoteList
            quotes={loadedQoutes}
        />
    )
}

export default AllQoutes;