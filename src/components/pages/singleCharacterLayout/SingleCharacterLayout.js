import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Link } from 'react-router-dom';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({data}) => {


    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <HelmetProvider>
                <Helmet>
                    <meta
                        name='description' 
                        content={`${name} comics book`}
                    />
                    <title>{name}</title>
                </Helmet>
            </HelmetProvider>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to="/" className="single-comic__back">Back to main</Link>
        </div>
    )
}

export default SingleCharacterLayout;