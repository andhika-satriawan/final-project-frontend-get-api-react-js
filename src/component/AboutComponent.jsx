const AboutComponent = () => {
    return (
        <div className="container mt-5">
            <h2>About us</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src="/about.jpg" className='rounded mx-auto d-block' />
                </div>
                <div className="col-md-6">
                    <p>Fullstack developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    08+
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Years experience</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    20+
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Completed project</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    05+
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Companies worked</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
