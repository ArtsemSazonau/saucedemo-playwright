export class MainPage {
    constructor(page) {
        this.page = page;
        this.loginLogo = page.getByText("Swag Labs");
        this.loginInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.sectionCredentials = page.locator('[data-test="login-credentials"]');
        this.sectionPassword = page.locator('[data-test="login-password"]');
    };

    async visit () {
        await this.page.goto("/");
    };

    async loginAsUser (username, password) {
        await this.loginInput.waitFor();
        await this.loginInput.fill(username);
        await this.passwordInput.waitFor();
        await this.passwordInput.fill(password);
        await this.loginButton.waitFor();
        await this.loginButton.click();
    }

}