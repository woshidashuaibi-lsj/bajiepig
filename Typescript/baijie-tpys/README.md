创建自己组件库的色彩体系：

1. 系统色板 - 基础色版 + 中性色版
2. 产品色版 - 品牌色 + 功能色版

组件库样式变量分类

1. 基础色彩系统
2. 字体系统
3. 表单
4. 按钮
5. 边框和阴影
6. 可配置开关

\_variables.scss 配置基本的色彩系字体等基本属性
\_reboots.scss 引入https://github.com/necolas/normalize.css 不同浏览器下的 margin padding 不太同意所以需要 normalize.css 使跨浏览器的样式保持高度的一致性

Button 组件需求分析：

1. 不同的 Button Type
   primary Default Danger LinkButton（a 标签）

2. 不同的 Button Size
   normal small large

3. disabled 状态
   disabled(不可点击) a(不可点击)

    npm install classnames --save // 便于切换类名
    npm install @types/classnames --save

组件测试
高质量的代码
更早的发现 bug,减少成本
让重构和升级变得更加容易和可靠
让开发流程更加敏捷

Manual
ui test
service test
unit test

jest 组件库来做单元测试

地址：https://jestjs.io/
