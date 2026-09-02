$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(550, 300, 20, 290, "#84cde6");
createPlatform(400, 605, 50, 50, "#84cde6");
createPlatform(497, 500, 10, 50, "#84cde6");
createPlatform(390, 405, 50, 50, "#84cde6");
createPlatform(100, 200, 350, 50, "#84cde6");
createPlatform(100, 600, 350, 50, "#add8e6");
    // TODO 3 - Create Collectables
createCollectable("max", 100, 100);
createCollectable("database", 0, 0);
createCollectable("diamond", 450, 300);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 300, 2000);
createCannon("bottom", 440, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
