export const setSort = filterBy => ({
    type: 'SET_SORT',
    payload: filterBy,
});

export const setSearchQuery = value => ({
    type: 'SET_QUERY',
    payload: value,
});