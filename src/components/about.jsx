import image from "../assets/aerobics_fyrgsc.jpg";
import image2 from "../assets/service.jpg";
import image3 from "../assets/service2.jpg";

 

const About = () => {
  return (
    <>
      <div className="containerabout">
        <div className="subconatinerabout">
          <h1>SERVICE</h1>
        </div>
        <div className="containerheading">
          <h3>Our Best Service</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam nemo necessitatibus? 
            Eum voluptatem earum sed dignissimos odio vel doloribus incidunt vitae! Quasi officiis tempore officia quibusdam quam, blanditiis sit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi consequuntur 
            nobis labore nesciunt? Optio minima amet porro recusandae vero totam voluptas enim, tempora quas nisi eveniet iusto laboriosam saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laudantium. Provident magnam aliquam 
            sint quisquam ducimus? Libero eos saepe harum error dolor. Vel ratione nostrum similique placeat, hic quam minus.</p>


            <div className="containerbottow">
              <ul>
                <li>
                  <h2>Awesome Design</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus cumque, numquam eos dicta at exercitationem ipsum hic, </p>
                  
                </li>
                <li>
                  <h2>Font Awesome</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus cumque, numquam eos dicta at exercitationem ipsum hic, </p>
                </li>
                <li>
                  <h2>Design</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus cumque, numquam eos dicta at exercitationem ipsum hic, </p>
                </li>
                </ul>
            </div>
            
            <div className="containerbottow">
              <ul>
                <li>
                  <h2>We are always ready to serve</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus cumque, numquam eos dicta at exercitationem ipsum hic, </p>
                </li>
                <li>
                  <h2>Our staff , Our pride</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus cumque, numquam eos dicta at exercitationem ipsum hic, </p>
                </li>
                <li>
                  <h2>Equilpment to use</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus cumque, numquam eos dicta at exercitationem ipsum hic, </p>
                </li>
                </ul>
            </div>
                  
          
        </div>


        

<div className="about">
  <div className="bio">
    <div className="row">
      <div className="col-12 col-md-4">
        
          <img src={image} className="card-img-top" alt="..." /> 
        
      </div>
      <div className="col-12 col-md-4">
        
            <img src={image2} className="card-img-top" alt="..." />  
        
      </div>

      <div className="col-12 col-md-4">
        
            <img src={image3} className="card-img-top" alt="..." />   
        
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-md-4">
        <div className="card">
          <div className="card-header text white">Equilpment to use</div>
          <div className="card-body">
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Placeat obcaecati dignissimos quidem aut repudiandae
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card">
          <div className="card-header">what we offer</div>
          <div className="card-body">
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Placeat obcaecati dignissimos quidem aut repudiandae
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="card">
          <div className="card-header">our staffs our pride</div>
          <div className="card-body">
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Placeat obcaecati dignissimos quidem aut repudiandae
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default About;
