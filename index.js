const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

const infoUser = function (title, location) {
  title = title.toLowerCase();
  location = location.toLowerCase();

  // Vado a dichiarare un array nel quale andrò a pushare all'interno i rusultati.

  const results = [];

  // Con un ciclo for vado ad esaminare il contenuto dell'array e vado a selezionare quali elemenenti
  // dell'array jobs saranno pushati nell'array results.

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const jobTitle = job.title.toLowerCase();
    const jobLocation = job.location.toLowerCase();

    if (jobTitle.includes(title) && jobLocation.includes(location)) {
      console.log(`${job.title} - ${job.location}`);
      results.push(job);
    }
  }

  // Attraverso il return creo gli oggetti titleAndLocation e counter. A titleAndLocation andrò a dare a
  // il valore dei risultati dell'array results, mentre a counter il valore della lunghezza dell'array
  // results, cioè il numero degli oggetti trovati.

  return {
    titleAndLocation: results,
    counter: results.length,
  };
};

const searchResults = infoUser("d", "us");
console.log(searchResults);

// Creo due costanti alle quali aggiungere il valore di ul e del paragrafo con classe lista.

const ul = document.querySelector("ul");
const counter = document.querySelector(".lista");

// Creo una funzione che andrò in seguito ad applicare al button, ogni volta che verrà cliccato
// la funzione si eseguirà.
// Assegno a delle costanti il valore dell'input title e dell'input location adattandolo con toLowerCase.

const searchJob = function () {
  const inputJob = document.querySelector("#title");
  const inputLocation = document.querySelector("#location");
  const title = inputJob.value.toLowerCase();
  const location = inputLocation.value.toLowerCase();
  let count = 0;

  ul.innerHTML = "";
  counter.innerText = "";

  // Attraverso un if specifico che se il valore di title e location è uguale a 0, deve tornare
  // un alert e una stringa.

  if (title === "" || location === "") {
    counter.innerText = ` - Results: 0`;
    alert("Enter more information!!");
    return;
  }

  // Con l'utilizzo di un ciclo for, aggiungo il valore di job.title e job.location all'interno di un <li>
  // contenuto nella ul (const ul = ul di index.html). Con una variante creata precedentemente (count), a cui
  // ho assegnato valore 0, andrò attraverso l'algoritmo ad aumentare il valore di 1 ogni volta che troverà
  // gli oggetti title e location una volta inserito il loro valore.
  // Con counter.innerText si stamperà la quantità di oggetti trovati.

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    if (
      job.title.toLowerCase().includes(title) &&
      job.location.toLowerCase().includes(location)
    ) {
      count++;
      ul.innerHTML += `<li>${job.title} - ${job.location} </li>`;
    }
  }
  counter.innerText = ` - Job found: ${count}`;
};

const button = document.querySelector("button");
button.addEventListener("click", searchJob);
