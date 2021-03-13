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
      <h1>{season}</h1>
    </>
  )
}