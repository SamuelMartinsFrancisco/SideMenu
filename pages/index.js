import React from 'react';
import { Box } from '@skynexui/components';
import Menu from '../src/components/menu';
// import { FaCarrot, FaPepperHot } from 'react-icons/fa';

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                    ${Tag} {
                        font-size: 40px;
                        text-align: center;
                        color: ${props.color || '#000'}; 
                        font-weight: 700;
                    }
            `}</style>
        </>
    );
}

function Text(props) {
    return (
        <>
            <div> {props.children} </div>
            <style jsx>{`
                div {
                    font-size: 20px;
                    max-width: 80%;
                    color: ${props.color || '#000'};
                }
            `}</style>
        </>
    );
}

export default function Home() {
    return (
        <Box
            styleSheet={{
                width: '100vw', height: '100vh'
            }}
        >
            <Menu />
            <Box
                styleSheet={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: '100px', zIndex: '10',
                }}
            >
                <Title> Minha Horta </Title>
                <br/>
                <Text> Quando se começa a cultivar diferentes tipos de frutíferas, hortaliças, e verduras, são obtidos benefícios como o da ausência de agrotóxicos, e o do dinheiro poupado. Quanto a esse último, talvez não se tenha uma ideia clara de quanto, e é isso o que esse projeto propõe resolver. </Text>
                
            </Box>
        </Box>
    );
}