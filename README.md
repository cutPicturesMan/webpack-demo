# webpack-demo
some webpack demo

# 各模块作用
## loader
loader将所有类型的文件转换为webpack能够处理的有效模块（有效模块指的是应用程序的依赖图和最终的bundle可以直接引用的模块）

三种写法：
* 
* 
* 

loader模块需要导出为函数

## plugin
loader被用于转换某些类型的模块，而插件用于执行范围更广的任务，包括从打包优化和压缩，一直到重新定义环境中的变量

## 模块解析
webpack使用`enhanced-resolve`库来解析代码中每个`import/require()`语句中所包含的文件路径

### 1、相对路径和绝对路径
* 绝对路径：不需要再做解析，直接使用即可
* 相对路径：以`import/require()`代码文件所在的目录作为上下文目录，得出模块的绝对路径

### 2、模块路径
在`resolve.modules`指定的所有目录内搜索该模块。为简化模块路径，可以使用`resolve.alias`来创建一个别名。`resolve`字段用来配置模块路径解析规则。
* 路径指向一个文件：
    * 如果路径具有文件扩展名，则被直接将文件打包
    * 否则，将按顺序使用`resolve.extensions`数组中的选项作为文件扩展名来解析，都没有找到则会报错
* 路径指向一个目录：
    * 如果文件夹中包含`package.json`文件，则将`resolve.mainFields`数组中的值按顺序作为`package.json`的属性，以匹配到的第一个值作为文件路径
    * 如果`package.json`文件不存在，或者匹配到的值不是有效路径，则按顺序查找`resolve.mainFiles` 配置选项中指定的文件名（文件扩展名的解析与上面一样）
    
# 各插件作用

# 待完成
手写一个loader、plugin

