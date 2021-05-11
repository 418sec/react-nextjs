import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import GeneralContactDetails from "../../../components/common/GeneralContactDetails";
import ProjectDescription from "../../../components/case-studies/item/ProjectDescription";
import ProjectDetails from "../../../components/case-studies/item/ProjectDetails";
import ProjectAppearance from "../../../components/case-studies/item/ProjectAppearance";

const PROJECT_DESCRIPTION = {
    background: 'Genarp Bonderup is a hotel in North of Sweden. У клиента был старый сайт который имель небольшой трафик из за ряда проблем. ' +
        'Быстро растущий бизнес требовал быстро изменить и адаптировать приложение. Клиенту критично требовался усовершенствованный дизайн, ' +
        'пара новых фич, возмоность быстрых изменение, сохранить прежний вид, но адаптировать под различные устройства.',
    industry: 'Hospitality',
    duration: '4 months',
    teamSize: '4 devs',
    businessChallenges: [
        'Переписать приложение на компоненто ориентировануый подход',
        'отделить логику оплаты на отдельный сервис',
        'сдеать приложение респонсив',
        'удобный функционал степ букинга',
        'оптимицазия для поисковых движков',
        'увеличить скорость работы приложение (убрать загрузки страниц)',
    ],
    valueDelivered: [
        {
            title: 'PROJECT ROI',
            description: 'After 6 months from release, we...',
        },
        {
            title: 'PROJECT TIMELINE',
            description: 'Andersen team has spent more than 840 hou',
        },
        {
            title: 'EUROPEAN COVERAGE',
            description: 'After 6 months from release, we...',
        }
    ],
    technologies: [
        "nodejs.png", "nextjs.png", "nestjs.png", "react.png", "mongo.png"
    ]
}

const FIRST_PARAGR = "Delivered a new SPA application within limited period of time and enhanced to legacy design. " +
    "Application must improve user experience in particular: room booking and extra services. Enhanced UI/UX benefits to" +
    "leave room request much quicker than on partners' services particularly from mobile platforms";
const SECOND_PARAGR = "Client desired to come up with responsive design for all popular platform, improve performance, " +
    "keep the web-site indexed by search engines and add small alterations to legacy UI view. In addition, make the " +
    "API easy extensible in future"
const THIRD_PARAGR = "The admins are able to manage the site contents such as changing advertisement, add updates, modify services etc." +
    "Thanks to updated dashboard API, employees have an opportunity to quickly reflect customer's needs"

const VISUAL = [
    {
        title: 'Lightweight And Effective Application',
        description: FIRST_PARAGR,
        image: 'hotel/1.png',
        inverse: false,
    },
    {
        title: 'Improved UI/UX',
        description: SECOND_PARAGR,
        image: 'hotel/2.png',
        inverse: true,
    }, {
        title: 'Content Management',
        description: THIRD_PARAGR,
        image: 'hotel/3.png',
        inverse: false,
    }
]

const PROJECT_DETAILS = [
    {
        title: 'A few words about features',
        description: 'To book a room, client has to select the dates, pick up a number of guests',
        img: 'hotel/7.png',
        extraText: 'If all rooms are not available within selected date range, a modal window appears with an appropriate ' +
            'message: it notifies client which date exactly is not available whether arrival or departure.' +
            '<p>Application suggests the following options:</p> ' +
            '<ul>' +
            '   <li>Select different date (arrival or departure) which is suggested by application;</li>' +
            '   <li>If date is crucial for a client, he/she can leave a request anyway if the reserved booking is canceled. The hotel staff will contact with the client;</li>' +
            '   <li>Cancel booking.</li>' +
            '</ul>'
    },
    {
        title: 'Room reservation',
        description: 'When you submit the filter, it appears booking reservation flow. At first step client can pick up a wanted room.',
        img: 'hotel/4.png',
        extraText: 'Apparently, some rooms can be unavailable, thus book them is not possible. Any way when client books the room, fullfilment' +
            'moves further to select additional services.'
    },
    {
        title: 'Select additional services',
        description: 'Clients can order additional services for their needs.',
        img: 'hotel/5.png',
        extraText: 'It can occur that big family or a lot of guests want to reserve big apartments and they man need:' +
            '<ul>' +
            '<li>Extra parking place</li>' +
            '<li>If some clients are vegetarians/vegans/allergic etc. chef can come up with an appropriate menu</li>' +
            '<li>Reserve activities in advance (hiking, cycling, etc.)</li>' +
            '<li>etc.</li>' +
            '</ul>' +
            'If user does not want extra services, it can be skipped to proceed with the next flow.' +
            '<p>After this step client fills the base information such as name, email address, additional wished, preferred payment method.</p>' +
            '<p>In the end appears thanks message and sending notification mail.</p>'
    },
    {
        title: 'The outcome',
        description: 'The new application shows that clients like such approach of room booking. It requires less time to reserve room and faster reflects customers\' needs. ' +
            'In addition, it increased traffic from mobile devices and number of users that go to social networks to subscribe.',
        extraText: 'Overall:' +
            '<ul>' +
            '<li>Refactored legacy code base to use faster and more extensible frameworks;</li>' +
            '<li>Stick to component oriented approach;</li>' +
            '<li>Add responsive design and fixed legacy design bugs</li>' +
            '<li>Added few feature such as booking flow, room filtration, dashboard management API etc.</li>' +
            '<li>Monolith application separated to two services: NodeJS server with frontend application and payment service. Payment service is encapsulate in cloud base</li>' +
            '</ul>'
    }
]

const Index = () => {
    return (
        <>
            <Header>
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">Hotel Apartments</h1>
                <div className="space-20"/>
                <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                    <h3>
                        Learn how Apolemme helped Genarp Bonderup create an intuitive web application
                    </h3>
                </div>
            </Header>

            <section className="section-padding" id="service">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <ProjectDescription {...PROJECT_DESCRIPTION} />
                            </div>
                        </div>
                    </div>
                </div>
                {VISUAL.map(comp => <ProjectAppearance {...comp} />)}
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <ProjectDetails details={PROJECT_DETAILS}/>
                            </div>
                        </div>
                    </div>
                    <GeneralContactDetails title="Let's come up with great product today"/>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Index;