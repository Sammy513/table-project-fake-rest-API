import {fetchCreate} from './data.js'

const tableHead = document.querySelector('.tHead')
const tableBody = document.querySelector('.tBody')

//thead------------------------
const arr = ["Name", "Username", "Email"]

const tr = document.createElement('tr')
arr.forEach(data => {
    const th = document.createElement('th')
    th.innerHTML = data

    tr.appendChild(th)
    tableHead.appendChild(tr)
})
//--------------------------------------



//tbody ---------------------------------
const url = 'https://jsonplaceholder.typicode.com/users'
fetchCreate('GET', url)
.then(data => renderTable(data))
.catch(error => console.log(error))

const renderTable = data => {
   data.map(d => {
       const trBody = document.createElement('tr')
       const td = document.createElement('td')
       const tdUsername = document.createElement('td')
       const tdEmail = document.createElement('td')

       td.textContent = d.name
       tdUsername.textContent = d.username
       tdEmail.textContent = d.email
       
       trBody.appendChild(td)
       trBody.appendChild(tdUsername)
       trBody.appendChild(tdEmail)

       tableBody.appendChild(trBody)
   })
}
//-------------------------------------------