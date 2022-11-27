const cookieButton = document.querySelector("#cookie");
const moreClicksButton = document.querySelector("#moreClicks")
const clickedBagel = document.querySelector("#bagel")

var cookies = 0
var cpc = 1
var precoClick = 25
var precoBagel = 200
var Bagelcps = 5
var cps = 0



let Bagel = () =>{
  const quantidade = document.querySelector("#quantidade")
  cookies += Bagelcps

  quantidade.innerHTML = cookies
}

cookieButton.addEventListener("click", function () {
  const quantidade = document.querySelector("#quantidade");
  cookies += cpc
  quantidade.innerHTML = cookies
});

moreClicksButton.addEventListener("click", function(){

   const valorPreco = document.querySelector("#preco")
   const cookiesPerClick = document.querySelector("#cookiesPerCLick")
   const quantidade = document.querySelector("#quantidade");
   if(cookies >= precoClick){
     cpc += 1
     cookies -= precoClick
     precoClick = Math.ceil(precoClick * 1.3)
     valorPreco.innerHTML = precoClick
     cookiesPerClick.innerHTML = cpc
     quantidade.innerHTML = cookies
   }
})

clickedBagel.addEventListener("click", function(){
  const valorPreco = document.querySelector("#bagelPrice")
  const quantidade = document.querySelector("#quantidade")
  const cpsTotal = document.querySelector("#cps")
  if(cookies >= precoBagel){
    cookies -= precoBagel
    precoBagel = Math.ceil(precoBagel *  1.5)
    valorPreco.innerHTML = precoBagel
    quantidade.innerHTML = cookies
    cps += Bagelcps
    cpsTotal.innerHTML = cps

    setInterval(Bagel, 1000)
  }
})