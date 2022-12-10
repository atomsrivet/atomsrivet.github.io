


function startLoad(){

  var list =  gen_imgList();
  preloadImages(list, function() {

  startExperiment();

  });
}


function preloadImages(srcs, continueExp) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    var img;
    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.onload = function () {
            --remaining;

            if (remaining <= 0) {
               console.log('all images cached');
                continueExp();
            }
        };
        img.src = srcs[i];
        preloadImages.cache.push(img);

    }
      
}


function gen_imgList() {
 
  max_img_n_1 = 10 + 1;
  max_pairs   = 6;
  max_shapes  = 4;
  imglist = [];

  for (var i = 1; i<max_img_n_1; i++){
    for (var j=1; j<max_img_n_1; j++) {

      imglist.push("img/shapes/" + 's' + i +'_c' + j  + ".png");
    }
  }

  imglist.push("img/char.png");
  imglist.push("img/goal.png");
  imglist.push("img/f_new.png");
  imglist.push("img/f_noleft.png");
  imglist.push("img/f_restart.png");
  imglist.push("img/f_success.png");
  imglist.push("img/challenge.png");

  if (mobile==0){
  } else {

    imglist.push("img/button_d.png");
    imglist.push("img/button_l.png");
    imglist.push("img/button_r.png");
    imglist.push("img/button_u.png");

    imglist.push("img/button_d_clicked.png");
    imglist.push("img/button_l_clicked.png");
    imglist.push("img/button_r_clicked.png");
    imglist.push("img/button_u_clicked.png");
  }

    return imglist;

}
