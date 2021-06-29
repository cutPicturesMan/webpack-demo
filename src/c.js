/**
 * Created by zhangzhen11 on 2021/1/13.
 */
const fs = require('fs')
const { SourceMapConsumer } = require('source-map');


async function originalPositionFor(line, column) {
    const sourceMapFilePath = '/Users/zhangzhen11/z/github/webpack-demo/app-service.map.map'
    const sourceMapConsumer = await new SourceMapConsumer(JSON.parse(fs.readFileSync(sourceMapFilePath, 'utf8')))

    return  sourceMapConsumer.originalPositionFor({
        line,
        column,
    })
}

originalPositionFor(1760, 9820).then((res) => {
    console.log(res);
})
