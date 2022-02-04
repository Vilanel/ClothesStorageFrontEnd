import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './Gallery.css';
import Title from '../common/Title/Title.js';

const images = [
  "Pictures/Gallery/1.jpg",
  "Pictures/Gallery/2.jpg",
  "Pictures/Gallery/3.jpg",
  "Pictures/Gallery/7.jpg",
  "Pictures/Gallery/8.jpg",
  "Pictures/Gallery/9.jpg",
  "Pictures/Gallery/4.jpg",
  "Pictures/Gallery/5.jpg",
  "Pictures/Gallery/6.jpg",
];

const smallImages = [
  "Pictures/Gallery/1.jpg",
  "Pictures/Gallery/2.jpg",
  "Pictures/Gallery/3.jpg",
  "Pictures/Gallery/7.jpg",
  "Pictures/Gallery/8.jpg",
  "Pictures/Gallery/9.jpg",
  "Pictures/Gallery/4.jpg",
  "Pictures/Gallery/5.jpg",
  "Pictures/Gallery/6.jpg",
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="galery">
        <Title title='GALLERY'/>
        <MDBContainer>
            <div className="mdb-lightbox no-margin">
            <MDBRow>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[0]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 0, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[1]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 1, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[2]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 2, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[3]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 3, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[4]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 4, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[5]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 5, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[6]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 6, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[7]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 7, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
                <MDBCol md="4">
                <figure>
                    <img
                    src={smallImages[8]}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                        this.setState({ photoIndex: 8, isOpen: true })
                    }
                    />
                </figure>
                </MDBCol>
            </MDBRow>
            </div>
            {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageTitle={photoIndex + 1 + "/" + images.length}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length
                })
                }
                onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + 1) % images.length
                })
                }
            />
            )}
        </MDBContainer>
      </div>
    );
  }
}

export default Gallery;