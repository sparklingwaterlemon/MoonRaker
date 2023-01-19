import "./ErrorPage.css";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const navigate = useNavigate();

    return (
        <section id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status}</i>
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={()=>{navigate(-1)}}>Back</button>
        </section>
    );
};
