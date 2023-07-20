var boy= document.getElementById("boy");
var idleImageNumber=1;
var idleAnimationNumber=0;
var runImageNumber=1;
var runAnimationNumber=0;
var backgroundImagePositionX=0;
var moveBackgroundAnimationID=0;
var jumpImageNumber=1;
var jumpAnimationNumber=0;
var boyMarginTop = 200;
function idleAnimation(){

    idleImageNumber++;
    
    if(idleImageNumber==11){
        idleImageNumber=1;
    }

    // @ts-ignore
    boy.src="images/png/Idle ("+idleImageNumber+").png";

}

function idleAnimationStart(){
    idleAnimationNumber=setInterval(idleAnimation,100);
}

function runAnimation(){

    runImageNumber++;
    
    if(runImageNumber==11){
        runImageNumber=1;
    }

    // @ts-ignore
    boy.src="images/png/run ("+runImageNumber+").png";

}

function runAnimationStart(){
    runAnimationNumber=setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);
}

function jumpAnimation(){
    jumpImageNumber++;

    if(jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 20;
        // @ts-ignore
        boy.style.marginTop = boyMarginTop + "px";
    }

    if(jumpImageNumber >= 7){
        boyMarginTop = boyMarginTop + 20;
        // @ts-ignore
        boy.style.marginTop = boyMarginTop + "px";
    }

    if(jumpImageNumber==11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }
    boy.src = "images/png/Jump ("+jumpImageNumber+").png";
}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}

function keyCheck(event){
    //alert(event.which);
    //enter=13;
    //space=32;
    var keyCode=event.which;

    if(keyCode==13){
        if(runAnimationNumber==0){
            runAnimationStart();
        }
     

        if(moveBackgroundAnimationID==0){
            moveBackgroundAnimationID=setInterval(moveBackground,100);
        }
    }

    if(keyCode==32){
        if(jumpAnimationNumber==0){
            jumpAnimationStart();
        }
     

        if(moveBackgroundAnimationID==0){
            moveBackgroundAnimationID=setInterval(moveBackground,100);
        }
    }
}

function moveBackground(){
    backgroundImagePositionX=backgroundImagePositionX-20;
    // @ts-ignore
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}

var boxMarginLeft = 1000;

function CreateBoxes(){
   
    for(var i=0; i<=10; i++){
        var box = document.createElement("div");
        box.className = "box";
        // @ts-ignore
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";

        boxMarginLeft+=1000;

        if(i<5){
            boxMarginLeft+=500;
        }

        if(i<5){
            boxMarginLeft+=250;
        }

    }

}
