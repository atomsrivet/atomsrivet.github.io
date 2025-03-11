
function runExperiment(){
  board = {};
  // mobile = 0;  //mobile-friendly or web-version
  //mobile = JSON.parse("[" + getQueryParams().m + "]");

  // BOARD
  // paper (paper)
  board.paper = {};
  board.paper.width  = window.innerWidth;
  board.paper.height = window.innerHeight;
  board.paper.centre = [0.5*window.innerWidth , 0.5*window.innerHeight];
  board.paper.rect   = [0,0,board.paper.width,board.paper.height];
  board.paper.object = drawPaper(board.paper.rect);

  board.background = {};
  board.background.width  = window.innerWidth;
  board.background.height = window.innerHeight;
  board.background.rect   = [0, 0,board.background.width,board.background.height];
  board.background.object = drawRect(board.paper.object, board.background.rect);
  board.background.object.attr({"fill": "white"});
  board.background.object.attr({"opacity": 0});
  board.background.object.toBack();
  
  // APPEARANCE
  x = board.paper.centre[0];
  y = board.paper.centre[1];
  // size scaling
  if (board.paper.centre[0]>board.paper.centre[1]) { //assume that if wider than longer, then computer
    scale = board.paper.centre[1]/9/53;}
  else {
    //scale = board.paper.centre[0]/6/53; //assume that if longer than wider, then mobile
    scale = board.paper.centre[0]/8/53;
    if (board.paper.centre[1]<(8*scale*53)){ //(board.paper.centre[1]<(6*scale*53)){
  scale = board.paper.centre[1]/10/53;
    }}
  // fonts
  board.font_bigsize   = 50*scale;
  board.font_medsize   = 20*scale;
  board.font_tinysize  = 12*scale;

   // FEEDBACK

    if (mobile==1) {
    var rect = [x-scale*200,4.2/5*y-scale*90,scale*400,scale*180];
  } else{
      var rect = [x-scale*200,y-scale*90,scale*400,scale*180];
  }
  // success feedback
  board.posfeedback = {};
  board.posfeedback.object  = drawImage(board.paper.object, "img/f_success.png", rect);
  // restart feedback
  board.resfeedback = {};
  board.resfeedback.object = drawImage(board.paper.object, "img/f_restart.png", rect);
  // no attempts left feedback
  board.nolfeedback = {};
  board.nolfeedback.object = drawImage(board.paper.object, "img/f_noleft.png", rect);
  // new game feedback
  board.newfeedback = {};
  board.newfeedback.object = drawImage(board.paper.object, "img/f_new.png", rect);
  hideFeedback();

  // PROGRESS

var rect = [x-scale*200,y-scale*90,scale*400,scale*180];

  if (mobile==1) {
    mob_img = 'mob';
  } else {
    mob_img = '';
  }



  //GRID
  coding.numrows = 15;
  coding.numcols = 15;
  if (mobile==1) {
  width = 53;} else{width = 45;}
  generateGrid(scale*width, scale*width, coding.numrows, coding.numcols);

  // INSTRUCTIONS
  board.dl = {};
  board.dr = {};
  board.dm = {};
  board.uc = {};
    
  if (mobile==0) {
    board.uc.centre  = [board.paper.centre[0], board.paper.centre[1] - scale*width*(coding.numrows/3) - (2/3)*(1.62*1.5*scale*width) - 2.2*board.font_bigsize];
    
    board.dr.centre = [board.paper.centre[0]+scale*width*Math.ceil(coding.numrows/3), board.paper.centre[1]-scale*width*Math.ceil(coding.numrows/2)];
    board.dl.centre = [board.paper.centre[0]-scale*width*Math.ceil(coding.numrows/3), board.paper.centre[1]-scale*width*Math.ceil(coding.numrows/2)];
    //board.dm.centre = [board.paper.centre[0], board.paper.centre[1]+scale*width*Math.ceil(coding.numrows/2)];
    //board.dr.centre = [board.paper.centre[0], board.paper.centre[1]-scale*width*Math.ceil(coding.numrows/2)];
    board.dr.text   = "n = new game";
    board.dl.text   = "r = restart";
    key_dr = "n = ";
    key_dl = "r = ";

    //board.dm.text   = "attempt: 1/3";
    //board.dm.object = drawText(board.paper.object,board.dm.centre, board.dm.text);
    //board.dm.object.attr({"font-size": board.font_medsize});
    //board.dm.object.attr({"text-anchor": "centre"});
    }
    else {
      board.uc.centre  = [board.paper.centre[0], board.paper.centre[1] - scale*width*(coding.numrows/3) - 3*(2/3)*(1.62*1.5*scale*width) - 2.2*board.font_bigsize];
    
      board.dr.centre = [board.paper.centre[0]+scale*width*Math.ceil(coding.numrows/3), board.paper.centre[1]-scale*width*Math.ceil(coding.numrows/2)- 1*(1.63*1.5*width) - 0.5*board.font_medsize];
      board.dl.centre = [board.paper.centre[0]-scale*width*Math.ceil(coding.numrows/3), board.paper.centre[1]-scale*width*Math.ceil(coding.numrows/2) - 1*(1.63*1.5*width) - 0.5*board.font_medsize];
      board.dl.text   = "restart";
      //board.dr.centre = [board.paper.centre[0], board.paper.centre[1]-scale*width*Math.ceil(coding.numrows/2)- 0.5*(1.63*1.5*width) - 0.5*board.font_medsize];
      board.dr.text   = "new game";
      key_dr = "";
    key_dl = "";
    }



  op_dl = 1;
  board.uc.text   = "Game 1/80";
  board.dl.object = drawText(board.paper.object,board.dl.centre, board.dl.text);
  board.dl.object.attr({"font-size": board.font_medsize});
  board.dl.object.attr({"text-anchor": "left"});
  board.dl.object.attr({"font-family": '"Courier"'});
  board.dl.object.attr({"font-weight": "bold"});
  board.dl.object.attr({"opacity": op_dl});
  board.dr.object = drawText(board.paper.object,board.dr.centre, board.dr.text);
  board.dr.object.attr({"font-size": board.font_medsize});
  board.dr.object.attr({"text-anchor": "right"});
  board.dr.object.attr({"font-family": '"Courier"'});
  board.dr.object.attr({"font-weight": "bold"});
  board.dr.object.attr({"opacity": op_dl});
  board.uc.object = drawText(board.paper.object,board.uc.centre, board.uc.text);
  board.uc.object.attr({"font-size": board.font_bigsize});
  board.uc.object.attr({"font-family": '"Courier"'});
  board.uc.object.attr({"font-weight": "bolder"});
  board.uc.object.attr({"stroke": "#df8244"});
  board.uc.object.attr({"fill": "#f1ccb0"});
  board.uc.object.attr({"stroke-width": "1.7"});
  board.uc.object.attr({"text-anchor": "centre"});


    if (mobile == 1) {
      // Draw rectangle around "Restart" text
      var restartRect = drawRect(board.paper.object, [
        board.dl.centre[0] - 70, 
        board.dl.centre[1] - board.font_medsize, 
        140, 
        board.font_medsize + 20
      ]);
      restartRect.attr({"stroke-width": 3, "r": 7});
      restartRect.click(restartGame);
    
      // Draw rectangle around "New Game" text
      var newGameRect = drawRect(board.paper.object, [
        board.dr.centre[0] - 70, 
        board.dr.centre[1] - board.font_medsize, 
        140, 
        board.font_medsize + 20
      ]);
      newGameRect.attr({"stroke-width": 3, "r": 7});
      newGameRect.click(newGame);
    }

  // RESPONSES
  if (mobile==0) {
    jwerty.key('←',handleLeft);
    jwerty.key('→',handleRight);
    jwerty.key('↑',handleUp);
    jwerty.key('↓', handleDown);
    jwerty.key('r',restartGame);
    jwerty.key('n',newGame);}
    else {
      board.dl.object.click(restartGame);
      board.dr.object.click(newGame);
      board.buttons[0].img.click(handleLeft);
      board.buttons[1].img.click(handleRight);
      board.buttons[2].img.click(handleUp);
      board.buttons[3].img.click(handleDown);
}

  // START
  nextTrial();
}
