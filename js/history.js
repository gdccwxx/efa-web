// var pic_index = 0;

// //函数控制如果为大于4返回第一个
// function slide_pic(length) {
//   if (pic_index < length) { pic_index = pic_index + 1 } else { pic_index = 0 }
// }
// //函数申明主体，以及图片切换函数
// slide_pic.prototype = {
//   pic_num: '5',
//   pic_slide: function () {
//     $(".photo-box ul li").eq(pic_index).show().siblings("li").hide()
//   }
// }
let imgLengthArr = [];
let imgEmptyArr = [];
let photoBoxArr = document.getElementsByClassName("photo-box");
window.onload = function () {
  for (let idx = 0; idx < photoBoxArr.length; idx++) {
    imgEmptyArr.push(0)
    imgLengthArr.push(photoBoxArr[idx].getElementsByTagName('img').length)
  }
  setInterval(slide, 3000);
  // slide()
}

function slide() {
  // let photoBox = document.getElementsByClassName("photo-box")
  // for (let idx = 0; idx < photoBox.length; idx++) {
  //   // console.log(photoBox[idx])
  // }
  // imgLengthArr
  // function slide_pic(length) {
  //   this.len = length
  //   if (pic_index < length) { pic_index = pic_index + 1 } else { pic_index = 0 }
  // }
  // slide_pic.prototype = {
  //   pic_slide: function () {
  //     $(".photo-box ul li").eq(pic_index).show().siblings("li").hide()
  //   }
  // }

  for (let idx = 0; idx < photoBoxArr.length; idx++) {
    if (imgEmptyArr[idx] < imgLengthArr[idx]) {
      for (let index = 0; index < photoBoxArr[idx].getElementsByTagName('img').length; index++) {
        if ((photoBoxArr[idx].getElementsByTagName('img')[index].classList.value.trim() == 'transition-opacity')) {
          photoBoxArr[idx].getElementsByTagName('img')[index].classList.remove('transition-opacity')
        }
      }
      // console.log(photoBoxArr[idx].getElementsByTagName('img')[imgEmptyArr[idx]]);
      photoBoxArr[idx].getElementsByTagName('img')[imgEmptyArr[idx]].classList.add('transition-opacity') // 做事情
        // console.log(imgEmptyArr[idx])
      imgEmptyArr[idx]++;
    } else {
      imgEmptyArr[idx] = 0
    }
  }

  // slide_pic.prototype = {
  //     pic_num: '5',
  //     pic_slide: function () {
  //       $(".photo-box ul li").eq(pic_index).show().siblings("li").hide()
  //     }
  //   }
  // var obj = new slide_pic();
  // obj.pic_slide(pic_index);
}
// var slide_index = setInterval(slide, 1000)