import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CausesDetail from '../components/CausesDetail';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import MyJson from '../data/data.json';

const CausesPageDetail = () => {
    const { id } = useParams();
    const [cause, setCause] = useState(null);

    useEffect(() => {
        const causeData = MyJson.causes.find(item => parseInt(item.id) === parseInt(id));
        console.log("data:", causeData);
        setCause(causeData);
        console.log("cause:", cause);
    }, [cause, id]);

    if (!cause) {
        return (
            <Layout>
                <NavOne />
                <PageHeader title="Causes Details" />
                <p>Cause not found</p>
                <Footer />
            </Layout>
        )
    }

    return (
        <Layout pageTitle={`TP Trust | ${cause.cause_name}`}>
            <NavOne />
            <PageHeader title={`${cause.cause_name}`} />
            <CausesDetail causeName={cause.cause_name} description={cause.description} goal={cause.goal} raised={cause.raised} />
            <Footer />
        </Layout>
    );
};

export default CausesPageDetail;
