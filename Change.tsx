import jQuery from "jquery";
import $ from "jquery";
function Change() {
  let isChecked = jQuery(".it");
  isChecked.change(function () {
    let checkedIt = isChecked.is(":checked");
    if (checkedIt) {
      isChecked
        .add('label [for= "it"]')
        .css("box-shadow", "0 0 10px hsla(140, 97%, 48%, 1.00)");
    } else {
      isChecked
        .add("label [for= 'it']")
        .css("box-shadow", "0 0 10px #f10909ff");
    }
  });
  //under the selector
  $(".selection").change(function () {
    let selectedd = $(this).find(":selected").text(); //this one creates a pop up of the selected
    //option
    alert(selectedd);
  });
  return (
    <>
      <h1>heading</h1>
      <p>paragraph</p>
      <h2>another heading</h2>
      <p>I can drive man</p>
      <h3>how to change elements in the DOM</h3>
      <p>the DOM is the document object model</p>
      <form>
        <label>
          <input type="checkbox" className="it" />
          Check me
        </label>
        <br></br>
        <label>
          <input type="checkbox" className="it" />
          Check her
        </label>
        <br></br>
        <label>
          <input type="checkbox" className="it" />
          Check him
        </label>
        <br></br>
        <label>
          <input type="checkbox" className="it" />
          Check them
        </label>
      </form>
      <select className="selection">
        <option>option one</option>
        <option>option two</option>
        <option>option three</option>
        <option>option four</option>
        <option>option five</option>
        <option>option six</option>
        <option> option seven</option>
        <option>option eight</option>
        <option>option nine</option>
        <option>option ten</option>
      </select>
    </>
  );
}
export default Change;
