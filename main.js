const teachers = [
    {
        img: "f1.png.png",
        name:"Rev Fr. P. VIJAYA RAJU SJ",
        designation:"HOD & LECTURER",
        subject: "WT & CN&CS",

    },
    {

    }

]

const blogCards = document.getElementById("blog-cards");

window.addEventListener('load',()=>{
    teachers.forEach((teacher)=>{
        console.log(teacher)
        div = document.createElement("div")

        div.innerHTML = `
        <div class="blog-image">
                    <img src="${teacher.img}">
                </div>
                <div class="blog-content">
              <h2>${teacher.name}</h2> 
              <h4>Designation :${teacher.designation} </h4> 
              <h5><b>Teaches</b> : ${teacher.subject}</h5>  
              <a href="">Read More</a>  
                </div>
        `
        div.classList.add('blog-card');
        console.log(div);
        blogCards.appendChild(div);
    })
})