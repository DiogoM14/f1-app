import { useEffect, useState } from 'react'
import './styles/global.scss'

interface Repository {
  season: string
  raceName: string
  Results: { 
    Constructor: {
      name: string
    }
    Driver: { 
      familyName: string
      givenName: string
      nationality: string
    }
  }
} 

export function App() {
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
    <div>
      <h1>List</h1>

      {repositories.map(repository => {
          return <p>{repository.raceName}</p>
        })}
    </div>
  )
}