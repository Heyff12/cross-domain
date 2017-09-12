# cross-domain
跨域请求的8中处理方法
<ul>
    <li><a href="/cros.html"><span>1、cros跨域--</span>被跨域的后台请求设置'Access-Control-Allow-Origin'--<i>被跨域后端配制</i>--ajax</a></li>
    <li><a href="/jsonp.html"><span>2、jsonp跨域--</span>被跨域的后台请求设置callback（script引入）--<i>前后端配合</i>--ajax</a></li>
    <li><a href="/postmessage.html"><span>3、postMessage跨域--</span>html5新特性（iframe引入）--<i>被跨域页面需要发送postMessage数据</i></a></li>
    <li><a href="/windowname/a.html"><span>4、windowName跨域--</span>window.name的不变性（iframe引入一个同原页面做中转）--<i>被跨域页面的name值需要传递数据</i></a></li>
    <li><a href="/location_hash/a.html"><span>5、locationHash跨域--</span>--<i>被跨域页面的hash值需要传递数据(iframe引入一个同原页面做中转）</i></a></li>
    <li><a href="/domain.html"><span>6、documentDomain跨域--</span>仅适用于子域名之间（iframe引入）--<i>被跨域页面需要提升域</i></a></li>
    <li><a href="/proxy1.html"><span>7-1、Proxy跨域--</span>发出跨域请求的后台设置代理--<i>请求后端配制</i>--ajax</a></li>
    <li><a href="/proxy2.html"><span>7-2、Proxy跨域--</span>发出跨域请求的后台设置代理--<i>请求后端配制</i>--ajax</a></li>
    <li><a href="/webSocket.html"><span>8、WebSocket跨域--</span>被跨域的后台使用socket.io--<i>前后端配合</i></a></li>
</ul>


<h3>借鉴：https://github.com/FatDong1/cross-domain</h3>
<pre>
1、虽然浏览器默认禁止了跨域访问，但并不禁止在页面中引用其他域的JS文件，并可以自由执行引入的JS文件中的function（包括操作cookie、Dom等等）。根据这一点，可以方便地通过创建script节点的方法来实现完全跨域的通信。具体的做法可以参考YUI的Get Utility
2、原理：所有具有src属性的HTML标签都是可以跨域的，包括<img/>, <script/>
   限制：需要创建一个DOM对象，只能用于GET方法
</pre>
