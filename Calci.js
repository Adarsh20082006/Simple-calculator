function data(a){ 
    document.querySelector(".display").value+=a;
    document.querySelector(".display-2").style.visibility="visible";
    let val=eval(document.querySelector(".display").value);
    val=val.toFixed(2);
    document.querySelector(".display-2").value=val;
    document.querySelector(".display").value=document.querySelector(".display").value.toString();
    if(document.querySelector(".display").value.length>=12){
       document.querySelector(".display").id="display-1"; 
    }
    
    else{
       document.querySelector(".display").id="";
    }
   }
   function data1(){
document.querySelector(".display").value=eval(document.querySelector(".display").value);
document.querySelector(".display-2").style.visibility="hidden";
   }

   function ac(){
    document.querySelector(".display").value=" ";
    document.querySelector(".display-2").value=" ";
    document.querySelector(".second-box").style.visibility="hidden";

   }
   function dlt(){
       let dlt=document.querySelector(".display").value;
       document.querySelector(".display").value=document.querySelector(".display").value.toString().slice(0,-1);
    dlt=dlt.toString();
    if(dlt[0]!==Number ){
       document.querySelector(".display-2").value=" ";
       document.querySelector(".display-2").value=eval(document.querySelector(".display").value)}
       
    else{
    document.querySelector(".display-2").value=eval(document.querySelector(".display").value);
    }
    if(document.querySelector(".display").value==""){
    document.querySelector(".display-2").value=" ";
   }
   }
function open1() {
    if(document.querySelector(".second-box").style.visibility=="hidden"){
        document.querySelector(".second-box").style.visibility="visible";
    }else{
        document.querySelector(".second-box").style.visibility="hidden";
    }
}
function sq(s){
   s=document.querySelector(".display").value;
   document.querySelector(".display").value="sqrt("+s+")";
   document.querySelector(".display-2").value=Math.sqrt(s).toFixed(5);
    open1();
    document.querySelector(".eql").addEventListener('click',()=>{
    document.querySelector(".display").value=Math.sqrt(s).toFixed(5);
    document.querySelector(".display-2").value="";})
}
function cu(s){
   s=document.querySelector(".display").value;
   document.querySelector(".display").value="cbrt("+s+")";
   document.querySelector(".display-2").value=Math.cbrt(s).toFixed(5);
    open1();
    document.querySelector(".eql").addEventListener('click',()=>{
    document.querySelector(".display").value=Math.cbrt(s).toFixed(5);
    document.querySelector(".display-2").value="";})
}
function po(){
   document.querySelector(".display").value="10**";
   open1();
}
function xpo(x){
   x=document.querySelector(".display").value;
   document.querySelector(".display").value=x+"**10";
   open1();
   document.querySelector(".display-2").value=eval(document.querySelector(".display").value);
}
function sin(x){
x=document.querySelector(".display").value;
document.querySelector(".display").value="sin("+x+")";
document.querySelector(".display-2").value=Math.sin(x).toFixed(4); 
open1();
document.querySelector(".eql").addEventListener('click',()=>{
   document.querySelector(".display").value=Math.sin(x).toFixed(4); 
})
}
function cos(x){
   x=document.querySelector(".display").value;
   document.querySelector(".display").value="cos("+x+")";
   document.querySelector(".display-2").value=Math.cos(x).toFixed(4); 
   open1();
   document.querySelector(".eql").addEventListener('click',()=>{
      document.querySelector(".display").value=Math.cos(x).toFixed(4); 
   })
   }
function tan(x){
   x=document.querySelector(".display").value;
   document.querySelector(".display").value="tan("+x+")";
   document.querySelector(".display-2").value=Math.tan(x).toFixed(4); 
   open1();
   document.querySelector(".eql").addEventListener('click',()=>{
      document.querySelector(".display").value=Math.tan(x).toFixed(4); 
   })
   }
   function x2(x){
      x=document.querySelector(".display").value;
      document.querySelector(".display").value=x**2;
      document.querySelector(".display-2").value=x**2;
      open1();
   }
   function logarithm(){
      x=document.querySelector(".display").value;
      document.querySelector(".display").value="l0g("+x+")";
      document.querySelector(".display-2").value=Math.log10(x).toFixed(4);
      document.querySelector(".eql").addEventListener('click',()=>{
         document.querySelector(".display").value=Math.lo1g10(x).toFixed(4);
      document.querySelector(".display-2").value="";
   })}
   function ln(){
      x=document.querySelector(".display").value;
      document.querySelector(".display").value="ln("+x+")";
      document.querySelector(".display-2").value=Math.log(x).toFixed(4);
      document.querySelector(".eql").addEventListener('click',()=>{
         document.querySelector(".display").value=Math.log(x).toFixed(4);
      document.querySelector(".display-2").value="";
      })
   }
   function expo(){
      x=document.querySelector(".display").value;
      document.querySelector(".display").value="e^("+x+")";
      document.querySelector(".display-2").value=Math.exp(x).toFixed(4);
      document.querySelector(".eql").addEventListener('click',()=>{
         document.querySelector(".display").value=Math.exp(x).toFixed(4);
      document.querySelector(".display-2").value="";
   })}
   function x3(){
      x=document.querySelector(".display").value;
      document.querySelector(".display").value=x+"^3";
      document.querySelector(".display-2").value=x**3;
      document.querySelector(".eql").addEventListener('click',()=>{
         document.querySelector(".display").value=x**3;
      document.querySelector(".display-2").value="";
   })}