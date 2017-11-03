// $(document).ready(function(){
//     $("captainName").hover(function(){
//         $(this).css("background-color","yellow");
//     });
// });

function showCaptain(){
  //Toggling Contact Information
  $(document).ready(function(){
      $("#captainPanel").slideToggle("slow", function(){
      //Swapping out photos
      if($('#profileImage').attr('src') === "img/jarvis2.png"){
        $("#profileImage").attr("src", "img/steve.png");
      }
      else if($('#profileImage').attr('src') === "img/steve.png"){
        $("#profileImage").attr("src", "img/jarvis2.png");
      }
      else{
        $("#profileImage").attr("src", "img/steve.png");
      }
    });
  });
}


function showWidow(){
  $(document).ready(function(){
        $("#widowPanel").slideToggle("slow", function(){
    if($('#profileImage').attr('src') === "img/jarvis2.png"){
      $("#profileImage").attr("src", "img/natasha.png");
    }
    else if($('#profileImage').attr('src') === "img/natasha.png"){
      $("#profileImage").attr("src", "img/jarvis2.png");
    }
    else{
      $("#profileImage").attr("src", "img/natasha.png");
    }
    });
  });
}

function showFury(){
  $(document).ready(function(){
        $("#furyPanel").slideToggle("slow", function(){
    if($('#profileImage').attr('src') === "img/jarvis2.png"){
      $("#profileImage").attr("src", "img/nick.png");
    }
    else if($('#profileImage').attr('src') === "img/nick.png"){
      $("#profileImage").attr("src", "img/jarvis2.png");
    }
    else{
      $("#profileImage").attr("src", "img/nick.png");
    }
    });
  });
}

function showHawk(){
  $(document).ready(function(){
        $("#hawkPanel").slideToggle("slow", function(){
    if($('#profileImage').attr('src') === "img/jarvis2.png"){
      $("#profileImage").attr("src", "img/clint.png");
    }
    else if($('#profileImage').attr('src') === "img/clint.png"){
      $("#profileImage").attr("src", "img/jarvis2.png");
    }
    else{
      $("#profileImage").attr("src", "img/clint.png");
    }
    });
  });
}

function showHulk(){
  $(document).ready(function(){
        $("#hulkPanel").slideToggle("slow", function(){
    if($('#profileImage').attr('src') === "img/jarvis2.png"){
      $("#profileImage").attr("src", "img/bruce.png");
    }
    else if($('#profileImage').attr('src') === "img/bruce.png"){
      $("#profileImage").attr("src", "img/jarvis2.png");
    }
    else{
      $("#profileImage").attr("src", "img/bruce.png");
    }
    });
  });
}

function showThor(){
  $(document).ready(function(){
        $("#thorPanel").slideToggle("slow", function(){
    if($('#profileImage').attr('src') === "img/jarvis2.png"){
      $("#profileImage").attr("src", "img/thor.png");
    }
    else if($('#profileImage').attr('src') === "img/thor.png"){
      $("#profileImage").attr("src", "img/jarvis2.png");
    }
    else{
      $("#profileImage").attr("src", "img/thor.png");
    }
    });
  });
}
