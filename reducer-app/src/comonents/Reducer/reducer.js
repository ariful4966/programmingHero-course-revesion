export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DICREMENT':
            return { count: state.count - 1 };
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatient]
            return { patients: allPatients };
        case 'REMOVE_PATIENT':
            const remaining = state.patients.filter(pt => pt.id !== action.id)
            const newState = {patients: remaining}
            return newState;

        default:
            return state
    }
}