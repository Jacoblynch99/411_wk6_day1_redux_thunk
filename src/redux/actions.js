const url =
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'

export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const action = {
                    type: 'FETCH_MAKES',
                    value: data.Results,
                }
                dispatch(action)
            })
    }
}

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car,
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index,
    }
}

export const removeEntry = (index) => {
    return {
        type: 'REMOVE_ENTRY',
        value: index,
    }
}
