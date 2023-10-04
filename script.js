let playerHealth = 100;
let enemyHealth = 100;

function attack() {
    const playerDamage = Math.floor(Math.random() * 10);
    const enemyDamage = Math.floor(Math.random() * 10);

    playerHealth -= enemyDamage;
    enemyHealth -= playerDamage;

    document.getElementById("player").innerText = `😀 ${playerHealth}`;
    document.getElementById("enemy").innerText = `😈 ${enemyHealth}`;

    if (playerHealth <= 0) {
        alert("Você perdeu! O inimigo venceu.");
        resetGame();
    } else if (enemyHealth <= 0) {
        alert("Você venceu! Derrotou o inimigo.");
        resetGame();
    }
}

function resetGame() {
    playerHealth = 100;
    enemyHealth = 100;
    document.getElementById("player").innerText = `😀 ${playerHealth}`;
    document.getElementById("enemy").innerText = `😈 ${enemyHealth}`;
}