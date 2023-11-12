import NiftTea from '../assets/images/niftea.jpg';
import School from '../assets/images/school.png';

function Education() {
  return (
    <>
      <div className="education-details h-100 d-flex  paddingTop paddingBottom">
        <div className="container">
          <div className="row h-100">
            <div className="col-12 px-0 d-flex flex-row flex-wrap align-items-center college">
              <div className='col-12 col-md-4'>
                <img src={NiftTea} alt='' />
              </div>
              <div className='col-12 col-md-8 d-flex justify-content-end'>
               <div className='college-data'>
               <h4>Bachelor of Science(AMM)</h4>
                <h5>Nift-Tea College Of Knitwear Fashion</h5>
                <p>74%</p>
               </div>
              </div>
            </div>
            <div className="col-12 px-0 d-flex flex-row flex-wrap align-items-center school">
            <div className='col-12 col-md-8'>
            <h4>Higher Secondary School</h4>
              <h5>Sri Sai Matriculation Higher Secondary School</h5>
              <p>76%</p>
                
              </div>
              <div className='col-12 col-md-4 text-right'>
              <img src={School} alt='' />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
