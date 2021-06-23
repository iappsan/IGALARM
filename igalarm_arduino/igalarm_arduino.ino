#include <Keypad.h>
//el código que figura hasta la línea 17 lo dejamos como está

const byte ROWS = 4; //four rows
const byte COLS = 4; //four columns

char hexaKeys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
byte rowPins[ROWS] = {4, 5, 6, 7}; //connect to the row pinouts of the keypad
byte colPins[COLS] = {8, 9, 10, 11}; //connect to the column pinouts of the keypad

Keypad keypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);
 
const int sensorLDR = 0; //pin analógico
const int led = 2; //asigno pines digitales de led, altavoz
const int altavoz = 13;

int nivelalarma = 650; //Ajusta este valor en función de tu LDR y la luminosidad, habilita el monitor serie para ver el valor de la lectura
int nivelLuz; //Definimos una variable para almacenar el valor de la LDR
int disparoalarma = 0;

void parpadeoled(int dur) //defino una subrutina de parpadeo del LED con una duración dur
{
  digitalWrite(led, HIGH); //encendemos el LED
  delay(dur);
  digitalWrite(led, LOW);
  delay(dur);
}

void setup()
{
  pinMode(led, OUTPUT); //declaro pines led y altavoz de salida, y boton de entrada
  pinMode(altavoz, OUTPUT);
  digitalWrite(altavoz, 0);
  //configuramos el puerto serie para poder comunicarnos con Arduino mediante el cable USB para ver el valor de la LDR, después se puede quitar
  Serial.begin (9600);
}

void loop()
{
  if (disparoalarma == 1) //si la alarma se ha disparado con anterioridad
  {
    parpadeoled(2000);
  }
  char tecla = keypad.getKey();
  if (tecla)
  {
  Serial.print("tecla1 ");
    Serial.println(tecla);
  if (tecla == 'A') // Si la tecla pulsada es A
    {
    for (int k = 0; k<= 10; k++) {parpadeoled(200);}
    char tecla=keypad.waitForKey();
    Serial.print("tecla2 ");
    Serial.println(tecla);
    if (tecla == '9') // Si la tecla pulsada es 9
      { 
      for (int k = 0; k<= 20; k++) {parpadeoled(100);}
      char tecla=keypad.waitForKey();
      Serial.print("tecla3 ");
      Serial.println(tecla);
      if (tecla == '2') // Si la tecla pulsada es 2
        {
        disparoalarma = 0;
        for (int k = 0; k<= 20; k++) {parpadeoled(200);}
        delay(50000);
        }
      }
    }
  }
    else {
    nivelLuz = analogRead(sensorLDR);  //leemos el valor en la LDR
    Serial.println(nivelLuz); //enviamos el valor al puerto serial, este comando se puede eliminar una vez probado el montaje
    if (nivelLuz < nivelalarma) //si el nivel de luz recibido es menor del nivel establecido
    {
      tone(altavoz, 392, 2000); //hacemos sonar el altavoz
      delay(3000);
      disparoalarma = 1;
    }
}
}
