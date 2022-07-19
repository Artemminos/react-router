import React from 'react';
import AuthorizedRoutes from "./authorizedRoutes";
import NonAuthorizedRoutes from "./nonAuthorizedRoutes";
import MainWrapper from "./MainWrapper";
import ErrorBoundary from "./ErrorBoundary";


const App = () => {
    const [isAuthorized, setIsAuthorized] = React.useState(null)
    const [isLoaded, setIsLoaded] = React.useState(false)

    React.useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true)
            setIsAuthorized(true)
        },2000)
    }, [])



    if (!isLoaded) {
        return <div>loading</div>
    }
    return (
        <>
            <ErrorBoundary>

            {isAuthorized ?
                <MainWrapper>
                    <AuthorizedRoutes/>
                </MainWrapper>
                : <NonAuthorizedRoutes/>
            }
            </ErrorBoundary>
        </>
    );
};

export default App;