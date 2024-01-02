import React from 'react';
import TeamMember from "../components/TeamMember";
import MyJson from "../data/data.json";

const Team = () => {
    return (
        <section className="team-area team-area2 text-center">
            <div className="container">
                <div className="row team-content-wrap">
                    {
                        MyJson.team.map((item, index) => {
                            return <TeamMember key={index} name={item.name} designation={item.designation} picture={item.picture} alt_pic={item.alt_pic} class_style={item.class_style}/>
                        })
                    }
                </div>
                <h1>Board of Directors</h1>
                <div className="row team-content-wrap">

                    {
                        MyJson.boardOfDirectors.map((item, index) => {
                            return <TeamMember key={index} name={item.name} designation={item.designation} class_style={item.class_style}/>
                        })
                    }
                </div>
                <h1>Board of Trustees</h1>
                <div className="row team-content-wrap">
                    {
                        MyJson.boardOfTrustees.map((item, index) => {
                            return <TeamMember key={index} name={item.name} designation={item.designation} class_style={item.class_style}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
