import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form");o.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(e.target.elements.delay.value,10),r=e.target.elements.state.value;m(s,r).then(t=>{i.success({title:"✅ Success",message:t})}).catch(t=>{i.error({title:"❌ Error",message:t})})});function m(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(`Fulfilled promise in ${e}ms`):t(`Rejected promise in ${e}ms`)},e)})}
//# sourceMappingURL=2-snackbar.js.map