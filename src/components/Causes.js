import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import data from '../data/data.json';
import CausesItem from "./CausesItem";

const Causes = () => {
    return (
        <section className="causes-area causes-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    {
                        data.causes.map((item, index) => {
                            return <CausesItem key={index} id={item.id}
                                               itemVal={item.themeBtn}
                                               causeTitle={item.cause_name}
                                               causePreview={item.preview}
                                               donatePound={item.donatePound}
                                               donateKsh = {item.donateKsh}
                                               mpesaDetails={item.mpesaDetails}
                                               img={item.image}
                            />;
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Causes;
