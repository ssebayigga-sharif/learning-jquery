import jQuery from "jquery";
function Addclass() {
  jQuery("h1").addClass("me"); //adds a class to the h1 element
  jQuery("p").removeClass("sharif"); //removes a class form an element
  jQuery("h2").removeClass("those").addClass("added");

  return (
    <>
      <h1>Sharif</h1>
      <p className="sharif">I can remove a class from an element</p>
      <h2 className="those">changed from today</h2>
    </>
  );
}
export default Addclass;
