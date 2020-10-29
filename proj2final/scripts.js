const red = document.querySelector(".red")
const pink = document.querySelector(".pink")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const blue = document.querySelector(".blue")

const center = document.querySelector(".center")

const getBgColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBgColor(red));

// var redElement = getBgColor(red)      /// grabbing the red color
//
// red.addEventListener('mouseenter', () => {            // adding event listener
//   center.style.backgroundColor = redElement
// })


const colorChanger = (element,color) => {
  return element.addEventListener('mouseenter', () => {
    center.style.background = color;
  })
}
colorChanger(red, getBgColor(red));
colorChanger(pink, getBgColor(pink));
colorChanger(cyan, getBgColor(cyan));
colorChanger(orange,getBgColor(orange));
colorChanger(blue,getBgColor(blue));
colorChanger(violet,getBgColor(violet));
