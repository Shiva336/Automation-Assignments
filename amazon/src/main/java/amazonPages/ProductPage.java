package amazonPages;

import org.openqa.selenium.By;

import static utility.Utility.scrollToElement;
import static utility.Utility.sleep;

public class ProductPage extends HomePage{
    private By addToCartButton = By.xpath("//input[@id='add-to-cart-button' and @type='submit']");
    private By closeButton = By.id("attach-close_sideSheet-link");
    // private By checkoutButton = By.xpath("//input[following-sibling::span[@id='attach-sidesheet-checkout-button-announce']]");
    private By cartButton = By.xpath("//a[@href='/gp/cart/view.html?ref_=nav_cart']");

    public CartPage clickCartButton() {
        sleep();
        scrollToElement(cartButton);
        click(cartButton);
        return new CartPage();
    }

    public void clickCloseButton() {
        sleep();
        sleep();
        scrollToElement(closeButton);
        click(closeButton);
    }
    public void clickAddToCart() {
        scrollToElement(addToCartButton);
        click(addToCartButton);
    }
}
