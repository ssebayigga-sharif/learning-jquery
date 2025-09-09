import jQuery from "jquery";
function Datachange() {
  let mine = jQuery("h1");
  console.log(mine.data("herdata"));
  let thems = jQuery("p");
  console.log(thems.data("themdata"));
  jQuery("h1").fadeOut(9000); //makes the heading one to  dissappear after nine seconds
  const cars: string[] = ["volvo", "sienta", "prado"];
  console.log(cars);
  let count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(count);
  let know: boolean[] = [true, false];
  console.log(know);
  return (
    <>
      <h1 data-herdata="some one should come in">count</h1>
      <p data-themdata="they will accept">why do we resist the truth</p>
      <h2>I was taught reading and writing</h2>
      <p>i hate mathematics</p>
      <p>history was my favorite subject </p>
      <h1>driver under instructions</h1>
      <p>people take long to learn how to drive but why</p>
      <p>you should be revising books now</p>
    </>
  );
}

export default Datachange;
