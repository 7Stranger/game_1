  var kvadrat = document.getElementById("kvadrat");
  var kvadratXY = kvadrat.getBoundingClientRect();
  var krugX = 0;
  var krugY = 0;
  var clicker=0;

  var all = document.getElementById("all");
  var allXY = all.getBoundingClientRect();

  var leftGran = allXY.x+10;
  var rightGran = allXY.width-10;
  var upGran = allXY.y+10;
  var downGram = allXY.height-10;

  $("html").mousemove(function (event) {
    krugX = event.pageX-5;
    krugY = event.pageY-5;
    $("#krug").offset({
      left: krugX,
      top: krugY
    })
  })

  var minX = Math.floor(kvadratXY.x);
  var minY = Math.floor(kvadratXY.y);
  var naprX = 1;
  var naprY = 1;

  function kvadratMove(){
    $("#kvadrat").offset({
      left: minX,
      top: minY
    })
    kvadrat = document.getElementById("kvadrat");
    kvadratXY = kvadrat.getBoundingClientRect();
    if (kvadratXY.x <= leftGran){
      naprX = Math.floor(Math.random()*10);
      naprY = Math.floor(Math.random()*10);
    } else if (kvadratXY.x+kvadratXY.width >= rightGran){
      naprX = -1*Math.floor(Math.random()*10);
      naprY = Math.floor(Math.random()*10);
    } else if (kvadratXY.y <= upGran){
      naprX = Math.floor(Math.random()*10);
      naprY = Math.floor(Math.random()*10);
    } else if (kvadratXY.y+kvadratXY.height >= downGram){
      naprX = Math.floor(Math.random()*10);
      naprY = -1*Math.floor(Math.random()*10);
    }
    minX = minX + naprX;
    minY = minY + naprY;

    var testlvl = $("#clicker").text();
    var lvl = parseInt(testlvl);
    if (lvl > 9){
      $("#kvadrat").css({'width': 90, 'height': 90});
      $("h5").text("level 2");
    }
    if (lvl > 19){
      $("#kvadrat").css({'width': 80, 'height': 80});
      $("h5").text("level 3");
    }
    if (lvl > 29){
      $("#kvadrat").css({'width': 70, 'height': 70});
      $("h5").text("level 4");
    }
    if (lvl > 39){
      $("#kvadrat").css({'width': 60, 'height': 60});
      $("h5").text("level 5");
    }
    if (lvl > 49){
      $("#kvadrat").css({'width': 50, 'height': 50});
      $("h5").text("level 6");
    }
    if (lvl > 59) {
      minX = rightGran/2-kvadratXY.width/2;
      minY = downGram/2-kvadratXY.height/2;
      $("h5").text("ПОБЕДА!!!");
    }
  }

  setInterval(kvadratMove, 20);

  $("#krug").mousedown(function (event){
    kvadrat = document.getElementById("kvadrat");
    kvadratXY = kvadrat.getBoundingClientRect();
    if (krugX+5 > kvadratXY.x && krugX+5 < kvadratXY.x+kvadratXY.width && krugY+5 > kvadratXY.y && krugY+5 < kvadratXY.y+kvadratXY.height){
      clicker++;
    }
    $("#clicker").text(clicker);
  });
