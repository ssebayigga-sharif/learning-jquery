import jQuery from "jquery";
import $ from "jquery";
import { useEffect } from "react";
function Outside() {
  useEffect(() => {
    jQuery(function () {
      let myApi =
        "https://www.outreachy.org/eligibility-results/?jsoncallback=?";
      $.getJSON(myApi, {
        //options
        tags: "sun, beach",
        tagmode: "any",
        format: "json",
      })
        .done(function (data) {
          //when success
          console.log(data);
        })
        .fail(function () {
          //when failed
          alert("this file has failed");
        });
    });
  });
  return (
    <>
      <h1>Getting data outside the my react project with jQuery</h1>
      <p id="demo">use this paragraph</p>
      <h2>
        at the end of the day we will make it not imediately but definately
      </h2>
    </>
  );
}
export default Outside;
