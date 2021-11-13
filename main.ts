/**
 * Oppgave 14
 * 
 * Lag et program som viser temperaturen mellom 18 og 25 °C ved hjelp av en servo-motor
 * 
 * (microservo). Når temperaturen er 18 °C skal servoen ha en vinkel på 180°. Når temperaturen er 25
 * 
 * °C skal servoen ha en vinkel på 0°. Bruk Microservo-utvidelsen for å styre servoen. Du trenger ikke
 * 
 * koble på en virkelig servo – den blir uansett vist i Microbit-simulatoren.
 */
let servo_verdi = 0
let sensor_verdi = input.temperature()
servos.P1.setAngle(90)
basic.forever(function () {
    sensor_verdi = input.temperature()
    servo_verdi = Math.map(sensor_verdi, 18, 25, 180, 0)
    servos.P1.setAngle(servo_verdi)
    basic.showNumber(servo_verdi)
})
