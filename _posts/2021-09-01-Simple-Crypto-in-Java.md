---
published: true
title: Simple Crypto in Java for DP CS
layout: post
---

**Java Simplified Encryption Library (jasypt-1.9.3)**
- http://www.jasypt.org/
- https://github.com/jasypt/jasypt

**Resources**
- https://stackoverflow.com/questions/4962559/import-libraries-in-eclipse
- https://stackoverflow.com/questions/29226813/simple-encryption-in-java-no-key-password
- http://www.jasypt.org/easy-usage.html

**Quick Example (Github):**
- Source Code: https://github.com/mvpoirier/Java/tree/master/LoginCrypto

```java
// Import the third party Jasypt utility package (Basic Text Encryption)
import org.jasypt.util.text.BasicTextEncryptor;
```

```java
// Create a Jasypt 'basic text encryptor' object 
private BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
```

```java
// Encrypt the title bar for startup GUI window 'LoginStart.java' (JFrame)
String myEncryptionPassword = "eggs";
textEncryptor.setPassword(myEncryptionPassword);

String myEncryptedText = textEncryptor.encrypt("Login Start");
String plainText = textEncryptor.decrypt(myEncryptedText);

setTitle(myEncryptedText + " " + plainText);
```

```java
// Encrypt the title bar for parent GUI window manager 'LoginManager.java' (JFrame)
String myEncryptedText2 = textEncryptor.encrypt("Login Closed!");
String plainText2 = textEncryptor.decrypt(myEncryptedText2);

manager.setTitle(myEncryptedText2 + " " + plainText2);
```

Mike