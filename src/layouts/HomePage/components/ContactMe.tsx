export const ContactMe = () => {
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
                                <input name="firstname" type="text" className="form-control" id="firstname" />
                            </div>
                            <div className="col-6 my-2">
                                <label htmlFor="lastname" className="form-label">Last name</label>
                                <input name="lastname" type="text" className="form-control" id="lastname" />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input name="email" type="email" className="form-control" id="email" />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" className="form-control" id="message" rows={3}></textarea>
                            </div>
                            <div className="col-12 my-2">
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}