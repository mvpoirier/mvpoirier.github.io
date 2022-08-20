---
published: false
title: Simple Crypto in Java for DP CS
layout: post
---

The **Ja**va **S**implified Encr**ypt**ion Library (Jasypt) has shown to be a useful way for students and amateur programmers to implement industry-standard encryption easily into their programs. There is an excellent article on their website which [outlines how encryptions algorithms work](http://www.jasypt.org/howtoencryptuserpasswords.html), which I would highly reccommend for teachers and students alike to read through before implementining their package.

**Java Simplified Encryption Library (jasypt-1.9.3)**
- [Jasypt: Offical Website](http://www.jasypt.org/)
- [Jasypt: Github Repository](https://github.com/jasypt/jasypt)
- [Jasypt: How to for Easy Usage](http://www.jasypt.org/easy-usage.html)

**Resources**
- [StackOverflow: Importing Libraries in Eclipse IDE](https://stackoverflow.com/questions/4962559/import-libraries-in-eclipse)
- [StackOverflow: Simple Encryption in Java Discussion](https://stackoverflow.com/questions/29226813/simple-encryption-in-java-no-key-password)


**A Quick Example: The Beginnings of a Login Screen...**  
In this quick example ([Source Code](https://github.com/mvpoirier/Java/tree/master/LoginCrypto)), I show how to encrypt and decrypt a the message title bar for two GUI windows (JFrames). This is can be viewed as the beginning towards developing your own login screen which requires encrypted passwords. A great next step would be to use `FileReader`, `BufferedReader`, `FileWriter`, and `PrintWriter` from the `java.io.*` built-in package to quickly and securily input, encrypt, save, and, load, and decrypt usernames and passwords for your programs.

A few key features and code snippets from the example:

```java
// Import the third party Jasypt utility package (Basic Text Encryption)
// The jasypt package needs to be downloaded/imported into your project,
// within your IDE (e.g. Eclipse)
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
