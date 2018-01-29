angular.module('site').controller('homeCtrl', ($scope) => {

});
/**
app.controller('Controller', function(){
  this.notes = [
    {
      name: "clean the house",
      show: true,
      isNextShown: true,
      index: 0
    },
    {
      name: "water the dog",
      show: true,
      isNextShown: true,
      index: 1
    },
    {
      name: "feed the lawn",
      show: true,
      isNextShown: true,
      index: 2
    },
    {
      name: "pay dem bills",
      show: true,
      isNextShown: true,
      index: 3
    },
    {
      name: "run",
      show: true,
      isNextShown: true,
      index: 4
    },
    {
      name: "swim",
      show: true,
      isNextShown: true,
      index: 5
    }
  ];

  /**
  Show/ hide note at index
  Display a toast if note cannot be displayed
  **/
  /**
  this.toggleShow = function(noteIndex){
    try{
      var currentShowValue = this.notes[noteIndex].show;
      this.notes[noteIndex].show = !currentShowValue;

      console.log('toggle');
    } catch(e){
      //console.log(e);
      $('.toast').fadeIn(400);
      // Delay
      setTimeout(() => {
        $('.toast').fadeOut(400);
      }, 1000);
    }
  };

  this.getBtnText = (index) => {
    try{
      if(this.notes[index+1].show === false){
        return 'Show next note';
      }else{
        return 'Hide next note';
      }
    }catch(e){
      return 'There are no more notes';
    }
  };
});

var toggleButtonText = (name, msgA, msgB) => {
  if(name.value === msgA){
    name.value = msgB;
  }else{
    name.value = msgA;
  }
};
**/
