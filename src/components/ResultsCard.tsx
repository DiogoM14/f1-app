import { useEffect, useState } from 'react'
import { CardItems } from './CardItems'

import '../styles/resultCard.scss'

interface Repository {
  season: string
  raceName: string
  Results: Results[]
} 

interface Results {
  Constructor: {
    name: string
  }
  
  Driver: {
    familyName: string
    givenName: string
    nationality: string
    permanentNumber: string
  }
}

export function ResultsCard() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('http://ergast.com/api/f1/2020/results/1.json')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status)
          return
        }
  
        response.json().then(function(data) {
          setRepositories(data.MRData.RaceTable.Races)
        })
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err)
    })
  }, [])

  return (
    <section>
      {repositories.map(repository => {
          return (
              <CardItems 
                season={repository.season} 
                raceName={repository.raceName} 
                name={repository.Results[0].Constructor.name} 
                familyName={repository.Results[0].Driver.familyName} 
                givenName={repository.Results[0].Driver.givenName} 
                nationality={repository.Results[0].Driver.nationality} 
                permanentNumber={repository.Results[0].Driver.permanentNumber} 
              />
            )
        })}
    </section>
  )
}