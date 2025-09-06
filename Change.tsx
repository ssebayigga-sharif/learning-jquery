import jQuery from "jquery";
function Change() {
  jQuery(() => {
    //jQuery("p").css("display", "none"); //same as .hide()
    jQuery("p").css("font-size", "30px");
    let properties = jQuery("p").css(["font-size", "color"]);
    console.log(properties);
  });
  return (
    <>
      <h1>heading</h1>
      <p>paragraph</p>
      <h2>another heading</h2>
      <p>I can drive man</p>
      <h3>how to change elements in the DOM</h3>
      <p>the DOM is the document object model</p>
    </>
  );
}
export default Change;
