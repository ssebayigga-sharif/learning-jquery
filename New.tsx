import jQuery from "jquery";
function New() {
  jQuery(() => {
    jQuery("ol:first").append("<li>we love each other");
    jQuery("<li> I am coming home</li>").appendTo("ol:first");
    //the prepend function or method
    jQuery("ol").prepend("<li> we came first</li>");
    jQuery("<li>we will make it man </li>").prependTo("ol");
    jQuery("ol").prepend("<h3> Sharif Ssebayigga</h3>");
    //how to produce siblings
    jQuery("h1").after("<h1> Our Family</h1>");
    jQuery("p").before("<p>We play soccer </p>");
    jQuery("p").after("<ol>");
  });
  return (
    <>
      <h1>My family</h1>
      <ol>
        <li>Shakirah</li>
        <li>Sharif</li>
        <li>Shakur</li>
        <li>Abdul</li>
        <li>Bashiirah</li>
        <li>Zafalan</li>
        <li>Mark</li>
      </ol>
      <p>we were born in a village called Ssambwe in Luweeero district</p>
      <h2>Friends</h2>
      <ol>
        <li>Kawiso</li>
        <li>Mutagubya</li>
        <li>Katamba</li>
        <li>Nakitto</li>
        <li>Jjagwe</li>
        <li>Nsereko</li>
        <li>Suzan</li>
        <li>Marion</li>
        <li>Suubi</li>
        <li>Esther</li>
        <li> Elizabeth</li>
        <li>Moses</li>
      </ol>
      <p>I can not mention all of them but we can go with these ones</p>
    </>
  );
}
export default New;
