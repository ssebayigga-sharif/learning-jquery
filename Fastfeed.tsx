import { useEffect } from "react";
import jQuery from "jquery";
function Fastfeed() {
  useEffect(function () {
    let Form = jQuery("#form");
    Form.submit(function (event) {
      let name = jQuery("#name").val() as string;
      let textarea = jQuery("#text").val() as string;
      let checkbox = jQuery("#checkbox").is(":checked");
      validatenameField(name, event);
      validateTextarea(textarea, event);
      validateCheckbox(checkbox, event);
    });
    //namefield validation
    function validNameField(name: string) {
      return name.length > 3;
    }

    function validatenameField(name: string, event: JQuery.SubmitEvent) {
      if (!validNameField(name)) {
        jQuery("#name-feedback").text("please enter atleast four characters");
        event.preventDefault();
      } else {
        jQuery("#name-feedback").text(" ");
      }
    }

    //textArea validation
    function validTextarea(textArea: string) {
      return textArea.length > 10;
    }
    function validateTextarea(textArea: string, event: JQuery.SubmitEvent) {
      if (!validTextarea(textArea)) {
        jQuery("#text-feedback").text("please fill in some data");
        event.preventDefault();
      } else {
        jQuery("#text-feedback").text("");
      }
    }

    // checkbox validation
    function Checked(isChecked: boolean) {
      return isChecked == true;
    }

    function validateCheckbox(isChecked: boolean, event: JQuery.SubmitEvent) {
      if (!Checked(isChecked)) {
        jQuery("#checkbox-feedback").text(
          "please agree the terms and conditions"
        );
        event.preventDefault();
      } else {
        jQuery("#checkbox-feedback").text(" ");
      }
    }
  });

  return (
    <>
      <h1>fast feedback of a form element</h1>
      <p>fill in this form to create your own account</p>
      <form id="form">
        <input type="text" placeholder="enter your name" id="name" />
        <span id="name-feedback"></span>
        <br></br> <br></br>
        <input type="range" />
        <br></br>
        <br></br>
        <textarea
          id="text"
          cols={40}
          rows={4}
          placeholder="write here"
        ></textarea>
        <span id="text-feedback"></span>
        <br></br>
        <br></br>
        <input type="checkbox" id="checkbox" />
        <span id="checkbox-feedback"></span>
        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Fastfeed;
