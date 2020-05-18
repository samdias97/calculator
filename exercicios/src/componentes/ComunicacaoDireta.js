import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhosComProps(props) { // Percorre todos os elementos e corverte em novos clones com as propriedades do pai.
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} // Renderiza o filho do pai (somente 1)*/}
        {filhosComProps(props)}
    </View>

export const Avo = props => // {...props} Operador spread passa todas as propriedades da função Avo para seus filhos.
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Davi' />
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca' />
            <Filho nome='Renato' />
        </Pai>
    </View>

export default Avo