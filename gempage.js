
(function (gd) {
  'use strict';
  window.document.addEventListener('GemARv6Portal', receiverARv6Event, false)
  function receiverARv6Event(event) {
    displayReceivedData(event.detail);
  }

  const $container = gd.getElementsByClassName("container");
  const $popup = gd.getElementById("popup-selecter");
  const $button = gd.getElementById("trigger-call-api");

  $button.addEventListener("click", function () {
    [].forEach.call($container, function (el) {
      el.className = el.className.replace(/hide/, "");
    });
    [].forEach.call($popup, function (el) {
      el.className = el.className.replace(/hide/, "");
    });
    $button.classList.add("disabled");
    $button.innerHTML = "Rendering";

    $button.classList.remove("disabled");
    $button.innerHTML = "Get List";
  });

  const displayReceivedData = (data) => {
    if(data=="close-popup"){
      gd.getElementById("displayer").innerHTML = "";
      [].forEach.call($container, function (el) {
        el.className = "container hide";
      });
      [].forEach.call($popup, function (el) {
        el.className ="hide";
      });
    }else{
      let displayStr = "Name: " + data.name + "<br>";
      displayStr += "Anchor value: " + data.anchor;
      gd.getElementById("displayer").innerHTML = displayStr;
    }
  }

})(document);
