using PharmacyAPI;

using PharmacyAPI.Models;

namespace TestProject1
{
    [TestFixture]
    public class ProductDetailsTest
    {
       
       
            [Test]
            public void ProductId_Should_SetAndGetValue()
            {
                // Arrange
                var product = new ProductDetails();
                int expectedId = 123;

                // Act
                product.ProductId = expectedId;
                int actualId = product.ProductId;

                // Assert
                Assert.AreEqual(expectedId, actualId);
            }

            [Test]
            public void ProductUrl_Should_SetAndGetValue()
            {
                // Arrange
                var product = new ProductDetails();
                string expectedUrl = "https://example.com/product";

                // Act
                product.ProductUrl = expectedUrl;
                string actualUrl = product.ProductUrl;

                // Assert
                Assert.AreEqual(expectedUrl, actualUrl);
            }

            [Test]
            public void ProductName_Should_SetAndGetValue()
            {
                // Arrange
                var product = new ProductDetails();
                string expectedName = "Sample Product";

                // Act
                product.ProductName = expectedName;
                string actualName = product.ProductName;

                // Assert
                Assert.AreEqual(expectedName, actualName);
            }
            [Test]
            public void ProductDescription_Should_SetAndGetValue()
            {
                // Arrange
                var product = new ProductDetails();
                string expectedDescription = "This is a sample product description.";

                // Act
                product.ProductDescription = expectedDescription;
                string actualDescription = product.ProductDescription;

                // Assert
                Assert.AreEqual(expectedDescription, actualDescription);
            }

            [Test]
            public void ProductInStock_Should_SetAndGetValue()
            {
                // Arrange
                var product = new ProductDetails();
                int expectedInStock = 100;

                // Act
                product.ProductInStock = expectedInStock;
                int actualInStock = product.ProductInStock;

                // Assert
                Assert.AreEqual(expectedInStock, actualInStock);
            }

            [Test]
            public void ProductPrice_Should_SetAndGetValue()
            {
                // Arrange
                var product = new ProductDetails();
                int expectedPrice = 50;

                // Act
                product.ProductPrice = expectedPrice;
                int actualPrice = product.ProductPrice;

                // Assert
                Assert.AreEqual(expectedPrice, actualPrice);
            }
        }

    }

