class Loginpage {
    get username() {return $("//input[@name='userName']")}

    get password() {return $("//input[@name='password']")}

    get submitButton() {return $("//input[@name='login']")}

    async openBrowser() {
        browser.url("http://newtours.demoaut.com");
        
    }

    async login() {
        this.username.waitForExist();
        this.username.setvalue("mercury");
        this.password.setvalue("mercury");
        this.submitButton.click();
       
    }
}

export default new Loginpage();