import image11 from "../assets/contact1.jpg";
import image12 from "../assets/contact2.jpg";
import image13 from "../assets/contact3.jpg";
import image14 from "../assets/contact4.jpg";

const Contact = () => {
  return (
    <>

   <div className="ourteam"> 
     <h2>Our term</h2
     ></div>
      <div className="contactcard ">
        <div className="imagecontainer">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="card">
              <img src={image11} className="card-img-top" alt="..." />
              <div className="imagename"> 
                <h2>Harris Boves</h2>
                <p>Head of Admin</p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-3">
            <div className="card">
              <img src={image12} className="card-img-top" alt="..." />
              <div className="imagename">
                <h2>Rice white</h2>
                <p>Morning session Team leader</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card">
              <img src={image13} className="card-img-top" alt="..." />
              <div className="imagename">
                <h2>Wande osalen</h2>
                <p>Evening session Team leader</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="card">
              <img src={image14} className="card-img-top" alt="..." />
              <div className="imagename">
                <h2>cladis Human</h2>
                <p>Head of Security unit</p>
              </div>
            </div>
          </div>
        </div>



        </div>
      

        <div className="footer">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="footer-content">
                <h3>Our Contact</h3>
                <ul className="footer-links">
                  <li>
                    Lastest  Events
                  </li>
                  <li>
                    Terms and Condition
                    
                  </li>
                  <li>
                    Privacy Policy
                    
                  </li>
                </ul>
              </div> 
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-content">
                <h3>Our Posts</h3>
                <ul className="footer-links">
                  <li>
                    Lastest Event
                  </li>
                  <li>
                    Terms and Condition
                  </li>
                  <li>
                    Privacy Policy
                  </li>
                </ul>
              </div> 
            </div>

            <div className="col-12 col-md-3">
              <div className="footer-content">
                <h3>Lastest Post</h3>
                <ul className="footer-links">
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex inventore et maiores iusto nemo tempora animi
                     deserunt non ducimus doloremque ipsam, neque reprehenderit eaque omnis nesciunt, laborum recusandae repellendus.
                  </li>
                  
                  <li>
                    
                  </li>
                </ul>
              </div> 
            </div>

            <div className="col-12 col-md-3">
              <div className="footer-content">
                <h3>Lastest News</h3>
                <ul className="footer-links">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus ullam soluta cupiditate nulla commodi quas.
                     Fuga tempora aliquid, voluptatem vel adipisci, non, odio deleniti molestias accusamus doloremque similique reiciendis.
                  </li>
                 
                </ul>
              </div> 
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
