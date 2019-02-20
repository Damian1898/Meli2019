import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { LIGTH_GREY, WHITE } from '../constants/colors';
const MAP_CURRENCIES = {
    ARS: '$'
}

const ItemContainer = styled.div`
    margin: 0 auto;
    width: 1000px;
    background-color: ${WHITE}
`;

const ItemImage = styled.img`
    display: inline-block;
    width: 680px;
`;

const ItemFirstDescription = styled.div`
    padding-top: 32px;
    width: 320px;
    display: inline-block;
    vertical-align: top;
`;

const ItemDescription = styled.div`
    padding: 32px;
    display: block;
`;

const ItemPrice = styled.div`
    font-size: 46px;
    padding: 32px 0;
`;

const ItemTitle = styled.h2`
    font-size: 24px;
`;


class ItemSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: this.props.item };
    }

    componentWillReceiveProps() {
        this.setState({ item: this.props.item })
    }
    render() {
        const { data } = this.props;
        return (
            data.item && <ItemContainer>
                <ItemImage
                    src={data.item.picture}
                />
                <ItemFirstDescription>
                    <ItemTitle>{data.item.title}</ItemTitle>
                    <ItemPrice>{`${MAP_CURRENCIES[data.item.price.currency]} ${data.item.price.amount}`}</ItemPrice>
                </ItemFirstDescription>

                <ItemDescription>
                    <strong style={{fontSize: '24px'}}>Descripción del producto</strong><br/>
                    <div style={{ height: '32px' }} />
                    {data.item.description}
                </ItemDescription>
            </ItemContainer>
        );
    }

};

const mapStateToProps = (state) => ({
    data: state.itemSelected,
})

ItemSelect = connect(
    mapStateToProps,
    null
)(ItemSelect)

export default ItemSelect;


