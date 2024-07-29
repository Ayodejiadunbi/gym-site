import image from "../assets/sixpack.jpg";

const GALLARY =()=>{

    return(
        <>
        <div className="container2">
            <div className="gallaryheading">
                <h2>OUR FITNESS STUDIO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur tenetur temporibus dolor doloremque pariatur
                     sunt placeat odit<br></br> iusto quisquam quaerat molestiae deserunt amet repudiandae facilis tempore omnis vitae! Excepturi?</p>
                
            </div>

            <div className="gallarybottom">
                <div className="gallarytext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Omnis quasi eligendi officiis velit inventore animi doloremque hic eveniet 
                    tempore. <br></br>Itaque pariatur maxime laboriosam velit a, accusamus quia ex? Hic, libero.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Omnis quasi eligendi officiis velit inventore animi doloremque hic eveniet 
                    tempore. <br></br>Itaque pariatur maxime laboriosam velit a, accusamus quia ex? Hic, libero.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Omnis quasi eligendi officiis velit inventore animi doloremque hic eveniet 
                    tempore. <br></br>Itaque pariatur maxime laboriosam velit a, accusamus quia ex? Hic, libero.

                    <div className="icon ">
                        <ul>
                            <li><i class="bi bi-arrow-right-circle-fill"></i> check us out</li>
                            <li><i class="bi bi-arrow-right-circle-fill"></i> our gym rooms</li>
                            <li><i class="bi bi-arrow-right-circle-fill"></i> moving out</li>
                        </ul>
                    </div>
                </div>
                <div className="gallaryIImage">
                   <img src={image} className="card-img-top" alt="..." />

                </div>
            </div>

        </div>
        
        </>



    );
};

export default GALLARY;