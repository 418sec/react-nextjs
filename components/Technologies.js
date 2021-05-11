import Technology from "./main/Technology";

const Technologies = () => {
    return (
        <section className="feature-area section-padding-top" id="technologies">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="page-title text-center">
                            <h3>Technologies we use</h3>
                            <div className="space-60"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Technology image={"java.png"} technologyName={"Java"} />
                        <div className="space-60" />
                        <Technology image={"spring.svg"} technologyName={"Spring"} />
                        <div className="space-60" />
                        <Technology image={"hibernate.svg"} technologyName={"Hibernate"} />
                        <div className="space-60" />
                        <Technology image={"docker.png"} technologyName={"Container Orchestrations"} />
                        <div className="space-60"/>
                        <div className="space-60"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Technology image={"angular.svg"} technologyName={"Angular"} />
                        <div className="space-60"/>
                        <Technology image={"react.png"} technologyName={"React"} />
                        <div className="space-60"/>
                        <Technology image={"javascript.svg"} technologyName={"JavaScript"} />
                        <div className="space-60"/>
                        <Technology image={"nodejs.png"} technologyName={"Node.js"} />
                        <div className="space-60"/>
                        <div className="space-60"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Technology image={"sql.png"} technologyName={"SQL"} />
                        <div className="space-60"/>
                        <Technology image={"mongo.png"} technologyName={"NoSQL"} />
                        <div className="space-60"/>
                        <Technology image={"rabbit-mq.svg"} technologyName={"Message Brokers"} />
                        <div className="space-60"/>
                        <Technology image={"amazon.png"} technologyName={"Clouds"} />
                        <div className="space-60"/>
                        <div className="space-60"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies