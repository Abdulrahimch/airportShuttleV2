const calculateShuttleCost = (user, airport, pax) => {
    let cost = 0
    switch(airport) {
        case 'IST airport':
            console.log('here we car')
            if (pax <= 4) cost = user.IstAirportMaxFourPaxCost;
            else if (pax > 4 && pax <= 6) cost = user.IstAirportMaxSixPaxCost;
            else cost = user.IstAirportMaxTenPaxCost;
            break;
        case 'SAW airport':
            if (pax <= 4) cost = user.SawAirportMaxFourPaxCost;
            else if (pax > 4 && pax <= 6) cost = user.SawAirportMaxSixPaxCost;
            else cost = user.SawAirportMaxTenPaxCost;
            break;
    }
    return cost
};

module.exports = calculateShuttleCost;