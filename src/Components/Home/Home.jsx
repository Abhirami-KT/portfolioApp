import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';

function Home({ darkMode }) {
  return (
    <div className={`p-5 m-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <MDBTypography variant='h1' className={`text-center p-2 ${darkMode ? 'text-light' : 'text-primary'}`}>
        ABHIRAMI K. T.
      </MDBTypography>
      <MDBTypography variant='h4' className={`text-center p-2 ${darkMode ? 'text-light' : 'text-primary'}`}>
        MEARN STACK DEVELOPER
      </MDBTypography>
      <div className='d-flex'>
        <img
          src="https://t4.ftcdn.net/jpg/08/56/66/07/360_F_856660758_vK7H9dHQOnLNw4oGaTYUodVd9yjywjeM.jpg"
          width={200}
          alt="Profile"
        />
        <p style={{ fontFamily: '"Edu AU VIC WA NT Hand", cursive' }} className={`p-2 m-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
          Passionate and detail-oriented MERN stack developer with 4 months of hands-on experience in building websites.
          Proficient in HTML, CSS, Bootstrap, and JavaScript with a solid understanding of web development fundamentals.
          I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly
          solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>
    </div>
  );
}

export default Home;
