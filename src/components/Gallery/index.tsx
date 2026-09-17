/* eslint-disable prettier/prettier */
import Fechar from '../../assets/images/close 1.png'
import Play from '../../assets/images/play.png'
import Zoom from '../../assets/images/zoom.png'
import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styled'
import React, { useState } from 'react'
import { GalleryItem } from '../../Pages/Home'

type Props = {
    defaultCover: string
    name: string
    items: GalleryItem[]
}

interface ModalState extends GalleryItem {
    isVisible: boolean
}

const Gallery = ({ defaultCover, name, items} : Props) => {

    const [modalState, setModalState] = useState<ModalState>({
        type: 'image',
        url: '',
        isVisible: false
    })

const getMediaCover = (item:GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover 
}

const getMediaIcon = (item:GalleryItem) => {
    if (item.type === 'image') return Zoom

    return Play 
}

const CloseModal = () => {
    setModalState({...modalState, isVisible: false})
}

    return (
        <>
  <Section title="Galeria" background="black">
    <Items>
        {items.map((media,index ) => (
      <Item key={media.url} onClick={() => {
        setModalState({
            type: media.type,
            url: media.url,
            isVisible: true
        })
      }}
      >
        <img src={getMediaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
        <Action>
            <img src={getMediaIcon(media)} alt='Clique para maximar a mídia' /> 
        </Action>
      </Item>
        ))}
      </Items>
  </Section>
<Modal className={modalState.isVisible ? 'visivel' : ''}>
      <ModalContent className='container'>
<header>
    <h4>{name}</h4>
    <img src={Fechar}  alt='Icone de fechar' onClick={() => CloseModal()} />
</header>
{modalState.type === 'video' ? (
    <iframe frameBorder="0" src={modalState.url} />
  ) : (
    <img src={modalState.url} />
  )}
  </ModalContent>
  <div
  onClick={() => CloseModal()}
  className="overlay"></div>
</Modal>
    </>
  )
}

export default Gallery
