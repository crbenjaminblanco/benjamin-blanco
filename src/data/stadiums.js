// Stadium locations and addresses
export const stadiums = {
  'SoFi Stadium': {
    geo: { lat: 33.9535, lon: -118.3387 },
    address: {
      street: '1001 Stadium Dr',
      city: 'Inglewood',
      state: 'CA',
      country: 'USA',
      postalCode: '90301'
    }
  },
  'Northwest Stadium': {
    geo: { lat: 38.9078, lon: -76.8644 },
    address: {
      street: '1600 FedEx Way',
      city: 'Landover',
      state: 'MD',
      country: 'USA',
      postalCode: '20785'
    }
  },
  'Lambeau Field': {
    geo: { lat: 44.5013, lon: -88.0622 },
    address: {
      street: '1265 Lombardi Ave',
      city: 'Green Bay',
      state: 'WI',
      country: 'USA',
      postalCode: '54304'
    }
  },
  'Mercedes-Benz Stadium': {
    geo: { lat: 33.7550, lon: -84.4006 },
    address: {
      street: '1 AMB Drive NW',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      postalCode: '30313'
    }
  },
  'AT&T Stadium': {
    geo: { lat: 32.7478, lon: -97.0928 },
    address: {
      street: '1 AT&T Way',
      city: 'Arlington',
      state: 'TX',
      country: 'USA',
      postalCode: '76011'
    }
  },
  'Arrowhead Stadium': {
    geo: { lat: 39.0489, lon: -94.4839 },
    address: {
      street: '1 Arrowhead Dr',
      city: 'Kansas City',
      state: 'MO',
      country: 'USA',
      postalCode: '64129'
    }
  },
  'Hard Rock Stadium': {
    geo: { lat: 25.9580, lon: -80.2389 },
    address: {
      street: '347 Don Shula Dr',
      city: 'Miami Gardens',
      state: 'FL',
      country: 'USA',
      postalCode: '33056'
    }
  },
  'U.S. Bank Stadium': {
    geo: { lat: 44.9739, lon: -93.2581 },
    address: {
      street: '401 Chicago Ave',
      city: 'Minneapolis',
      state: 'MN',
      country: 'USA',
      postalCode: '55415'
    }
  },
  'MetLife Stadium': {
    geo: { lat: 40.8135, lon: -74.0744 },
    address: {
      street: '1 MetLife Stadium Dr',
      city: 'East Rutherford',
      state: 'NJ',
      country: 'USA',
      postalCode: '07073'
    }
  },
  'Arena Corinthians': {
    geo: { lat: -23.5450, lon: -46.4747 },
    address: {
      street: 'Av. Miguel Ignacio Curi',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil',
      postalCode: '08295-005'
    }
  },
  'Allegiant Stadium': {
    geo: { lat: 36.0908, lon: -115.1834 },
    address: {
      street: '3333 Al Davis Way',
      city: 'Las Vegas',
      state: 'NV',
      country: 'USA',
      postalCode: '89118'
    }
  },
  'Empower Field at Mile High': {
    geo: { lat: 39.7439, lon: -105.0204 },
    address: {
      street: '1701 Bryant St',
      city: 'Denver',
      state: 'CO',
      country: 'USA',
      postalCode: '80204'
    }
  },
  'Nissan Stadium': {
    geo: { lat: 36.1664, lon: -86.7713 },
    address: {
      street: '1 Titans Way',
      city: 'Nashville',
      state: 'TN',
      country: 'USA',
      postalCode: '37213'
    }
  },
  'EverBank Stadium': {
    geo: { lat: 30.3239, lon: -81.6374 },
    address: {
      street: '1 TIAA Bank Field Dr',
      city: 'Jacksonville',
      state: 'FL',
      country: 'USA',
      postalCode: '32202'
    }
  }
}

// Away stadiums mapping
export const awayStadiums = {
  'Chargers': {
    home: 'SoFi Stadium',
    away: {
      'Raiders': 'Allegiant Stadium',
      'Chiefs': 'Arrowhead Stadium',
      'Broncos': 'Empower Field at Mile High',
      'Ravens': 'M&T Bank Stadium',
      'Browns': 'Cleveland Browns Stadium',
      'Steelers': 'Acrisure Stadium',
      'Titans': 'Nissan Stadium',
      'Colts': 'Lucas Oil Stadium',
      'Jets': 'MetLife Stadium',
      'Bills': 'Highmark Stadium',
      'Dolphins': 'Hard Rock Stadium',
      'Patriots': 'Gillette Stadium',
      'Bengals': 'Paycor Stadium',
      'Jaguars': 'EverBank Stadium',
      'Texans': 'NRG Stadium'
    }
  },
  'Commanders': {
    home: 'Northwest Stadium',
    away: {
      'Giants': 'MetLife Stadium',
      'Cardinals': 'State Farm Stadium',
      'Ravens': 'M&T Bank Stadium',
      'Bears': 'Soldier Field',
      'Cowboys': 'AT&T Stadium',
      'Falcons': 'Mercedes-Benz Stadium',
      'Seahawks': 'Lumen Field',
      'Packers': 'Lambeau Field',
      'Vikings': 'U.S. Bank Stadium',
      'Buccaneers': 'Raymond James Stadium',
      'Bengals': 'Paycor Stadium',
      'Browns': 'Cleveland Browns Stadium',
      'Panthers': 'Bank of America Stadium',
      'Eagles': 'Lincoln Financial Field',
      'Saints': 'Caesars Superdome',
      'Rams': 'SoFi Stadium',
      '49ers': 'Levi\'s Stadium'
    }
  }
} 