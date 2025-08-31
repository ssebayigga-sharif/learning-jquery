import jQuery from "jquery";
function Delay() {
  jQuery(() => {
    jQuery("h1").fadeOut(1000).delay(1000).fadeIn(1000);
    jQuery("h2").delay(1000).fadeOut(1000).delay(500).fadeIn();
  });
  return (
    <>
      <h1>Soccer</h1>
      <p>they always play soccer at school</p>
      <h2>volley ball</h2>
      <p>they like volley ball and they play volley ball</p>
    </>
  );
}

export default Delay;
