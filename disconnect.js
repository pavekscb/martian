document.getElementById("disconnectButton").addEventListener("click", function () {
 async function disconnect() {
 
 if (window.martian) {await window.martian.disconnect(); console.log('Кошелек отключен');}
 
 
 }
 
disconnect();
});
