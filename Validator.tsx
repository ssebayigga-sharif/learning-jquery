import jQuery, { event } from "jquery";
import { useEffect } from "react";
function Validator() {
  useEffect(function () {
    let form = jQuery("#form");
    enableFastFeedback(form);
    form.submit(function (event) {
      let name = jQuery("#name").val() as string;
      let password = jQuery("#password").val() as string;
      let email = jQuery("#email").val() as string;
      let textarea = jQuery("#textarea").val() as string;
      let checkbox = jQuery("#checkbox").is(":checked");
      validateNameField(name, event);
      validatePassword(password, event);
      validateTextarea(textarea, event);
      validateemailField(email, event);
      validateCheckbox(checkbox, event);
    });
    function enableFastFeedback(formElement: JQuery) {
      let nameInput = formElement.find("#name");
      let passwordInput = formElement.find("#password");
      let emailInput = formElement.find("#email");
      let textareaInput = formElement.find("#textarea");
      let checkboxInput = formElement.find("#checkbox");
      let name = jQuery("#name").val();
      checkboxInput.change(function (event) {
        let isChecked = checkboxInput.is(":checked");
        validateCheckbox(isChecked, event);
        if (!isChecked) {
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

      nameInput.blur(function (event) {
        let name = jQuery("#name").val();
        validateNameField(name as string, event);
        if (!validName(name as string)) {
          jQuery("#name").css("box-shadow", "0 0 10px #811");
        } else {
          jQuery("#name").css("box-shadow", "0 0 10px #181");
        }
      });
      passwordInput.blur(function (event) {
        let password = jQuery("#password").val();
        validatePassword(password as string, event);
        if (!validPassword(password as string)) {
          jQuery("#password").css("box-shadow", "0 0 10px #811");
        } else {
          jQuery("#password").css("box-shadow", "0 0 10px #181");
        }
      });
      emailInput.blur(function (event) {
        let email = jQuery("#email").val();
        validateemailField(email as string, event);
        if (!validEmail(email as string)) {
          jQuery("#email").css("box-shadow", "0 0 10px #811");
        } else {
          jQuery("#email").css("box-shadow", "0 0 10px #181");
        }
      });
      textareaInput.blur(function (event) {
        let textarea = jQuery("#textarea").val();
        validateTextarea(textarea as string, event);
        if (!validTextarea(textarea as string)) {
          jQuery("#textarea").css("box-shadow", "0 0 10px #811");
        } else {
          jQuery("#textarea").css("box-shadow", "0 0 10px #181");
        }
      });
    }

    function validName(name: string) {
      return name.length > 4;
    }
    function validateNameField(name: string, event: JQuery.TriggeredEvent) {
      if (!validName(name)) {
        jQuery("#name-feedback").text("   please enter atleast two characters");
        event.preventDefault();
      } else {
        jQuery("#name-feedback").text(" ");
      }
    }

    //password
    function validPassword(password: string) {
      return password.length >= 4;
    }
    function validatePassword(password: string, event: JQuery.TriggeredEvent) {
      if (!validPassword(password)) {
        jQuery("#password-feedback").text(
          " password should contain atleast six characters"
        );
        event.preventDefault();
      } else {
        jQuery("#password-feedback").text(" ");
      }
    }
    //email
    function validEmail(email: string) {
      return email.length >= 4;
    }
    function validateemailField(email: string, event: JQuery.TriggeredEvent) {
      if (!validEmail(email)) {
        jQuery("#email-feedback").text(" please enter email");
        event.preventDefault();
      } else {
        jQuery("#email-feedback").text(" ");
      }
    }
    //password
    function validTextarea(textarea: string) {
      return textarea.length >= 20;
    }
    function validateTextarea(textarea: string, event: JQuery.TriggeredEvent) {
      if (!validTextarea(textarea)) {
        jQuery("#textarea-feedback").text(
          " password should contain atleast six characters"
        );
        event.preventDefault();
      } else {
        jQuery("#textarea-feedback").text(" ");
      }
    }
    //checkbox
    function isChecked(checkbox: boolean) {
      return checkbox === true;
    }
    function validateCheckbox(checkbox: boolean, event: JQuery.TriggeredEvent) {
      if (!isChecked(checkbox)) {
        jQuery("#checked").text("  please agree to the terms and conditions");
        event.preventDefault();
      } else {
        jQuery("#checked").text(" ");
      }
    }
  });
  return (
    <>
      <h1>my last part of the form validation</h1>
      <form id="form">
        <input id="name" type="text" placeholder="enter your name" />
        <span id="name-feedback"></span>
        <br></br>
        <br></br>
        <input id="password" type="text" placeholder="enter your password" />
        <span id="password-feedback"></span>
        <br></br>
        <br></br>
        <input id="email" type="email" placeholder="enter your email" />
        <span id="email-feedback"></span>
        <br></br>
        <br></br>
        <textarea id="textarea" cols={100} rows={15}></textarea>
        <span id="textarea-feedback"></span>
        <br></br>
        <br></br>
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">please agree</label>
        <span id="checked"></span>
        <br></br>
        <br></br>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Validator;
