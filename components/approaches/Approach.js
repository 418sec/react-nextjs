import styles from "./approach.module.css";
import React from "react";
import GeneralContactDetails from "../common/GeneralContactDetails";

const AGILE = [
    {
        title: "Meetings",
        description: "We have daily meetings for aligning updates to understand the current progress and overcome issues may happen",
        icon: 'lnr-users'
    },
    {
        title: "Sprints",
        description: "For effective team work, we usually schedule two week sprints. After each sprint, we summarize the results to improve the process",
        icon: "lnr-history"
    },
    {
        title: "Analysis",
        description: "Before starting work, the task is analyzed to find gaps in the requirements and accurately estimate the team",
        icon: "lnr-magnifier"
    },
    {
        title: "Reporting",
        description: "We monitor compliance with all the main indicators for the successful completion of the sprint: velocity, capacity, burn-down chart etc. that you receive the product on time",
        icon: "lnr-chart-bars"
    },
    {
        title: "Product Increment",
        description: "Product Increment is an evolution that any business needs. Here all your new ideas, tasks and points go into the progress state",
        icon: "lnr-leaf"
    },
    {
        title: "Management",
        description: "It is the ongoing process life cycle of a project. It allows to keep transparent communication, plan resources, bring down impact of risks and control the project quality",
        icon: "lnr-briefcase"
    }
]

const BEST_PRACTICES = [
    {
        title: "Code review",
        description: "Our team strictly comply with code quality. Fresh eyes on the code quality guarantee stable, fast-acting and high-quality solution. " +
            "On this stage any bugs or inconsistencies can be found here and fixed.",
        inverse: true,
        icon: "lnr-eye"
    },
    {
        title: "Refactoring",
        description: "To make your product extensible and easy scalable we do code restructure if it is needed. It guarantees that your ideas or features will " +
            "be developed in short time",
        inverse: true,
        icon: "lnr-construction"
    },
    {
        title: "Static Code Analysis",
        description: "We use static code analysis benefits to keep high test coverage, look for potentials issues, stick to unified code design and reduce " +
            "logic complexity. It tremendously improves your project quality without resource costs",
        inverse: true,
        icon: "lnr-funnel"
    },
    {
        title: "Documentation",
        description: "Every single feature or change is documented strictly. We keep changes not only in terms of code history and also we provide " +
            "functionality documentation to keep information about it valid. It helps to write tests, understand how system works and improve it accordingly",
        inverse: true,
        icon: "lnr-pencil"
    },
    {
        title: "Testing",
        description: "Whether it is a feature or a bug, we cover it by tests. We use almost all kinds of testing: unit testing to test your specific feature or part of it, " +
            "integration tests to check interaction, functional testing and regression testing to be sure functionality meets you requirements and works as expected",
        inverse: true,
        icon: "lnr-redo"
    },
    {
        title: "CI/CD",
        description: "It ensures that your product is always stable and you can get it ready. When the ticket is ready and validated by QA team, you will be happy " +
            "to see required feature live",
        inverse: true,
        icon: "lnr-thumbs-up"
    },
]

const WORKFLOW = [
    {
        title: "Ideating",
        description: "Apolemme team will help you come up with ideas for your products or services. We will assist you brainstorm initial ideas on how your tech project could create value.",
        icon: "lnr-star"
    },
    {
        title: "Concept & Research",
        description: "Starting with technical recommendations we come up with a proof-of-concept (POC) or prototype, followed by a detailed product strategy plan and a scope of work. We get your product ready to hit the first phase of the development — an MVP. ",
        inverse: true,
        icon: "lnr-star-empty"
    },
    {
        title: "Commitment",
        description: "We will benefit you to define the mission and vision of the project with an initial strategy, as well as road-maps of and strategies to reach key milestones in the first few years.",
        icon: "lnr-star-half"
    },
    {
        title: "Validation",
        description: "At this stage, we iterate and test the specific project to find the best way to implement tried and true ideas and guarantee initial user growth and/or revenue. Initial Key Performance Indicators (KPI’s) are identified at this stage.",
        inverse: true,
        icon: "lnr-map"
    },
    {
        title: "Scaling",
        description: "Focus on KPI based measurable growth in users, customers and revenues and/or market traction & market share in an already big or fast-growing target market. Additional hiring, quality improvement, and process implementation also take place during this stage.",
        icon: "lnr-link"
    },
    {
        title: "Establishing",
        description: "We can help your startup achieve great and continuing growth through the use of careful planning.",
        inverse: true,
        icon: "lnr-flag"
    }
]

const Approach = () => {

    const renderItem = ({title, description, inverse, icon}) => (
        <div className="col-xs-12 col-sm-6">
            <div className={styles.flowBox}>
                {!inverse && (<div className={styles.flowHeader}>
                    <div className={styles.flowIcon}>
                        <span className={`lnr ${icon}`}/>
                    </div>
                </div>)}
                <div className={styles.flowBody}>
                    <div className="title-service">{title}</div>
                    <div className="title-content">
                        {description}
                    </div>
                </div>
                {inverse && (<div className={styles.flowHeader}>
                    <div className={styles.flowIcon}>
                        <span className={`lnr ${icon}`}/>
                    </div>
                </div>)}
            </div>
        </div>
    )

    const renderWorkflowItem = ({title, description, inverse, icon}) => (
        <div className="col-xs-12 col-sm-12">
            <div className={styles.flowBox}>
                {!inverse && (<div className={styles.flowHeader}>
                    <div className={styles.flowIcon}>
                        <span className={`lnr ${icon}`}/>
                    </div>
                </div>)}
                <div className={styles.flowBody}>
                    <div className="title-service">{title}</div>
                    <div className="title-content">
                        {description}
                    </div>
                </div>
                {inverse && (<div className={styles.flowHeader}>
                    <div className={styles.flowIcon}>
                        <span className={`lnr ${icon}`}/>
                    </div>
                </div>)}
            </div>
        </div>
    )

    const renderAgileFulfillment = () => (
        <div className="row">
            <div className={styles.approachBox}>
                <div className={styles.approachBody}>
                    <div className={styles.approachCaseTitle}>
                        Why We Love <p>&nbsp;Agile</p>
                    </div>
                    <div className="title-content">
                        {AGILE.map(item => renderItem(item))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderWorkflowFulfillment = () => (
        <div className="row">
            <div className={styles.approachBox}>
                <div className={styles.approachBody}>
                    <div className={styles.approachCaseTitle}>
                        <p>Workflow phases</p>
                    </div>
                    <div className="title-content">
                        {WORKFLOW.map(item => renderWorkflowItem(item))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderBestPractices = () => (
        <div className="row">
            <div className={styles.approachBox}>
                <div className={styles.approachBody}>
                    <div className={styles.approachCaseTitle}>
                        <p>Best Practices</p>
                    </div>
                    <div className="title-content">
                        {BEST_PRACTICES.map(item => renderItem(item))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="container">
                        {renderAgileFulfillment()}
                        {renderBestPractices()}
                        {renderWorkflowFulfillment()}
                        <GeneralContactDetails/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Approach;