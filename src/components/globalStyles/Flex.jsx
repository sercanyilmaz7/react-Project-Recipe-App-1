import styled from 'styled-components';

const Flex = styled.div`
 display: flex;
 justify-content: ${({justify})=> justify ? justify : "center"};
 align-items: ${({align})=> align ? align : "center"};
 flex-wrap: ${({wrap})=> wrap && "wrap"};
`;

export default Flex;


//? Kullanım şekli yazımlar doğru

// //?{/* <Flex wrap="wrap"/> */}

// //?{/* <Flex justify="space-between"/> */}

// //?{/* <Flex align="start"/> */}

//? Flex componenetini jsx te kullanırken kullanırken sen props gonderıyorsun ve gonderdıgın propsa a özzellik değişiyor.


// //? Flex diye bır componene oluşturduk ve ıstedgımız yerde kullanaxagız.
// //? dikey yatay ortalamdı ve flex-wrap ledı