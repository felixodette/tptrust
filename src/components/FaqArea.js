import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class FaqArea extends Component {
    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/assets/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Have any Question?</h2>
                                <p className="section__meta">frequently asked questions</p>
                            </div>
                            <div className="faq-img-box">
                                <img src="/assets/images/faq-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Accordion allowZeroExpanded={true}>
                                <AccordionItem>
                                    <AccordionItemButton>Make a difference in the life of a child</AccordionItemButton>
                                    <AccordionItemPanel>
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemButton>Let’s do the right thing now</AccordionItemButton>
                                    <AccordionItemPanel>
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemButton>Join your hand with us for a better life</AccordionItemButton>
                                    <AccordionItemPanel>
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqArea;
