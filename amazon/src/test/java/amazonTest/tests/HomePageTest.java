package amazonTest.tests;

import java.util.Set;

import org.testng.Assert;
import org.testng.annotations.Test;

import amazonPages.CartPage;
import amazonPages.ProductPage;
import amazonPages.SearchPage;
import amazonPages.SearchResultPage;
import amazonPages.SignInPage;
import amazonTest.base.BaseTest;
import static utility.Utility.switchToWindow;

public class HomePageTest extends BaseTest{
    @Test
    public void testLogin() {
        String email = "shivasundar911@gmail.com";
        String password = "A10B11c123*";
        String searchText = "Phone under 20000";
        SignInPage signInPage = homePage.clicksigninButton();
        signInPage.setEmailField(email);
        signInPage.clickContinue();
        signInPage.setPasswordField(password);

        SearchPage searchPage = signInPage.clickSignInButton();
        String actualLogoText = searchPage.getLogoText();
        String expectedLogoText = ".in";
        Assert.assertEquals(actualLogoText, expectedLogoText);  

        searchPage.setSearchBar(searchText);
        SearchResultPage searchResultPage =  searchPage.clickSearch();

        String actualSearchBarText = searchResultPage.getSearchBarText();
        Assert.assertEquals(actualSearchBarText, searchText);
        
        searchResultPage.clickRedmiCheckBox();
        searchResultPage.clickSamsungCheckBox();
        searchResultPage.clickPocoCheckBox();

        ProductPage productPage = searchResultPage.clickRequiredProduct();

        String currentHandle = driver.getWindowHandle();
        Set<String> allHandles = driver.getWindowHandles();
        String newHandle="";

        for(String handle: allHandles) {
            if(!currentHandle.equals(handle)) {
                newHandle = handle;
                switchToWindow(handle);
            } 
        }
        Assert.assertEquals(newHandle, driver.getWindowHandle());

        productPage.clickAddToCart();
        productPage.clickCloseButton();
        CartPage cartPage = productPage.clickCartButton();

        cartPage.clickBuyButton();
    }
}   
