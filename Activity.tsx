import jQuery from "jquery";
import { useEffect } from "react";
function Activity() {
  useEffect(() => {
    jQuery("#fom").submit(function (event) {
      let names = jQuery("#tex").val() as string;
      let passWord = jQuery("#pass").val() as string;
      let textArea = jQuery("#message").val() as string;
      let checkBox: Boolean = jQuery("#box").is(":checked");
      validateNameField(names, event);
      validatePasswordField(passWord, event);
      validateTextArea(textArea, event);
      validateCheckBox(checkBox, event);
    });
    //validating the name field

    function isValidName(name: string): Boolean {
      return name.length >= 2;
    }
    function validateNameField(name: string, event: JQuery.SubmitEvent) {
      if (!isValidName(name)) {
        jQuery("#tex-feedback").text(" please enter atleast two characters");
        event.preventDefault();
      } else {
        jQuery("#tex-feedback").text(" ");
      }
    }

    //the password field
    function isValidatePassword(passWord: string): Boolean {
      return passWord.length >= 4;
    }
    function validatePasswordField(
      passWord: string,
      event: JQuery.SubmitEvent
    ) {
      if (!isValidatePassword(passWord)) {
        jQuery("#pass-feedback").text("please enter a valid password");
      } else {
        jQuery("pass-feedback").text("");
      }
    }
    //the textarea field
    function isValidateTextArea(textArea: string): Boolean {
      return textArea.length >= 4;
    }
    function validateTextArea(TextArea: string, event: JQuery.SubmitEvent) {
      if (!isValidateTextArea(TextArea)) {
        jQuery("#message-feedback").text("please write here something");
      } else {
        jQuery("message-feedback").text("");
      }
    }
    //the checkbox field
    function isValidCheckBox(checkbox: string): Boolean {
      return checkbox === ":checked";
    }
    function validateCheckBox(checkBox: string, event: JQuery.SubmitEvent) {
      if (!isValidCheckBox(checkBox)) {
        jQuery("#box-feedback").text(
          "please agree to the terms and conditions"
        );
      } else {
        jQuery("box-feedback").text("");
      }
    }
  });

  return (
    <>
      <form id="fom">
        <input type="text" placeholder="Enter your name" id="tex" />
        <span id="tex-feedback"></span>
        <br></br>
        <br></br>
        <input
          id="pass"
          type="password"
          placeholder="Enter your password"
          //value={"Sharif"}
        />
        <span id="pass-feedback"></span>
        <br></br>
        <br></br>
        <input type="range" placeholder=" Enter your age" />
        <span></span>
        <br></br>
        <br></br>
        <textarea cols={30} rows={12} id="message"></textarea>
        <span id="message-feedback"></span>
        <br></br>
        <br></br>
        <input type="checkbox" id="box" />
        <span id="box-feedback" />
        <br></br>
        <br></br>
        <button type="submit" id="sub">
          submit
        </button>
      </form>
    </>
  );
}
export default Activity;
