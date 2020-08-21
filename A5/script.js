/** Add any JavaScript you need to this file. */
(function() {
  function click() {
    document.getElementById('menu_recommended').addEventListener('click', function() {
      var actionItems = document.getElementsByClassName('.action');
      for (var i = 0; i < actionItems.length; i++) {
        actionItems[i].setAttribute('hidden', true);
      }

      var animationItems = document.getElementsByClassName('animation');
      for (i = 0; i < animationItems.length; i++) {
        animationItems[i].setAttribute('hidden', true);
      }

      var romanceItems = document.getElementsByClassName('romance');
      for (i = 0; i < romanceItems.length; i++) {
        romanceItems[i].setAttribute('hidden', true);
      }

      var recommendedItems = document.getElementsByClassName('recommended');
      for (i = 0; i < recommendedItems.length; i++) {
        recommendedItems[i].removeAttribute('hidden');
      }
    });

    document.getElementById('menu_romance').addEventListener('click', function() {
      var actionItems = document.getElementsByClassName('action');
      for (var i = 0; i < actionItems.length; i++) {
        actionItems[i].setAttribute('hidden', true);
      }

      var animationItems = document.getElementsByClassName('animation');
      for (i = 0; i < animationItems.length; i++) {
        animationItems[i].setAttribute('hidden', true);
      }

      var romanceItems = document.getElementsByClassName('romance');
      for (i = 0; i < romanceItems.length; i++) {
        romanceItems[i].removeAttribute('hidden');
      }

      var recommendedItems = document.getElementsByClassName('recommended');
      for (i = 0; i < recommendedItems.length; i++) {
        recommendedItems[i].setAttribute('hidden', true);
      }
    });

    document.getElementById('menu_action').addEventListener('click', function() {
      var actionItems = document.getElementsByClassName('action');
      for (var i = 0; i < actionItems.length; i++) {
        actionItems[i].removeAttribute('hidden');
      }

      var animationItems = document.getElementsByClassName('animation');
      for (i = 0; i < animationItems.length; i++) {
        animationItems[i].setAttribute('hidden', true);
      }

      var romanceItems = document.getElementsByClassName('romance');
      for (i = 0; i < romanceItems.length; i++) {
        romanceItems[i].setAttribute('hidden', true);
      }

      var recommendedItems = document.getElementsByClassName('recommended');
      for (i = 0; i < recommendedItems.length; i++) {
        recommendedItems[i].setAttribute('hidden', true);
      }
    });
    document.getElementById('menu_animation').addEventListener('click', function() {
      var actionItems = document.getElementsByClassName('action');
      for (var i = 0; i < actionItems.length; i++) {
        actionItems[i].setAttribute('hidden', true);
      }

      var romanceItems = document.getElementsByClassName('romance');
      for (i = 0; i < romanceItems.length; i++) {
        romanceItems[i].setAttribute('hidden', true);
      }

      var animationItems = document.getElementsByClassName('animation');
      for (i = 0; i < animationItems.length; i++) {
        animationItems[i].removeAttribute('hidden');
      }

      var recommendedItems = document.getElementsByClassName('recommended');
      for (i = 0; i < recommendedItems.length; i++) {
        recommendedItems[i].setAttribute('hidden', true);
      }
    });
  }

  window.onload = click;
})();
