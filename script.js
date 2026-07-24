async function sendPrompt(){

const prompt=document.getElementById("prompt").value;

const response=await fetch("/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
prompt:prompt
})

});

const data=await response.json();

const chat=document.getElementById("chat");

chat.innerHTML+=`
<p><b>You:</b> ${prompt}</p>
<p><b>AI:</b> ${data.response}</p>
`;

document.getElementById("prompt").value="";

}
