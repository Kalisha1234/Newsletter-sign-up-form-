package com.qa;

import com.qa.pages.NewsletterPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class NewsletterPOMTest {
    private WebDriver driver;
    private NewsletterPage newsletterPage;
    private String baseUrl;

    @BeforeAll
    static void setupClass() {
        WebDriverManager.chromedriver().setup();
    }

    @BeforeEach
    void setup() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
        baseUrl = "file:///" + System.getProperty("user.dir").replace("\\", "/") + "/../index.html";
        driver.get(baseUrl);
        newsletterPage = new NewsletterPage(driver);
    }

    @Test
    @DisplayName("Verify newsletter page loads with correct heading")
    void testPageLoadsWithHeading() {
        Assertions.assertEquals("Stay updated!", newsletterPage.getHeading());
    }

    @Test
    @DisplayName("Verify email input accepts valid email")
    void testValidEmailInput() {
        newsletterPage.enterEmail("test@example.com");
        newsletterPage.clickSubscribe();
    }

    @Test
    @DisplayName("Verify error message for invalid email")
    void testInvalidEmailShowsError() throws InterruptedException {
        newsletterPage.enterEmail("invalid-email");
        newsletterPage.clickSubscribe();
        Thread.sleep(500);
        Assertions.assertTrue(newsletterPage.isErrorMessageDisplayed());
    }

    @AfterEach
    void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
