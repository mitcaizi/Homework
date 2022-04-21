package Test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class TestElement {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver","/Users/james/Downloads/chromedriver");
        WebDriver driver = new ChromeDriver();

        driver.navigate().to("file:///Users/james/Desktop/Homework/index.html");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

        if(driver.findElement(By.tagName("profile-card")).isDisplayed()) {
            System.out.println("Element found");
        }else {
            System.out.println("Element not found");
        }
    }
}
