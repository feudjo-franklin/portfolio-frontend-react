import { useLocation } from "react-router-dom"

interface ClientResponse {
    email: string;
    firstname: string;
    lastname: string;
}

interface LocationState {
    client: ClientResponse;
}

export const Summary = () => {

    const location = useLocation<LocationState>();

    const client = location.state?.client;

    if(!client) {
        return (
            <div className="container py-5">
                <p>No contact information available.</p>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <h1>Thank you {client.firstname}!</h1>

            <p>
                Dear {client.firstname} {client.lastname},
            </p>

            <p>
                Thank you for contacting us.
                We will get back to you soon at {client.email}.
            </p>

        </div>
    );
}