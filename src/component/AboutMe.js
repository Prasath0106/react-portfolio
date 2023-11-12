import MyPhoto from '../assets/images/myphoto.jpeg';

function AboutMe() {
  return (
   <>
    <div className="about-me paddingTop paddingBottom">
      <div className="container">
        
        <div className="row mx-0">
          <div className="col-md-6 col-12">
          <h2 className="title-sec">About me</h2>
          <p className='mb-0'>To join a dynamic organization that allows me to grow professionally by utilizing my skills and abilities as an individual and for the development of both organization and self. I have ability to work hard under pressure & I am good in interacting with people. A quick learner, eager to learn new things at a fast pace. And I believe, I will prove myself as an asset to the organization which provides opportunities. It will be my pleasure to work with your company because its is what I am looking for.</p>
          </div>
          <div className="col-md-6 text-center col-12 my-photo">
            <img src={MyPhoto} alt='' />
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default AboutMe;
