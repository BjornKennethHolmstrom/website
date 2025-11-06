---
title: "How To Install LAMP and dev-site on Ubuntu 18.04"
date: 2018-10-23
---

LAMP stands for Linux, Apache,  MySQL and PHP

**Update**

Make sure there is disk space! At least 150 MB

```
sudo apt update && sudo apt upgrade
```

**Set host name**

`hostnamectl set-hostname bkhme`

Update hosts file /etc/hosts. Add `127.0.0.1     bkhme`

**Install**

```
sudo apt install tasksel
```

```
sudo apt install apache2
```

```
sudo apt install mysql-server
```

```
sudo apt install php7.2 libapache2-mod-php7.2 php-mysql
```

_Optionally_

```
sudo apt install php-curl php-json php-cgi
```

**Configure**

`sudo gedit /etc/conf/apache2.conf &`

Turn on KeepAlive (was already on in my test on Ubuntu 18.04)

`KeepAlive On`

For a 2GB Linode:

```aconf
sudo gedit /etc/apache2/mods-available/mpm_prefork.conf & 
```

```aconf
<IfModule mpm_prefork_module>
        StartServers            4
        MinSpareServers         3
        MaxSpareServers         40
        MaxRequestWorkers       200
        MaxConnectionsPerChild  10000
```

Disable the event module and enable pitchfork (was already done in my test on Ubuntu 18.04)

`` `sudo a2dismod mpm_event` ``

`` `sudo a2enmod mpm_prefork` ``

Restart the apache server

```
sudo systemctl restart apache2
```

Copy server configuration for your example website
`sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/bkhme.conf`

`sudo gedit /etc/apache2/sites-available/bkhme.conf &`

Replace example.com with bkhme. Add directories

```

        Require all granted

	ServerName bkhme
	ServerAdmin bjorn@bkhme
	DocumentRoot /var/www/html/bkhme/public_html
	ErrorLog /var/www/html/bkhme/logs/error.log
	CustomLog /var/www/html/bkhme/logs/access.log combined

>>sudo mkdir /var/www/html/bkhme/{public_html,logs}
```

Disable default server and reload apache

```
sudo a2dissite 000-default.conf
```

```
systemctl reload apache2
```

Login to mysql and create a database

```
sudo mysql -u root
```

```

CREATE DATABASE webdata;
GRANT ALL ON webdata.* TO 'webuser' IDENTIFIED BY 'password';
```

Exit

```

quit
```

Setup additional security

```

sudo mysql_secure_installation
```

`sudo gedit /etc/php/7.2/apache2/php.ini &`

Add

`error_reporting = E_COMPILE_ERROR| E_RECOVERABLE_ERROR|E_ERROR|E_CORE_ERROR max_input_time = 30 error_log = /var/log/php/error.log`

Create log directory and give ownership to Apache system user

```
sudo mkdir /var/log/php
sudo chown www-data /var/log/php
```

> **Note**
> 
> If you plan on using your LAMP stack to host a WordPress server, install additional PHP modules: `sudo apt install php-curl php-gd php-mbstring php-xml php-xmlrpc`

Test code for PHP file in /var/www/html/bkhme/public\_html/phptest.php

```php
<html>
<head>
    <title>PHP Test</title>
</head>
    <body>
    <?php echo '<p>Hello World</p>';

    // In the variables section below, replace user and password with your own MySQL credentials as created on your server
    $servername = "bkhme";
    $username = "bjorn";
    $password = "continuous";

    // Create MySQL connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection - if it fails, output will include the error message
    if (!$conn) {
        die('<p>Connection failed: <p>' . mysqli_connect_error());
    }
    echo '<p>Connected successfully</p>';
    ?>
</body>
</html>
```
