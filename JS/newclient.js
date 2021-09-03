const newClient = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    cpf: document.getElementById('cpf').value,
    celular: document.getElementById('celular').value
    }

 const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
    } 

    
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const createClient = () => {
    const newClient = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        celular: document.getElementById('celular').value

    }
    const dbClient = getLocalStorage()
    dbClient.push(newClient)
    setLocalStorage(dbClient)
    clearFields()
      
    console.log(newClient);
}