import jQuery from "jquery";
function Ajjax() {
  jQuery("h1").fadeOut(5000);
  jQuery("h1").fadeToggle();
  return (
    <>
      <h1>Sharif</h1>
    </>
  );
}

export default Ajjax;
