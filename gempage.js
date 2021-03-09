
(function (gd) {
  'use strict';
  // window.document.addEventListener('GemARv6Event', handleEvent, false)
  // function handleEvent(e) {
  //   console.log(e.detail) // outputs: {foo: 'bar'}
  // }
  const $container = gd.getElementsByClassName("container");
  const $popup = gd.getElementById("popup-selecter");
  const $button = gd.getElementById("trigger-call-api");
 
  $button.addEventListener("click", async function () {
    // $container.classList.remove("hide");
    [].forEach.call($container, function(el) {
      el.className = el.className.replace(/hide/, "");
    });
    [].forEach.call($popup, function(el) {
      el.className = el.className.replace(/hide/, "");
    });
    // $popup.classList.remove("hide");
    $button.classList.add("disabled");
    $button.innerHTML = "Rendering";

    const contentHTML = await getContentIframe();
    $button.classList.remove("disabled");
    // $button.innerHTML = "Get List";
    // var parser = new DOMParser();
    // var doc = parser.parseFromString(contentHTML, "text/html");
    // console.log("doc", JSON.parse(doc));
  });
  const getContentIframe = async () => {
    try {
      const result = await makeIframeContent();
      console.log("type of result", typeof result)
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  // Fake Generate Data
  const sectionsList = `
  `
  const makeIframeContent = () =>
    new Promise((resolve, reject) => {
      if (!sectionsList) {
        return setTimeout(
          () => reject(new Error('Section not found')),
          250
        );
      }

      setTimeout(() => resolve(sectionsList), 250);
    });
})(document);
