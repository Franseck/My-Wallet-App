const date = document.querySelector("#date");
const spending = document.querySelector("#spending");
const  details= document.querySelector("#spendingName");
const addBtn = document.querySelector(".submit-btn")


const income = document.querySelector("#income")
const addIncomeBtn = document.querySelector(".add-income-btn")

const table = document.querySelector(".tablo")

const geliriniz = document.querySelector("#geliriniz");
const gideriniz = document.querySelector("#gideriniz");
const kalan = document.querySelector("#kalan");

const clearBtn = document.querySelector(".clear-btn");
let giderToplam = 0;
let gelirToplam = 0;

function addExpenditureForm() {
    const newTable = document.createElement("tr");
    newTable.classList.add("newTr");
    newTable.innerHTML = `<td>${date.value}</td>
    <td class="spending">${spending.value}</td>
    <td>${details.value}</td>
    <td>  <i style="cursor:pointer;" class="text-danger bi bi-trash"></i></td>` ; 
table.appendChild(newTable);

giderToplam +=Number(spending.value);
gideriniz.textContent = giderToplam
kalan.textContent <0 ? (kalan.style.color = "red") : (kalan.style.color = "green")
date.value = "";
spending.value = "";
details.value = "";
}

addBtn.addEventListener("click", (e) => {
if(date.value == "" || spending.value == "" || details.value == "" ) {
    }else {
        e.preventDefault();
        addExpenditureForm();
    }
})

function addIncome() {
    gelirToplam += Number(income.value);
    geliriniz.textContent = gelirToplam;
    kalan.textContent = gelirToplam - giderToplam;
    income.value = "";
    kalan.textContent < 0
      ? (kalan.style.color = "red")
      : (kalan.style.color = "green");
  }
  
addIncomeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addIncome();
  });

function clearTable(e) {
    if(e.target.classList.contains("bi-trash")) {
        let newCal = e.target.closest(".newTr").children(1).textContent ;
        giderToplam-=Number(newCal);
        gideriniz.textContent = giderToplam;
        kalan.textContent = gelirToplam - giderToplam;
    kalan.textContent < 0
      ? (kalan.style.color = "red")
      : (kalan.style.color = "green");
    e.target.closest(".newTr").remove();
     }
  }

  table.addEventListener("click", (e) => {
    clearTable(e);
  });

  function clearPage() {
    const onay = window.confirm(
      "Are you sure you want to clear all information?" );
    if (onay) {
      giderToplam = 0;
      gelirToplam = 0;
      table.innerHTML = "";
      geliriniz.textContent = "";
      gideriniz.textContent = "";
      kalan.textContent = "";
     }  }

     clearBtn.addEventListener("click", () => {
        clearPage();
      });