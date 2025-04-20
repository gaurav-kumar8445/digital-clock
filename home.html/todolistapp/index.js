const item = document.querySelector("#item");
const to_do_box = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
         addtodo(this.value)
            this.value = "";

        }

    }
);

const addtodo = (item) =>{
const listitem = document.createElement("li")
listitem.innerHTML = ` ${item}
<i class="fa-solid fa-xmark"></i>
`;
}