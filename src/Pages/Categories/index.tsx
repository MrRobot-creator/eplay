/* eslint-disable prettier/prettier */
import ProductsList from '../../components/ProductsList'
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRPGGamesQuery, useGetSportGamesQuery, useGetSimulationGamesQuery } from '../../services/api'

const Categories = () => {

  const { data: actionGames } = useGetActionGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames} = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if(actionGames && simulationGames && fightGames && rpgGames && sportGames) {
    return (
        <>
      <ProductsList games={rpgGames} title="RPG" background="black" id='rpg'/>
      <ProductsList games={actionGames} title="Ação" background="gray" id='action'/>
      <ProductsList games={simulationGames} title="Simulação" background="black" id='simulation'/>
      <ProductsList games={fightGames} title="Luta" background="gray" id='fight'/>
      <ProductsList games={sportGames} title="Esportes" background="black" id='sports'/>
       </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories