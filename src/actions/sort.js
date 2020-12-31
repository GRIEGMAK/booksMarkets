export const setSort = sortR => ({
    type: 'SET_SORT',
    payload: sortR,
});

export const setSearchQuery = value => ({
    type: 'SET_QUERY',
    payload: value,
});