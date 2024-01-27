

const Jumbotron = () => {
    return (
        <>
            <div className="d-flex my-3 mx-1">
                <div>
                    <h1 className="my-5 mx-4" style={{color:"#E4C5AF", fontSize:"3rem"}}>Welcome to a new <br/> job seeking experience. </h1>
                    <p className="my-5 mx-4" style={{color:"#E4C5AF"}}>
                        Here at <span className="fw-bold">Jobs on Hunt</span> we value your <span span className="fw-bold">time</span> and professional
                        experience. <br/> That is why we specialise in offering a <span span className="fw-bold">tailored</span> service that
                        suits your job seeking needs. 
                        <br/>
                        <br/>
                        Tired of your old job? Trying to make yourself way into a new field of specialisation? 
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