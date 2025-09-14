import jQuery from "jquery";
function Focusblur() {
  let inputfields = jQuery("input:text, textarea");
  inputfields.focus(function () {
    $(this).css("box-shadow", " 0 0 10px ffffff");
  });
  return (
    <>
      <h1>My form </h1>
      <form>
        <label>
          Name : <input type="text"></input>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <label>
          School : <input type="text"></input>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <textarea>In here</textarea>

        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Focusblur;
