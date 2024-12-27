import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBTypography
} from 'mdb-react-ui-kit';
import image6 from '../../assets/travel.png';
import image5 from '../../assets/animal.png';
import image4 from '../../assets/furniture.png';

function Projects({ darkMode }) {
  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <div>
        <MDBTypography variant='h1' className={`text-center p-2 ${darkMode ? 'text-light' : 'text-primary'}`}>PROJECTS</MDBTypography>
      </div>
      <div className="row">
            <div className="col m-5"><MDBCard>
      <MDBCardImage src={image4} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Furniture Website</MDBCardTitle>
        <MDBCardText>
        Here, we are passionate about all things animal-related. Whether you’re a devoted pet owner, a wildlife enthusiast, or simply curious about the animal kingdom, you’ll find a wealth of information and inspiration here.       
        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
            <div className="col m-5"><MDBCard>
      <MDBCardImage src={image5} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Animal Website</MDBCardTitle>
        <MDBCardText>
        Here, we are passionate about all things animal-related. Whether you’re a devoted pet owner, a wildlife enthusiast, or simply curious about the animal kingdom, you’ll find a wealth of information and inspiration here.        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
            <div className="col m-5"><MDBCard>
      <MDBCardImage src={image6} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Travel Blog</MDBCardTitle>
        <MDBCardText>
        Here, we are passionate about all things animal-related. Whether you’re a devoted pet owner, a wildlife enthusiast, or simply curious about the animal kingdom, you’ll find a wealth of information and inspiration here.       
        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
        </div>
        <div className="row">
            <div className="col m-5"><MDBCard>
      <MDBCardImage src={image4} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Furniture Website</MDBCardTitle>
        <MDBCardText>
        Here, we are passionate about all things animal-related. Whether you’re a devoted pet owner, a wildlife enthusiast, or simply curious about the animal kingdom, you’ll find a wealth of information and inspiration here.       
        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
            <div className="col m-5"><MDBCard>
      <MDBCardImage src={image5} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Animal Website</MDBCardTitle>
        <MDBCardText>
        Here, we are passionate about all things animal-related. Whether you’re a devoted pet owner, a wildlife enthusiast, or simply curious about the animal kingdom, you’ll find a wealth of information and inspiration here.        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
            <div className="col m-5"><MDBCard>
      <MDBCardImage src={image6} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Travel Blog</MDBCardTitle>
        <MDBCardText>
        Here, we are passionate about all things animal-related. Whether you’re a devoted pet owner, a wildlife enthusiast, or simply curious about the animal kingdom, you’ll find a wealth of information and inspiration here.       
        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
        </div>
    </div>
  );
}

export default Projects;
