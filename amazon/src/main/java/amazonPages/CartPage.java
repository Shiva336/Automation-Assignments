package amazonPages;

import org.openqa.selenium.By;

import static utility.Utility.scrollToElement;
import static utility.Utility.sleep;

public class CartPage extends HomePage{
    private By buyButton = By.xpath("//input[@name='proceedToRetailCheckout']");
    private By addressButton = By.xpath("//input[following-sibling::span[text()='Use this address']]");
    private By placeOrderButton = By.xpath("//input[following-sibling::span[@id='submitOrderButtonId-announce']]");

    public void confirmAddress() {
        sleep();
        sleep();
        scrollToElement(addressButton);
        click(addressButton);
    }

    public void clickBuyButton() {
        sleep();
        scrollToElement(buyButton);
        click(buyButton);
    }
}
