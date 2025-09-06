import jQuery from "jquery";
function Detach() {
  const year: string = "2003"; //typescript types
  jQuery(() => {
    jQuery("h1").detach();
    jQuery("p").empty();
  });
  return (
    <>
      <h1>Born</h1>
      <p> she was born in {year}</p>
      <h2>read man</h2>
      <p>I hate reading books man</p>
      <h3>school man</h3>
      <p>Me and school nop</p>
    </>
  );
}
export default Detach;
