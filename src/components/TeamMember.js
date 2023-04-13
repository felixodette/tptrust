import React from 'react';

const TeamMember = ({name, designation, picture, alt_pic, class_style}) => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className={class_style}>
                <div className="team__img">
                    <img src={picture} alt={alt_pic} />
                    <div className="team__img-links">
                        <ul>
                            <li><a href="#/"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#/"><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="#/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="team__title">
                    <h3 className="team__title-title"><a href="#/">{name}</a></h3>
                    <span className="team__title-meta">{designation}</span>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
