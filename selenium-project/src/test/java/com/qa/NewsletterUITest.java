package com.qa;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class NewsletterUITest {
    private WebDriver driver;

    @BeforeAll
    static void setupClass() {
        WebDriverManager.chromedriver().setup();
    }

    @BeforeEach
    void setup() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
    }

    @Test
    void testNewsletterPageLoads() throws InterruptedException {
        String filePath = "file:///" + System.getProperty("user.dir").replace("\\", "/") + "/../index.html";
        driver.get(filePath);
        Assertions.assertEquals("Document", driver.getTitle());
        Thread.sleep(3000);
    }

    @AfterEach
    void teardown() {
        // Comment out driver.quit() to keep browser open
        // if (driver != null) {
        //     driver.quit();
        // }
    }
}
