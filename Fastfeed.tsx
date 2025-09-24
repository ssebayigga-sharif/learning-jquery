import { useEffect } from "react";
import jQuery, { event } from "jquery";
function Fastfeed() {
  useEffect(function () {
    let forms = jQuery("#form");
    enableFastFeedBack(forms);
    forms.submit(function (event) {
      let name = jQuery("#name").val() as string;
      let textarea = jQuery("#text").val() as string;
      let checkbox = jQuery("#checkbox").is(":checked");
      validatenameField(name, event);
      validateTextarea(textarea, event);
      validateCheckbox(checkbox, event);
    });
    function enableFastFeedBack(formElemnt: JQuery) {
      let nameInput = formElemnt.find("#name");
      let textAreaInput = formElemnt.find("#text");
      let checkboxInput = formElemnt.find("#checkbox");
      //name field fastfeedback
      nameInput.blur(function (event) {
        let name = nameInput.val();
        validatenameField(name as string, event);
        if (!validNameField(name as string)) {
          jQuery("#name").css({
            "box-shadow": "0 0 10px #811",
            border: "2px solid #600",
          });
        } else {
          jQuery("#name").css({
            "box-shadow": "0 0 10px rgba(17, 136, 23, 1)",
            border: "2px solid #060",
          });
        }
      });
      //text area fastfeedback
      textAreaInput.blur(function (event) {
        let textArea = textAreaInput.val();
        validateTextarea(textArea as string, event);
        if (!validTextarea(textArea as string)) {
          jQuery("#text").css({
            "box-shadow": "0 0 5px #811",
            border: "2px solid #611",
          });
        } else {
          jQuery("#text").css({
            "box-shadow": "0 0 5px #060",
            border: "2px solid #060",
          });
        }
      });
      //checkbox fast feed back
      checkboxInput.change(function (event) {
        let isChecked = jQuery(this).is(":checked");
        validateCheckbox(isChecked, event);
        if (!Checked(isChecked)) {
          jQuery("#checkbox").add("label[for='checkbox']").css({
            "box-shadow": "0 0 5px #811",
            border: "1px solid #611",
          });
        } else {
          jQuery("#checkbox").add("label[for='checkbox']").css({
            "box-shadow": "0 0 5px #181",
            border: "1px solid #060",
          });
        }
      });
    }
    //namefield validation
    function validNameField(name: string) {
      return name.length > 3;
    }

    function validatenameField(name: string, event: JQuery.TriggeredEvent) {
      if (!validNameField(name)) {
        jQuery("#name-feedback").text("please enter atleast four characters");
        event.preventDefault();
        // jQuery("#name").css({
        //   "box-shadow": "0 0 10px #811",
        //   border: "2px solid #600",
        // });
      } else {
        jQuery("#name-feedback").text(" ");
        // jQuery("#name").css({
        //   "box-shadow": "0 0 10px rgba(17, 136, 23, 1)",
        //   border: "2px solid #060",
        // });
      }
    }

    //textArea validation
    function validTextarea(textArea: string) {
      return textArea.length > 10;
    }
    function validateTextarea(textArea: string, event: JQuery.TriggeredEvent) {
      if (!validTextarea(textArea)) {
        jQuery("#text-feedback").text("please fill in some data");
        event.preventDefault();
        // jQuery("#text").css({
        //   "box-shadow": "0 0 10px #811",
        //   border: "2px solid #600",
        // });
      } else {
        jQuery("#text-feedback").text("");
        // jQuery("#text").css({
        //   "box-shadow": "0 0 10px rgba(17, 136, 23, 1)",
        //   border: "2px solid #060",
        // });
      }
    }

    // checkbox validation
    function Checked(isChecked: boolean) {
      return isChecked === true;
    }

    function validateCheckbox(
      isChecked: boolean,
      event: JQuery.TriggeredEvent
    ) {
      if (!Checked(isChecked)) {
        jQuery("#checkbox-feedback").text(
          "   please agree the terms and conditions"
        );
        event.preventDefault();
        // jQuery("#checkbox").css({
        //   "box-shadow": "0 0 10px #811",
        //   border: "2px solid #600",
        // });
      } else {
        jQuery("#checkbox-feedback").text(" ");
        // jQuery("#checkbox").css({
        //   "box-shadow": "0 0 10px rgba(17, 136, 23, 1)",
        //   border: "2px solid #060",
        // });
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
        <label htmlFor="checkbox">check me</label>
        <span id="checkbox-feedback"></span>
        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Fastfeed;
