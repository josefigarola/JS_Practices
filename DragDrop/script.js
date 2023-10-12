let lists = document.getElementsByClassName("list");
let rightBox = document.getElementsByClassName("right");
let leftBox = document.getElementsByClassName("left");

for(list of lists){
    list.addEventListener("dragstart", function(e){

        let selected = e.target;

        rightBox.addEventListener("dragend", function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop", function(e){
            rightBox.append(selected);
            selected = null;
        })

    })
}