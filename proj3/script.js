const courses = [
    {
      name : "Complete Python Course",
      price : "499"
    },
    {
      name : "Complete Django Course",
      price : "499"
    },
    {
      name : "Complete Python and Django Course",
      price : "799"
    },
    {
      name : "Complete Python For Datascience",
      price : "799"
    },
    {
      name : "Complete ReactJs Course",
      price : "499"
    },
    {
      name : "Complete SQL Bootcamp",
      price : "299"
    }
]

function generateList(){
  const ul = document.querySelector(".list-group")
  ul.innerHTML = ""
  courses.forEach((course) => {
      const li = document.createElement("li")
      li.classList.add("list-group-item")
      const name = document.createTextNode(course.name)
      li.appendChild(name)

      const span = document.createElement("span")
      span.classList.add("float-right")
      const price =document.createTextNode("₹. " + course.price)
      span.appendChild(price)

      li.appendChild(span)
      ul.appendChild(li)
  });
}
window.addEventListener("load",generateList())


const button = document.querySelector(".sort-btn")
button.addEventListener("click", () =>{
  courses.sort( (a,b) => a.price - b.price)
  generateList()
})

const button1 = document.querySelector(".sort-high")
button1.addEventListener("click", () => {
  courses.sort( (a,b) => b.price - a.price)
  generateList()
})

// <ul  class="list-group">
//   <li class="list-group-item">
//     Javascript course<span class="float-right">₹.299</span>
//   </li>
// </ul>
