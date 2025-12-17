const PROMOS = {
    PROMO10: 0.10,
    PROMO25: 0.25,
    SANTA50: 0.50
};

const cart = {
    items: {},
    discount: 0,

    add(id, price) {
        if (!id || price <= 0) return;
        if (this.items[id]) return;
        this.items[id] = price;
    },

    remove(id) {
        delete this.items[id];
    },

    applyDiscount(code) {
        if (PROMOS[code]) {
            this.discount = PROMOS[code];
        }
    },

    total() {
        let sum = 0;
        for (let id in this.items) {
            sum += this.items[id];
        }
        return sum * (1 - this.discount);
    },

    clear() {
        this.items = {};
        this.discount = 0;
    },

    list() {
        return this.items;
    }
};

function updateUI() {
    document.getElementById("total").textContent = cart.total().toFixed(2);
    document.getElementById("list").textContent =
        JSON.stringify(cart.list(), null, 2);
}

function addGift() {
    const id = document.getElementById("giftId").value.trim();
    const price = Number(document.getElementById("giftPrice").value);
    cart.add(id, price);
    updateUI();
}

function removeGift() {
    const id = document.getElementById("removeId").value.trim();
    cart.remove(id);
    updateUI();
}

function applyPromo() {
    const code = document.getElementById("promoCode").value.trim();
    cart.applyDiscount(code);
    updateUI();
}

function clearCart() {
    cart.clear();
    updateUI();
}
