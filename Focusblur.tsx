import jQuery from "jquery";
function Focusblur() {
  // https://om.rs/25hunt
  jQuery("h2 h1").fadeOut(5000);
  jQuery("h2 h1").fadeIn(5000);
  let allInputFields = jQuery("input:text, textarea");
  allInputFields.focus(function () {
    jQuery(allInputFields).css("box-shadow", "0 0 6px rgba(245, 8, 166, 1)");
  });
  allInputFields.blur(function () {
    jQuery(allInputFields.css("box-shadow", "none"));
  });
  let shoke = jQuery("#mine");
  shoke.blur(function () {
    let text = shoke.val() as string;
    if (text.length < 4) {
      return jQuery(shoke).css("box-shadow", "0 0 6px #f50808ff");
    } else {
      return jQuery(shoke).css("box-shadow", "0 0 6px #09b626ff");
    }
  });
  return (
    <>
      <h1>my focus and blur lecture</h1>
      <p id="demo">paragraph</p>
      <form>
        <label>
          Name : <input type="text"></input>
        </label>
        <br></br>
        <br></br>
        <label>
          School : <input type="text"></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Country : <input type="text"></input>
        </label>
        <br></br>
        <br></br>
        <textarea>write here</textarea>
      </form>
      <h2>after filling that form do not forget to submit it</h2>
      <p>we will all manage the situation</p>
      <h1>strict usre input field</h1>
      <p>
        when the user enters a value less than four characters the box shadow
        will be red
      </p>
      <p>
        and when the user enters a value of characters greater than or equal to
        four the box shadow will turn green
      </p>
      <label>
        Name : <input type="text" id="mine"></input>
      </label>
    </>
  );
}
export default Focusblur;
