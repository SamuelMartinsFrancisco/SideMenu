import React from 'react';
import { Box } from '@skynexui/components';
import { FaPagelines, FaPlus } from 'react-icons/fa';

export default function Menu(){    
    let menu = ['#A3B4A2', '300px', '100vh', '1', '1px'];
    const [hidden, setHidden] = React.useState(false);
    return (
        <Box
            as='header'
            onClick={(event) => {
                setHidden(hidden === false ? true : false);
                console.log(hidden);
            }}
            styleSheet={{
                position: 'fixed',
                background: hidden === false ? '#fff' : menu[0],
                width: hidden === false ? '0px' : menu[1],
                height: '100vh',
                transition: '0.5s',
                zIndex: '100',
                borderRadius: '0px 0px 15px 0px'
            }}
        >
            <div className='menu'> <div className='bar'></div><div className='bar'></div><div className="bar"></div> </div>
            <ul id="mainList">
                <li><span>Minha horta</span> <div className='menuIcon'><FaPagelines /></div></li>
                <li>Adicionar plantas <div className='menuIcon' id='add'><FaPlus /></div></li>
            </ul>

            <style jsx>{`
                .menu {
                    cursor: pointer; height: 20px; width: 30px; margin: 20px;
                }

                .bar {
                    width: 30px; height: 4px; background: #38686A; border-radius: 1px; margin-bottom: 4px;
                }

                #mainList {
                    position: relative;
                    margin: 15px;
                    margin-top: 70px;
                    display: ${hidden === false ? 'none' : ''};
                }

                li {
                    padding: 10px;
                    background: rgba(255,255,255,0.16);
                    margin-bottom: 10px;
                    border-radius: 10px;
                    width: 250px;
                    font-size: 18px;
                    font-weight: 500;
                    color: rgba(0,0,0,0.65);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .menuIcon {
                    height: 35px;
                    width: 35px;
                    padding: 5px;
                    background: #38686A;
                    border-radius: 50%;
                    margin: auto auto;
                    position: fixed;
                    left: 245px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                    color: #fff;
                }

                #add {
                    font-size: 15px;
                }
            `}</style>
        </Box>
    );
}

/*
li::after {
    content: '';
    height: 20px;
    width: 20px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    margin: auto auto;
}
*/