import React from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions'
import styled from 'styled-components';
import logoML from '../Assets/Logo_ML.png';
import { YELLOW } from '../constants/colors';

const SearchBoxContainer = styled.form`
	text-align: center;
	background-color: ${YELLOW};
`;

const LogoML = styled.img`
	width: 48px;
	vertical-align: middle;
	margin-right: 16px;
`

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { search: null };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ search: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.searchItems({ query: this.state.search });
	}

	render() {
		return (
			<SearchBoxContainer
				className="ch-form ch-form-big"
				onSubmit={this.handleSubmit}
			>
				<fieldset>
					<div className="ch-form-row">
						<LogoML
							src={logoML}
						/>
						<input
							style={{ width: '45em' }}
							className="ch-form-icon-input"
							name="search"
							type="text"
							placeholder='Nunca dejes de buscar'
							onChange={this.handleChange}
							value={this.state.value}
						/>
						<span
							className="ch-form-icon-inner ch-icon-search"
						></span>
					</div>
				</fieldset>
			</SearchBoxContainer>
		);
	}

};

const mapDispatchToProps = {
	searchItems
};

SearchBox = connect(
	null,
	mapDispatchToProps,
)(SearchBox);

export default SearchBox;
