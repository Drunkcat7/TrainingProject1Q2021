// 此文件为猫 版娘 live2d 的js文件
L2Dwidget.init({
    "model": {
        // 这里改模型，前面后面都要改
        // 模型链接 https://www.cnblogs.com/strengthen/p/11112215.html
        // 白猫
        // jsonPath: "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
        // 黑猫
        jsonPath: "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
        "scale": 1
    },
    // 设置看板娘的上下左右位置
    "display": {
        "position": "left",
        "width": 100,
        "height": 100,
        "hOffset": 30,
        "vOffset": 30
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        // 设置透明度
        "opacityDefault": 1,
        "opacityOnHover": 0.2
    }
});