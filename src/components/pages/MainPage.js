import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import CharSearchForm from '../charSearchForm/CharSearchForm';
import ErrorBoundery from '../errorBoundery/ErrorBoundery';

import decoration from '../../resources/img/vision.png';


const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name='description' 
                        content='Marvel information portal'
                    />
                    <title>Marvel information portal</title>
                </Helmet>
            </HelmetProvider>
            <ErrorBoundery>
                <RandomChar />
            </ErrorBoundery>
            <div className="char__content">
                <ErrorBoundery>
                    <CharList  onCharSelected={onCharSelected}/>
                </ErrorBoundery>
                <div>
                    <ErrorBoundery>
                        <CharInfo  charId={selectedChar}/>
                    </ErrorBoundery>
                    <ErrorBoundery>
                        <CharSearchForm />
                    </ErrorBoundery>
                </div>

            </div>
            <img src={decoration} alt="Vision" className='bg-decoration' />
        </>
    )
};

export default MainPage;