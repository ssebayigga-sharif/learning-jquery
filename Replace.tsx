import jQuery from "jquery";
function Replace() {
  jQuery(() => {
    jQuery("p:first").replaceWith("Sharif");
    jQuery("p:first").replaceAll("h1,h2,h3,h4"); //replaces all the selected headings with the first paragraph
  });

  return (
    <>
      <h1>Replace</h1>
      <p>
        we are looking at how to replace existing elements on a page using
        jQuery
      </p>

      <h2>please be atentive </h2>
      <p>the teacher has arrived</p>
      <h3>do not waste this chance my friends</h3>
      <p>we are aware man do not rush brother</p>
      <h4>Today is a good day</h4>
      <p>we are all going to enjoy it </p>
      <h5>my mother went to the village</h5>
      <p> we were told do not worry</p>
    </>
  );
}
export default Replace;
