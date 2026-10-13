/* eslint-disable prettier/prettier */
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import {  useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
const { data: onSaleGames, isLoading: isOnSaleLoading } = useGetOnSaleQuery()
const { data: soonGames, isLoading: isSoonLoading } = useGetSoonQuery()


    return (
    <>
    <Banner />
    <ProductsList id='on-sale' games={onSaleGames} title="Promoções" background="gray" isLoading={isOnSaleLoading}/>
    <ProductsList id='coming-soon' games={soonGames} title="Em Breve" background="black" isLoading={isSoonLoading} />
    </>
    )
  }


export default Home
