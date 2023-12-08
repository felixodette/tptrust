import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";
import {useParams} from "react-router-dom";
import MyJson from "../data/data.json";

const EventsDetailPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        const event = MyJson.events.find(event => parseInt(event.id) === parseInt(id));
        setEvent(event);
    }, [id]);

    return (
        <Layout pageTitle={`TP Trust | ${event.name}`}>
            <NavOne />
            <PageHeader title={`${event.name}`} />
            <EventsDetail
                day={event.day}
                month={event.month}
                name={event.name}
                description={event.description}
                time={event.time}
                location={event.location}
            />
            <Footer />
        </Layout>
    );
};

export default EventsDetailPage;
