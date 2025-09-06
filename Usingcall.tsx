import jQuery from "jquery";
function Usingcall() {
  jQuery("h1").fadeOut(2000, () => {
    jQuery("h2").fadeOut(2000, () => {
      jQuery("h3").fadeOut(2000, () => {
        jQuery("h4").fadeOut(2000, () => {
          jQuery("h5").fadeOut(2000, () => {
            jQuery("h6").fadeOut(2000);
          });
        });
      });
    });
  });
  return (
    <>
      <h1>Netball</h1>
      <h2>Football</h2>
      <h3>Volley ball</h3>
      <h4>Hockey</h4>
      <h5>Tennis</h5>
      <h6>Formula one</h6>
    </>
  );
}
export default Usingcall;
