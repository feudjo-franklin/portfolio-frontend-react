export const Skills = () => {
    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="mb-0">My skills</h2>
                <h3 className="fw-light fs-5">Web development and design</h3>
                {/* <!-- Development --> */}
                <div className="row gy-4 mt-4">
                    <div className="col-12 col-md-7">

                        {/* <!-- Progress bar --> */}
                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-html5 fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">HTML5</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="75%">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-css3-alt fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">CSS3</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="100%">
                                        <div className="progress-bar w-100" role="progressbar" aria-valuenow={100}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-js fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">JS</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="75%">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-php fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">PHP</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="75%">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-sass fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">SASS</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="50%">
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow={50}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 offset-md-1 col-md-4">
                        <img src={require("./../../../images/code.jpg")} alt="screen showing php code" width="100%" />
                    </div>
                </div>

                {/* <!-- Design --> */}
                <div className="row gy-4 mt-4">
                    <div className="col-12 col-md-4">
                        <img src={require("./../../../images/design.jpg")} alt="screen showing designs" width="100%" />
                    </div>
                    <div className="col-12 order-first offset-md-1 col-md-7 order-md-last">

                        {/* <!-- Progress bar --> */}
                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fab fa-figma fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">Figma</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="75%">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-photo-video fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">Adobe Suite</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="100%">
                                        <div className="progress-bar w-100" role="progressbar" aria-valuenow={100}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-palette fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">UI Design</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="75%">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-vial fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">UX Design</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="75%">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={75}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 p-3 bg-white">
                            <div className="row align-items-center">
                                <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-video fa-2x me-3 text-primary"></i>
                                        <p className="fw-bold m-0">Video</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="progress" data-bs-toggle="tooltip" title="50%">
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow={50}
                                             aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}