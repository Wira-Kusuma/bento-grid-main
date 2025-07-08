const card = [];
for (let i = 1; i <= 8; i++) {
    card[i] = document.querySelector(`.card-${i}`);
    const a = i+1;
    card[i].style.animation=`spawn 0.${a}s ease-in-out`;
}