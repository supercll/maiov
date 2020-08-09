This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## 接口说明
域名地址：https://data.miaov.com/

1)是否登录
	/user/islogin
POST：
返回值：
	code:0 已经登陆
	code:1 未登陆
2)注册：
	/user/register
POST：
	verify:验证码
	username:用户名
	password:密码
	repassword:确认密码
返回值：
	code:0 msg:注册成功
	code:1 msg:验证码错误
	code:2 msg:密码和重复密码不一致！
	code:3(注册失败) msg:会提示你不同的注册失败原因
	code:4 msg:注册已关闭(后台可控制)
3)登陆：
	/user/login
POST：
	verify:验证码
	username:用户名
	password:密码
返回值：
	code:0 msg:登陆成功
	code:1 msg:验证码错误
	code:2(登陆失败) msg:会提示你不同的注册失败原因


4)退出登陆：
	/user/logout
POST：

返回值：

//统一
page：页码
rows：条数

5)首页内容：
	/lecturer/lists?page=1&rows=20

参数说明:
POST：
	order:desc(降序)/asc(升序) 默认：desc
	sort:sort(后台可以指定排序)/id(加入的ID)/update_time(修改时间) 默认：按照发布文章的修改时间update_time  desc 降序
	category_id: 1或2  1表示讲师作品   2表示讲师列表
	recommend: 推荐位置  如果获取讲师作品 首页展示的 则值为 1 （如果选择全部的则是0）


首页获取的数据传递内容是
	order=desc 
	sort=id
	category_id=1
	recommend=1

[{"id":"22","title":"22\u6587\u7ae0\u54c8\u54c8\u54c8e","category_id":"1","content":"\u7b2c\u4e03\u4f4d\u8f7b\u5fae\u8f7b\u5fae\u8f7b\u5fae\u8bf7\u95ee\u8bf7\u95ee\u8bf7\u95ee\u53bb","recommend":"1","message":"0","good":"122","view":"33","author":"wqw","sort":"1","status":"0","icon":"\/Uploads\/article\/icon\/icon-22.png","create_time":"2018-05-21 20:38:01","update_time":"2018-05-23 20:15:52"},{"id":"18","title":"\u621118\u662f\u7b2c\u4e00\u4e2a\u6587\u7ae0\u6807\u9898","category_id":"1","content":"\u7b2c\u4e03\u4f4d\u8f7b\u5fae\u8f7b\u5fae\u8f7b\u5fae\u8bf7\u95ee\u8bf7\u95ee\u8bf7\u95ee\u53bb","recommend":"1","message":"0","good":"0","view":"0","author":"","sort":"0","status":"0","icon":"","create_time":"2018-05-21 20:38:01","update_time":"2018-05-23 16:03:10"}]



6)讲师：

讲师列表(返回全部) 他和 1) 接口使用同一个 
/lecturer/lists?page=1&rows=100


POST：
	order:desc(降序)/asc(升序) 默认：desc
	sort:sort(后台可以指定排序)/id(加入的ID)/update_time(修改时间) 默认：按照发布文章的修改时间update_time  desc 降序
	category_id=2  固定值
	recommend： 0或者不传
	返回值和 1） 一样


7)详情页:
	/lecturer/info
POST：
	article_id : 文章的id 就是列表里的id

返回结果
{"id":"1","title":"\u6211\u662f\u7b2c\u4e00\u4e2a\u6587\u7ae0\u6807\u98981","category_id":"2","content":"\u7b2c\u4e03\u4f4d\u8f7b\u5fae\u8f7b\u5fae\u8f7b\u5fae\u8bf7\u95ee\u8bf7\u95ee\u8bf7\u95ee\u53bb","recommend":"0","message":"0","good":"0","view":"0","author":"","sort":"0","status":"0","create_time":"2018-05-21 20:38:01","update_time":"2018-05-23 16:03:47","image_path":[{"id":"1","article_id":"22","path":"\/Uploads\/article\/2018\/05\/23\/4a9dab6be201eed8b83817634c4e29fa.png","sort":"1","create_time":"2018-05-23 18:20:27"},{"id":"2","article_id":"22","path":"\/Uploads\/article\/2018\/05\/23\/1d2f45aa6db9c0812e7fb6ca07832979.png"}



8)详情页留言列表:			
	/lecturer/getcomment?page=1&rows=20
POST：
	article_id : 文章的id 就是列表里的id

返回值:
	[{"content":"qweqeqweqew","create_time":"2015-10-00 00:00:00","username":"motao"}]



9)评论接口
/lecturer/addcomment
POST参数:
	article_id:文章id
	content:评论内容
返回值
	{"code":0,"msg":"\u8bc4\u8bba\u6210\u529f"}
	code:0 msg:评论成功
	code:1 msg:未登录
	code:2 msg:文章id不能为空
	code:3 msg:评论失败



10)是否点赞接口
	/lecturer/getgood?

POST参数:
	article_id:文章id

返回值 
	{"code":0,"gooid":1}
	code:0 msg:
	code:1 msg:未登录
	code:2 msg:收藏文章id不能为空
	code:3 msg:未点赞
	




11)点赞接口
	/lecturer/good
POST参数:
	article_id:文章id

返回值 

	{"code":0,"msg":"\u8bc4\u8bba\u6210\u529f"}
	code:0 msg:点赞成功
	code:1 msg:未登录
	code:2 msg:收藏文章id不能为空
	code:3 msg:点赞失败


12)取消点赞接口
	/lecturer/cancelgood?
POST参数:
	goodid:在获取是否点赞接口中获取到的id
	article_id:文章id
返回值
	{"code":0,"msg":"\u8bc4\u8bba\u6210\u529f"}
	code:0 msg:取消点赞成功
	code:1 msg:未登录
	code:2 msg:文章id不能为空
	code:3 msg:收藏id不能为空

13） 验证码： /user/verify