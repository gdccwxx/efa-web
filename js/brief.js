let leftBanner = $('.left-banner li')
let introduce = $('.page-introduce')
let bar = $('.select-bar ul li')
let beforeScorll = 0;
const TopMap = [1, 2, 5, 3, 4, 6, 0, 7]
let Top = []
let count = 0
const imgUrl = [
  './img/hover_img1.png',
  './img/hover_img2.png',
  './img/hover_img3.png',
  './img/hover_img4.png',
  './img/hover_img5.png',
  './img/hover_img6.png',
  './img/hover_img7.png',
  './img/hover_img8.png'
]
const imgOut = [
  './img/community1.png',
  './img/community2.png',
  './img/community3.png',
  './img/community4.png',
  './img/community5.png',
  './img/community6.png',
  './img/community7.png',
  './img/community8.png',
]
window.onload = function () {
  for (let i = 0; i < leftBanner.length; i++) {
    Top.push(introduce[i].offsetTop)
  }
  addEventListener('scroll', function () {
    let scroll = getScrollTop()
    if (scroll > beforeScorll) {
      if (count == -1) {
        count = 0;
      }
      if (scroll + 80 > Top[count] && count < Top.length) {
        console.log(count)
        clearBanner();
        leftBanner[TopMap[count]].style = 'transform: translateX(0px)'
        count++;
      }
    } else {
      if (scroll - 80 < Top[count] && count >= 0) {
        console.log(count)
        clearBanner();
        leftBanner[TopMap[count]].style = 'transform: translateX(0px)'
        count--
      }
    }
    beforeScorll = scroll
  }, false)
  for (let i = 0; i < bar.length; i++) {
    bar[i].addEventListener('mouseover', function (ele) {
      if (typeof + ele.toElement.alt == 'number') {
        bar[+ele.toElement.alt].getElementsByTagName('img')[0].src = imgUrl[+ele.toElement.alt]
      }
    }, false)
    bar[i].addEventListener('mouseout', function (ele) {
      if (typeof + ele.target.alt == 'number') {
        bar[+ele.target.alt].getElementsByTagName('img')[0].src = imgOut[+ele.target.alt]
      }
    }, false)
  }
}

function clearBanner() {
  for (let i = 0; i < Top.length; i++) {
    leftBanner[i].style = ''
  }
}

function clickIt(id) {
  count = +id
  clearBanner();
  leftBanner[count].style = 'transform: translateX(0px)'
}


function getScrollTop() {
  var scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}