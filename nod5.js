var timeoutId;
timeoutId = setInterval(function () {
    var eeee = false;
    try {
    ///所有需要页面加载完成后执行的代码全部放在这里
    console.log(1111111111111);
    //新建一个div元素节点
    var div=document.createElement("div");
    //把div元素节点添加到body元素节点中成为其子节点，但是放在body的现有子节点的最后
    document.body.appendChild(div);
    //console.log(document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0].innerHTML);
    document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0].innerHTML = "<a href=\"https:\/\/fanyi.caiyunapp.com/ao3?utm_source=aois.top\" class=\"dropdown-toggle\"  data-target=\"#\">AO3翻译神器(一键翻译)</a>" + document.getElementsByClassName("primary navigation actions")[0].getElementsByClassName("search")[0].innerHTML;
        eeee =true;
    } 
    catch (e) 
    {
        console.log(e);
        eeee =false;
    }
    if(eeee){clearInterval(timeoutId);}
}, 100);
