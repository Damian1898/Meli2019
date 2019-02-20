import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { LIGTH_GREY, WHITE } from '../constants/colors';
import { searchItem } from '../actions'
const ItemsContainer = styled.div`
    background-color: ${LIGTH_GREY}
`;

const ItemContainer = styled.div`
    cursor: pointer;
    margin: 0 auto 1px;
    width: 54em;
    display: flex;
    background-color: ${WHITE}
`;

const Image = styled.img`
    padding: 16px;
    width: 148px;
    height: 148px;
`;

const ItemContent = styled.div`
    padding: 32px 16px 0px 0px;
    margin-bottom: 16px;
`;

const ItemPrice = styled.span`
    font-size: 24px;
`;

const ItemTitle = styled.h2`
    font-size: 18px;
`;

const MAP_CURRENCIES = {
    ARS: '$'
}

const Item = (props) => {
    const { picture, title, price, free_shipping, id, searchItem } = props;

    return (
        <ItemContainer
            onClick={() => searchItem({ id })}
        >
            <Image
                src={picture}
            />
            <ItemContent>
                <ItemPrice>{`${MAP_CURRENCIES[price.currency]} ${price.amount}`}</ItemPrice>
                <ItemTitle>{title}</ItemTitle>
            </ItemContent>
        </ItemContainer>
    );
};
class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.data };
    }

    componentWillReceiveProps() {
        this.setState({ data: this.props.data })
    }
    render() {
        const { data } = this.props;
        return (
            <ItemsContainer>
                {
                    data.items.length > 0 &&
                    data.items.map((item) => (
                        <Item
                            {...item}
                            searchItem={this.props.searchItem}
                        />
                    ))
                }
            </ItemsContainer>
        );
    }

};

const mapStateToProps = (state) => ({
    data: state.data,
})


const mapDispatchToProps = {
	searchItem
};

SearchList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)

export default SearchList;


