var Form=document.getElementById("form");
var FullName=document.getElementById("Fullname");
var CodMeli=document.getElementById("codemeli");
var number=document.getElementById("number");
var Father=document.getElementById("father");
var submit=document.getElementById("submit"); 

Form.addEventListener("click",function(event){
    event.preventDefault() //az refresh avali jelogiri mikone
    
    checkinputs()
})
 const checkinputs=function(){
    const FullNamevalue=FullName.value.trim()
     const CodMelivalue=CodMeli.value.trim()
     const numbervalue=number.value.trim()
     const fathervalue=Father.value.trim()
      
     if(FullNamevalue===""){
        seterror(FullName,"نام و نام خانوادگی را وارد کنید")
    }
    else{
        setSuccess(FullName)
    }
    
     if(CodMelivalue===""){
        seterror(CodMeli,"کد ملی را وارد کنید")
    

     }
          else{
        setSuccess(CodMeli)
    }

     if(numbervalue===""){
        seterror(number,"شماره همراه را وارد کنید")
    
    }

     else{
        setSuccess(number)
    } 

     if(fathervalue===""){
        seterror(Father,"نام پدر را وارد کنید")
    
     }

     else{
        setSuccess(Father)
    }

}

const seterror=(input,message)=>{
    const formcontrol=input.parentElement
    const small=formcontrol.querySelector("small")
    input.style.borderColor="red"
    small.style.color="red"
    small.innerText=message
}

const setSuccess=function(input){
    const formcontrol= input.parentElement
    const small= formcontrol.querySelector("small")
    input.style.borderColor="rgb(0, 255, 0)"  
    small.innerText=""


}
