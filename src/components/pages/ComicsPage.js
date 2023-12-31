import { Helmet, HelmetProvider } from 'react-helmet-async';


import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';


const ComicsPage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name='description' 
                        content='Page with list of our comics'
                    />
                    <title>Comics page</title>
                </Helmet>
            </HelmetProvider> 
            <AppBanner />
            <ComicsList />
        </>
    );
};

export default ComicsPage;