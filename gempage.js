
(function (gd) {
  'use strict';
  window.document.addEventListener('GemARv6Portal', receiverARv6Event, false)
  function receiverARv6Event(event) {
    displayReceivedData(event.detail);
  }

  const $container = gd.getElementsByClassName("container");
  const $popup = gd.getElementById("popup-selecter");
  const $button = gd.getElementById("trigger-call-api");
  const displayer = gd.getElementById("displayer");
  const $displayContainer = gd.getElementsByClassName("display_container");
  let resultReceipted = "";
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
    if (data == "no-select" || !data.name) {
      resultReceipted = "-Not select-";
    } else {
      resultReceipted = "Name: " + data.name + "<br>";
      resultReceipted += "Anchor value: " + data.anchor;
    }
    closePopup();
    displayer.innerHTML = resultReceipted;
    [].forEach.call($displayContainer, function (el) {
      el.className = "display_container higthlight";
    });
    setTimeout(() => {
      [].forEach.call($displayContainer, function (el) {
        el.className = "display_container";
      });
    }, 800);
  }
  const closePopup = () => {
    [].forEach.call($container, function (el) {
      el.className = "container hide";
    });
    [].forEach.call($popup, function (el) {
      el.className = "hide";
    });
  }

})(document);
