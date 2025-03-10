---
id: browser-authentication
title: Browser Authentication
description: How browser authentication works
---

![openssl](/img/tls/openssl.png)


This lab to show you how authority of web browser works.

## Generate server certificate

We will create the CA and server certificate which key type is rsa:4096. The detailed [source code](https://github.com/vulnsystem/OpensslCertificateVerify/browser-authentication) have been push to github. Please star it when helpful. The CA and server certificates will generate after you run the **gen.sh**.

```
# 1. Generate server CA's private key and self-signed certificate
openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca.key -out ca.cert -subj "/CN=localhost/emailAddress=ca@gmail.com"

echo "CA's self-signed certificate"
openssl x509 -in ca.cert -noout -text

# 2. Generate web server's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout server.key -out server.req -subj "/CN=localhost/emailAddress=server@gmail.com"

# 3. Use CA's private key to sign web server's CSR and get back the signed certificate
openssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext

echo "Server's signed certificate"
openssl x509 -in server.cert -noout -text

# 4. To verify the server certificate aginst by root CA
echo "server's certificate verification"
openssl verify -show_chain -CAfile ca.cert server.cert

```
## Create a webpage
In the github repository, there is a index.html file in the same directory as gen.sh. The webpage will be loaded when browser send a request from server.

## Start openssl server
To make a simple server, we can use openssl s_server command which implements a generic SSL/TLS server which listens for connections on a given port using SSL/TLS. Please issue the following command to start a TLS server.

```
openssl s_server -accept 20000 -cert server.cert -key server.key  -WWW -debug -tlsextdebug
```
The useful options in this command:
- accept: the optional TCP host and port to listen on for connections. If not specified, *:4433 is used.
- cert and key: the certificate and key of server are required, which have generated by gen.sh
- WWW: Emulates a simple web server. It is very useful. The pages will be resolved relative to the current directory, for example if the URL https://localhost:20000/index.html is requested the file ./index.html will be loaded. 
- debug and tlsextdebug: to show the detailed dump information of all traffic.

## Send request
After server started successfully, we can use browser to send a request as following. 

```
https://localhost:20000/index.html
```
**But security risk warning occur.** Because its certificate issuer is unknow and the server certificate created by ourself is not trusted by browser.
![firefox-security-warning](/img/tls/firefox-security-warning.png)

There are two ways to open the index
- Click **Advanced...** buttom and **Accept the Risk and Continue**
- Add the CA certificate which sign the server certificate in the certificate manager of browser.

> After CA ceritificate added in the manager, the browser will trust all the server's certificate which signed by the CA's.

## Add server cert in the manager
You can found the certificate manager is located at **about:preferences#privacy** in the firefox. And import the CA's cert to the manager.
![firefox-security-warning](/img/tls/firefox-certificate-manager.png)

## index.html loaded
There is **Hello World** in the webpage.

## souce code
The detailed [source code](https://github.com/vulnsystem/OpenssLabs/blob/main/browser-authentication) have been push to github. Please star it when helpful. 
