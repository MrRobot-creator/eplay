/* eslint-disable prettier/prettier */
import ProductsList from '../../components/ProductsList'
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRPGGamesQuery, useGetSportGamesQuery, useGetSimulationGamesQuery } from '../../services/api'

const Categories = () => {

  const { data: actionGames,isLoading: actionGamesLoading } = useGetActionGamesQuery()
  const { data: simulationGames, isLoading: simulationGamesLoading } = useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: fightGamesLoading } = useGetFightGamesQuery()
  const { data: rpgGames, isLoading: rpgGamesLoading } = useGetRPGGamesQuery()
  const { data: sportGames, isLoading: sportGamesLoading } = useGetSportGamesQuery()

    return (
        <>
      <ProductsList games={rpgGames} title="RPG" background="black" id='rpg' isLoading={rpgGamesLoading}/>
      <ProductsList games={actionGames} title="Ação" background="gray" id='action' isLoading={actionGamesLoading}/>
      <ProductsList games={simulationGames} title="Simulação" background="black" id='simulation' isLoading={simulationGamesLoading}/>
      <ProductsList games={fightGames} title="Luta" background="gray" id='fight' isLoading={fightGamesLoading}/>
      <ProductsList games={sportGames} title="Esportes" background="black" id='sports' isLoading={sportGamesLoading}/>
       </>
    )
  }


export default Categories