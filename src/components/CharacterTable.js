import React from 'react'
import CharacterItem from './CharacterItem'
import MultiActionAreaCard from './cardCharacter'

const CharacterTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <MultiActionAreaCard key={item.id} item={item}></MultiActionAreaCard>
            ))
        }
    </section>
}

export default CharacterTable