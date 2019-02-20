import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const propTypes = {
//     picture: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.object,
//     freeShipping: PropTypes.bool
// };

// const defaultProps = {
//     picture: '',
//     title: '',
//     price: {
//         currency: 'ARG',
//         amount: 0,
//         decimals: 0
//     },
//     freeShipping: false
// };
const ItemContainer = styled.div`
`;

const Image = styled.img`
`;

const ItemContent = styled.div`
`;

const ItemPrice = styled.span`
`;

const ItemTitle = styled.h2`
`;

const Item = (props) => {
	const { picture, title, price, freeShipping, ...otherProps } = props;
    
    return (
        <ItemContainer {...otherProps}>
            <Image
                src={picture}
            />
            <ItemContent>
                <ItemPrice>{`${price.currency} ${price.amout}`}</ItemPrice>
                <ItemTitle>{title}</ItemTitle>
            </ItemContent>
        </ItemContainer>
    );
};

// Item.propTypes = propTypes;
// Item.defaultProps = defaultProps;

export default Item;