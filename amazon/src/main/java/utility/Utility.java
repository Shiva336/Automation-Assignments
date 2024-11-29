package utility;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import base.BasePage;

public class Utility {

  public static WebDriver driver;

  public static void setUtilityDriver() {
    driver = BasePage.driver;
  }

  public static void switchToWindow(String handle) {
    driver.switchTo().window(handle);
  } 

  public static void sleep() {
      try {
        Thread.sleep(2000);
    } catch (Exception e) {
    }
  }

  public static void scrollToElement(By locator) {
    WebElement element = driver.findElement(locator);
    String jsScript = "arguments[0].scrollIntoView();";
    ((JavascriptExecutor)driver).executeScript(jsScript, element);
  }
}