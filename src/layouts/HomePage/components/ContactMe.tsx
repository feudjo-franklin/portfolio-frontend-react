import { useState } from "react";
import ClientModel from "../../../models/ClientModel";
import { fetchPostData } from "../../../client/client";
import { useHistory, useLocation } from "react-router-dom";

export const ContactMe = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let unique_uid: string = queryParams.get("unique_uid") || "";

    const history = useHistory(); 

    const [client, setClient] = useState<ClientModel>({firstname: "", lastname: "", email: "", message: "", profileUuid: unique_uid});
    const [errors, setErrors] = useState({firstname: "", lastname: "", email: "", message: ""});

    const valiateEmail = () => {
        // Basic email format validation
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(client.email);
    }

    const validateExistance = (text: string) => {
        return text.length > 0;
    }

    const handleSubmit = async () => {
        // Reset previous errors
        setErrors({firstname: "", lastname: "", email: "", message: ""})

        // Validation

        if(!valiateEmail()){
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            return;
        }

        if (!validateExistance(client.firstname)){
            setErrors((prevErrors) => ({ ...prevErrors, firstname: 'Please enter a firstname' }));
            return;
        }

        if (!validateExistance(client.lastname)){
            setErrors((prevErrors) => ({ ...prevErrors, lastname: 'Please enter a lastname' }));
            return;
        }

        if (!validateExistance(client.message)){
            setErrors((prevErrors) => ({ ...prevErrors, message: 'Please enter a message' }));
            return;
        }

        fetchPostData("/clients/add", client)
        .then(() => {

            history.push("/summary")
            window.location.reload()
        })
    }
    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="mb-0">Have a web design project in mind?</h2>
                <h3 className="fw-light fs-5">Let's discuss it over a coffee!</h3>

                <div className="row gy-4 mt-4">
                    <div className="col-12 col-md-5">
                        <img src={require("./../../../images/grab-a-coffee.jpg")} alt="Image of a cup of coffee" width="100%" />
                    </div>
                    <div className="col-12 offset-md-1 col-md-6">

                        {/* <!-- Form --> */}
                        <form className="row">
                            <div className="col-6 my-2">
                                <label htmlFor="firstname" className="form-label">First name</label>
                                <input name="firstname" type="text" 
                                    className="form-control" id="firstname"
                                    value={client.firstname}
                                    onChange={(e) => setClient({...client, firstname: e.target.value})} />
                                {errors.firstname !== "" && <p style={{ color: 'red' }}>{errors.firstname}</p>}
                            </div>
                            <div className="col-6 my-2">
                                <label htmlFor="lastname" className="form-label">Last name</label>
                                <input name="lastname" type="text"
                                    className="form-control" id="lastname"
                                    value={client.lastname}
                                    onChange={(e) => setClient({...client, lastname: e.target.value})} />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input name="email" type="email"
                                    className="form-control" id="email"
                                    value={client.email}
                                    onChange={(e) => setClient({...client, email: e.target.value})} />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" className="form-control"
                                    id="message" rows={3}
                                    value={client.message}
                                    onChange={(e) => setClient({...client, message: e.target.value})}></textarea>
                            </div>
                            <div className="col-12 my-2">
                                <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}