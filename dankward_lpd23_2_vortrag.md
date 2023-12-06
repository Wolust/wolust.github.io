---
title: Workshop Pi LPD 23-2
layout: page
description: Dankward erklärt Micropython am Beispiel
---


# Programmieren des Raspberry pi pico leicht

# gemacht mit Micropython

```
Dankward Nürenberg
```
24. November 2023


# Ubersicht

```
▶ Vorüberlegung: Was hat dieses Thema mit Linux zu tun?
▶ Der Raspberry pi pico
▶ Die Programmierumgebung Thonny
▶ Das Blinkprogramm
▶ Temperaturanzeige mit Oled-Display (Optional)
```

# Was hat dieses Thema mit Linux zu tun?

```
▶ Python ist neben C++ die wichtigste Programmiersprache der
Linuxsyteme.
▶ Python in einem Linuxsystem zu zeigen, ist aufwendiger als bei
einem Microcontroller.
▶ Der Raspberry pi ist so konzepiert, dass das Aufspielen der
Firmware besonders einfach ist.
▶ Die Programmierumgebung Thonny ist besonders
anfängerfreundlich.
```

# Der Raspberry pi pico

```
Links ein Pico W (wlan-fähig),rechts ist ein normaler Pico,
Die weiße Taste wird zum Aufspielen der Firmware gebraucht.
```

# Die Programmierumgebung Thonny

```
▶ Links sind zwei Fenster.
▶Das obere zeigt das aktuelle Verzeichnis auf dem Computer
▶Das unter zeigt das Verzeichnis, das auf dem Controller
angelegt wird
▶ Mitte oben ist das Fenster für den Editor, mit dem
Programmtexte erstellt werden können.
▶ Unten können einzelne Befehle ausprobiert werden oder es ist
die Ausgabe des aktuellen Programms einschließlich der Fehler
```

# Thonny - Anpassung an den Pico

```
Thonny kann bei dem Menupunkt Extras und dem Untermenu
Interpreter auf den Rasperry pi umgestellt werden.
```

# Das Blinkprogramm

```
import machine
import utime
led = machine.Pin(25,machine.Pin.OUT)
Beim Pico W statt 25 ’LED’
while True:
```

# Das Blinkprogramm

```
import machine
import utime
led = machine.Pin(25,machine.Pin.OUT)
while True:
led.on()
utime.sleep(1)
led.off()
utime.sleep(1)
```

# Das Blinkprogramm (alternativ)

```
Veränderung zum vorherigen Programm:
led = machine.Pin(14,machine.Pin.OUT)
```

# Temperaturanzeige mit Oled-Display


# Temperaturanzeige mit Oled-Display - Programmtext I

```
import machine
import utime
from ssd1306 import SSD1306_I2C
scl=machine.Pin(17)
sda=machine.Pin(16)
i2c = machine.I2C(0,scl=scl,sda=sda)
pix_res_x = 128
pix_res_y = 64
oled=SSD1306_I2C(pix_res_x, pix_res_y, i2c)
sensor = ADC(4)
faktor = 3.3 / (65535)
```

# Temperaturanzeige mit Oled-Display - Programmtext II

```
while True:
value = sensor.read_u16()
U = value * faktor
temperatur = 27 - (U - 0.706) / 0.
oled.fill(0)
oled.text(str(temperatur),5,5)
oled.show()
utime.sleep(3)
```

# Weiterführende Websites und Quellen

```
https://github.com/stlehmann/micropython-ssd1306/blob/master/ssd1306.py
https://www.raspberrypi.com/documentation/microcontrollers/micropython.html
https://www.elektronik-kompendium.de/sites/raspberry-pi/2803071.htm
https://wolles-elektronikkiste.de/micropython-umstieg-von-arduino
Max Brühlmann: Raspberry Pi Pico Schnelleinstieg
Die Abbildungen sind neben zwei Zeichnungen entweder von mir
erstellte Fotografien oder Bildschirmfotos.
Die Zeichnungen sind mit dem Programm Fritzing erstellt worden.
```

# Vielen Dank für ihre Aufmerksamkeit

