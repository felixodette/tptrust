import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

class EntryArea extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false
    }
  }

  handleModal = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <section className="entry-area">
        <div className="container">
          <div className="row entry-static-wrap">
            <div className="col-lg-3">
              <div className="entry-static-box entry-static-box1">
                <div className="section-icon">
                  <img src="/assets/images/section-icon.png" alt="section-icon" />
                </div>
                <h4 className="entry__title">Introducing Turning Point Trust</h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="entry-video-img">
                      <img src="/assets/images/lillian.png" alt="entry-video-img" />
                      <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='AlR9-QO-5yg' onClose={this.handleModal} />
                      <div onClick={this.handleModal} className="mfp-iframe video-play-btn"
                           title="Play Video"><i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="entry-video-text">
                      {/*<h4 className="entry__title">Who we are!</h4>*/}
                      <p className="entry__text">Turning Point exists to empower vulnerable children and families from Kibera by providing opportunities for them to reach their full potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EntryArea;
