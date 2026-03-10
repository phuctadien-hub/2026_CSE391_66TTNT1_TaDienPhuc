let storage = []
let currentWeapon = null

function startGame(hero) {

    document.getElementById("menu").style.display = "none"
    document.getElementById("game").style.display = "block"

    let player = document.getElementById("player")

    if (hero == "ironman") player.style.background = "red"
    if (hero == "captain") player.style.background = "blue"
    if (hero == "thor") player.style.background = "gray"

}

document.addEventListener("keydown", function (e) {

    if (e.code === "Space") {
        pickupWeapon()
    }

    if (e.code === "Enter") {
        attack()
    }

    if (e.key === "1") selectWeapon(0)
    if (e.key === "2") selectWeapon(1)
    if (e.key === "3") selectWeapon(2)

})

function pickupWeapon() {

    let weapons = document.querySelectorAll(".weapon")
    let player = document.getElementById("player")

    weapons.forEach(w => {

        let distance = Math.abs(
            w.offsetLeft - player.offsetLeft
        )

        if (distance < 80 && storage.length < 3) {

            storage.push("weapon")

            updateStorage()

            w.remove()

        }

    })

}

function updateStorage() {

    for (let i = 0; i < 3; i++) {

        let slot = document.getElementById("slot" + (i + 1))

        slot.innerHTML = storage[i] ? "⚔" : (i + 1)

    }

}

function selectWeapon(index) {

    if (storage[index]) {

        currentWeapon = storage[index]

    }

}

function attack() {

    if (!currentWeapon) {
        alert("No weapon!")
        return
    }

    let thanos = document.getElementById("thanos")

    thanos.style.background = "red"

    setTimeout(() => {
        thanos.style.background = "purple"
    }, 200)

}