package amazonPages;

import org.openqa.selenium.By;

public class SignInPage extends HomePage{
    private By emailField = By.xpath("//input[@type='email']");
    private By continueButton = By.xpath("//input[@type='submit']");
    private By passwordField = By.xpath("//input[@type='password']");
    private By signInButton = By.id("signInSubmit");

    public SearchPage clickSignInButton() {
        click(signInButton);
        return new SearchPage();
    }

    public void setPasswordField(String password) {
        set(passwordField,password);
    }

    public void setEmailField(String email) {
        set(emailField, email);
    }

    public void clickContinue(){
        click(continueButton);
    }
}
