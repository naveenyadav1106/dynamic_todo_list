document.addEventListener('DOMContentLoaded',function(){
    const addbutton=document.getElementById("todobutton")
    const newitem=document.getElementById("newitem")
    const todolist=document.getElementById("todolist")

    addbutton.addEventListener('click',function(){
        const newtask=newitem.value.trim();
        
        if(newtask!==''){

            const newlist=document.createElement('li')
            newlist.textContent=newtask;

            const deletebtn=document.createElement('button')
            deletebtn.textContent='X'

            deletebtn.addEventListener('click',function(){
                todolist.removeChild(newlist)
            });

           newlist.appendChild(deletebtn);
           todolist.appendChild(newlist);

            newitem.value='';
        }
    });
})