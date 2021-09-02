const newClient = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    celular: document.getElementById('celular').value,
    cpf: document.getElementById('cpf').value
}



const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}


const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

