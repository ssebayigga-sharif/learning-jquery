import jQuery from "jquery";
function Datachange() {
  let mine = jQuery("h1");
  console.log(mine.data("herdata"));
  let thems = jQuery("p");
  console.log(thems.data("themdata"));
  return (
    <>
      <h1 data-herdata="some one should come in">count</h1>
      <p data-themdata="they will accept">why do we resist the truth</p>
    </>
  );
}

export default Datachange;
