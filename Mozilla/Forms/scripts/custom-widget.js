function deactivateSelect(select) {
    if (!select.classList.contains('active')) return;

    var optList = select.querySelector('.optList');

    optList.classList.add('hidden');

    select.classList.remove('active');
}

function activeSelect(select, selectList)  {
    if (select.classList.contains('active')) return;

    selectList.forEach(deactivateSelect);
}

function toggleOptList(select) {
    var optList = select.querySelector(".optList");
    optList.classList.toggle('hidden');
}

function highlightOption(select, option) {
    var optList = document.querySelectorAll(".option")
    optList.forEach(function (other) {
        other.classList.remove("highlight");
    });

    option.classList.add("highlight")
}

// 我们处理文档加载时的事件绑定。
window.addEventListener('load', function () {
    var selectList = document.querySelectorAll('.select');
  
    // 每个自定义组件都需要初始化
    selectList.forEach(function (select) {
  
      // 它的'option'元素也需要
      var optionList = select.querySelectorAll('.option');
  
      // 每当用户的鼠标悬停在一个选项上时，我们高亮这个指定的选项
      optionList.forEach(function (option) {
        option.addEventListener('mouseover', function () {
          // 注意:'select'和'option'变量是我们函数调用范围内有效的闭包 。
          highlightOption(select, option);
        });
      });
  
      // 每当用户点击一个自定义的select元素时
      select.addEventListener('click', function (event) {
        // 注意:'select'变量是我们函数调用范围内有效的闭包。 
  
        // 我们改变选项列表的可见性
        toggleOptList(select);
      });
  
      // 如果组件获得了焦点
      // 每当用户点击它或是用tab键访问这个组件时，组件获得焦点
      select.addEventListener('focus', function (event) {
        // 注意:'select'和'selectlist'变量是我们函数调用范围内有效的闭包 。
  
        // 我们激活这个组件
        activeSelect(select, selectList);
      });
  
      // 如果组件失去焦点
      select.addEventListener('blur', function (event) {
        // 注意:'select'变量是我们函数调用范围内有效的闭包。
  
        // 我们关闭这个组件
        deactivateSelect(select);
      });
    });
  });