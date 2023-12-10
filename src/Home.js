import React from "react";
import './home.css';
// import facilityImage from './images/flight_facility.jpg';
// import bannerImage from './images/Aces_Banner.jpg';

const Home = () => {
    return (
        <div className="home-container">
      <div className="content-container">
        <div className="image-container">
         {/* Image 1 */}
          
        </div>
        <div className="text-container">
          {/* Text 1 */}
          <h2>Container 1 Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a.
             Enim ut sem viverra aliquet eget sit amet tellus. 
             Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. 
             Eros in cursus turpis massa tincidunt dui ut. Tempus iaculis urna id volutpat lacus laoreet non curabitur. 
             Proin fermentum leo vel orci porta non pulvinar neque. Sociis natoque penatibus et magnis dis parturient montes nascetur. A
             liquet risus feugiat in ante metus dictum. Vitae aliquet nec ullamcorper sit amet risus.</p>
        </div>
      </div>

      <div className="content-container">
        <div className="image-container">
          {/* Image 2 */}
          {/* <img src={bannerImage} alt="Image of Colonel's Fly'n Aces banner with a single propeller aircraft facing the viewer" /> */}
        </div>
        <div className="text-container">
          {/* Text 2 */}
          <h2>Container 2 Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a.
             Enim ut sem viverra aliquet eget sit amet tellus. 
             Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. 
             Eros in cursus turpis massa tincidunt dui ut. Tempus iaculis urna id volutpat lacus laoreet non curabitur. 
             Proin fermentum leo vel orci porta non pulvinar neque. Sociis natoque penatibus et magnis dis parturient montes nascetur. A
             liquet risus feugiat in ante metus dictum. Vitae aliquet nec ullamcorper sit amet risus</p>
        </div>
      </div>

      <div className="content-container">
        <div className="image-container">
          {/* Image 3 */}
          {/* <img src="path/to/image3.jpg" alt="Image 3" /> */}
        </div>
        <div className="text-container">
          {/* Text 3 */}
          <h2>Container 3 Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a.
             Enim ut sem viverra aliquet eget sit amet tellus. 
             Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. 
             Eros in cursus turpis massa tincidunt dui ut. Tempus iaculis urna id volutpat lacus laoreet non curabitur. 
             Proin fermentum leo vel orci porta non pulvinar neque. Sociis natoque penatibus et magnis dis parturient montes nascetur. A
             liquet risus feugiat in ante metus dictum. Vitae aliquet nec ullamcorper sit amet risus</p>
        </div>
      </div>
    </div>
  );
};

export default Home;