package amazonPages;

import org.openqa.selenium.By;

import static utility.Utility.scrollToElement;
import static utility.Utility.sleep;

public class SearchResultPage extends HomePage{
    private By RedmiCheckBox = By.xpath("//span[text()='Redmi']//preceding::i[@class='a-icon a-icon-checkbox'][1]");
    private By samsungCheckBox = By.xpath("//span[text()='Samsung']//preceding::i[@class='a-icon a-icon-checkbox'][1]");
    private By PocoCheckBox = By.xpath("//span[text()='POCO']//preceding::i[@class='a-icon a-icon-checkbox'][1]");
    private By seeMoreButton = By.xpath("//span[text()='See more']//preceding::a[@aria-label='See more, Brands']");

    private By requiredProduct = By.xpath("//span[text()='Redmi 12 5G Jade Black 8GB RAM 256GB ROM']/../../../..//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']");
    private By searchBar = By.id("twotabsearchtextbox");

    public String getSearchBarText() {
        return find(searchBar).getAttribute("value");
    }

    public ProductPage clickRequiredProduct() {
        sleep();
        scrollToElement(requiredProduct);
        click(requiredProduct);
        return new ProductPage();
    }

    public void clickRedmiCheckBox() {
        clickSeeMore();
        scrollToElement(RedmiCheckBox);
        if(!find(RedmiCheckBox).isSelected()) {
            click(RedmiCheckBox);
        }
    }

    public void clickSamsungCheckBox() {
        clickSeeMore();
        scrollToElement(samsungCheckBox);
        if(!find(samsungCheckBox).isSelected()) {
            click(samsungCheckBox);
        }
    }

    public void clickPocoCheckBox() {
        clickSeeMore();
        scrollToElement(PocoCheckBox);
        if(!find(PocoCheckBox).isSelected()) {
            click(PocoCheckBox);
        }
    }

    public void clickSeeMore() {
        scrollToElement(seeMoreButton);
        click(seeMoreButton);
    }
}
