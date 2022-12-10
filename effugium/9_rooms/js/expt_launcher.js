

function nextTrial() {
  if (!startedexperiment) { return; }
  // this is used for any change in game (i.e. restart; new game; completed game)


  // increment trial
  coding.index++;
  coding.trial++;
  // update
  updateSdata();
  // timestamp
  coding.timestamp = getTimestamp();
  // reset trial stats
  coding.answering = true;
  coding.solved = 0;

    if (flag_restart == 1) {
      coding.attempts++} 
      else {
        coding.game ++;
        coding.attempts = 1;
      }

      board.uc.object.attr({"text": "Game " + (coding.game+1)});
      board.dl.object.attr({"text": (key_dl + "restart (" + (coding.attempts) + "/3)")});
      board.dl.object.attr({"opacity": op_dl});
      resetGrid();

    }


    function solvedGame(){
      coding.solved = 1;
      coding.answering = 0;

      showFeedbackPos();
      setTimeout(function(){hideFeedback();nextTrial();}, 500);
    }

    function restartGame(){
      if (coding.answering) {
      if (flag_test==0) {
        if (coding.attempts<3) {
          flag_restart = true;
          showFeedbackRestart();
          setTimeout(function(){hideFeedback();nextTrial();}, 500);
        }
        else {
          showFeedbackNoLeft();
          setTimeout(function(){hideFeedback();nextTrial();}, 500);
        }
      } else {
        //restartTest();
      }
    }
    }

    function newGame(){
      if (coding.answering) {
      showFeedbackNew();
      setTimeout(function(){hideFeedback();nextTrial();}, 500);}
    }



