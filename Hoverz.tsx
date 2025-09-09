import jQuery from "jquery";
function Hoverz() {
  jQuery(".hover").hover(() => {
    alert("sharif Ssebayigga");
  });
  jQuery("p").hover(() => {
    jQuery(this).text("this man has hovered over me !!!!!");
  });
  return (
    <>
      <h2>yes tea</h2>
      <p>hover here and see what happens</p>
      <button className="hover">hover</button>
    </>
  );
}
export default Hoverz;
