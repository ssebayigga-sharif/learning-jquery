import download from "./download.jpeg";
import flower from "./download (1).jpeg";
import cool from "./Beautiful-Flowers.jpg.webp";
import "./Show.scss";

function Slideshow() {
  return (
    <>
      <div>
        <h1>My first image</h1>
        <picture>
          <img src={download} alt="flower" className="it" />
        </picture>
        <h2>my second image</h2>
        <picture>
          <img src={flower} alt="flowers" className="it" />
        </picture>
        <h3>my third image</h3>
        <picture>
          <img src={cool} alt="sweet flowers" className="it" />
        </picture>
        <p> All of my images are beautiful !!!!!!!!!!!!!!!!!</p>
      </div>
    </>
  );
}
export default Slideshow;
