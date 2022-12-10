
<!-- Show methods -->


function showFeedbackPos() {
  board.posfeedback.object.attr({"opacity": 1});
  board.posfeedback.object.toFront();
  
}
function showFeedbackRestart() {
  board.resfeedback.object.attr({"opacity": 1});
  board.resfeedback.object.toFront();
}
function showFeedbackNew() {
  board.newfeedback.object.attr({"opacity": 1});
  board.newfeedback.object.toFront();
}
function showFeedbackNoLeft() {
  board.nolfeedback.object.attr({"opacity": 1});
  board.nolfeedback.object.toFront();
}

function showChallenge() {

   coding.answering = false;

   board.background.object.attr({"opacity": 1});
   board.background.object.toFront();
   board.challenge.object.attr({"opacity": 1});
   board.challenge.object.toFront();
}
