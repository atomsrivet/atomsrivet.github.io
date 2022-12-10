
<!-- Hide methods -->
function hideTrial() {
  hideFixation(board.fixation);
  hideStimuli();
  hideInstructions();
  hideClock();
}

function hideFeedback() {
   board.posfeedback.object.attr({"opacity": 0});
   board.resfeedback.object.attr({"opacity": 0});  
   board.newfeedback.object.attr({"opacity": 0});
   board.nolfeedback.object.attr({"opacity": 0});
}

function hideProgress() {
   board.background.object.toBack();
   board.background.object.attr({"opacity": 0});
   board.progress[0].object.attr({"opacity": 0});
   board.progress[1].object.attr({"opacity": 0});
   board.progress[2].object.attr({"opacity": 0});
   board.progress[3].object.attr({"opacity": 0});
   board.progress[4].object.attr({"opacity": 0});
}

function hideBlock() {
  board.block.object.remove();
}
