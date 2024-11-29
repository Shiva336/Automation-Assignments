package amazonPages;

import org.openqa.selenium.By;

public class SearchPage extends HomePage{
    private By searchBar = By.id("twotabsearchtextbox");
    private By searchButton = By.id("nav-search-submit-button");
    private By logoText = By.xpath("//a/span[text()='.in']");

    public String getLogoText() {
        return find(logoText).getText();
    }

    public void setSearchBar(String text) {
        set(searchBar, text);
    }

    public SearchResultPage clickSearch() {
        click(searchButton);
        return new SearchResultPage();
    }
}
