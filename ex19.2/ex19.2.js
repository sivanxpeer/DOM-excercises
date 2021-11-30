const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


// const orderdList = document.createElement("ol");
// orderdList.style.listStyleType="none";
// orderdList.innerText="hello hello";
// // document.body.appendChild(orderdList);

// function createNewItem(obj){
//     const item = document.body.createElement("li");
//     item.innerText=obj.firstName+obj.lastName;
//     item.id=obj.id;
//     return item;
// }


let ul = document.createElement('ul');
ul.innerText = "ulululul";
document.body.append(ul);

// users.forEach((obj)=>{
//     if(newObj){
//     let newObj=createNewItem(obj);
//     orderdList.append(newObj);
//     }
// });


// console.log(Array.isArray(users));