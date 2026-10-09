/* eslint-disable prettier/prettier */
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import {  useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
        type: 'image' | 'video'
        url: string
    }

export type Game = {
id: number;
name: string;
price: number;
description: string;
release_date?: string;
prices: {
    discount?: number;
    old?: number;
    current?: number;
}
details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
}
media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[]
}
}

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
