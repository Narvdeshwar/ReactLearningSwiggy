import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError();
    // err = {
    //     "status": 404,
    //     "statusText": "Not Found",
    //     "internal": true,
    //     "data": "Error: No route matches URL \"/2\"",
    //     "error": {}
    // } this will be the console output of err
    console.log(err)
    return (
        <div>
            You are not on correct track
            <h1>{`${err.status}${err.statusText}`}</h1>
        </div>
    )
}

export default Error
