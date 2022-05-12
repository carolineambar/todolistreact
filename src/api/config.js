const URL = 'http://localhost:3001/notes/'

const request = async (method = 'GET', body, params = '') => {
    const response = await fetch(`${URL}/${params}`,
    {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

const getItems = () => request()
const postItems = (item) => request('POST', item)
const deleteItem = (id) => request('DELETE', {}, id)

export {
    getItems,
    postItems,
    deleteItem
}
