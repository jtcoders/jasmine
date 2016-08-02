// Here is where your tests will go.

describe("the game", function(){
  beforeEach(function(){
    player.x = 0;
    player.y = 0;
  });

  // write a test describing the function called moveRight
  describe("moveRight", function(){
    it("should add 1 to player.x", function(){
      moveRight();
      expect(player.x).toEqual(1);
    });
  });

  // write a test describing the function called moveLeft
  describe("moveLeft", function(){
    it("should subtract 1 from player.x", function(){
      moveLeft();
      expect(player.x).toEqual(-1);
    });
  });

  // write a test describing the function called moveDown
  describe("moveDown", function(){
    it("should subtract 1 from player.y", function(){
      moveDown();
      expect(player.y).toEqual(1);
    });
  });

  // write a test describing the function called moveUp
  describe("moveUp", function(){
    it("should subtract 1 from player.y", function(){
      moveUp();
      expect(player.y).toEqual(-1);
    });
  });
});

describe("checkWin", function(){
  it("should be called after moveRight", function(){
    spyOn(window, 'checkWin');
    moveRight();
    expect(window.checkWin).toHaveBeenCalled();
  });

  it("should be called after moveLeft", function(){
    spyOn(window, 'checkWin');
    moveLeft();
    expect(window.checkWin).toHaveBeenCalled();
  });

  it("should be called after moveDown", function(){
    spyOn(window, 'checkWin');
    moveDown();
    expect(window.checkWin).toHaveBeenCalled();
  });

  it("should be called after moveUp", function(){
    spyOn(window, 'checkWin');
    moveUp();
    expect(window.checkWin).toHaveBeenCalled();
  });
  
  it("should call renderWin if the player's coordinates match the goal's coordinates", function(){
    player.x = 1;
    player.y = 1;
    goal.x = 1;
    goal.y = 1;
    spyOn(window, 'renderWin');
    checkWin();
    expect(window.renderWin).toHaveBeenCalled();
  });

  it("should not call renderWin if the player's coordinates do not match the goal's coordinates", function(){
    player.x = 1;
    player.y = 2;
    goal.x = 1;
    goal.y = 1;
    spyOn(window, 'renderWin');
    checkWin();
    expect(window.renderWin).not.toHaveBeenCalled();
  });  

});
