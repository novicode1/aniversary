import FIELD_FILTER from './field-filter';

const FIELD_TYPE = Object.freeze({
	TEXT: {
		NAME: 'text',
		FILTERS: [FIELD_FILTER.IS, FIELD_FILTER.STARTS_WITH]
	},
	TEL: {
		NAME: 'tel',
		FILTERS: [FIELD_FILTER.IS, FIELD_FILTER.STARTS_WITH]
	},
	EMAIL: {
		NAME: 'email',
		FILTERS: [FIELD_FILTER.IS, FIELD_FILTER.STARTS_WITH]
	},
	SELECT: {
		NAME: 'select',
		FILTERS: [FIELD_FILTER.IS]
	},
	NUMBER: {
		NAME: 'number',
		FILTERS: [FIELD_FILTER.GREATER_THAN]
	},
	DATETIME: {
		NAME: 'datetime',
		FILTERS: [FIELD_FILTER.IS_BEFORE, FIELD_FILTER.IS_AFTER]
	}
});

export default FIELD_TYPE;