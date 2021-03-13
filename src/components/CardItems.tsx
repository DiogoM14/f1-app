interface CardItemsProps {
  season: string
  raceName: string
  name: string
  familyName: string
  givenName: string
  nationality: string
  permanentNumber: string
}

export function CardItems({ season, raceName, name, familyName, givenName, nationality, permanentNumber }: CardItemsProps) {
  return (
    <>
      <li>
        <h3>{raceName} - {season}</h3>
        <p>Equipa vencedora - {name}</p>
        <p>Piloto vencedor - {givenName} {familyName} {permanentNumber}</p>
        <p>Nacionalidade do piloto - {nationality}</p>
      </li>
    </>
  )
}