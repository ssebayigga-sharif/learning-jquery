import jQuery from "jquery";
//import $ from "jQuery";
function Submitt() {
  jQuery(".fom").submit(function (event) {
    let textArea = jQuery(".message");
    if ((textArea.val() as string).trim() === "") {
      textArea.css("box-shadow", "0 0 20px #811");
      event.preventDefault();
    } else {
      //form submitted
    }
  });
  return (
    <>
      <h1>Submit my form man</h1>
      <form className="fom">
        <label>Name</label>
        <input type="text"></input>
        <br></br>
        <br></br>
        <label>age</label>
        <input type="number"></input>
        <br></br>
        <br></br>
        <label>country</label>
        <input type="text"></input>
        <br></br>
        <br></br>
        <textarea className="message"></textarea>
        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Submitt;
