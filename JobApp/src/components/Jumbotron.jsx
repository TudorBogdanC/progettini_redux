

const Jumbotron = () => {
    return (
        <>
            <div className="d-flex my-3 mx-1">
                <div>
                    <h1 className="my-5 mx-4 fs-1 fw-bold" style={{color:"#839791"}}>Welcome to a new <br/> job seeking experience. </h1>
                    <p className="my-5 mx-4" style={{color:"#A8876F"}}>
                        Here at <span className="fs-3 fw-bolder">Jobs on Hunt</span> we value your <span span className="fs-5 fw-bold fst-italic">time</span> and professional
                        experience. <br/> That is why we specialise in offering a <span span className="fs-5 fw-bolder fst-italic">tailored</span> service that
                        suits your job seeking needs. 
                        <br/>
                        <br/>
                        Tired of your old job? Trying to try a new field of specialization? 
                        In search of your first work experience? We've got you covered.
                    </p>
                </div>
                <div>
                    <img className="image" src="./src/assets/people-wooden.jpg" alt="background" height={400}/>
                </div>
            </div>    
        </>
    )
}

export default Jumbotron;