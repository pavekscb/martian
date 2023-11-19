
document.getElementById("connectButton").addEventListener("click", function () {
  
async function connectWallet() {
  
   if (window.martian) {await window.martian.connect(); console.log('Кошелек успешно подключен!');}
    
    
}
  
// Вызов функции для подключения кошелька
connectWallet();
  
    
});
