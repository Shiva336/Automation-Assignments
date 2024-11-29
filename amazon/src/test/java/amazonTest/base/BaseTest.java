package amazonTest.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;

import amazonPages.HomePage;
import base.BasePage;
import static utility.Utility.setUtilityDriver;

public class BaseTest {
    public static WebDriver driver;
    private static String URL = "https://www.amazon.in/";
    protected static BasePage basePage;
    protected static HomePage homePage;
    
    @BeforeClass
    public static void setUp() {
        driver = new EdgeDriver();
        driver.manage().window().maximize();
    }

    @BeforeMethod
    public static void loadApplication() {
        driver.get(URL); 
        basePage = new BasePage();
        basePage.setDriver(driver);
        setUtilityDriver();

        homePage = new HomePage();
    }

    @AfterClass
    public static void tearDown() {
        //driver.quit();
    }

}
