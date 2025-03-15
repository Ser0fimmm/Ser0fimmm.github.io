document.addEventListener(`DOMContentLoaded`, () => {
    async function loaddata(params) {
        const [users,autos,owners] = await Promise.all([
            fetch(`../data/users.json`).then(res => res.json()),
            fetch(`../data/autos.json`).then(res => res.json()),
            fetch(`../data/owners.json`).then(res => res.json()),
        ])
        return { users, autos, owners};
    }
    
    function RenderOwersTable(users) {
        const tbody = document.querySelector(`#owner-table tbody`)
        tbody.innerHTML = users.map(user => `
            <Tr>
                <td>
                   ${user.id} 
                </td>
                <td>
                    ${user.lastname} 
                </td>
                <td>
                    ${user.firstname} 
                </td>
                <td>
                    ${user.phone} 
                </td>
                <td>
                    ${user.email} 
                </td>
                <td>
                    ${user.city} 
                </td>
            </Tr> `
        ).join(``)
    }
    function RenderAutosTable(autos) {
        const tbody = document.querySelector(`#autos-table tbody`)
        tbody.innerHTML = autos.map(user => `
            <Tr>
                <td>
                   ${auto.id} 
                </td>
                <td>
                    ${auto.brand} 
                </td>
                <td>
                    ${auto.model} 
                </td>
                <td>
                    ${auto.cplor} 
                </td>
                <td>
                    ${auto.licencePlate} 
                </td>
                <td>
                    ${user.city} 
                </td>
            </Tr> `
        ).join(``)
    }
    function RenderOwnerSelect(users) {
        const select = document.getElementById(`owner-select`)
        select.innerHTML = users.map (user => `
            <option value="${user.id}">${user.firstname} ${user.lastname}</option>
            `
        ).join(``)
    }

    function RenderAutoSelect(autos) {
        const select = document.getElementById(`auto-select`)
        select.innerHTML = autos.map (user => `
            <option value="${auto.id}">${auto.brand} ${auto.model} ${auto.licencePlate}</option>
            `
        ).join(``)
    }

    function renderOwnedAutos(owners, autos, userId) {
        const OwnedAutos = owners
        .filter(owner => owner.userId === userId && !owner.deregdate)
        .map(owner => autos.find(auto => auto.id === owner.autoid))
        const list = document.getElementById(`owned-autos-list`)
        list.innerHTML = OwnedAutos.map(auto => `
            <li> ${auto.brand} ${auto.model} (${auto.licencePlate}) </li>
            `).join(``)
    }
    async function init() {
        const { users, autos, owners} = await loaddata()
        renderOwnedAutos()
        RenderAutoSelect()
        RenderAutosTable()
        RenderOwersTable()
        RenderOwnerSelect()
    }
    init()
})