
var sdata;
var edata;
var parameters;
var board;
var coding;

function setExperiment() {




  // EDATA ----------------
  edata = {};
  // expt
  edata.expt_subject = participant_id;
  edata.expt_task    = participant_task;
  edata.expt_RISE    = participant_RISE;
  edata.mobile       = mobile;

  // PARAMETERS -----------
  parameters = {};

  //time outs (check)
  parameters.response_timeout =  2000;  // response time
  parameters.warnings_timeout = 20000;  // response warning time
  parameters.feedpos_timeout  =   400;  // feedback time (good)
  parameters.feedneg_timeout  =  2000;  // feedback time (bad)

  // numbers
  parameters.nb_trials        =   60;
  parameters.nb_transfer      =   20;

  // version
  //mobile = JSON.parse("[" + getQueryParams().m + "]");
  parameters.mobile = mobile;

  // first 5 trials
  tool_arr = [0, 300, 600];
  tool_arr = shuffle(tool_arr);

  parameters.tool_arr = tool_arr;

  // image mappings
  //parameters.img_tool = arr[0];
  //parameters.img_pair = arr[1];
  parameters.img_tool = 's';
  parameters.img_pair = 'c';

  
  max_img_n_1 = 10 + 1; 
  max_pairs   = 6;
  max_shapes  = 4;

  s_order = Array.from(Array(max_img_n_1).keys()).slice(1);
  s_order = shuffle(s_order);
 

  c_order = Array.from(Array(max_img_n_1).keys()).slice(1);
  c_order = shuffle(s_order);


  if (parameters.img_tool=='s') {
    s_order = [1,3,2,4];
    parameters.img_teleporter   = 's' + s_order[0]+'_c';
    parameters.img_key          = 's' + s_order[1]+'_c';
    parameters.img_door         = 's' + s_order[2]+'_c';
    parameters.img_catapult     = 's' + s_order[3]+'_c';

    parameters.img_teleporter_t = '_c'+ c_order[max_pairs+0] +'.png';
    parameters.img_key_t        = '_c'+ c_order[max_pairs+1] +'.png';
    parameters.img_door_t       = '_c'+ c_order[max_pairs+2] +'.png';
    parameters.img_catapult_t   = '_c'+ c_order[max_pairs+3]+'.png';

} else {
    parameters.img_teleporter   = '_c'+ c_order[max_pairs+0]+'.png';
    parameters.img_key          = '_c'+ c_order[max_pairs+1]+'.png';
    parameters.img_door         = '_c'+ c_order[max_pairs+2]+'.png';
    parameters.img_catapult     = '_c'+ c_order[max_pairs+3]+'.png';

    parameters.img_teleporter_t = 's'+ s_order[max_pairs+0] +'_c';
    parameters.img_key_t        = 's'+ s_order[max_pairs+1] +'_c';
    parameters.img_door_t       = 's'+ s_order[max_pairs+2] +'_c';
    parameters.img_catapult_t   = 's'+ s_order[max_pairs+3] +'_c';
}


  // SDATA ----------------
  sdata = {};
  // expt
  sdata.expt_index        = [];
  sdata.expt_trial        = [];
  sdata.trial_layout      = [];
  sdata.trial_level       = [];
  sdata.trial_solved      = [];
  sdata.trial_attempts    = [];
  sdata.trial_game        = [];
  sdata.trial_transfer    = [];
  sdata.trial_test        = [];

  sdata.game              = [];
  sdata.game_solved       = [];
  sdata.game_layout       = []; 
  sdata.game_level        = []; 
  sdata.game_attempts     = [];
  sdata.game_transfer     = [];
  sdata.game_test         = [];

  sdata.test_index        = [];
  sdata.test_solved       = [];
  sdata.test_layout       = [];

  sdata.RPM               = [];

  // resp
  sdata.resp              = {};
  // BOARD ----------------
  board = {};

  // CODING ---------------
  coding = {};
  // index
  coding.index  = -1;
  coding.trial  = 0;
  coding.game   = -1;
  coding.test   = -1;
  // counts
  coding.attempts      = 0;
  coding.level         = 0;
  // other
  coding.answering = false;
  coding.timestamp = NaN;
  // location
  coding.xloc = 0;
  coding.yloc = 0;


  flag_restart  = false;
  flag_test     = false;
  flag_transfer = false;

}






