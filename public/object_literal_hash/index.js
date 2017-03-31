const actions = {
    'editNews': (event) => {
        const id = heyTarget(event).getAttribute('data-id');
        alert(`editNews ${id}`);
    },
    'removeNews': (event) => {
        const id = heyTarget(event).getAttribute('data-id');
        alert(`removeNews ${id}`);
    },
}

heyId('papa').addEventListener('click', (event) => {
    // no if conditions!!! no else conditions!!!
    const actionKey = heyTarget(event).getAttribute('data-action');
    const action = actions[actionKey];
    action(event);
});