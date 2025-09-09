import jQuery from "jquery";
function Retrievecontent() {
  let sharif = jQuery("p");
  console.log(sharif.text());
  //sharif.html("sharif can not drive"); //changes the previous paragraph content
  //to add some content to a paragraph
  sharif.html(sharif.text() + " this is the content added");
  return (
    <>
      <h1>Driver</h1>
      <p>
        we will drive just know <span>ohhh yeah</span> but it will not be easy
      </p>
    </>
  );
}
export default Retrievecontent;
