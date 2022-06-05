function logar(a, add, where) {
    let antes = [];
    let depois = [];
    for (let i = 0; i <= where - 1; i++) {
        antes[i] = a[i];
    }
    let e = a.length - (antes.length + 1);
    for (let i = a.length - 1; i >= where; i--) {
        depois[e] = a[i];
        e--;
    }
    let array = [...antes, add, ...depois];
    return array;
}