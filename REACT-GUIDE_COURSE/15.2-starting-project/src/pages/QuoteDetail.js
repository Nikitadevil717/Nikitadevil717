import React from 'react'
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom'

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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

const QuoteDetails = () => {
    const match = useRouteMatch();
    const {
        quoteId
    } = useParams();

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error
    } = useHttp(getSingleQuote, true);

    React.useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId]);

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

    if (!loadedQuote.text) {
        return (
            <p>no found qoute</p>
        )
    }

    return (
        <React.Fragment>
            <HighlightedQuote
                author={loadedQuote.author}
                text={loadedQuote.text}
            />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </React.Fragment>
    )
}

export default QuoteDetails;