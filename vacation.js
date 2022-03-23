// Get Modal element
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementById("closeBtn");

// Listen for open click
modalBtn.addEventListener("click",openModal);
// Listen for close modal
closeBtn.addEventListener("click",closeModal);
//Listen for outside click
window.addEventListener("click", clickOutside);

//function to close modal
function closeModal(){
    modal.style.display = 'none'; 
}
//function to close modal if outside click
function clickOutside(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
     
}
// function to round number
function financial(x) {
    var nbr = x.toFixed(3);
    nbr = nbr.split("");
    if ((nbr[nbr.length -1]  >=5 && (nbr[nbr.length -2]>= 5 && nbr[nbr.length -2]<=8 ))){
        nbr[nbr.length -1] = "0";
        nbr[nbr.length -2] = (Number.parseInt(nbr[nbr.length -2]) +1).toString();
        
    }
    else{
        if ((nbr[nbr.length -1]  >=5 &&  nbr[nbr.length -2]==9 )){
        
                nbr[nbr.length -1] = '0';
                nbr[nbr.length -2] = '0';
                if (nbr[nbr.length -3] < 9){
                    nbr[nbr.length -3] = (Number.parseInt(nbr[nbr.length -3]) +1).toString();
                }
                else{
                    if (nbr[nbr.length -3] == 9){
                        nbr =  (Math.trunc(x)+1).toString().split("");
                    }
                }
               
            
        }
        
    }
    nbr =  nbr.join('');
  return Number.parseFloat(nbr).toFixed(2);
}


//function to open modal
function openModal (e){
    calculvacation();
    modal.style.display = 'block';
var brutVacation = localStorage.getItem("brutVacation");
var rssData =  localStorage.getItem("rss");
var irgData =   localStorage.getItem("irg");
var netData =   localStorage.getItem("net");

if (brutVacation !==null &&
rssData !==null &&
irgData !==null &&
 netData !==null ){
    brutVacation = parseInt(brutVacation);
    brut.value = brutVacation;
    rssData  = parseFloat(rssData);
    rss.value = rssData;
    rssData = parseFloat(rssData);
    rss.value = financial(rssData);
    irgData = parseFloat(irgData);
    irg.value = financial(irgData);
    netData = parseFloat(netData);
    net.value = financial(netData);
    

localStorage.removeItem("brutVacation");
localStorage.removeItem("rss");
localStorage.removeItem("irg");
localStorage.removeItem("net");
}
    e.preventDefault()
    
}


const brut = document.getElementById("brut-vacation");
const rss = document.getElementById("rss");
const irg = document.getElementById("irg");
const net = document.getElementById("net");
const note = document.getElementById("nbHeures");
const valHeure = document.getElementById("dropdown");
 


function calculvacation(){
    var info = Number.parseInt(nbHeures.value)*Number.parseInt(dropdown.value);
    localStorage.setItem("brutVacation",info);
    var info1 = info*0.09;
    localStorage.setItem("rss",info1);
    var info2 = (info - info1) *0.1;
    localStorage.setItem("irg",info2);
    var info3 = info - info1 - info2;
    localStorage.setItem("net",info3);
    
}