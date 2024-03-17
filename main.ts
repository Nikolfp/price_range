let υγρασία = 0
for (let index = 0; index < 4; index++) {
    υγρασία = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(υγρασία)
    basic.showNumber(Math.map(υγρασία, 0, 1023, 0, 5))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Math.round(Math.map(υγρασία, 0, 1023, 0, 5)))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
