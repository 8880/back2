
console.log("nodejs 代码。。。。");
console.error("错误提示....");

/*

Node.js :异步非阻塞的编程语言
同步，异步
阻塞，非阻塞

同步：
获得数据 =  请求一个数据()
其他代码(只有上边代码执行了，当前代码才执行)

阻塞：
获得数据 =  请求一个数据(数据有，立刻返回。数据没有, 代码阻塞在赋值操作)
其他代码

异步:
获得数据 =  请求一个数据()
其他代码(和上边代码没有关联，不用等待以上代码)

非阻塞：
获得数据 =  请求一个数据(数据有，就立刻返回。数据没有，也立刻返回（错误）)
其他代码
*/