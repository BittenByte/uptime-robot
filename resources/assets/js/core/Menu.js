class Menu {
    /**
     * Create a new Menu instance.
     * 
     * @param {object} data
     */
    constructor() {
        this.isVisible = false;
        this.init();
    }

    /**
     * Attaches glogal events.
     */
    init() {
        window.addEventListener('keyup', e => {
            if (e.keyCode == 27) {
                this.close();
            }
        });     
    }

    /**
     * Open menu mobile (based on shared state)
     */
    open() {
        this.isVisible = true;
    }

    /**
     * Close menu mobile (based on shared state)
     */
    close() {
        this.isVisible = false;
    }
}

export default Menu;