
using PharmacyAPI;
using PharmacyAPI.Models;

namespace TestProject1
{
    [TestFixture]
    public class Tests
    {
        [Test]
        public void Id_Should_SetAndGetValue()
        {

            var user = new User();
            int expectedId = 1;


            user.Id = expectedId;
            int actualId = user.Id;


            Assert.AreEqual(expectedId, actualId);
        }
        [Test]
        public void FirstName_Should_SetAndGetValue()
        {

            var user = new User();
            string expectedFirstName = "John";


            user.FirstName = expectedFirstName;
            string actualFirstName = user.FirstName;


            Assert.AreEqual(expectedFirstName, actualFirstName);
        }

        [Test]
        public void LastName_Should_SetAndGetValue()
        {

            var user = new User();
            string expectedLastName = "Doe";


            user.LastName = expectedLastName;
            string actualLastName = user.LastName;


            Assert.AreEqual(expectedLastName, actualLastName);
        }

        [Test]
        public void Password_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            string expectedPassword = "secret_password";

            // Act
            user.Password = expectedPassword;
            string actualPassword = user.Password;

            // Assert
            Assert.AreEqual(expectedPassword, actualPassword);
        }
        [Test]
        public void Token_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            string expectedToken = "auth_token";

            // Act
            user.Token = expectedToken;
            string actualToken = user.Token;

            // Assert
            Assert.AreEqual(expectedToken, actualToken);
        }
        [Test]
        public void Role_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            string expectedRole = "admin";

            // Act
            user.Role = expectedRole;
            string actualRole = user.Role;

            // Assert
            Assert.AreEqual(expectedRole, actualRole);
        }
        [Test]
        public void Email_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            string expectedEmail = "john@example.com";

            // Act
            user.Email = expectedEmail;
            string actualEmail = user.Email;

            // Assert
            Assert.AreEqual(expectedEmail, actualEmail);
        }

        [Test]
        public void RefreshToken_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            string expectedRefreshToken = "refresh_token";

            // Act
            user.RefreshToken = expectedRefreshToken;
            string actualRefreshToken = user.RefreshToken;

            // Assert
            Assert.AreEqual(expectedRefreshToken, actualRefreshToken);
        }

        [Test]
        public void RefreshTokenExpiryTime_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            DateTime expectedExpiryTime = DateTime.UtcNow.AddHours(2);

            // Act
            user.RefreshTokenExpiryTime = expectedExpiryTime;
            DateTime actualExpiryTime = user.RefreshTokenExpiryTime;

            // Assert
            Assert.AreEqual(expectedExpiryTime, actualExpiryTime);
        }


        // Similar test methods for UserName, Password, Token, Role, Email, RefreshToken, RefreshTokenExpiryTime, ResetPasswordToken, and ResetPasswordExpiry.

        [Test]
        public void ResetPasswordToken_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            string expectedResetPasswordToken = "reset_token";

            // Act
            user.ResetPasswordToken = expectedResetPasswordToken;
            string actualResetPasswordToken = user.ResetPasswordToken;

            // Assert
            Assert.AreEqual(expectedResetPasswordToken, actualResetPasswordToken);
        }

        [Test]
        public void ResetPasswordExpiry_Should_SetAndGetValue()
        {
            // Arrange
            var user = new User();
            DateTime expectedResetPasswordExpiry = DateTime.UtcNow.AddHours(1);

            // Act
            user.ResetPasswordExpiry = expectedResetPasswordExpiry;
            DateTime actualResetPasswordExpiry = user.ResetPasswordExpiry;

            // Assert
            Assert.AreEqual(expectedResetPasswordExpiry, actualResetPasswordExpiry);
        }
    }
}