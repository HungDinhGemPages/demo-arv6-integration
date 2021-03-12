
(function (gd) {
  'use strict';
  window.document.userInfo = {
    name: "Hung Dinhg",
    password: "123456"
  }
  let arWindow;
  const $button = gd.getElementById("trigger-call-api");
  const displayer = gd.getElementById("displayer");
  const $displayContainer = gd.getElementsByClassName("display_container");
  let resultReceipted = "";
  $button.addEventListener("click", function () {

    arWindow = window.open(
      '', 'ARWindow', 'toolbar=no, title="ARv6 Sections List", top=150, left=600 ,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=600'
    );
    // arWindow.document.write(`<iframe id="gem-arv6-portal" style="width: 100%; height: 100%;" frameBorder="0" src ="./section-list.html"></iframe>`);
    arWindow.document.write(`<iframe id="gem-arv6-portal" style="width: 100%; height: 100%;" frameBorder="0" srcdoc="&lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    
    &lt;head&gt;
      &lt;meta charset=&quot;UTF-8&quot;&gt;
      &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
      &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
      &lt;title&gt;ARv6 Sections List&lt;/title&gt;
      &lt;style&gt;
        * {
          box-sizing: border-box;
        }
    
        .section_list {
          width: 100%;
          height: 100%;
          max-width: 500px;
          max-height: 600px;
          background: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    
        ul {
          list-style: none;
          display: block;
          width: 80%;
          margin: auto;
          padding: 0;
        }
    
        ul li {
          height: 40px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 10px;
          background-color: #fafafa;
          margin-bottom: 5px;
          cursor: pointer;
          transition: background-color 100ms;
          max-height: calc(100% - 120px);
          border: 2px solid transparent;
        }
    
        ul li.active {
          border-color: #ff881b;
        }
    
        ul li:hover {
          background-color: #ddd;
        }
    
        .popup_footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 10px;
        }
    
        button {
          height: 36px;
          min-width: 80px;
          border: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ff881b;
          color: white;
          border-radius: 5px;
          padding: 0 20px;
          cursor: pointer;
        }
    
        button:hover {
          background-color: #e56e00;
        }
    
        button:focus {
          outline: none;
        }
    
        button.deactive {
          background-color: gray;
        }
    
        .form-control {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 36px;
          border: 1px solid #ccc;
          padding-left: 10px;
        }
    
        .form-control input {
          width: calc(100% - 30px);
          border: 0;
          width: 100%;
          height: 100%;
        }
    
        .form-control input:focus {
          outline: none;
        }
    
        .ar_section_search {
          margin-bottom: 15px;
        }
    
        .ar_description {
          background-color: #ddd;
          font-family: 'Courier New', Courier, monospace !important;
          ;
          font-size: 13px;
          font-weight: 600;
          padding: 10px;
          width: 100%;
        }
      &lt;/style&gt;
    &lt;/head&gt;
    
    &lt;body&gt;
      &lt;h2 style=&quot;text-align: center;&quot;&gt;ARv6 Sections List&lt;/h2&gt;
      &lt;div class=&quot;ar_section_search&quot;&gt;
        &lt;div class=&quot;form-control&quot;&gt;
          &lt;input type=&quot;text&quot; placeholder=&quot;Search section...&quot;&gt;
          &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; width=&quot;24&quot;&gt;
            &lt;path d=&quot;M0 0h24v24H0z&quot; fill=&quot;none&quot; /&gt;
            &lt;path
              d=&quot;M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z&quot; /&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;section_list&quot;&gt;
        &lt;ul id=&quot;section-list-container&quot;&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div class=&quot;ar_description&quot;&gt;
        &lt;p&gt;- Hình thức hiển thị do AR quy định&lt;/p&gt;
        &lt;p&gt;- Danh sách Section được fill và hiển thị bởi AR&lt;/p&gt;
        &lt;p&gt;- Có thể cung cấp tính năng Search/Filter&lt;/p&gt;
        &lt;p&gt;-(Click vào nút Insert bên dưới để &quot;bắn&quot; Event)-&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;popup_footer&quot;&gt;
        &lt;button class=&quot;deactive&quot; style=&quot;margin-right: 10px;&quot; onclick=&quot;closePopup()&quot;&gt;Cancel&lt;/button&gt;
        &lt;button onclick=&quot;fireEvent()&quot;&gt;Insert&lt;/button&gt;
      &lt;/div&gt;
      &lt;script&gt;
        let currentSelect;
        let confirmValue;
        console.log(&quot;[Test] window.parent.document&quot;,window.parent.document)
        console.log(&quot;[Test] window.parent.document.userInfo&quot;,window.parent.document.userInfo)
        const SECTIONS = [
          { id: 969, name: &quot;Carousel Slider 1&quot;, anchor: &quot;shopify-section-alireviews-widget-969&quot; },
          { id: 968, name: &quot;Review Pops 1&quot;, anchor: &quot;shopify-section-alireviews-widget-968&quot; },
          { id: 1059, name: &quot;Carousel Slider 2&quot;, anchor: &quot;shopify-section-alireviews-widget-1059&quot; },
          { id: 1060, name: &quot;Review Pops 2&quot;, anchor: &quot;shopify-section-alireviews-widget-1060&quot; }
        ];
        generateItems();
        function generateItems() {
          const $sectionContainer = document.getElementById(&quot;section-list-container&quot;);
          const len = SECTIONS.length;
          SECTIONS.forEach(section =&gt; {
            const newItem = document.createElement('LI');
            newItem.innerHTML = section.name;
            newItem.setAttribute(&quot;data-id&quot;, section.id)
            $sectionContainer.appendChild(newItem)
          });
          const childs = document.querySelectorAll(&quot;#section-list-container&gt;li&quot;);
          childs.forEach(child =&gt; {
            child.addEventListener('click', selectItem, false);
          });
        }
    
        function selectItem(event) {
          let idSelected;
          if (event &amp;&amp; event.currentTarget &amp;&amp; event.currentTarget.dataset) {
            idSelected = event.currentTarget.dataset.id;
            const items = document.querySelectorAll(&quot;#section-list-container&gt;li&quot;);
            items.forEach(item =&gt; {
              item.className = &quot;&quot;;
            });
            event.currentTarget.className += &quot;active&quot;;
          }
          SECTIONS.forEach(ss =&gt; {
    
          });
          SECTIONS.forEach(section =&gt; {
            if (section.id == idSelected) {
              currentSelect = section;
            }
          });
        }
        function fireEvent() {
          if (currentSelect) {
            confirmValue = currentSelect
            const event = new CustomEvent('GemARv6Portal', { detail: currentSelect });
            window.parent.document.dispatchEvent(event);
          }
        }
        function closePopup() {
          let data = {};
          if (!confirmValue) {
            data = { detail: &quot;no-select&quot; };
          } else {
            data = { detail: confirmValue };
          }
          const event = new CustomEvent('GemARv6Portal', data);
          window.parent.document.dispatchEvent(event);
        }
      &lt;/script&gt;
    &lt;/body&gt;
    
    &lt;/html&gt;"></iframe>`);
    arWindow.document.addEventListener("GemARv6Portal", receiverARv6Event, false);
    function receiverARv6Event(event) {
      displayReceivedData(event.detail);
    }

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
    if(arWindow){
      arWindow.close();
    }
  }

})(document);
