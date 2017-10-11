/**
 * 在应该浮现的字外包括一个div，并命class名为slow-appear
 * 添加time，给每个元素添加过度动画。例如： time = "0.8" （每个动画间隔0.8s）
 * 添加属性，例如，attribute = 'opacity, transform'(使内部所有元素以opacity以及transform过渡。注，一定要使用,号分开)
 * 添加属性值，例如attrValue = '[0.8s], [50px, 80px, 70px, 60px]'(每个属性值使用[]包裹。里面内容表示过度后的样式)
 * */
function slowAppear() {
  'use strict'
  let reg = /\[(.*?)\]/g
  let nodes = document.querySelector('.slow-appear')
  let time = parseFloat(nodes.getAttribute('time'))
  let attrs = nodes.getAttribute('attribute').split(',')
  let attrValues = nodes.getAttribute('attrValue').match(reg)
  let attr = []
  let count = 0
  attrValues.forEach(item => attr.push(item.slice(1, item.length - 1)))

  nodes.childNodes.forEach((item, index) => {
    if (item.nodeName !== '#text') {
      count++
      let str = ''
      for (let i = 0; i < attrs.length; i++) {
        str += `${attrs[i]}: ${attr[i]};`
      }
      str += "transition: " + time + "s";
      (function (j) {
        setTimeout(() => {
          item.style.cssText = str
        }, j * 1000)
      })(count)
    }
  })
}
slowAppear()