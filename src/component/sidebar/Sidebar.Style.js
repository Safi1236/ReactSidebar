import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
        width: ${p => p.sidebarOpen ? '20%' : '5%'};
        max-width: 280px;
        min-width: 80px;
        background: yellow;
        position: relative;//Toggler
        transition: all .5s ease-in;
        background-image: linear-gradient(
                            0deg,
                            green 10%,
                            pink 90%
        )
        `
export const SidebarHeader = styled.h3`
            padding: 20px;
            text-align: center;
            margin-bottom: 10px;
            letter-space: 8px;
            font-family: ${p => p.fonts};
            color: #fff;
   `
export const MenuItemContainer = styled.div``;

export const MenuItem = styled.div`
             ${p => !p.sidebarOpen && `text-align: center;`}
            ${'' /* text-align: center; */}
            padding: 6px 20px;
            color: ${p => p.selected ? 'rgb(255, 255, 255)' : 'rgb(19, 15, 64)'};
            font-family: ${p => p.fonts};
            transition: all 1s ease-in;
            
        &:hover{
                color: rgb(255, 255, 255);
        }

        &:after{
                content: '';
                border:  1px solid ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(225, 112, 85)'};
                display: block;
                margin: 8px 0 4px;
        }

        ${p => !p.selected && `
                &:hover{
                        &:after{
                                border: 1px solid rgba(255, 255, 255, .2)
                        }
                }
                `}
`;

export const Dis = styled.div`
                display: flex;
`

export const Text = styled.p`
                display: ${p => p.sidebarOpen ? 'inline' : 'none'};
`;

export const Icon = styled.div`
                ${p => p.sidebarOpen && 'padding-right: 20px'}
`

export const TogglerContainer = styled.div`
                position: absolute;
                width: 30%;
                bottom: 10%;
                left: 0;
                right: 0;
                margin: 0 auto;
`

export const Toggler = styled.div`
                height: 40px;
                cursor: pointer;
                border: 1px solid #000;
                position: relative;

        &:after{
                content: '';
                position: absolute;
                left: 0;
                top: .25em;
                width: 100%;
                height: .1em;
                background: #fff;
                box-shadow: 0 .75em 0 0 #fff, 
                            0 1.5em 0 0 #fff;
        }
`