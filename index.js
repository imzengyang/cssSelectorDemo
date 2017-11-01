
//http://www.w3school.com.cn/cssref/css_selectors.ASP
require('chromedriver');

let {Builder} =  require('selenium-webdriver')

let driver = new Builder().forBrowser('chrome').build();

(async ()=>{
    driver.get('file:///C:/Users/zengyang/Desktop/cssselctor/index.html');
    let ele = await driver.findElement({css:'.table tbody >  tr:nth-child(2) > td:nth-child(3)'})
    let text = await ele.getText();
    console.log(text);

    //
    let elements = await driver.findElements({css:'.table tbody >  tr > td:nth-child(3)'});
    let texts = [];
    for(let ele of elements){
        let text = await ele.getText();
        texts.push(text);
    }
    console.log("texts",texts)

})()

