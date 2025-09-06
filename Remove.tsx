import jQuery from "jquery";
function Remove() {
  jQuery(() => {
    jQuery("p:first").remove();
  });
  return (
    <>
      <h1>we are removing this time round</h1>
      <p>incase you have an element you want to remove from your page</p>
      <h2>save your mother</h2>
      <p>God will help me save my mother</p>
      <h3>prayer daily</h3>
      <p>I always pray to God to help me save my mother</p>
    </>
  );
}
export default Remove;
