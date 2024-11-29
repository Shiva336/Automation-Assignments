package amazonPages;

import org.openqa.selenium.By;

import base.BasePage;

public class HomePage extends BasePage {
    private By signinButton = By.xpath("//span[@id='nav-link-accountList-nav-line-1']//ancestor::a");

    public SignInPage clicksigninButton() {
        click(signinButton);
        return new SignInPage();
    }
}
