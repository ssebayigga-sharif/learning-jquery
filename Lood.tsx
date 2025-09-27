import jQuery from "jquery";
import { useEffect } from "react";
function Lood() {
  useEffect(() => {
    jQuery("#demo").load("/Cope.txt");
  });
  return (
    <>
      <h1>learning ajax in jQuery</h1>
      <p>we will get to know more about ajax in the future man</p>
      <h2>am now worried at all brother</h2>
      <p id="demo">we ate yeaterday man</p>
    </>
  );
}
export default Lood;
