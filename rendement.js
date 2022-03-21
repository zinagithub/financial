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
    calculRendement();
    modal.style.display = 'block';
    var dataCategorie = localStorage.getItem("dataCategorie");
var dataEchellon =  localStorage.getItem("dataEchellon");
var dataAbsence =   localStorage.getItem("dataAbsence");
var dataBrut =      localStorage.getItem("dataBrut");
var dataMontant =   localStorage.getItem("dataMontant");
var dataRss =       localStorage.getItem("dataRss");
var dataIrg =       localStorage.getItem("dataIrg");
var dataNet =       localStorage.getItem("dataNet");

var dataNote =      localStorage.getItem("dataNote");
if (dataCategorie !==null &&
dataEchellon !==null &&
dataAbsence !==null &&
dataBrut !==null &&
dataMontant !==null &&
dataRss!==null &&
dataIrg!==null &&
dataNet!==null &&
dataNote!==null ){
    dataCategorie = parseInt(dataCategorie);
    categorie.value = dataCategorie;
    dataEchellon  = parseInt(dataEchellon);
    echellon.value = dataEchellon;
    dataAbsence = parseInt(dataAbsence);
    absence.value = dataAbsence;
    dataBrut = parseFloat(dataBrut);
    brut.value = financial(dataBrut);
    dataMontant = parseFloat(dataMontant);
    montant.value = financial(dataMontant);
    dataRss = parseFloat(dataRss);
    rss.value = financial(dataRss);
    dataIrg = parseFloat(dataIrg);
    irg.value = financial(dataIrg);
    dataNet = parseFloat(dataNet);
    net.value = financial(dataNet);
    dataNote = parseFloat(dataNote);
    note.value = dataNote;
    dataNote = parseFloat(dataNote);

localStorage.removeItem("dataCategorie");
localStorage.removeItem("dataEchellon");
localStorage.removeItem("dataAbsence");
localStorage.removeItem("dataBrut");
localStorage.removeItem("dataMontant");
localStorage.removeItem("dataRss");
localStorage.removeItem("dataIrg");
localStorage.removeItem("dataNet");
localStorage.removeItem("dataNote");
}
    e.preventDefault()
    
}

const minIndice = [200,219,240,263,288,315,348,379,418,453,498,537,578,621,666,713,762];
const ech = [
[10,11,12,13,14,16,17,19,21,23,25,27,29,31,33,36,38],
[20,22,24,26,29,32,35,38,42,45,50,54,58,62,67,71,76],
[30,33,36,39,43,47,52,57,63,68,75,81,87,93,100,107,114],
[40,44,48,53,58,63,70,76,84,91,100,107,116,124,133,143,152],
[50,55,60,66,72,79,87,95,105,113,125,134,145,155,167,178,191],
[60,66,72,79,86,95,104,114,125,136,149,161,173,186,200,214,229],
[70,77,84,92,101,110,122,133,146,159,174,188,202,217,233,250,267],
[80,88,96,105,115,126,139,152,167,181,199,215,231,248,266,285,305],
[90,99,108,118,130,142,157,171,188,204,224,242,260,279,300,321,343],
[100,110,120,132,144,158,174,190,209,227,249,269,289,311,333,357,381],
[110,120,132,145,158,173,191,208,230,249,274,295,318,342,366,392,419],
[120,131,144,158,173,189,209,225,251,272,299,322,347,373,400,428,457]
];

/* permanent and contract button */
const permanent = document.getElementById("permanent");
const contrat= document.getElementById("contrat");
const echellonLabel = document.getElementById("echellon-label");
var choice = 1;
/* change the background of the permanent button */

permanent.classList.add("bg-green");
permanent.addEventListener("click",choosePermanent);
contrat.addEventListener("click",chooseContrat);

function choosePermanent(){
    
    permanent.classList.add("bg-green");
    permanent.classList.remove("bg-dark-blue");
    contrat.classList.remove("bg-green");
    contrat.classList.add("bg-dark-blue");
    echellonLabel.innerHTML = "الدرجة";
    echellon.placeholder = "أدخل الدرجة من 0-12" ;
    echellon.max = "12";
    choice = 1;
}
function chooseContrat(){
    
    permanent.classList.remove("bg-green");
    permanent.classList.add("bg-dark-blue");
    contrat.classList.add("bg-green");
    echellonLabel.innerHTML = "عدد السنوات";
    echellon.placeholder = "أدخل عدد السنوات";
    echellon.max = "40";
    choice = 2;

}
const categorie = document.getElementById("categorie");
const echellon = document.getElementById("echellon");
const absence = document.getElementById("absence");
const brut = document.getElementById("brut");
const montant = document.getElementById("montant-prime");
const rss = document.getElementById("rss");
const irg = document.getElementById("irg");
const net = document.getElementById("net");
const note = document.getElementById("note");
//var getSelectedValue = document.querySelector( 'input[name="pourcentage"]:checked');
 


function calculRendement(){
    var info = 0;
    if (echellon.value > 0 && choice == 1){
      info = ech[parseInt(echellon.value)-1][categorie.value - 1];
    }
    if (echellon.value > 0 && choice == 2){
        
      info = (echellon.value)*1.40/100;
    }
    //getSelectedValue = document.querySelector( 'input[name="pourcentage"]:checked');
    localStorage.setItem("dataCategorie",categorie.value);
    localStorage.setItem("dataEchellon",echellon.value);
    localStorage.setItem("dataAbsence",absence.value);
    //localStorage.setItem("dataPourcentage",getSelectedValue.value);
    localStorage.setItem("dataNote",note.value);
    if (choice == 1){
       
    var G = (minIndice[categorie.value - 1 ]+info)*45;
    
    }else {
    var G = (minIndice[categorie.value - 1 ])*45 + (minIndice[categorie.value - 1 ])*45*info;
    }
    localStorage.setItem("dataBrut",G);
    var L = (G/30)*(note.value/100)*(90-absence.value);
    localStorage.setItem("dataMontant",L);
    var M = L*0.09;
    localStorage.setItem("dataRss",M);
    var N = (L-M)*0.1
    localStorage.setItem("dataIrg", N);
    var O = L - M - N;
    localStorage.setItem("dataNet", O);
}