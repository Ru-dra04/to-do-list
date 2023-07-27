let n1=document.getElementById("fon")
n1.addEventListener("click",function(){
    let n2=document.querySelector("input")
    let n3=document.createElement("li");
    let n7=document.createElement("h2");
    console.log(n2.value)
    if(n2.value==0){
        alert("enter the event");
    }
    else{
    n7.textContent=n2.value
    let n4=document.querySelector("ul")
    n4.append(n3);
    n3.append(n7);
    let n5=document.createElement("button")
    n5.textContent="Done";
    n5.setAttribute('class','john')
    n5.setAttribute('onclick','ed(this)')
    n3.append(n5);
    let n6=document.createElement("button")
    n6.textContent="Delete";
    n6.setAttribute('class','ron')
    n6.setAttribute('onclick','del(this)')
    n3.append(n6);
    if(n4.children.length>0){
        let t3=document.querySelector("h3")
        t3.remove();
     }
    }
 })
function ed(t2){
    t2.previousElementSibling.style.textDecoration="line-through";
}
function del(t1){
    t1.parentElement.remove();
    let n4=document.querySelector("ul")
    if(n4.children.length<=0){
       let t3=document.createElement("h3")
       t3.textContent="Nothing is there,Please!Enter an Event";
       n4.append(t3);
    }
}