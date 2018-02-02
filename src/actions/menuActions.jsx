export function collapseMenu() {
    return (dispatch, getState) => {
        const { menu } = getState()
        dispatch(
            { type: 'COLLAPSE_MENU', payload: !menu.collapsed }
        )
    }
}